/**
 * Belajar HTML Dasar - Ekstrakurikuler Komputer SMA Unggulan Badridduja
 * Application Engine: js/app.js
 * Architecture: Vanilla JavaScript, Soft Neo-Brutalism UI, Reactive State, Local Storage
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. Storage Manager (Safe LocalStorage Wrapper)
     ========================================================================== */
  const StorageManager = {
    THEME_KEY: 'html-course-theme',
    PROGRESS_KEY: 'html-course-progress',

    isSupported() {
      try {
        const testKey = '__test_storage__';
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        return true;
      } catch (e) {
        return false;
      }
    },

    getTheme() {
      if (!this.isSupported()) return null;
      try {
        return localStorage.getItem(this.THEME_KEY);
      } catch (e) {
        return null;
      }
    },

    setTheme(theme) {
      if (!this.isSupported()) return;
      try {
        localStorage.setItem(this.THEME_KEY, theme);
      } catch (e) {
        console.warn('Gagal menyimpan preferensi tema:', e);
      }
    },

    getProgress() {
      const defaultProgress = {
        visitedSlides: [],
        quizResults: {},
        lastPosition: null, // { groupIdx, lessonIdx, slideIdx }
        completedLessons: []
      };

      if (!this.isSupported()) return defaultProgress;

      try {
        const data = localStorage.getItem(this.PROGRESS_KEY);
        if (!data) return defaultProgress;
        const parsed = JSON.parse(data);
        return {
          visitedSlides: Array.isArray(parsed.visitedSlides) ? parsed.visitedSlides : [],
          quizResults: (parsed.quizResults && typeof parsed.quizResults === 'object') ? parsed.quizResults : {},
          lastPosition: parsed.lastPosition || null,
          completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : []
        };
      } catch (e) {
        console.warn('Gagal memuat progres:', e);
        return defaultProgress;
      }
    },

    saveProgress(progress) {
      if (!this.isSupported()) return;
      try {
        localStorage.setItem(this.PROGRESS_KEY, JSON.stringify(progress));
      } catch (e) {
        console.warn('Gagal menyimpan progres:', e);
      }
    },

    clearProgress() {
      if (!this.isSupported()) return;
      try {
        localStorage.removeItem(this.PROGRESS_KEY);
      } catch (e) {
        console.warn('Gagal mereset progres:', e);
      }
    }
  };

  /* ==========================================================================
     2. Application State & Progress Manager
     ========================================================================== */
  const AppState = {
    courseData: null,
    progress: StorageManager.getProgress(),
    currentGroupIdx: 0,
    currentLessonIdx: 0,
    currentSlideIdx: 0,
    isHome: true,
    isPresentationMode: false,
    isSidebarOpenMobile: false,
    isSidebarCollapsedDesktop: false,
    expandedGroups: new Set([0]), // Group 0 expanded by default

    initCourseData(data) {
      this.courseData = data;
    },

    markSlideVisited(slideId, lesson) {
      if (!slideId) return;
      if (!this.progress.visitedSlides.includes(slideId)) {
        this.progress.visitedSlides.push(slideId);
      }

      // Check if all slides in lesson are visited
      if (lesson && lesson.slides && lesson.slides.length > 0) {
        const allVisited = lesson.slides.every(s => this.progress.visitedSlides.includes(s.id));
        if (allVisited && !this.progress.completedLessons.includes(lesson.id)) {
          this.progress.completedLessons.push(lesson.id);
        }
      }

      this.save();
    },

    recordQuizResult(slideId, isCorrect) {
      if (!slideId) return;
      this.progress.quizResults[slideId] = isCorrect;
      this.save();
    },

    setLastPosition(groupIdx, lessonIdx, slideIdx) {
      this.progress.lastPosition = { groupIdx, lessonIdx, slideIdx };
      this.save();
    },

    save() {
      StorageManager.saveProgress(this.progress);
    },

    resetAllProgress() {
      StorageManager.clearProgress();
      this.progress = StorageManager.getProgress();
    },

    getTotalSlidesCount() {
      if (!this.courseData || !this.courseData.groups) return 0;
      let count = 0;
      this.courseData.groups.forEach(g => {
        if (g.lessons) {
          g.lessons.forEach(l => {
            if (l.slides) count += l.slides.length;
          });
        }
      });
      return count;
    },

    getTotalLessonsCount() {
      if (!this.courseData || !this.courseData.groups) return 0;
      let count = 0;
      this.courseData.groups.forEach(g => {
        if (g.lessons) count += g.lessons.length;
      });
      return count;
    },

    getOverallProgressPercent() {
      const total = this.getTotalSlidesCount();
      if (total === 0) return 0;
      const visited = this.progress.visitedSlides.length;
      return Math.min(100, Math.round((visited / total) * 100));
    },

    getGroupProgress(groupIdx) {
      if (!this.courseData || !this.courseData.groups || !this.courseData.groups[groupIdx]) {
        return { total: 0, visited: 0, percent: 0, completedLessons: 0, totalLessons: 0 };
      }
      const group = this.courseData.groups[groupIdx];
      let totalSlides = 0;
      let visitedSlides = 0;
      let completedLessons = 0;
      const totalLessons = group.lessons ? group.lessons.length : 0;

      if (group.lessons) {
        group.lessons.forEach(l => {
          if (l.slides) {
            totalSlides += l.slides.length;
            l.slides.forEach(s => {
              if (this.progress.visitedSlides.includes(s.id)) visitedSlides++;
            });
          }
          if (this.progress.completedLessons.includes(l.id)) {
            completedLessons++;
          }
        });
      }

      const percent = totalSlides > 0 ? Math.min(100, Math.round((visitedSlides / totalSlides) * 100)) : 0;
      return { total: totalSlides, visited: visitedSlides, percent, completedLessons, totalLessons };
    },

    findFirstIncomplete() {
      if (!this.courseData || !this.courseData.groups) return { groupIdx: 0, lessonIdx: 0, slideIdx: 0 };
      for (let g = 0; g < this.courseData.groups.length; g++) {
        const group = this.courseData.groups[g];
        if (group.lessons) {
          for (let l = 0; l < group.lessons.length; l++) {
            const lesson = group.lessons[l];
            if (lesson.slides) {
              for (let s = 0; s < lesson.slides.length; s++) {
                const slide = lesson.slides[s];
                if (!this.progress.visitedSlides.includes(slide.id)) {
                  return { groupIdx: g, lessonIdx: l, slideIdx: s };
                }
              }
            }
          }
        }
      }
      return { groupIdx: 0, lessonIdx: 0, slideIdx: 0 };
    }
  };

  /* ==========================================================================
     3. DOM Element References Cache
     ========================================================================== */
  const DOM = {};

  function cacheDOMElements() {
    DOM.app = document.getElementById('app');
    DOM.sidebar = document.getElementById('sidebar');
    DOM.sidebarOverlay = document.getElementById('sidebar-overlay');
    DOM.sidebarBrandBtn = document.getElementById('sidebar-brand-btn');
    DOM.sidebarHomeBtn = document.getElementById('sidebar-home-btn');
    DOM.sidebarCloseBtn = document.getElementById('sidebar-close-btn');
    DOM.sidebarGroupsContainer = document.getElementById('sidebar-groups-container');
    DOM.sidebarProgressPercent = document.getElementById('sidebar-progress-percent');
    DOM.sidebarProgressBar = document.getElementById('sidebar-progress-bar');
    DOM.sidebarProgressStats = document.getElementById('sidebar-progress-stats');
    DOM.sidebarResetBtn = document.getElementById('sidebar-reset-btn');

    DOM.topbar = document.getElementById('topbar');
    DOM.mobileMenuBtn = document.getElementById('mobile-menu-btn');
    DOM.desktopSidebarBtn = document.getElementById('desktop-sidebar-btn');
    DOM.themeToggleBtn = document.getElementById('theme-toggle-btn');
    DOM.themeSunIcon = document.getElementById('theme-sun-icon');
    DOM.themeMoonIcon = document.getElementById('theme-moon-icon');
    DOM.themeLabel = document.getElementById('theme-label');
    DOM.presentationBtn = document.getElementById('presentation-btn');
    DOM.presentationExitBar = document.getElementById('presentation-exit-bar');
    DOM.exitPresentationBtn = document.getElementById('exit-presentation-btn');

    DOM.breadcrumbs = document.getElementById('breadcrumbs');
    DOM.bcHome = document.getElementById('bc-home');
    DOM.bcSep1 = document.getElementById('bc-sep-1');
    DOM.bcGroup = document.getElementById('bc-group');
    DOM.bcSep2 = document.getElementById('bc-sep-2');
    DOM.bcLesson = document.getElementById('bc-lesson');

    DOM.contentWrapper = document.getElementById('content-wrapper');
    DOM.homeScreen = document.getElementById('home-screen');
    DOM.lessonView = document.getElementById('lesson-view');
    DOM.errorScreen = document.getElementById('error-screen');
    DOM.errorTitle = document.getElementById('error-title');
    DOM.errorMessage = document.getElementById('error-message');
    DOM.errorRetryBtn = document.getElementById('error-retry-btn');

    DOM.slideGroupTag = document.getElementById('slide-group-tag');
    DOM.slideLessonTag = document.getElementById('slide-lesson-tag');
    DOM.slideNumberBadge = document.getElementById('slide-number-badge');
    DOM.slideTitle = document.getElementById('slide-title');
    DOM.slideContent = document.getElementById('slide-content');

    DOM.slideCodeContainer = document.getElementById('slide-code-container');
    DOM.slideCodeCopyBtn = document.getElementById('slide-code-copy-btn');
    DOM.slideCodeElement = document.getElementById('slide-code-element');
    DOM.slideCodeExplanation = document.getElementById('slide-code-explanation');

    DOM.slideQuizContainer = document.getElementById('slide-quiz-container');
    DOM.slideQuizQuestion = document.getElementById('slide-quiz-question');
    DOM.slideQuizOptions = document.getElementById('slide-quiz-options');
    DOM.slideQuizFeedback = document.getElementById('slide-quiz-feedback');
    DOM.slideQuizFeedbackText = document.getElementById('slide-quiz-feedback-text');
    DOM.slideQuizRetryBtn = document.getElementById('slide-quiz-retry-btn');

    DOM.slideTeacherContainer = document.getElementById('slide-teacher-container');
    DOM.slideTeacherContent = document.getElementById('slide-teacher-content');

    DOM.bottomNav = document.getElementById('bottom-nav');
    DOM.prevSlideBtn = document.getElementById('prev-slide-btn');
    DOM.nextSlideBtn = document.getElementById('next-slide-btn');
    DOM.navSlideIndicator = document.getElementById('nav-slide-indicator');
    DOM.navLessonTitle = document.getElementById('nav-lesson-title');
  }

  /* ==========================================================================
     4. Theme Management (Light / Dark Neo-Brutalism)
     ========================================================================== */
  const ThemeManager = {
    init() {
      const savedTheme = StorageManager.getTheme();
      if (savedTheme) {
        this.setTheme(savedTheme === 'dark');
      } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.setTheme(prefersDark);
      }

      // Listen for system theme changes if not manually overridden
      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
          if (!StorageManager.getTheme()) {
            this.setTheme(e.matches);
          }
        });
      }
    },

    isDark() {
      return document.documentElement.classList.contains('dark');
    },

    setTheme(isDark) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        if (DOM.themeSunIcon) DOM.themeSunIcon.classList.remove('hidden');
        if (DOM.themeMoonIcon) DOM.themeMoonIcon.classList.add('hidden');
        // if (DOM.themeLabel) DOM.themeLabel.textContent = 'Gelap';
        StorageManager.setTheme('dark');
      } else {
        document.documentElement.classList.remove('dark');
        if (DOM.themeSunIcon) DOM.themeSunIcon.classList.add('hidden');
        if (DOM.themeMoonIcon) DOM.themeMoonIcon.classList.remove('hidden');
        // if (DOM.themeLabel) DOM.themeLabel.textContent = 'Terang';
        StorageManager.setTheme('light');
      }
    },

    toggle() {
      this.setTheme(!this.isDark());
    }
  };

  /* ==========================================================================
     5. Presentation Mode Controller
     ========================================================================== */
  const PresentationController = {
    toggle() {
      if (AppState.isPresentationMode) {
        this.exit();
      } else {
        this.enter();
      }
    },

    enter() {
      AppState.isPresentationMode = true;
      DOM.app.classList.add('presentation-mode');
      if (DOM.presentationBtn) {
        DOM.presentationBtn.classList.add('bg-cream-yellow', 'text-amber-950');
      }

      // Try entering true browser fullscreen if supported
      try {
        if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen().catch(() => {
            // Fullscreen might be restricted by browser policy, keep CSS presentation mode
          });
        }
      } catch (e) {
        // Ignore
      }
    },

    exit() {
      AppState.isPresentationMode = false;
      DOM.app.classList.remove('presentation-mode');
      if (DOM.presentationBtn) {
        DOM.presentationBtn.classList.remove('bg-cream-yellow', 'text-amber-950');
      }

      try {
        if (document.fullscreenElement && document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
      } catch (e) {
        // Ignore
      }
    }
  };

  /* ==========================================================================
     6. Clipboard Utility
     ========================================================================== */
  const ClipboardHelper = {
    copy(text, buttonEl) {
      if (!text) return;

      const setSuccess = () => {
        const originalHTML = buttonEl.innerHTML;
        buttonEl.innerHTML = `
          <svg class="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
          </svg>
          <span class="text-emerald-300 font-bold">✓ Tersalin!</span>
        `;
        buttonEl.classList.add('border-emerald-500');

        setTimeout(() => {
          buttonEl.innerHTML = originalHTML;
          buttonEl.classList.remove('border-emerald-500');
        }, 2000);
      };

      const setFailure = () => {
        alert('Gagal menyalin. Silakan pilih dan salin kode secara manual.');
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(setSuccess).catch(() => {
          this.fallbackCopy(text, setSuccess, setFailure);
        });
      } else {
        this.fallbackCopy(text, setSuccess, setFailure);
      }
    },

    fallbackCopy(text, onSuccess, onFailure) {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.top = '0';
        textarea.style.left = '0';
        textarea.style.opacity = '0';
        textarea.style.pointerEvents = 'none';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textarea);
        if (successful) onSuccess();
        else onFailure();
      } catch (err) {
        onFailure();
      }
    }
  };

  /* ==========================================================================
     7. Sidebar UI Builder & Controller
     ========================================================================== */
  const SidebarController = {
    render() {
      if (!AppState.courseData || !AppState.courseData.groups) {
        DOM.sidebarGroupsContainer.innerHTML = `
          <div class="p-4 text-center text-xs text-slate-500">Materi belum tersedia.</div>
        `;
        return;
      }

      DOM.sidebarGroupsContainer.innerHTML = '';

      AppState.courseData.groups.forEach((group, gIdx) => {
        const groupStats = AppState.getGroupProgress(gIdx);
        const isExpanded = AppState.expandedGroups.has(gIdx);

        // Group container
        const groupEl = document.createElement('div');
        groupEl.className = 'sidebar-group-item mb-2';

        // Group button header
        const headerBtn = document.createElement('button');
        headerBtn.type = 'button';
        headerBtn.className = `sidebar-group-btn ${isExpanded ? 'expanded' : ''}`;
        headerBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        headerBtn.innerHTML = `
          <div class="flex items-center gap-2 min-w-0">
            <span class="px-2 py-0.5 rounded-lg bg-soft-blue/60 dark:bg-soft-blue/20 text-[11px] font-bold text-blue-900 dark:text-soft-blue shrink-0">
              ${group.label || `Modul ${gIdx + 1}`}
            </span>
            <span class="font-bold text-xs truncate text-light-text dark:text-dark-text">
              ${group.title}
            </span>
          </div>
          <div class="flex items-center gap-1.5 shrink-0 ml-2">
            ${groupStats.percent === 100 ? `
              <span class="text-emerald-500 text-xs" title="Modul selesai">●</span>
            ` : ''}
            <svg class="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 transition-transform ${isExpanded ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        `;

        headerBtn.addEventListener('click', () => {
          if (AppState.expandedGroups.has(gIdx)) {
            AppState.expandedGroups.delete(gIdx);
          } else {
            AppState.expandedGroups.add(gIdx);
          }
          this.render();
        });

        groupEl.appendChild(headerBtn);

        // Lessons List Container
        if (isExpanded && group.lessons && group.lessons.length > 0) {
          const lessonsList = document.createElement('div');
          lessonsList.className = 'mt-1 space-y-1 pl-2';

          group.lessons.forEach((lesson, lIdx) => {
            const isCompleted = AppState.progress.completedLessons.includes(lesson.id);
            const isActive = !AppState.isHome && AppState.currentGroupIdx === gIdx && AppState.currentLessonIdx === lIdx;

            const lessonBtn = document.createElement('button');
            lessonBtn.type = 'button';
            lessonBtn.className = `sidebar-lesson-link ${isActive ? 'active-lesson' : ''}`;
            lessonBtn.setAttribute('title', lesson.title);

            lessonBtn.innerHTML = `
              <span class="lesson-check-icon ${isCompleted ? 'completed' : ''}">
                ${isCompleted ? '✓' : ''}
              </span>
              <span class="truncate flex-1">${lesson.title}</span>
            `;

            lessonBtn.addEventListener('click', () => {
              Navigation.goToSlide(gIdx, lIdx, 0);
              this.closeMobile();
            });

            lessonsList.appendChild(lessonBtn);
          });

          groupEl.appendChild(lessonsList);
        }

        DOM.sidebarGroupsContainer.appendChild(groupEl);
      });

      this.updateProgress();
    },

    updateProgress() {
      const percent = AppState.getOverallProgressPercent();
      const visited = AppState.progress.visitedSlides.length;
      const total = AppState.getTotalSlidesCount();

      if (DOM.sidebarProgressPercent) {
        DOM.sidebarProgressPercent.textContent = `${percent}%`;
      }
      if (DOM.sidebarProgressBar) {
        DOM.sidebarProgressBar.style.width = `${percent}%`;
      }
      if (DOM.sidebarProgressStats) {
        DOM.sidebarProgressStats.textContent = `${visited} / ${total} Slide Selesai`;
      }
    },

    toggleMobile() {
      if (AppState.isSidebarOpenMobile) {
        this.closeMobile();
      } else {
        this.openMobile();
      }
    },

    openMobile() {
      AppState.isSidebarOpenMobile = true;
      DOM.sidebar.classList.remove('-translate-x-full');
      DOM.sidebar.classList.add('translate-x-0');
      DOM.sidebarOverlay.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    },

    closeMobile() {
      AppState.isSidebarOpenMobile = false;
      DOM.sidebar.classList.add('-translate-x-full');
      DOM.sidebar.classList.remove('translate-x-0');
      DOM.sidebarOverlay.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    },

    toggleDesktopCollapse() {
      AppState.isSidebarCollapsedDesktop = !AppState.isSidebarCollapsedDesktop;
      if (AppState.isSidebarCollapsedDesktop) {
        DOM.sidebar.classList.add('md:hidden');
      } else {
        DOM.sidebar.classList.remove('md:hidden');
      }
    }
  };

  /* ==========================================================================
     8. Home Screen View Renderer
     ========================================================================== */
  const HomeScreen = {
    render() {
      const data = AppState.courseData;
      if (!data) return;

      const totalSlides = AppState.getTotalSlidesCount();
      const totalLessons = AppState.getTotalLessonsCount();
      const progressPercent = AppState.getOverallProgressPercent();
      const firstIncomplete = AppState.findFirstIncomplete();

      let objectivesHTML = '';
      if (data.objectives && data.objectives.length > 0) {
        objectivesHTML = data.objectives.map(obj => `
          <li class="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-dark-bg/60 border-2 border-light-border/60 dark:border-dark-border shadow-[2px_2px_0px_0px_rgba(169,188,208,0.3)]">
            <span class="p-1 rounded-lg bg-soft-mint dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 shrink-0 mt-0.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
              </svg>
            </span>
            <span class="text-sm font-medium text-light-text dark:text-dark-text leading-snug">${obj}</span>
          </li>
        `).join('');
      }

      let groupsHTML = '';
      if (data.groups && data.groups.length > 0) {
        groupsHTML = data.groups.map((grp, gIdx) => {
          const stats = AppState.getGroupProgress(gIdx);
          return `
            <div class="neo-card p-5 sm:p-6 rounded-2xl bg-white dark:bg-dark-card border-2 border-light-border dark:border-dark-border shadow-[4px_4px_0px_0px_rgba(169,188,208,0.35)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] flex flex-col justify-between group cursor-pointer transition-all hover:border-blue-400 dark:hover:border-soft-blue" data-group-index="${gIdx}">
              <div>
                <div class="flex items-center justify-between gap-2 mb-3">
                  <span class="px-2.5 py-1 rounded-xl bg-soft-blue/60 dark:bg-soft-blue/20 text-blue-900 dark:text-soft-blue font-bold text-xs border border-blue-200 dark:border-soft-blue/30">
                    ${grp.label || `Modul ${gIdx + 1}`}
                  </span>
                  <span class="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">
                    ${stats.completedLessons}/${stats.totalLessons} Materi
                  </span>
                </div>
                <h3 class="font-extrabold text-lg text-light-text dark:text-dark-text mb-2 group-hover:text-blue-600 dark:group-hover:text-soft-blue transition-colors">
                  ${grp.title}
                </h3>
                <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  ${grp.description || ''}
                </p>
              </div>

              <div>
                <div class="w-full h-2.5 rounded-full bg-slate-100 dark:bg-dark-bg border border-light-border/60 dark:border-dark-border overflow-hidden mb-3">
                  <div class="h-full bg-gradient-to-r from-soft-blue to-soft-mint transition-all rounded-full" style="width: ${stats.percent}%"></div>
                </div>
                <div class="flex items-center justify-between text-xs font-semibold">
                  <span class="text-slate-500 dark:text-slate-400">${stats.percent}% Selesai</span>
                  <span class="text-blue-600 dark:text-soft-blue flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Buka Modul 
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          `;
        }).join('');
      }

      // Final project section if available
      let projectHTML = '';
      if (data.project) {
        const prj = data.project;
        projectHTML = `
          <div class="neo-card p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-card border-2 border-light-border dark:border-dark-border shadow-[4px_4px_0px_0px_rgba(169,188,208,0.35)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] mt-8">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b-2 border-slate-100 dark:border-dark-border/60">
              <div class="flex items-center gap-2.5">
                <span class="p-2 rounded-xl bg-soft-lavender dark:bg-purple-950/40 text-purple-800 dark:text-soft-lavender text-xl">
                  🚀
                </span>
                <div>
                  <h3 class="text-xl font-bold text-light-text dark:text-dark-text">Proyek Akhir Portofolio</h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400">Dikerjakan pada pertemuan 13–24 sebagai karya mandiri siswa</p>
                </div>
              </div>
              <span class="px-3 py-1 rounded-xl bg-cream-yellow dark:bg-amber-950/40 text-amber-900 dark:text-cream-yellow text-xs font-bold border border-amber-300 dark:border-amber-700/50">
                Ujian Praktik Ekskul
              </span>
            </div>

            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              ${prj.description || 'Murid membuat website HTML mandiri, menguji di browser, dan mempresentasikan kodenya di hadapan teman dan guru.'}
            </p>

            ${prj.themes && prj.themes.length > 0 ? `
              <div class="mb-6">
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                  Pilihan Tema Proyek:
                </h4>
                <div class="flex flex-wrap gap-2">
                  ${prj.themes.map(t => `
                    <span class="px-3 py-1.5 rounded-xl bg-soft-blue/30 dark:bg-soft-blue/15 border-2 border-soft-blue/60 dark:border-soft-blue/20 text-xs font-semibold text-blue-900 dark:text-soft-blue">
                      🏷️ ${t}
                    </span>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            ${prj.checklist && prj.checklist.length > 0 ? `
              <div class="mb-6">
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                  Checklist Kelayakan Proyek:
                </h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  ${prj.checklist.map(item => `
                    <div class="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-dark-bg/60 border border-light-border/60 dark:border-dark-border text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <span class="text-blue-500 font-bold">☑</span>
                      <span>${item}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            ${prj.rubric && prj.rubric.length > 0 ? `
              <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                  Rubrik Penilaian:
                </h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  ${prj.rubric.map(r => `
                    <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-dark-bg/60 border-2 border-light-border/60 dark:border-dark-border shadow-[2px_2px_0px_0px_rgba(169,188,208,0.2)]">
                      <div class="flex items-center justify-between mb-1.5">
                        <span class="font-bold text-xs text-light-text dark:text-dark-text">${r.category}</span>
                        <span class="px-2 py-0.5 rounded-lg bg-soft-mint dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-mono text-[11px] font-bold">
                          ${r.weight}
                        </span>
                      </div>
                      <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">${r.description}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        `;
      }

      DOM.homeScreen.innerHTML = `
        <!-- Hero Card -->
        <div class="neo-card p-6 sm:p-10 rounded-2xl bg-white dark:bg-dark-card border-2 border-light-border dark:border-dark-border shadow-[6px_6px_0px_0px_rgba(169,188,208,0.45)] dark:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.35)] relative overflow-hidden">
          <div class="max-w-3xl relative z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-soft-blue/60 dark:bg-soft-blue/20 border border-blue-300 dark:border-soft-blue/30 text-blue-900 dark:text-soft-blue text-xs font-bold mb-4">
              <span class="w-2 h-2 rounded-full bg-blue-600 dark:bg-soft-blue animate-ping"></span>
              <span>${data.subtitle || 'Ekstrakurikuler Komputer SMA Unggulan Badridduja'}</span>
            </div>
            
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-light-text dark:text-dark-text tracking-tight mb-4 leading-tight">
              ${data.title || 'Belajar HTML Dasar'}
            </h1>
            
            <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-2xl">
              Media presentasi dan modul belajar interaktif untuk menguasai struktur halaman web, elemen dasar, formulir, tabel, hingga mempublikasikan proyek buatanmu.
            </p>

            <!-- Quick Action Buttons -->
            <div class="flex flex-wrap items-center gap-3">
              <button id="hero-start-btn" class="px-5 py-3 rounded-xl border-2 border-blue-700 dark:border-soft-blue bg-blue-600 dark:bg-soft-blue hover:bg-blue-700 dark:hover:bg-soft-blue/80 text-white dark:text-blue-950 font-bold text-sm sm:text-base shadow-[3px_3px_0px_0px_rgba(30,58,138,0.5)] dark:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.4)] flex items-center gap-2 transition-all active:translate-y-0.5 focus:outline-none">
                <span>Mulai Belajar Sekarang</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>

              ${AppState.progress.visitedSlides.length > 0 ? `
                <button id="hero-resume-btn" class="px-5 py-3 rounded-xl border-2 border-light-border dark:border-dark-border bg-soft-mint dark:bg-emerald-950/40 hover:bg-emerald-200 text-emerald-950 dark:text-emerald-200 font-bold text-sm sm:text-base shadow-[3px_3px_0px_0px_rgba(169,188,208,0.4)] transition-all active:translate-y-0.5 flex items-center gap-2 focus:outline-none">
                  <span>Lanjutkan Materi</span>
                  <span class="text-xs font-mono font-bold bg-white/60 dark:bg-black/30 px-2 py-0.5 rounded-lg">${progressPercent}%</span>
                </button>
              ` : ''}
            </div>
          </div>
        </div>

        <!-- Quick Summary Stats Row -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div class="p-4 rounded-2xl bg-white dark:bg-dark-card border-2 border-light-border dark:border-dark-border shadow-[3px_3px_0px_0px_rgba(169,188,208,0.3)] text-center">
            <span class="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-soft-blue font-mono block">5</span>
            <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">Modul Belajar</span>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-dark-card border-2 border-light-border dark:border-dark-border shadow-[3px_3px_0px_0px_rgba(169,188,208,0.3)] text-center">
            <span class="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono block">${totalLessons}</span>
            <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">Pertemuan & Materi</span>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-dark-card border-2 border-light-border dark:border-dark-border shadow-[3px_3px_0px_0px_rgba(169,188,208,0.3)] text-center">
            <span class="text-2xl sm:text-3xl font-extrabold text-purple-600 dark:text-soft-lavender font-mono block">${totalSlides}</span>
            <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">Slide Interaktif</span>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-dark-card border-2 border-light-border dark:border-dark-border shadow-[3px_3px_0px_0px_rgba(169,188,208,0.3)] text-center">
            <span class="text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-cream-yellow font-mono block">${progressPercent}%</span>
            <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">Progresmu</span>
          </div>
        </div>

        <!-- Objectives Section -->
        <div class="neo-card p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-card border-2 border-light-border dark:border-dark-border shadow-[4px_4px_0px_0px_rgba(169,188,208,0.35)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
          <div class="flex items-center gap-2.5 mb-4">
            <span class="p-2 rounded-xl bg-soft-blue/60 dark:bg-soft-blue/20 text-blue-800 dark:text-soft-blue font-bold">
              🎯
            </span>
            <h2 class="text-xl font-bold text-light-text dark:text-dark-text">Tujuan Pembelajaran</h2>
          </div>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${objectivesHTML}
          </ul>
        </div>

        <!-- Groups Grid Section -->
        <div>
          <div class="flex items-center justify-between mb-4">
            <div>
              <h2 class="text-xl font-bold text-light-text dark:text-dark-text">Alur Pembelajaran (24 Pertemuan)</h2>
              <p class="text-xs text-slate-500 dark:text-slate-400">Pilih modul materi di bawah untuk langsung membuka materi</p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${groupsHTML}
          </div>
        </div>

        <!-- Final Project & Rubric Section -->
        ${projectHTML}
      `;

      // Attach event listeners for Home Screen elements
      const startBtn = document.getElementById('hero-start-btn');
      if (startBtn) {
        startBtn.addEventListener('click', () => {
          Navigation.goToSlide(firstIncomplete.groupIdx, firstIncomplete.lessonIdx, firstIncomplete.slideIdx);
        });
      }

      const resumeBtn = document.getElementById('hero-resume-btn');
      if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
          if (AppState.progress.lastPosition) {
            const pos = AppState.progress.lastPosition;
            Navigation.goToSlide(pos.groupIdx, pos.lessonIdx, pos.slideIdx);
          } else {
            Navigation.goToSlide(firstIncomplete.groupIdx, firstIncomplete.lessonIdx, firstIncomplete.slideIdx);
          }
        });
      }

      // Group cards click handlers
      const groupCards = DOM.homeScreen.querySelectorAll('[data-group-index]');
      groupCards.forEach(card => {
        card.addEventListener('click', () => {
          const gIdx = parseInt(card.getAttribute('data-group-index'), 10);
          Navigation.goToSlide(gIdx, 0, 0);
        });
      });
    }
  };

  /* ==========================================================================
     9. Slide & Lesson View Renderer
     ========================================================================== */
  const SlideRenderer = {
    render(groupIdx, lessonIdx, slideIdx) {
      const data = AppState.courseData;
      if (!data || !data.groups || !data.groups[groupIdx]) {
        console.warn('Invalid group index:', groupIdx);
        Navigation.goToHome();
        return;
      }

      const group = data.groups[groupIdx];
      if (!group.lessons || !group.lessons[lessonIdx]) {
        console.warn('Invalid lesson index:', lessonIdx);
        Navigation.goToHome();
        return;
      }

      const lesson = group.lessons[lessonIdx];
      if (!lesson.slides || !lesson.slides[slideIdx]) {
        console.warn('Invalid slide index:', slideIdx);
        Navigation.goToHome();
        return;
      }

      const slide = lesson.slides[slideIdx];

      // Update state
      AppState.currentGroupIdx = groupIdx;
      AppState.currentLessonIdx = lessonIdx;
      AppState.currentSlideIdx = slideIdx;
      AppState.isHome = false;
      AppState.setLastPosition(groupIdx, lessonIdx, slideIdx);
      AppState.markSlideVisited(slide.id, lesson);

      // Expand this group in sidebar
      AppState.expandedGroups.add(groupIdx);
      SidebarController.render();

      // Show lesson view, hide others
      DOM.homeScreen.classList.add('hidden');
      DOM.lessonView.classList.remove('hidden');
      DOM.bottomNav.classList.remove('hidden');
      if (DOM.errorScreen) DOM.errorScreen.classList.add('hidden');

      // Scroll to top of content wrapper
      DOM.contentWrapper.scrollTo({ top: 0, behavior: 'smooth' });

      // Focus lesson view for accessibility
      DOM.lessonView.focus();

      // 1. Meta & Breadcrumbs
      DOM.slideGroupTag.textContent = group.label || `Modul ${groupIdx + 1}`;
      DOM.slideLessonTag.textContent = lesson.title;
      DOM.slideNumberBadge.textContent = `Slide ${slideIdx + 1} / ${lesson.slides.length}`;

      // Topbar Breadcrumb
      DOM.bcSep1.classList.remove('hidden');
      DOM.bcGroup.classList.remove('hidden');
      DOM.bcGroup.textContent = group.label || group.title;
      DOM.bcGroup.onclick = () => Navigation.goToSlide(groupIdx, 0, 0);

      DOM.bcSep2.classList.remove('hidden');
      DOM.bcLesson.classList.remove('hidden');
      DOM.bcLesson.textContent = `${lesson.title} (${slideIdx + 1}/${lesson.slides.length})`;

      // 2. Slide Title & Content (HTML)
      DOM.slideTitle.textContent = slide.title || 'Materi Pembelajaran';
      DOM.slideContent.innerHTML = slide.content || '';

      // 3. Code Example (if available)
      if (slide.codeExample && slide.codeExample.code) {
        DOM.slideCodeContainer.classList.remove('hidden');
        // IMPORTANT: Must use textContent for security and correct HTML formatting
        DOM.slideCodeElement.textContent = slide.codeExample.code;

        if (slide.codeExample.explanation) {
          DOM.slideCodeExplanation.innerHTML = slide.codeExample.explanation;
          DOM.slideCodeExplanation.classList.remove('hidden');
        } else {
          DOM.slideCodeExplanation.classList.add('hidden');
        }

        // Setup copy button
        DOM.slideCodeCopyBtn.onclick = () => {
          ClipboardHelper.copy(slide.codeExample.code, DOM.slideCodeCopyBtn);
        };
      } else {
        DOM.slideCodeContainer.classList.add('hidden');
      }

      // 4. Interactive Quiz (if available)
      if (slide.quiz && slide.quiz.options && slide.quiz.options.length > 0) {
        DOM.slideQuizContainer.classList.remove('hidden');
        DOM.slideQuizQuestion.textContent = slide.quiz.question;
        DOM.slideQuizFeedback.classList.add('hidden');
        DOM.slideQuizFeedbackText.innerHTML = '';

        const letters = ['A', 'B', 'C', 'D'];
        DOM.slideQuizOptions.innerHTML = '';

        const previouslyAnswered = AppState.progress.quizResults[slide.id] !== undefined;

        slide.quiz.options.forEach((optText, optIdx) => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'quiz-option-btn';
          btn.innerHTML = `
            <span class="quiz-letter-badge">${letters[optIdx] || optIdx + 1}</span>
            <span class="flex-1">${optText}</span>
          `;

          btn.addEventListener('click', () => {
            this.handleQuizAnswer(slide, optIdx);
          });

          DOM.slideQuizOptions.appendChild(btn);
        });

        // Retry button click
        DOM.slideQuizRetryBtn.onclick = () => {
          this.resetQuizUI(slide);
        };
      } else {
        DOM.slideQuizContainer.classList.add('hidden');
      }

      // 5. Teacher Notes (if available)
      if (slide.teacherNotes) {
        DOM.slideTeacherContainer.classList.remove('hidden');
        DOM.slideTeacherContent.innerHTML = slide.teacherNotes;
      } else {
        DOM.slideTeacherContainer.classList.add('hidden');
      }

      // 6. Bottom Navigation Controls
      const isStartOfCourse = groupIdx === 0 && lessonIdx === 0 && slideIdx === 0;
      const isEndOfLesson = slideIdx === lesson.slides.length - 1;
      const isEndOfGroup = isEndOfLesson && lessonIdx === group.lessons.length - 1;
      const isEndOfCourse = isEndOfGroup && groupIdx === data.groups.length - 1;

      DOM.prevSlideBtn.disabled = isStartOfCourse;

      DOM.navSlideIndicator.textContent = `Slide ${slideIdx + 1} / ${lesson.slides.length}`;
      DOM.navLessonTitle.textContent = lesson.title;

      if (isEndOfCourse) {
        DOM.nextSlideBtn.innerHTML = `
          <span>Selesai Belajar 🎉</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
          </svg>
        `;
      } else if (isEndOfLesson) {
        DOM.nextSlideBtn.innerHTML = `
          <span>Materi Berikutnya</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
          </svg>
        `;
      } else {
        DOM.nextSlideBtn.innerHTML = `
          <span>Selanjutnya</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
          </svg>
        `;
      }
    },

    handleQuizAnswer(slide, chosenIdx) {
      const quiz = slide.quiz;
      const isCorrect = chosenIdx === quiz.correct;
      AppState.recordQuizResult(slide.id, isCorrect);

      const optionButtons = DOM.slideQuizOptions.querySelectorAll('.quiz-option-btn');
      optionButtons.forEach((btn, idx) => {
        btn.disabled = true;

        if (idx === quiz.correct) {
          btn.classList.add('quiz-correct');
          btn.querySelector('.quiz-letter-badge').innerHTML = '✓';
        } else if (idx === chosenIdx && !isCorrect) {
          btn.classList.add('quiz-wrong');
          btn.querySelector('.quiz-letter-badge').innerHTML = '✕';
        }
      });

      // Feedback message
      DOM.slideQuizFeedback.classList.remove('hidden');
      if (isCorrect) {
        DOM.slideQuizFeedback.className = 'mt-4 p-4 rounded-xl border-2 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-400 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200 text-sm leading-relaxed animate-fadeIn';
      } else {
        DOM.slideQuizFeedback.className = 'mt-4 p-4 rounded-xl border-2 bg-red-50 dark:bg-red-950/30 border-red-400 dark:border-red-700 text-red-900 dark:text-red-200 text-sm leading-relaxed animate-fadeIn';
      }

      let explanationText = '';
      if (quiz.explanations && quiz.explanations[chosenIdx]) {
        explanationText = quiz.explanations[chosenIdx];
      } else if (quiz.explanations && quiz.explanations[quiz.correct]) {
        explanationText = quiz.explanations[quiz.correct];
      }

      DOM.slideQuizFeedbackText.innerHTML = `
        <div class="flex items-center gap-2 font-bold mb-1">
          <span>${isCorrect ? '✅ Hebat, Jawaban Kamu Benar!' : '❌ Jawaban Kamu Belum Tepat'}</span>
        </div>
        <div class="mt-1">${explanationText}</div>
      `;
    },

    resetQuizUI(slide) {
      if (!slide.quiz) return;
      DOM.slideQuizFeedback.classList.add('hidden');
      const optionButtons = DOM.slideQuizOptions.querySelectorAll('.quiz-option-btn');
      const letters = ['A', 'B', 'C', 'D'];
      optionButtons.forEach((btn, idx) => {
        btn.disabled = false;
        btn.classList.remove('quiz-correct', 'quiz-wrong');
        btn.querySelector('.quiz-letter-badge').innerHTML = letters[idx] || idx + 1;
      });
    }
  };

  /* ==========================================================================
     10. Router & Navigation Controller
     ========================================================================== */
  const Navigation = {
    goToHome() {
      AppState.isHome = true;
      window.location.hash = '#home';

      DOM.homeScreen.classList.remove('hidden');
      DOM.lessonView.classList.add('hidden');
      DOM.bottomNav.classList.add('hidden');
      if (DOM.errorScreen) DOM.errorScreen.classList.add('hidden');

      // Breadcrumbs
      DOM.bcSep1.classList.add('hidden');
      DOM.bcGroup.classList.add('hidden');
      DOM.bcSep2.classList.add('hidden');
      DOM.bcLesson.classList.add('hidden');

      HomeScreen.render();
      SidebarController.render();
      DOM.contentWrapper.scrollTo({ top: 0, behavior: 'smooth' });
    },

    goToSlide(groupIdx, lessonIdx, slideIdx) {
      const data = AppState.courseData;
      if (!data || !data.groups) return;

      if (groupIdx < 0) groupIdx = 0;
      if (groupIdx >= data.groups.length) groupIdx = data.groups.length - 1;

      const group = data.groups[groupIdx];
      if (lessonIdx < 0) lessonIdx = 0;
      if (lessonIdx >= group.lessons.length) lessonIdx = group.lessons.length - 1;

      const lesson = group.lessons[lessonIdx];
      if (slideIdx < 0) slideIdx = 0;
      if (slideIdx >= lesson.slides.length) slideIdx = lesson.slides.length - 1;

      // Update hash: #group-1/lesson-1-1/slide-1
      window.location.hash = `#group-${groupIdx + 1}/lesson-${lesson.id}/slide-${slideIdx + 1}`;
      SlideRenderer.render(groupIdx, lessonIdx, slideIdx);
    },

    next() {
      const data = AppState.courseData;
      if (!data || AppState.isHome) return;

      const group = data.groups[AppState.currentGroupIdx];
      const lesson = group.lessons[AppState.currentLessonIdx];

      // Next slide in current lesson
      if (AppState.currentSlideIdx < lesson.slides.length - 1) {
        this.goToSlide(AppState.currentGroupIdx, AppState.currentLessonIdx, AppState.currentSlideIdx + 1);
        return;
      }

      // Next lesson in current group
      if (AppState.currentLessonIdx < group.lessons.length - 1) {
        this.goToSlide(AppState.currentGroupIdx, AppState.currentLessonIdx + 1, 0);
        return;
      }

      // Next group in course
      if (AppState.currentGroupIdx < data.groups.length - 1) {
        this.goToSlide(AppState.currentGroupIdx + 1, 0, 0);
        return;
      }

      // Reached the very end of course
      alert('Selamat! 🎉 Anda telah menyelesaikan seluruh materi Belajar HTML Dasar. Terus berlatih dan selesaikan Proyek Portofoliomu!');
      this.goToHome();
    },

    prev() {
      const data = AppState.courseData;
      if (!data || AppState.isHome) return;

      // Prev slide in current lesson
      if (AppState.currentSlideIdx > 0) {
        this.goToSlide(AppState.currentGroupIdx, AppState.currentLessonIdx, AppState.currentSlideIdx - 1);
        return;
      }

      // Prev lesson in current group
      if (AppState.currentLessonIdx > 0) {
        const prevLesson = data.groups[AppState.currentGroupIdx].lessons[AppState.currentLessonIdx - 1];
        const lastSlideIdx = prevLesson.slides.length - 1;
        this.goToSlide(AppState.currentGroupIdx, AppState.currentLessonIdx - 1, lastSlideIdx);
        return;
      }

      // Prev group in course
      if (AppState.currentGroupIdx > 0) {
        const prevGroup = data.groups[AppState.currentGroupIdx - 1];
        const lastLessonIdx = prevGroup.lessons.length - 1;
        const lastLesson = prevGroup.lessons[lastLessonIdx];
        const lastSlideIdx = lastLesson.slides.length - 1;
        this.goToSlide(AppState.currentGroupIdx - 1, lastLessonIdx, lastSlideIdx);
        return;
      }

      // At start of course, prev is disabled
    },

    parseHash() {
      const hash = window.location.hash.trim();
      if (!hash || hash === '#' || hash === '#home') {
        this.goToHome();
        return;
      }

      // Pattern: #group-{g}/lesson-{l}/slide-{s}
      const match = hash.match(/^#group-(\d+)\/lesson-([^/]+)\/slide-(\d+)$/);
      if (match && AppState.courseData) {
        const groupNum = parseInt(match[1], 10) - 1;
        const lessonId = match[2];
        const slideNum = parseInt(match[3], 10) - 1;

        const group = AppState.courseData.groups[groupNum];
        if (group && group.lessons) {
          const lessonIdx = group.lessons.findIndex(l => l.id === lessonId);
          if (lessonIdx !== -1) {
            SlideRenderer.render(groupNum, lessonIdx, Math.max(0, slideNum));
            return;
          }
        }
      }

      // Fallback: Check if last position saved
      if (AppState.progress.lastPosition) {
        const pos = AppState.progress.lastPosition;
        this.goToSlide(pos.groupIdx, pos.lessonIdx, pos.slideIdx);
      } else {
        this.goToHome();
      }
    }
  };

  /* ==========================================================================
     11. Keyboard Navigation & Event Listeners Setup
     ========================================================================== */
  function setupEventListeners() {
    // Theme toggle
    if (DOM.themeToggleBtn) {
      DOM.themeToggleBtn.addEventListener('click', () => ThemeManager.toggle());
    }

    // Presentation mode toggle
    if (DOM.presentationBtn) {
      DOM.presentationBtn.addEventListener('click', () => PresentationController.toggle());
    }
    if (DOM.exitPresentationBtn) {
      DOM.exitPresentationBtn.addEventListener('click', () => PresentationController.exit());
    }

    // Sidebar toggles
    if (DOM.mobileMenuBtn) {
      DOM.mobileMenuBtn.addEventListener('click', () => SidebarController.toggleMobile());
    }
    if (DOM.sidebarCloseBtn) {
      DOM.sidebarCloseBtn.addEventListener('click', () => SidebarController.closeMobile());
    }
    if (DOM.sidebarOverlay) {
      DOM.sidebarOverlay.addEventListener('click', () => SidebarController.closeMobile());
    }
    if (DOM.desktopSidebarBtn) {
      DOM.desktopSidebarBtn.addEventListener('click', () => SidebarController.toggleDesktopCollapse());
    }

    // Home buttons
    if (DOM.sidebarBrandBtn) {
      DOM.sidebarBrandBtn.addEventListener('click', () => {
        Navigation.goToHome();
        SidebarController.closeMobile();
      });
    }
    if (DOM.sidebarHomeBtn) {
      DOM.sidebarHomeBtn.addEventListener('click', () => {
        Navigation.goToHome();
        SidebarController.closeMobile();
      });
    }
    if (DOM.bcHome) {
      DOM.bcHome.addEventListener('click', () => Navigation.goToHome());
    }

    // Reset progress in sidebar
    if (DOM.sidebarResetBtn) {
      DOM.sidebarResetBtn.addEventListener('click', () => {
        if (confirm('Apakah Anda yakin ingin mengulang progres belajar dari awal? Riwayat slide dan kuis akan direset.')) {
          AppState.resetAllProgress();
          SidebarController.render();
          if (AppState.isHome) HomeScreen.render();
          else Navigation.goToHome();
        }
      });
    }

    // Bottom Navigation Prev / Next
    if (DOM.prevSlideBtn) {
      DOM.prevSlideBtn.addEventListener('click', () => Navigation.prev());
    }
    if (DOM.nextSlideBtn) {
      DOM.nextSlideBtn.addEventListener('click', () => Navigation.next());
    }

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      // Guard: Ignore if typing inside input, textarea, select, or contentEditable
      const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
      if (tag === 'input' || tag === 'textarea' || tag === 'select' || (e.target && e.target.isContentEditable)) {
        return;
      }

      if (e.key === 'ArrowRight') {
        if (!AppState.isHome) {
          e.preventDefault();
          Navigation.next();
        }
      } else if (e.key === 'ArrowLeft') {
        if (!AppState.isHome) {
          e.preventDefault();
          Navigation.prev();
        }
      } else if (e.key === 'Escape') {
        if (AppState.isPresentationMode) {
          e.preventDefault();
          PresentationController.exit();
        } else if (AppState.isSidebarOpenMobile) {
          e.preventDefault();
          SidebarController.closeMobile();
        }
      }
    });

    // Hash change routing
    window.addEventListener('hashchange', () => {
      Navigation.parseHash();
    });

    // Error retry button
    if (DOM.errorRetryBtn) {
      DOM.errorRetryBtn.addEventListener('click', () => {
        window.location.reload();
      });
    }
  }

  /* ==========================================================================
     12. Course Data Validation & Initialization
     ========================================================================== */
  function showErrorScreen(title, message) {
    if (DOM.homeScreen) DOM.homeScreen.classList.add('hidden');
    if (DOM.lessonView) DOM.lessonView.classList.add('hidden');
    if (DOM.bottomNav) DOM.bottomNav.classList.add('hidden');
    if (DOM.errorScreen) {
      DOM.errorScreen.classList.remove('hidden');
      if (DOM.errorTitle) DOM.errorTitle.textContent = title;
      if (DOM.errorMessage) DOM.errorMessage.innerHTML = message;
    }
  }

  function checkAndInitCourseData() {
    if (window.COURSE_DATA && typeof window.COURSE_DATA === 'object' && Array.isArray(window.COURSE_DATA.groups)) {
      AppState.initCourseData(window.COURSE_DATA);
      SidebarController.render();
      Navigation.parseHash();
      return true;
    }

    return false;
  }

  /* ==========================================================================
     13. App Bootstrap
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    cacheDOMElements();
    ThemeManager.init();
    setupEventListeners();

    // Check if COURSE_DATA is loaded
    if (!checkAndInitCourseData()) {
      // If not yet available (e.g. content.js loaded asynchronously or still generating)
      showErrorScreen(
        'Materi Pembelajaran Sedang Disiapkan',
        'Data kurikulum <code class="inline-code">window.COURSE_DATA</code> belum terdeteksi. Silakan tunggu beberapa saat atau klik tombol muat ulang di bawah.'
      );

      // Periodically check for 10 seconds in case content.js finishes loading
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (checkAndInitCourseData()) {
          clearInterval(interval);
          if (DOM.errorScreen) DOM.errorScreen.classList.add('hidden');
        } else if (attempts > 20) {
          clearInterval(interval);
        }
      }, 500);
    }
  });

  // Export public API to window if needed
  window.App = {
    state: AppState,
    navigation: Navigation,
    theme: ThemeManager,
    presentation: PresentationController
  };
})();
