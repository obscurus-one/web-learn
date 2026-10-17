// Data Pembelajaran HTML Dasar - Ekstrakurikuler Komputer SMA Unggulan Badridduja
window.COURSE_DATA = {
  "title": "Belajar HTML Dasar",
  "subtitle": "Ekstrakurikuler Komputer SMA Unggulan Badridduja",
  "objectives": [
    "Memahami fungsi HTML untuk menyusun struktur dan konten halaman web.",
    "Membuat dan membuka file HTML menggunakan editor dan browser.",
    "Menggunakan elemen HTML dasar dengan tepat.",
    "Menguji, memperbaiki, dan mempresentasikan proyek halaman web."
  ],
  "groups": [
    {
      "id": "group-1",
      "label": "Pertemuan 1–4",
      "title": "Pengenalan Web & HTML",
      "description": "Berkenalan dengan dunia web, HTML, editor kode, dan membuat file HTML pertamamu.",
      "lessons": [
        {
          "id": "lesson-1-1",
          "title": "Pembuka dan Tujuan Belajar",
          "slides": [
            {
              "id": "slide-1-1-1",
              "title": "Selamat Datang di Belajar HTML Dasar",
              "content": "<p>Selamat datang di kegiatan <strong>Ekstrakurikuler Komputer SMA Unggulan Badridduja</strong>! Di sini kita akan memulai petualangan seru mempelajari cara membangun halaman web sendiri dari nol menggunakan <strong>HTML</strong>.</p><p>Selama <strong>24 pertemuan</strong> ke depan, kita akan belajar bersama secara bertahap, santai, dan penuh praktik langsung di komputer.</p><div class=\"info-box\"><strong>📌 Info:</strong> Kamu tidak perlu memiliki pengalaman coding sebelumnya. Seluruh materi dirancang ramah pemula dan fokus pada praktik yang menyenangkan!</div>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Buka sesi dengan sapaan hangat dan santai. Tanyakan kepada siswa siapa yang sudah pernah membuat web atau penasaran bagaimana website seperti Google atau Wikipedia bekerja. Ciptakan suasana kelas yang nyaman dan tidak menakutkan.</p>"
            },
            {
              "id": "slide-1-1-2",
              "title": "Empat Sasaran Belajar Kita",
              "content": "<p>Agar proses belajar kita terarah dan bermakna, ada <strong>4 kemampuan utama</strong> yang akan kita kuasai bersama:</p><ol><li><strong>Memahami fungsi HTML:</strong> Mengerti bagaimana HTML menyusun struktur dan kerangka isi halaman web.</li><li><strong>Membuat & membuka file HTML:</strong> Terampil menulis kode di editor teks dan membukanya di web browser.</li><li><strong>Menggunakan elemen HTML dasar:</strong> Mampu memakai heading, paragraf, daftar, gambar, tautan, tabel, hingga formulir.</li><li><strong>Menguji & mempresentasikan proyek:</strong> Menemukan dan memperbaiki kesalahan kode, serta bangga menampilkan karyamu di depan teman-teman.</li></ol><div class=\"tip-box\"><strong>💡 Tips:</strong> Kunci utama belajar pemrograman adalah rasa ingin tahu dan tidak takut salah. Setiap kesalahan ketik adalah kesempatan belajar yang berharga!</div>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Jelaskan keempat tujuan belajar dengan bahasa sehari-hari. Tekankan bahwa di akhir semester, setiap siswa akan memiliki proyek web buatan sendiri yang dapat dipamerkan ke orang tua dan teman.</p>"
            },
            {
              "id": "slide-1-1-3",
              "title": "Peta Perjalanan 24 Pertemuan",
              "content": "<p>Perjalanan belajar kita terbagi ke dalam <strong>5 kelompok materi</strong> utama:</p><ul><li><strong>Pertemuan 1–4:</strong> Pengenalan Web, HTML, Editor Kode, dan Struktur Dokumen Dasar.</li><li><strong>Pertemuan 5–8:</strong> Elemen Teks (Heading, Paragraf, Format Tebal/Miring), Daftar, dan Tautan (Hyperlink).</li><li><strong>Pertemuan 9–12:</strong> Media Gambar, Tabel Data, Formulir Sederhana, dan Struktur Semantik.</li><li><strong>Pertemuan 13–20:</strong> Merancang dan Mengerjakan Proyek Halaman Web Mandiri.</li><li><strong>Pertemuan 21–24:</strong> Penyempurnaan, Presentasi Karya, dan Evaluasi Akhir.</li></ul><div class=\"info-box\"><strong>📌 Info:</strong> Setiap pertemuan menggabungkan penjelasan konsep singkat dan latihan langsung di komputer masing-masing.</div>",
              "codeExample": null,
              "quiz": {
                "question": "Manakah yang BUKAN merupakan salah satu dari 4 sasaran utama pembelajaran HTML kita?",
                "options": [
                  "Membuat dan membuka file HTML di browser",
                  "Menghubungkan database server tingkat lanjut dengan MySQL",
                  "Menggunakan elemen HTML dasar dengan tepat",
                  "Menguji, memperbaiki, dan mempresentasikan proyek web"
                ],
                "correct": 1,
                "explanations": [
                  "Salah, membuat dan membuka file HTML merupakan sasaran ke-2 dalam pembelajaran kita.",
                  "Benar! Kursus ini berfokus pada HTML dasar untuk struktur konten web, belum mencakup konfigurasi database server yang rumit.",
                  "Salah, menggunakan elemen HTML dasar merupakan sasaran ke-3 yang sangat penting.",
                  "Salah, menguji dan mempresentasikan proyek web merupakan sasaran ke-4 di akhir kursus."
                ]
              },
              "teacherNotes": "<p>Berikan gambaran besar agar siswa mengetahui target akhir mereka. Ajak siswa menjawab kuis bersama untuk menguji perhatian mereka terhadap tujuan pembelajaran.</p>"
            }
          ]
        },
        {
          "id": "lesson-1-2",
          "title": "Apa Itu Web, HTML, dan Browser",
          "slides": [
            {
              "id": "slide-1-2-1",
              "title": "Mengenal Web & Internet",
              "content": "<p>Sering kali kita mendengar istilah <em>Internet</em> dan <em>Web</em>. Apakah keduanya sama? Mari kita pahami perbedaannya:</p><ul><li><strong>Internet (Interconnected Network):</strong> Infrastruktur jaringan fisik global (kabel bawah laut, satelit, pemancar, dan router) yang menghubungkan miliaran komputer dan perangkat di seluruh dunia.</li><li><strong>Web (World Wide Web / WWW):</strong> Sistem informasi dan layanan dokumen digital yang berjalan di atas internet, di mana halaman-halaman web saling terhubung melalui tautan (hyperlink).</li><li><strong>Website (Situs Web):</strong> Kumpulan halaman web yang saling berkaitan dan berada di bawah satu alamat domain tertentu, misalnya <code>badridduja.sch.id</code>.</li><li><strong>URL (Uniform Resource Locator):</strong> Alamat lengkap untuk menemukan halaman web di browser, contohnya <code>https://www.google.com</code>.</li></ul><div class=\"info-box\"><strong>📌 Analogi Sederhana:</strong> Internet adalah sistem jalan raya di seluruh dunia, sedangkan Web adalah kendaraan, layanan, dan toko-toko yang berdiri dan melintas di atas jalan raya tersebut.</div>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Gunakan analogi jalan raya dan mobil/toko. Tanyakan kepada siswa website apa saja yang paling sering mereka buka setiap hari untuk memicu antusiasme kelas.</p>"
            },
            {
              "id": "slide-1-2-2",
              "title": "Apa Itu HTML & Fungsinya?",
              "content": "<p><strong>HTML</strong> adalah singkatan dari <strong>HyperText Markup Language</strong>. HTML adalah bahasa standar dunia yang digunakan untuk menyusun kerangka dan konten dari setiap halaman web di internet.</p><ul><li><strong>HyperText:</strong> Teks di web bukan sekadar teks biasa. Teks ini memiliki kemampuan khusus berupa pranala (tautan/link) yang bila diklik dapat langsung membawamu berpindah ke halaman lain di belahan dunia manapun.</li><li><strong>Markup Language (Bahasa Penanda):</strong> Bahasa yang menggunakan tanda-tanda khusus berupa kode (disebut <em>tag</em>) untuk menandai fungsi teks, misalnya menentukan mana yang menjadi judul, paragraf, daftar, gambar, atau tombol.</li></ul><p><strong>Tiga Pilar Fondasi Web:</strong></p><ul><li><strong>HTML:</strong> Menyusun struktur dan konten (seperti pondasi, tiang, dan dinding rumah).</li><li><strong>CSS:</strong> Mengatur gaya, warna, dan keindahan tampilan (seperti cat dan dekorasi rumah).</li><li><strong>JavaScript:</strong> Mengatur fungsi interaktif dan aksi dinamis (seperti saklar lampu dan pintu otomatis rumah).</li></ul><div class=\"info-box\"><strong>📌 Penting Diingat:</strong> HTML <strong>bukan bahasa pemrograman logika</strong> seperti Python, Java, atau C++. HTML tidak memiliki rumus logika atau perhitungan rumit, melainkan bahasa penata struktur dokumen. Siapapun bisa mempelajarinya dengan mudah!</div>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Tekankan bahwa HTML adalah bahasa markup, bukan bahasa pemrograman komputasi logika. Tunjukkan analogi bangunan rumah (HTML = kerangka, CSS = cat warna, JS = instalasi listrik/interaksi) agar siswa memiliki gambaran arsitektur web yang jelas.</p>"
            },
            {
              "id": "slide-1-2-3",
              "title": "Cara Kerja HTML & Anatomi Tag",
              "content": "<p>Bagaimana cara kerja HTML dalam menyusun halaman web? HTML membungkus teks menggunakan pasangan <strong>Tag</strong> yang diapit tanda kurung sudut (<code>&lt;</code> dan <code>&gt;</code>):</p><ul><li><strong>Tag Pembuka (Opening Tag):</strong> Menandai awal dari sebuah elemen, contohnya <code>&lt;p&gt;</code> untuk paragraf atau <code>&lt;h1&gt;</code> untuk judul utama.</li><li><strong>Konten (Content):</strong> Isi tulisan, informasi, atau media yang ingin kamu tampilkan kepada pengunjung website.</li><li><strong>Tag Penutup (Closing Tag):</strong> Menandai akhir dari elemen tersebut, ditulis sama dengan tag pembuka tetapi diawali garis miring (slash), contohnya <code>&lt;/p&gt;</code> atau <code>&lt;/h1&gt;</code>.</li></ul><p>Gabungan antara tag pembuka, konten, dan tag penutup dinamakan <strong>Elemen HTML</strong>.</p><div class=\"tip-box\"><strong>💡 Contoh Tag Dasar:</strong> <code>&lt;h1&gt;</code> untuk judul besar, <code>&lt;p&gt;</code> untuk teks paragraf, dan <code>&lt;button&gt;</code> untuk membuat tombol interaktif.</div>",
              "codeExample": {
                "code": "<h1>Belajar HTML di SMA Unggulan Badridduja</h1>\n<p>HTML adalah bahasa penanda untuk menyusun kerangka halaman web.</p>\n<button>Mulai Belajar Sekarang</button>",
                "explanation": "<p><strong>Bagaimana Browser Membacanya?</strong></p><ul><li><code>&lt;h1&gt;</code>: Memberitahu browser untuk menampilkan teks sebagai <strong>judul utama</strong> dengan huruf besar dan tebal.</li><li><code>&lt;p&gt;</code>: Memberitahu browser untuk menampilkan teks sebagai <strong>paragraf</strong> normal yang rapi.</li><li><code>&lt;button&gt;</code>: Memberitahu browser untuk menggambar <strong>kotak tombol</strong> interaktif yang bisa diklik oleh pengguna.</li></ul><p>Perhatikan bahwa browser <em>tidak menampilkan</em> tulisan kode tagnya ke layar, melainkan langsung menerapkannya menjadi wujud tampilan visual!</p>"
              },
              "quiz": null,
              "teacherNotes": "<p>Tunjukkan anatomi tag di layar: Tag Pembuka -> Konten -> Tag Penutup. Jelaskan pentingnya garis miring (slash) pada tag penutup agar browser tahu batas akhir dari elemen tersebut.</p>"
            },
            {
              "id": "slide-1-2-4",
              "title": "Apa Itu Web Browser & Cara Kerjanya?",
              "content": "<p><strong>Web Browser</strong> (peramban web) adalah aplikasi perangkat lunak yang bertugas membaca dokumen kode HTML dan menerjemahkannya menjadi halaman visual interaktif yang kita lihat di layar.</p><p><strong>Contoh Web Browser Populer:</strong></p><ul><li><strong>Google Chrome:</strong> Browser paling banyak digunakan di dunia saat ini.</li><li><strong>Mozilla Firefox:</strong> Browser open-source yang sangat mendukung privasi pengguna.</li><li><strong>Microsoft Edge:</strong> Browser bawaan modern di sistem operasi Windows.</li><li><strong>Apple Safari:</strong> Browser utama di perangkat Mac, iPhone, dan iPad.</li></ul><p><strong>Bagaimana Cara Browser Menerjemahkan HTML? (Proses Rendering):</strong></p><ol><li><strong>Membaca Dokumen (Parsing):</strong> Browser membaca baris kode dari file <code>.html</code> dari atas ke bawah.</li><li><strong>Menyembunyikan Tag:</strong> Browser tidak menampilkan teks kode tag seperti <code>&lt;h1&gt;</code> atau <code>&lt;p&gt;</code> kepada pengunjung. Tag tersebut diproses di latar belakang.</li><li><strong>Merender Tampilan (Rendering):</strong> Browser menggambar teks dengan ukuran yang tepat, memberi warna, memuat gambar, dan menyusun tombol menjadi halaman web utuh.</li></ol><div class=\"info-box\"><strong>📌 Perbedaan Utama:</strong> Kita membutuhkan <strong>Editor Teks</strong> (seperti VS Code atau Notepad) untuk <em>menulis kode</em>, dan membutuhkan <strong>Web Browser</strong> (seperti Chrome atau Firefox) untuk <em>melihat hasil jadinya</em>!</div><div class=\"practice-box\"><strong>🔍 Coba Sekarang di Kelas:</strong> Buka website apapun di browser, <strong>klik kanan</strong> di area kosong halaman, lalu pilih <strong>Lihat Sumber Halaman (View Page Source)</strong> atau tekan <code>Ctrl + U</code>. Kamu akan melihat kode HTML asli dari website tersebut!</div>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Ajak seluruh siswa menekan Ctrl+U di browser masing-masing pada website sekolah atau website berita. Tunjukkan bahwa semua website di dunia dibangun menggunakan HTML yang diproses oleh browser.</p>"
            },
            {
              "id": "slide-1-2-5",
              "title": "Kuis: Web, HTML, dan Browser",
              "content": "<p>Ayo uji pemahamanmu mengenai hubungan antara Web, kode HTML, dan aplikasi Web Browser melalui pertanyaan kuis berikut!</p><div class=\"tip-box\"><strong>💡 Tips:</strong> Ingat kembali peran masing-masing: siapa yang menyusun kerangka kode dan siapa aplikasi yang bertugas menerjemahkannya ke layar.</div>",
              "codeExample": null,
              "quiz": {
                "question": "Manakah pernyataan yang PALING TEPAT mengenai hubungan antara HTML dan Web Browser?",
                "options": [
                  "HTML adalah aplikasi untuk browsing internet, sedangkan browser adalah kode pemrogramannya",
                  "HTML menyusun kerangka dan konten halaman web, sedangkan browser membaca dan menerjemahkan kode HTML tersebut menjadi tampilan visual",
                  "Browser digunakan untuk mengetik kode HTML, sedangkan HTML digunakan untuk menyambungkan kabel internet",
                  "Browser dan HTML adalah aplikasi yang sama persis untuk memperbaiki kerusakan monitor komputer"
                ],
                "correct": 1,
                "explanations": [
                  "Salah! HTML adalah bahasa penanda kodenya, sedangkan browser adalah aplikasi yang membacanya.",
                  "Tepat sekali! HTML adalah bahasa penanda yang menyusun kerangka dokumen, dan aplikasi web browser bertugas membaca kode tersebut lalu menampilkannya menjadi halaman web yang rapi.",
                  "Salah! Mengetik kode dilakukan di aplikasi editor teks (seperti VS Code/Notepad), bukan di browser.",
                  "Salah! Browser adalah software peramban web dan HTML adalah bahasa penanda struktur dokumen, keduanya tidak berhubungan dengan perbaikan hardware monitor."
                ]
              },
              "teacherNotes": "<p>Diskusikan jawaban bersama siswa di kelas. Tekankan kembali alur kerja web developer: Menulis di Editor -> Disimpan (.html) -> Dibuka dan diterjemahkan oleh Browser.</p>"
            }
          ]
        },
        {
          "id": "lesson-1-3",
          "title": "Editor Kode dan AI sebagai Alat Bantu",
          "slides": [
            {
              "id": "slide-1-3-1",
              "title": "Memilih Editor Teks untuk Coding",
              "content": "<p>Untuk menulis kode HTML, kita membutuhkan aplikasi <strong>editor teks</strong>. Beberapa pilihan yang umum digunakan:</p><ul><li><strong>Notepad:</strong> Editor teks bawaan Windows, sangat sederhana dan langsung tersedia tanpa instalasi.</li><li><strong>Visual Studio Code (VS Code):</strong> Editor modern standar industri, gratis, dan sangat disarankan karena fiturnya lengkap.</li><li><strong>Notepad++:</strong> Alternatif editor ringan dengan penomoran baris yang rapi.</li></ul><p>Editor kode mempermudah pekerjaan kita lewat fitur <em>syntax highlighting</em> (pewarnaan kode otomatis), penomoran baris, dan pendeteksi kesalahan.</p><div class=\"tip-box\"><strong>💡 Aturan Ekstensi:</strong> File HTML wajib disimpan dengan akhiran (ekstensi) <code>.html</code>, contohnya <code>index.html</code> atau <code>latihan.html</code>.</div>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Tunjukkan perbedaan tampilan saat membuka file kode di Notepad biasa vs VS Code. Perlihatkan bagaimana syntax highlighting mempermudah mata kita membedakan tag, atribut, dan teks.</p>"
            },
            {
              "id": "slide-1-3-2",
              "title": "AI sebagai Asisten Belajar yang Bijak",
              "content": "<p>Kecerdasan Buatan (AI) seperti ChatGPT atau Gemini bisa menjadi teman belajar yang sangat membantu:</p><ul><li><strong>Manfaat Positif:</strong> Membantu menjelaskan arti tag tertentu, memberikan contoh kode sederhana, atau membantu melacak letak kesalahan (debugging).</li><li><strong>Tanggung Jawabmu:</strong> Selalu baca, pahami, dan uji kode dari AI. Jangan pernah asal salin-tempel (copy-paste) tanpa mengerti fungsinya!</li></ul><div class=\"warning-box\"><strong>⚠️ Perhatian & Etika Digital:</strong> Jangan pernah memasukkan data pribadi penting (seperti kata sandi, nomor HP pribadi, atau data keluarga) ke dalam aplikasi AI. Gunakan selalu data contoh fiktif dalam latihan!</div>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Diskusikan etika penggunaan AI di sekolah. Tekankan bahwa AI adalah alat pembimbing, bukan joki tugas. Siswa tetap harus mampu menjelaskan kode proyek mereka sendiri.</p>"
            },
            {
              "id": "slide-1-3-3",
              "title": "Kuis Editor & Praktik Persiapan",
              "content": "<p>Sebelum melangkah lebih jauh, mari siapkan folder kerja dan file latihan pertamamu di komputer!</p><div class=\"practice-box\"><strong>✏️ Praktik Mandiri:</strong><ol><li>Buka editor teks di komputermu (VS Code atau Notepad).</li><li>Buat folder baru di Documents dengan nama <code>Latihan-html</code>.</li><li>Buat file baru di editor, lalu simpan dengan nama <code>latihan.html</code> di dalam folder tersebut.</li></ol></div>",
              "codeExample": null,
              "quiz": {
                "question": "Ekstensi file apakah yang wajib digunakan agar browser mengenali file kita sebagai dokumen web HTML?",
                "options": [
                  ".docx",
                  ".html",
                  ".mp3",
                  ".pptx"
                ],
                "correct": 1,
                "explanations": [
                  "Salah, .docx adalah ekstensi untuk dokumen Microsoft Word.",
                  "Benar! File web HTML wajib disimpan dengan ekstensi .html (atau .htm).",
                  "Salah, .mp3 adalah ekstensi untuk file rekaman suara atau audio.",
                  "Salah, .pptx adalah ekstensi untuk file presentasi PowerPoint."
                ]
              },
              "teacherNotes": "<p>Kelilingi meja siswa untuk memastikan folder Latihan-html telah dibuat dan file latihan.html tersimpan dengan ekstensi yang tepat (bukan latihan.html.txt).</p>"
            }
          ]
        },
        {
          "id": "lesson-1-4",
          "title": "Struktur Dasar Dokumen HTML",
          "slides": [
            {
              "id": "slide-1-4-1",
              "title": "Anatomi Kerangka Dokumen HTML",
              "content": "<p>Setiap dokumen HTML selalu dibangun dengan pola kerangka dasar yang konsisten.</p><p>Analogi sederhananya seperti surat resmi:</p><ul><li>Ada <strong>kepala surat</strong> (identitas & pengaturan).</li><li>Ada <strong>badan surat</strong> (isi pesan yang ingin disampaikan).</li></ul><p>Tag HTML umumnya ditulis berpasangan: ada tag pembuka <code>&lt;tag&gt;</code> dan tag penutup <code>&lt;/tag&gt;</code> dengan tanda garis miring.</p><div class=\"info-box\"><strong>📌 Info:</strong> Struktur standar ini akan selalu kamu gunakan di setiap halaman web yang kamu buat, dari website paling sederhana hingga situs raksasa dunia!</div>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Tuliskan di papan tulis analogi bagian kepala dan tubuh manusia. Jelaskan bahwa tag berpasangan ibarat tanda buka dan tutup kurung.</p>"
            },
            {
              "id": "slide-1-4-2",
              "title": "Empat Bagian Pokok Dokumen",
              "content": "<p>Inilah 4 elemen utama pembentuk kerangka HTML:</p><ul><li><code>&lt;!DOCTYPE html&gt;</code>: Memberitahu browser bahwa dokumen ini mematuhi standar HTML5 modern.</li><li><code>&lt;html&gt;</code>: Wadah terluar yang membungkus seluruh elemen di dalam dokumen.</li><li><code>&lt;head&gt;</code>: Berisi informasi latar belakang tentang halaman (judul tab, karakter, pengaturan) yang tidak tampil di badan halaman.</li><li><code>&lt;body&gt;</code>: Tempat meletakkan semua konten visual yang akan dilihat oleh pengunjung (teks, gambar, tombol).</li></ul>",
              "codeExample": {
                "code": "<!DOCTYPE html>\n<html>\n  <head>\n    <title>Judul Web Saya</title>\n  </head>\n  <body>\n    <h1>Selamat Datang!</h1>\n    <p>Ini adalah halaman web pertama saya.</p>\n  </body>\n</html>",
                "explanation": "<p>Perhatikan struktur di atas: <code>&lt;!DOCTYPE html&gt;</code> berada di baris pertama, diikuti oleh pasangan tag <code>&lt;html&gt;</code>, lalu di dalamnya terbagi menjadi <code>&lt;head&gt;</code> dan <code>&lt;body&gt;</code>.</p>"
              },
              "quiz": null,
              "teacherNotes": "<p>Jelaskan baris demi baris. Minta siswa memperhatikan lekukan (indentasi) ke dalam agar kode terlihat rapi dan berstruktur hierarki.</p>"
            },
            {
              "id": "slide-1-4-3",
              "title": "Elemen Penting di Dalam Bagian Head",
              "content": "<p>Walaupun bagian <code>&lt;head&gt;</code> tidak tampil langsung di layar putih browser, isinya sangat penting:</p><ul><li><code>&lt;meta charset=\"UTF-8\"&gt;</code>: Mengatur sistem karakter huruf agar huruf Indonesia, angka, dan simbol dapat ditampilkan dengan sempurna tanpa error.</li><li><code>&lt;title&gt;</code>: Menentukan teks judul yang muncul pada <strong>tab browser</strong> di bagian atas layar.</li></ul>",
              "codeExample": {
                "code": "<head>\n  <meta charset=\"UTF-8\">\n  <title>Profil Komputer SMA Badridduja</title>\n</head>",
                "explanation": "<p>Dengan menyertakan <code>&lt;meta charset=\"UTF-8\"&gt;</code> dan <code>&lt;title&gt;</code>, tab browser akan menampilkan tulisan <em>Profil Komputer SMA Badridduja</em> secara tepat.</p>"
              },
              "quiz": null,
              "teacherNotes": "<p>Perlihatkan tab browser di proyektor untuk menunjukkan di mana teks &lt;title&gt; muncul. Ubah title dan reload untuk membuktikannya.</p>"
            },
            {
              "id": "slide-1-4-4",
              "title": "Kuis: Struktur Dokumen HTML",
              "content": "<p>Mari uji seberapa baik pemahamanmu tentang letak elemen kerangka HTML!</p><div class=\"tip-box\"><strong>💡 Tips:</strong> Ingat perbedaan antara informasi judul tab dan isi dokumen yang tampil di layar putih browser.</div>",
              "codeExample": null,
              "quiz": {
                "question": "Di dalam elemen manakah semua konten yang tampil di layar utama browser (seperti teks, gambar, dan tombol) diletakkan?",
                "options": [
                  "<head>",
                  "<body>",
                  "<title>",
                  "<!DOCTYPE html>"
                ],
                "correct": 1,
                "explanations": [
                  "Salah, <head> hanya berisi metadata seperti judul tab dan pengaturan karakter.",
                  "Benar! Semua konten yang dilihat pengunjung diletakkan di dalam tag <body>...</body>.",
                  "Salah, <title> hanya menentukan nama pada tab browser dan berada di dalam <head>.",
                  "Salah, <!DOCTYPE html> adalah deklarasi versi HTML di baris teratas dokumen."
                ]
              },
              "teacherNotes": "<p>Pastikan semua siswa menjawab dengan benar. Ini adalah konsep paling fundamental sebelum masuk ke materi berikutnya.</p>"
            }
          ]
        },
        {
          "id": "lesson-1-5",
          "title": "Praktik: File HTML Pertamamu",
          "slides": [
            {
              "id": "slide-1-5-1",
              "title": "Langkah Membuat File HTML Pertama",
              "content": "<p>Saatnya langsung menulis kode pertamamu! Ikuti 5 langkah berikut:</p><ol><li>Buka editor kodemu (VS Code atau Notepad).</li><li>Ketik struktur kerangka HTML lengkap seperti pada contoh kode.</li><li>Tambahkan judul dengan tag <code>&lt;h1&gt;</code> dan satu paragraf dengan tag <code>&lt;p&gt;</code> di dalam bagian <code>&lt;body&gt;</code>.</li><li>Simpan file dengan nama <code>index.html</code> ke dalam folder <code>Latihan-html</code>.</li><li>Buka file tersebut di browser (klik dua kali filenya di File Explorer, atau seret filenya ke jendela browser).</li></ol>",
              "codeExample": {
                "code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>Halaman Pertamaku</title>\n  </head>\n  <body>\n    <h1>Halo Dunia!</h1>\n    <p>Ini adalah halaman web pertama yang saya buat di SMA Unggulan Badridduja.</p>\n  </body>\n</html>",
                "explanation": "<p>Ketik kode ini di editor, simpan sebagai <code>index.html</code>, lalu buka di browsermu!</p>"
              },
              "quiz": null,
              "teacherNotes": "<p>Bimbing siswa satu per satu di lab komputer. Pastikan semua siswa berhasil membuka filenya di browser.</p>"
            },
            {
              "id": "slide-1-5-2",
              "title": "Siklus Edit, Simpan, dan Muat Ulang",
              "content": "<p>Dalam membuat web, alur kerja pengembang mengikuti siklus 3 langkah cepat:</p><ol><li><strong>Ubah Kode:</strong> Sunting teks atau tambahkan elemen baru di editor kodemu.</li><li><strong>Simpan (Save):</strong> Tekan kombinasi tombol <code>Ctrl + S</code> di keyboard untuk menyimpan perubahan.</li><li><strong>Muat Ulang (Reload):</strong> Kembali ke browser, lalu tekan tombol <code>F5</code> atau <code>Ctrl + R</code> untuk melihat perubahan terbarunya!</li></ol><div class=\"practice-box\"><strong>✏️ Praktik Sekarang:</strong> Ganti isi <code>&lt;h1&gt;</code> dengan namamu sendiri, dan ganti isi <code>&lt;p&gt;</code> dengan kelasmu. Tekan <code>Ctrl + S</code>, lalu refresh browsermu!</div>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Banyak pemula bingung karena browser tidak berubah setelah mengedit kode; penyebabnya hampir selalu lupa menekan Ctrl+S di editor!</p>"
            },
            {
              "id": "slide-1-5-3",
              "title": "Kuis Alur Kerja Pengembang Web",
              "content": "<p>Selamat! Kamu telah berhasil menciptakan halaman web pertamamu.</p><div class=\"tip-box\"><strong>💡 Tips Kebiasaan Baik:</strong> Jadikan kebiasaan: ketik sedikit kode -> <code>Ctrl + S</code> -> beralih ke browser -> <code>F5</code>. Siklus cepat ini membantu mendeteksi kesalahan lebih awal.</div>",
              "codeExample": null,
              "quiz": {
                "question": "Apa tombol pintas keyboard tercepat untuk memuat ulang (refresh) halaman di browser web setelah kita mengedit kode?",
                "options": [
                  "Ctrl + Z",
                  "Ctrl + P",
                  "F5 atau Ctrl + R",
                  "Alt + F4"
                ],
                "correct": 2,
                "explanations": [
                  "Salah, Ctrl + Z adalah shortcut untuk membatalkan tindakan (Undo).",
                  "Salah, Ctrl + P adalah shortcut untuk mencetak dokumen (Print).",
                  "Benar! Menekan F5 atau Ctrl + R akan memuat ulang tampilan halaman browser dengan kode terbaru.",
                  "Salah, Alt + F4 akan menutup jendela aplikasi!"
                ]
              },
              "teacherNotes": "<p>Beri tepuk tangan dan apresiasi kepada seluruh kelas karena semua telah resmi menjadi pembuat web (web author)!</p>"
            }
          ]
        }
      ]
    },
    {
      "id": "group-2",
      "label": "Pertemuan 5–8",
      "title": "Elemen Teks & Tautan",
      "description": "Mempelajari heading, paragraf, format teks, daftar, dan hyperlink untuk menyusun konten halaman web.",
      "lessons": [
        {
          "id": "lesson-2-1",
          "title": "Heading dan Paragraf",
          "slides": [
            {
              "id": "slide-2-1-1",
              "title": "Hierarki Judul: Heading h1 sampai h6",
              "content": "<p>Dalam HTML, judul dokumen diatur menggunakan elemen <strong>heading</strong> dari tingkat <code>&lt;h1&gt;</code> hingga <code>&lt;h6&gt;</code>.</p><ul><li><code>&lt;h1&gt;</code>: Judul utama halaman (paling besar dan paling penting).</li><li><code>&lt;h2&gt;</code>: Subjudul untuk bagian atau bab utama.</li><li><code>&lt;h3&gt;</code> sampai <code>&lt;h6&gt;</code>: Sub-subjudul dengan tingkatan yang semakin spesifik dan ukuran lebih kecil.</li></ul><div class=\"info-box\"><strong>📌 Aturan Desain:</strong> Gunakan heading sesuai urutan hierarki isi, bukan sekadar untuk memperbesar ukuran teks. Dalam satu halaman web, idealnya hanya ada <strong>satu tag &lt;h1&gt;</strong> sebagai judul inti.</div>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Tekankan bahwa heading adalah penanda struktur dokumen, bukan sekadar perbesar tulisan. Jelaskan peran h1 dalam memudahkan Google mengindeks halaman.</p>"
            },
            {
              "id": "slide-2-1-2",
              "title": "Perbandingan Ukuran Heading",
              "content": "<p>Berikut adalah contoh penggunaan seluruh tingkatan heading dari h1 hingga h6 dalam satu halaman.</p><p>Perhatikan bagaimana browser secara otomatis mengatur ukuran teks dan ketebalan bawaannya.</p>",
              "codeExample": {
                "code": "<h1>Heading 1 - Judul Utama Halaman</h1>\n<h2>Heading 2 - Bagian / Subjudul Bab</h2>\n<h3>Heading 3 - Topik Pembahasan</h3>\n<h4>Heading 4 - Sub Topik Khusus</h4>\n<h5>Heading 5 - Keterangan Tambahan</h5>\n<h6>Heading 6 - Judul Tingkat Terkecil</h6>",
                "explanation": "<p>Browser secara bawaan memberikan margin vertikal (spasi atas-bawah) dan ketebalan huruf tebal (bold) untuk setiap elemen heading.</p>"
              },
              "quiz": null,
              "teacherNotes": "<p>Ajak siswa mencoba menuliskan seluruh heading ini di file latihan.html dan melihat perbedaannya berdampingan di browser.</p>"
            },
            {
              "id": "slide-2-1-3",
              "title": "Menyusun Teks dengan Paragraf <p>",
              "content": "<p>Untuk menulis teks berupa kalimat atau alinea, kita membungkusnya di dalam tag <code>&lt;p&gt;...&lt;/p&gt;</code> (singkatan dari <em>paragraph</em>).</p><p>Browser secara otomatis menyisipkan jarak pemisah vertikal sebelum dan sesudah setiap elemen paragraf sehingga tulisan tidak menumpuk padat.</p><div class=\"tip-box\"><strong>💡 Tips:</strong> Jika kamu menekan tombol Enter berkali-kali di editor teks tanpa membungkusnya dengan tag <code>&lt;p&gt;</code>, browser akan mengabaikan spasi Enter tersebut dan menggabungkannya dalam satu baris.</div>",
              "codeExample": {
                "code": "<h2>Tentang Saya</h2>\n<p>Halo! Saya adalah siswa SMA Unggulan Badridduja yang bersemangat mempelajari dunia teknologi dan web development.</p>\n<p>Di waktu senggang, saya senang membaca buku dan merakit komputer bersama teman-teman ekstrakurikuler.</p>",
                "explanation": "<p>Kedua kalimat di atas akan ditampilkan sebagai dua paragraf terpisah dengan jarak vertikal yang rapi di antara keduanya.</p>"
              },
              "quiz": null,
              "teacherNotes": "<p>Tunjukkan fakta unik bahwa browser mengabaikan banyak spasi dan enter berturut-turut (whitespace collapsing). Inilah alasan perlunya tag &lt;p&gt;.</p>"
            },
            {
              "id": "slide-2-1-4",
              "title": "Kuis: Heading dan Paragraf",
              "content": "<p>Mari periksa pemahamanmu mengenai penggunaan tag judul dan alinea dalam HTML!</p><div class=\"tip-box\"><strong>💡 Tips:</strong> Perhatikan urutan angka pada tag heading dari yang paling tinggi ke yang paling rendah.</div>",
              "codeExample": null,
              "quiz": {
                "question": "Tag heading manakah yang memiliki hierarki tertinggi dan ukuran teks bawaan paling besar di halaman web?",
                "options": [
                  "<h6>",
                  "<h3>",
                  "<h1>",
                  "<header>"
                ],
                "correct": 2,
                "explanations": [
                  "Salah, <h6> adalah heading dengan hierarki paling kecil.",
                  "Salah, <h3> berada di tengah-tengah hierarki judul.",
                  "Benar! <h1> merupakan judul tingkat paling tinggi dan umumnya berukuran paling besar.",
                  "Salah, <header> adalah elemen semantik untuk area atas halaman, bukan tag teks heading."
                ]
              },
              "teacherNotes": "<p>Ulas kembali jawaban yang tepat dan ingatkan agar tidak menggunakan h1 sembarangan hanya demi ukuran besar.</p>"
            }
          ]
        },
        {
          "id": "lesson-2-2",
          "title": "Format Teks (strong dan em)",
          "slides": [
            {
              "id": "slide-2-2-1",
              "title": "Memberi Penekanan: strong dan em",
              "content": "<p>Saat menulis konten, ada kata-kata penting yang membutuhkan perhatian ekstra dari pembaca. HTML menyediakan dua tag utama:</p><ul><li><code>&lt;strong&gt;</code>: Menandai teks yang memiliki tingkat kepentingan tinggi (secara visual ditampilkan <strong>tebal / bold</strong>).</li><li><code>&lt;em&gt;</code>: Memberikan penekanan nada bicara / <em>emphasis</em> pada kata (secara visual ditampilkan <em>miring / italic</em>).</li></ul><p>Keduanya bisa digabungkan jika sebuah kata membutuhkan penekanan ganda: <code>&lt;strong&gt;&lt;em&gt;Penting Sekali!&lt;/em&gt;&lt;/strong&gt;</code>.</p>",
              "codeExample": {
                "code": "<p>Peringatan: Besok adalah hari <strong>terakhir</strong> pengumpulan tugas proyek!</p>\n<p>Saya <em>sangat</em> menyukai materi HTML ini karena mudah dipraktikkan.</p>\n<p>Perhatikan dengan <strong><em>saksama</em></strong> instruksi dari guru pengajar.</p>",
                "explanation": "<p>Tag <code>&lt;strong&gt;</code> menebalkan kata kunci, sedangkan <code>&lt;em&gt;</code> memiringkannya untuk memberikan penekanan intonasi.</p>"
              },
              "quiz": null,
              "teacherNotes": "<p>Jelaskan bahwa strong dan em memiliki arti semantik bagi pembaca layar tunanetra (intonasi suara berubah), bukan sekadar gaya visual tebal miring.</p>"
            },
            {
              "id": "slide-2-2-2",
              "title": "Kapan Menggunakan Format Teks?",
              "content": "<p>Format teks dirancang untuk membantu mata pembaca memindai informasi dengan cepat:</p><ul><li>Gunakan <code>&lt;strong&gt;</code> untuk kata kunci, batas waktu, peringatan bahaya, atau istilah penting.</li><li>Gunakan <code>&lt;em&gt;</code> untuk istilah bahasa asing, judul buku/karya, atau kata yang ditegaskan intonasinya.</li></ul><div class=\"warning-box\"><strong>⚠️ Perhatian:</strong> Jangan menebalkan seluruh paragraf sekaligus! Jika semua kata dibuat tebal, tidak ada lagi bagian yang menonjol dan halaman akan melelahkan untuk dibaca.</div>",
              "codeExample": {
                "code": "<p>Bahasa resmi standar untuk web adalah <strong>HTML</strong>, singkatan dari <em>HyperText Markup Language</em>.</p>",
                "explanation": "<p>Kombinasi yang seimbang: nama singkatan ditebalkan dengan <code>&lt;strong&gt;</code> dan istilah asing dimiringkan dengan <code>&lt;em&gt;</code>.</p>"
              },
              "quiz": null,
              "teacherNotes": "<p>Berikan contoh halaman dokumen nyata yang terlalu banyak bold vs yang proporsional agar siswa melihat perbedaannya secara visual.</p>"
            },
            {
              "id": "slide-2-2-3",
              "title": "Kuis Format Teks & Praktik",
              "content": "<p>Waktunya menerapkan format teks pada halaman latihanmu sendiri!</p><div class=\"practice-box\"><strong>✏️ Praktik Mandiri:</strong> Buka file <code>index.html</code> milikmu. Tambahkan minimal satu kalimat yang memuat kata dengan format <code>&lt;strong&gt;</code> dan kata lain dengan format <code>&lt;em&gt;</code>. Simpan dan cek perubahannya di browser!</div>",
              "codeExample": null,
              "quiz": {
                "question": "Tag HTML manakah yang digunakan untuk menandai teks yang sangat penting dan secara visual ditampilkan dengan huruf tebal?",
                "options": [
                  "<em>",
                  "<strong>",
                  "<p>",
                  "<italic>"
                ],
                "correct": 1,
                "explanations": [
                  "Salah, <em> digunakan untuk penekanan intonasi dengan huruf miring.",
                  "Benar! <strong> menandakan teks yang sangat penting dan ditampilkan tebal (bold).",
                  "Salah, <p> digunakan untuk membuat paragraf biasa.",
                  "Salah, tag <italic> bukan bagian dari standar HTML modern (yang ada adalah <i> atau <em>)."
                ]
              },
              "teacherNotes": "<p>Pastikan siswa menuliskan tag penutup dengan urutan yang benar ketika menggabungkan tag bersarang (nesting).</p>"
            }
          ]
        },
        {
          "id": "lesson-2-3",
          "title": "Daftar (ul, ol, li)",
          "slides": [
            {
              "id": "slide-2-3-1",
              "title": "Daftar Tidak Berurutan (ul dan li)",
              "content": "<p>Saat ingin menyajikan kumpulan butir yang urutannya bebas dipertukarkan (seperti hobi, daftar belanjaan, atau fasilitas sekolah), kita gunakan <strong>unordered list</strong> (<code>&lt;ul&gt;</code>).</p><ul><li><code>&lt;ul&gt;</code>: Wadah pembungkus daftar tak berurutan (menghasilkan tanda titik/bullet).</li><li><code>&lt;li&gt;</code>: Singkatan dari <em>list item</em>, membungkus setiap butir item di dalam daftar.</li></ul>",
              "codeExample": {
                "code": "<h3>Daftar Hobi Saya:</h3>\n<ul>\n  <li>Membaca artikel sains</li>\n  <li>Bermain catur</li>\n  <li>Eksperimen kode HTML</li>\n</ul>",
                "explanation": "<p>Browser akan menampilkan setiap butir <code>&lt;li&gt;</code> dengan simbol titik (bullet) rapi di sebelah kirinya.</p>"
              },
              "quiz": null,
              "teacherNotes": "<p>Jelaskan singkatan ul (Unordered List) dan li (List Item) agar siswa mudah menghafal fungsinya.</p>"
            },
            {
              "id": "slide-2-3-2",
              "title": "Daftar Berurutan (ol dan li)",
              "content": "<p>Jika urutan butir sangat penting dan harus berurutan (misalnya langkah resep, instruksi tutorial, atau ranking juara), kita gunakan <strong>ordered list</strong> (<code>&lt;ol&gt;</code>).</p><p>Browser secara otomatis memberikan nomor berurut (1, 2, 3...) pada setiap <code>&lt;li&gt;</code> tanpa perlu kita ketik manual angkanya.</p>",
              "codeExample": {
                "code": "<h3>Cara Membuat Teh Hangat Manis:</h3>\n<ol>\n  <li>Rebus air hingga mendidih.</li>\n  <li>Masukkan kantung teh ke dalam cangkir.</li>\n  <li>Tuang air panas dan tambahkan satu sendok gula.</li>\n  <li>Aduk rata lalu sajikan selagi hangat.</li>\n</ol>",
                "explanation": "<p>Jika kamu menambah atau menghapus butir di tengah, browser secara otomatis menghitung ulang penomoran dengan benar!</p>"
              },
              "quiz": null,
              "teacherNotes": "<p>Buktikan di layar proyektor: hapus baris kedua, tunjukkan bagaimana nomor 3 otomatis bergeser menjadi nomor 2.</p>"
            },
            {
              "id": "slide-2-3-3",
              "title": "Aturan Penulisan Daftar & Latihan",
              "content": "<p>Ada satu aturan tata bahasa HTML mutlak yang harus selalu diingat ketika menyusun daftar:</p><div class=\"warning-box\"><strong>⚠️ Aturan Emas Daftar:</strong> Tag <code>&lt;li&gt;</code> TIDAK BOLEH berdiri sendiri! Tag <code>&lt;li&gt;</code> wajib selalu berada tepat di dalam wadah <code>&lt;ul&gt;</code> atau <code>&lt;ol&gt;</code>.</div><div class=\"practice-box\"><strong>✏️ Praktik Mandiri:</strong><ol><li>Buat daftar tidak berurutan (<code>&lt;ul&gt;</code>) berisi minimal 3 hobi favoritmu.</li><li>Buat daftar berurutan (<code>&lt;ol&gt;</code>) berisi 3 langkah kegiatan yang biasa kamu lakukan di pagi hari.</li></ol></div>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Periksa layar siswa, pastikan tidak ada siswa yang menuliskan &lt;li&gt; langsung di dalam &lt;body&gt; tanpa dibungkus &lt;ul&gt; atau &lt;ol&gt;.</p>"
            },
            {
              "id": "slide-2-3-4",
              "title": "Kuis: Elemen Daftar HTML",
              "content": "<p>Mari periksa ketepatan pemahamanmu mengenai penggunaan tag daftar dalam HTML!</p><div class=\"tip-box\"><strong>💡 Tips:</strong> Ingat kata kunci 'Ordered' (berurutan dengan angka) dan 'Unordered' (tidak berurutan dengan titik).</div>",
              "codeExample": null,
              "quiz": {
                "question": "Tag apakah yang digunakan untuk membuat daftar berurutan dengan penomoran angka otomatis (1, 2, 3...)?",
                "options": [
                  "<ul>",
                  "<ol>",
                  "<li>",
                  "<list>"
                ],
                "correct": 1,
                "explanations": [
                  "Salah, <ul> (Unordered List) membuat daftar berpoin (bullet), bukan bernomor angka.",
                  "Benar! <ol> (Ordered List) membuat daftar berurutan dengan angka otomatis.",
                  "Salah, <li> adalah butir item di dalam daftar, bukan wadah pembungkusnya.",
                  "Salah, tag <list> tidak ada di dalam standar HTML."
                ]
              },
              "teacherNotes": "<p>Ajak siswa yang menjawab benar untuk menjelaskan mengapa tag tersebut yang dipilih.</p>"
            }
          ]
        },
        {
          "id": "lesson-2-4",
          "title": "Hyperlink (a)",
          "slides": [
            {
              "id": "slide-2-4-1",
              "title": "Membuat Tautan dengan Tag <a>",
              "content": "<p>Kekuatan terbesar dari Web adalah kemampuan berpindah dokumen secara instan melalui <strong>hyperlink</strong> (tautan). Dalam HTML, kita menggunakan tag <code>&lt;a&gt;</code> (singkatan dari <em>anchor</em>).</p><p>Tag <code>&lt;a&gt;</code> membutuhkan atribut penting:</p><ul><li><code>href</code>: Alamat URL tujuan kemana pengunjung akan diarahkan saat mengklik teks tersebut.</li><li><code>target=\"_blank\"</code>: Perintah opsional untuk membuka link di tab browser baru tanpa menutup tab saat ini.</li></ul>",
              "codeExample": {
                "code": "<p>Kunjungi portal resmi kami di \n  <a href=\"https://badridduja.sch.id\" target=\"_blank\">SMA Unggulan Badridduja</a>.\n</p>\n<p>Buka mesin pencari <a href=\"https://www.google.com\">Google</a>.</p>",
                "explanation": "<p>Teks di dalam tag <code>&lt;a&gt;</code> secara default akan berwarna biru dan bergaris bawah, siap diklik oleh pengguna.</p>"
              },
              "quiz": null,
              "teacherNotes": "<p>Jelaskan konsep atribut: info tambahan di dalam tag pembuka berformat nama=\"nilai\". Tunjukkan efek target=\"_blank\".</p>"
            },
            {
              "id": "slide-2-4-2",
              "title": "Tautan Antar Halaman Lokal",
              "content": "<p>Selain menuju website luar di internet, tag <code>&lt;a&gt;</code> juga digunakan untuk menghubungkan file-file HTML yang ada di dalam folder komputermu sendiri.</p><p>Jika kamu memiliki dua file di folder yang sama: <code>index.html</code> dan <code>tentang.html</code>, kamu bisa menautkannya cukup dengan menuliskan nama filenya pada atribut <code>href</code>!</p><div class=\"practice-box\"><strong>✏️ Praktik Mandiri:</strong> Tambahkan minimal satu tautan pada file <code>index.html</code> yang mengarah ke website sekolah atau situs edukasi favoritmu!</div>",
              "codeExample": {
                "code": "<!-- Di dalam file index.html -->\n<p>Pelajari lebih lanjut di <a href=\"tentang.html\">Halaman Tentang Saya</a>.</p>\n\n<!-- Di dalam file tentang.html -->\n<p>Kembali ke <a href=\"index.html\">Beranda Utama</a>.</p>",
                "explanation": "<p>Inilah cara website dengan banyak halaman dibangun: menghubungkan file-file HTML secara timbal-balik melalui tautan lokal.</p>"
              },
              "quiz": null,
              "teacherNotes": "<p>Beri contoh bagaimana menu navigasi website dibangun dari kumpulan tautan &lt;a&gt; lokal.</p>"
            },
            {
              "id": "slide-2-4-3",
              "title": "Kuis: Hyperlink HTML",
              "content": "<p>Uji ketelitianmu mengenai penulisan atribut pada tautan web!</p><div class=\"tip-box\"><strong>💡 Tips:</strong> Ingat nama atribut yang menampung alamat URL tujuan dari sebuah hyperlink.</div>",
              "codeExample": null,
              "quiz": {
                "question": "Atribut apakah yang WAJIB ada pada tag <a> untuk menentukan alamat tujuan sebuah tautan?",
                "options": [
                  "src",
                  "href",
                  "link",
                  "to"
                ],
                "correct": 1,
                "explanations": [
                  "Salah, src digunakan untuk menentukan sumber file (seperti pada gambar <img>).",
                  "Benar! Atribut href (Hypertext Reference) menentukan URL atau path tujuan dari sebuah tautan.",
                  "Salah, 'link' bukan atribut untuk tag <a>.",
                  "Salah, 'to' bukan atribut HTML standar."
                ]
              },
              "teacherNotes": "<p>Review pemahaman atribut href vs src. Ingatkan siswa bahwa href adalah Hypertext Reference.</p>"
            }
          ]
        }
      ]
    },
    {
      "id": "group-3",
      "label": "Pertemuan 9–12",
      "title": "Media, Tabel, Formulir & Semantik",
      "description": "Menambahkan gambar, tabel data, formulir sederhana, dan mempelajari elemen semantik HTML.",
      "lessons": [
        {
          "id": "lesson-3-1",
          "title": "Gambar (img) dan Atribut alt",
          "slides": [
            {
              "id": "slide-3-1-1",
              "title": "Menyisipkan Gambar dengan Tag <img>",
              "content": "<p>Halaman web akan jauh lebih menarik jika dilengkapi dengan ilustrasi atau foto. Dalam HTML, kita menggunakan tag <code>&lt;img&gt;</code>.</p><ul><li><code>src</code> (source): Lokasi atau nama file gambar yang ingin ditampilkan.</li><li><code>alt</code> (alternative text): Teks deskripsi gambar yang muncul jika gambar gagal dimuat.</li></ul><div class=\"info-box\"><strong>📌 Mengapa Atribut alt Sangat Penting?</strong><br>1. <strong>Aksesibilitas:</strong> Aplikasi pembaca layar (screen reader) membacakan teks alt untuk penyandang tunanetra.<br>2. <strong>Koneksi Lambat:</strong> Jika gambar gagal diunduh, pengunjung tetap memahami informasi gambarnya.<br>3. <strong>Mesin Pencari:</strong> Google memahami isi gambar melalui teks deskripsi di alt.</div>",
              "codeExample": {
                "code": "<img src=\"gedung-sekolah.jpg\" alt=\"Gedung utama SMA Unggulan Badridduja tampak dari gerbang depan\">",
                "explanation": "<p>Tag <code>&lt;img&gt;</code> adalah tag tunggal (<em>self-closing</em>), artinya tidak memiliki tag penutup seperti <code>&lt;/img&gt;</code>.</p>"
              },
              "quiz": null,
              "teacherNotes": "<p>Tekankan etika aksesibilitas web: setiap gambar bermakna harus memiliki teks alt yang deskriptif. Demonstrasikan dengan sengaja salah ketik src agar teks alt muncul.</p>"
            },
            {
              "id": "slide-3-1-2",
              "title": "Dimensi Gambar & Etika Hak Cipta",
              "content": "<p>Kita dapat mengatur lebar dan tinggi gambar menggunakan atribut <code>width</code> dan <code>height</code> (dalam satuan piksel):</p><div class=\"tip-box\"><strong>💡 Tips Proporsional:</strong> Cukup atur salah satu dimensi saja (misalnya <code>width=\"300\"</code>), maka tinggi gambar akan otomatis menyesuaikan secara proporsional tanpa menjadi gepeng atau rusak!</div><div class=\"warning-box\"><strong>⚠️ Etika Digital & Hak Cipta:</strong> Jangan mengambil sembarang foto milik orang lain di internet! Gunakan foto hasil jepretan sendiri, atau gunakan gambar berlisensi bebas dari penyedia foto gratis (seperti Unsplash atau Wikimedia). Hargai karya orang lain!</div>",
              "codeExample": {
                "code": "<!-- Menampilkan foto dengan lebar 300 piksel -->\n<img src=\"kegiatan-ekskul.jpg\" alt=\"Siswa SMA Unggulan Badridduja merakit komputer\" width=\"300\">",
                "explanation": "<p>Format gambar yang umum di web adalah <code>.jpg</code> (foto), <code>.png</code> (gambar transparan), dan <code>.svg</code> (vektor tajam).</p>"
              },
              "quiz": null,
              "teacherNotes": "<p>Tunjukkan cara memasukkan file gambar ke dalam folder yang sama dengan file HTML agar mudah dipanggil tanpa path yang rumit.</p>"
            },
            {
              "id": "slide-3-1-3",
              "title": "Kuis Gambar & Praktik Mandiri",
              "content": "<p>Ayo uji pemahamanmu mengenai penyisipan gambar di halaman web!</p><div class=\"practice-box\"><strong>✏️ Praktik Mandiri:</strong> Simpan satu file foto di dalam folder <code>Latihan-html</code>, lalu tampilkan foto tersebut di file <code>index.html</code> lengkap dengan atribut <code>alt</code> yang jelas dan ukuran <code>width</code> yang pas!</div>",
              "codeExample": null,
              "quiz": {
                "question": "Apakah tag <img> membutuhkan tag penutup </img> dalam aturan penulisan HTML standar?",
                "options": [
                  "Ya, wajib selalu ditutup dengan </img> di akhir elemen",
                  "Tidak, tag <img> adalah elemen self-closing dan tidak memiliki tag penutup",
                  "Hanya wajib ditutup jika gambarnya berformat .png",
                  "Tergantung pada jenis browser yang digunakan pengunjung"
                ],
                "correct": 1,
                "explanations": [
                  "Salah, HTML standar tidak menggunakan tag penutup </img>.",
                  "Benar! Tag <img> adalah void element (self-closing) yang tidak membungkus teks sehingga tidak memerlukan tag penutup terpisah.",
                  "Salah, format ekstensi file gambar tidak mempengaruhi cara penulisan tag.",
                  "Salah, aturan sintaks HTML sama untuk semua browser modern."
                ]
              },
              "teacherNotes": "<p>Kelilingi kelas untuk mengecek apakah path gambar siswa sudah benar dan gambar berhasil tampil di browser.</p>"
            }
          ]
        },
        {
          "id": "lesson-3-2",
          "title": "Tabel (table, tr, th, td)",
          "slides": [
            {
              "id": "slide-3-2-1",
              "title": "Menampilkan Data dengan Tabel",
              "content": "<p>Tabel sangat tepat digunakan untuk menyajikan informasi yang tersusun dalam baris dan kolom, seperti jadwal pelajaran, daftar nilai, atau tarif kegiatan.</p><p>Ada 4 elemen utama pembentuk tabel di HTML:</p><ul><li><code>&lt;table&gt;</code>: Wadah utama pembungkus seluruh struktur tabel.</li><li><code>&lt;tr&gt;</code> (table row): Mendefinisikan satu baris horizontal di dalam tabel.</li><li><code>&lt;th&gt;</code> (table header): Sel judul kolom (secara otomatis dicetak tebal dan berada di tengah).</li><li><code>&lt;td&gt;</code> (table data): Sel data biasa yang menampung isi informasi di setiap kolom.</li></ul>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Gambarkan bagan baris dan kolom sederhana di papan tulis. Tunjukkan bagaimana &lt;tr&gt; adalah baris horizontal, dan di dalamnya terdapat kotak &lt;th&gt; atau &lt;td&gt;.</p>"
            },
            {
              "id": "slide-3-2-2",
              "title": "Contoh Tabel Jadwal Pelajaran",
              "content": "<p>Berikut adalah implementasi tabel jadwal pelajaran mingguan sederhana dengan 3 kolom data.</p><p>Perhatikan bahwa baris pertama menggunakan <code>&lt;th&gt;</code> sebagai kepala kolom, sedangkan baris berikutnya diisi dengan <code>&lt;td&gt;</code>.</p>",
              "codeExample": {
                "code": "<table border=\"1\">\n  <tr>\n    <th>Hari</th>\n    <th>Mata Pelajaran</th>\n    <th>Waktu</th>\n  </tr>\n  <tr>\n    <td>Senin</td>\n    <td>Informatika</td>\n    <td>08.00 - 09.30</td>\n  </tr>\n  <tr>\n    <td>Rabu</td>\n    <td>Bahasa Indonesia</td>\n    <td>10.00 - 11.30</td>\n  </tr>\n  <tr>\n    <td>Jumat</td>\n    <td>Ekskul Komputer</td>\n    <td>13.30 - 15.00</td>\n  </tr>\n</table>",
                "explanation": "<p>Atribut <code>border=\"1\"</code> menambahkan garis pembatas sederhana agar struktur kisi tabel terlihat jelas di layar.</p>"
              },
              "quiz": null,
              "teacherNotes": "<p>Jelaskan bahwa border=\"1\" dipakai sementara untuk latihan agar garis terlihat; styling sesungguhnya kelak memakai CSS.</p>"
            },
            {
              "id": "slide-3-2-3",
              "title": "Aturan Kerapihan Tabel & Praktik",
              "content": "<p>Saat menyusun tabel, perhatikan keselarasan jumlah kolom di setiap baris:</p><div class=\"tip-box\"><strong>💡 Kunci Kerapihan:</strong> Pastikan jumlah <code>&lt;td&gt;</code> pada setiap baris sama persis dengan jumlah <code>&lt;th&gt;</code> pada baris judul. Jika jumlahnya berbeda, kolom tabel akan tampak timpang atau berantakan!</div><div class=\"practice-box\"><strong>✏️ Praktik Mandiri:</strong> Buat tabel jadwal pelajaran pribadimu sendiri! Buat minimal 3 baris jadwal dengan 3 kolom: <em>Hari</em>, <em>Mata Pelajaran</em>, dan <em>Waktu</em>.</div>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Minta siswa saling menukar pandangan layar dengan teman sebelahnya untuk mengecek kerapihan struktur tabel masing-masing.</p>"
            },
            {
              "id": "slide-3-2-4",
              "title": "Kuis: Struktur Tabel HTML",
              "content": "<p>Uji pemahamanmu mengenai fungsi tag sel pada tabel!</p><div class=\"tip-box\"><strong>💡 Tips:</strong> Bedakan antara tag pembuat baris horizontal dan tag sel judul kolom.</div>",
              "codeExample": null,
              "quiz": {
                "question": "Tag HTML manakah yang berfungsi untuk membuat satu baris horizontal baru di dalam tabel?",
                "options": [
                  "<table>",
                  "<tr>",
                  "<td>",
                  "<th>"
                ],
                "correct": 1,
                "explanations": [
                  "Salah, <table> adalah pembungkus keseluruhan tabel.",
                  "Benar! <tr> adalah singkatan dari Table Row yang mendefinisikan baris horizontal tabel.",
                  "Salah, <td> adalah sel penampung data di dalam baris.",
                  "Salah, <th> adalah sel judul kolom di dalam baris."
                ]
              },
              "teacherNotes": "<p>Ulas kembali bahwa urutan pembuatan tabel selalu: table -> tr -> th/td.</p>"
            }
          ]
        },
        {
          "id": "lesson-3-3",
          "title": "Formulir (form, label, input, button)",
          "slides": [
            {
              "id": "slide-3-3-1",
              "title": "Mengenal Formulir Interaktif Web",
              "content": "<p><strong>Formulir</strong> adalah jembatan komunikasi yang memungkinkan pengguna mengirimkan input atau data kepada pemilik website (seperti form pendaftaran, kotak pencarian, atau formulir umpan balik).</p><p>Elemen-elemen dasar formulir meliputi:</p><ul><li><code>&lt;form&gt;</code>: Wadah pembungkus seluruh kontrol formulir.</li><li><code>&lt;label&gt;</code>: Teks petunjuk nama kolom input agar pengguna tahu apa yang harus diisi.</li><li><code>&lt;input&gt;</code>: Kotak input tempat pengguna mengetik teks atau memilih data.</li><li><code>&lt;button&gt;</code>: Tombol aksi untuk mengirimkan data formulir.</li></ul>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Jelaskan bahwa formulir web sering dijumpai siswa saat mendaftar akun media sosial, mengisi Google Form, atau mengetik kata kunci di Google.</p>"
            },
            {
              "id": "slide-3-3-2",
              "title": "Menghubungkan Label dan Input",
              "content": "<p>Agar formulir ramah pengguna dan aksesibel, pasangkan <code>&lt;label&gt;</code> dengan <code>&lt;input&gt;</code> menggunakan atribut <code>for</code> dan <code>id</code>:</p><p>Ketika pengguna mengklik teks label, kursor akan langsung aktif di dalam kotak input pasangannya.</p><div class=\"info-box\"><strong>📌 Info Pembelajaran:</strong> Pada kursus HTML dasar ini, formulir yang kita buat belum terhubung ke database server nyata. Kita fokus menguasai struktur antarmuka dan kerapihan tampilannya terlebih dahulu.</div>",
              "codeExample": {
                "code": "<form>\n  <p>\n    <label for=\"nama\">Nama Lengkap:</label><br>\n    <input type=\"text\" id=\"nama\" placeholder=\"Contoh: Ahmad Fauzan\">\n  </p>\n  <p>\n    <label for=\"email\">Alamat Email:</label><br>\n    <input type=\"email\" id=\"email\" placeholder=\"nama@gmail.com\">\n  </p>\n  <button type=\"submit\">Kirim Formulir</button>\n</form>",
                "explanation": "<p>Atribut <code>for</code> pada <code>&lt;label&gt;</code> harus bernilai sama persis dengan atribut <code>id</code> pada <code>&lt;input&gt;</code>.</p>"
              },
              "quiz": null,
              "teacherNotes": "<p>Buktikan di browser: klik teks label 'Nama Lengkap', tunjukkan bagaimana kursor langsung fokus ke kotak teks secara otomatis!</p>"
            },
            {
              "id": "slide-3-3-3",
              "title": "Ragam Tipe Input & Etika Privasi",
              "content": "<p>Atribut <code>type</code> pada tag <code>&lt;input&gt;</code> menentukan bentuk kontrol yang disajikan:</p><ul><li><code>type=\"text\"</code>: Mengetik baris teks biasa (nama, alamat).</li><li><code>type=\"email\"</code>: Input khusus alamat email dengan validasi tanda @.</li><li><code>type=\"number\"</code>: Input khusus angka (umur, nomor absen).</li><li><code>type=\"checkbox\"</code>: Kotak centang pilihan (boleh memilih lebih dari satu).</li><li><code>type=\"radio\"</code>: Pilihan bundar (hanya bisa memilih satu dari pilihan).</li></ul><div class=\"warning-box\"><strong>⚠️ Keamanan & Privasi Murid:</strong> Saat membuat formulir latihan di kelas, JANGAN PERNAH meminta atau memasukkan data pribadi asli seperti kata sandi asli, NIK, atau rahasia keluarga. Gunakan selalu data contoh fiktif!</div>",
              "codeExample": {
                "code": "<p>\n  <input type=\"checkbox\" id=\"setuju\">\n  <label for=\"setuju\">Saya bersedia mematuhi tata tertib ekskul</label>\n</p>",
                "explanation": "<p>Kotak centang sangat cocok untuk konfirmasi persetujuan pengguna sebelum menekan tombol kirim formulir.</p>"
              },
              "quiz": null,
              "teacherNotes": "<p>Ingatkan kembali bahaya phising: formulir palsu di internet yang meniru tampilan bank untuk mencuri sandi. Tekankan perlunya etika dan integritas digital.</p>"
            },
            {
              "id": "slide-3-3-4",
              "title": "Kuis Formulir & Praktik Mandiri",
              "content": "<p>Uji kemampuanmu tentang komponen formulir web!</p><div class=\"practice-box\"><strong>✏️ Praktik:</strong> Buat formulir mini di file proyekmu yang memuat minimal 2 kotak input (misalnya Nama dan Hobi/Pesan) serta 1 tombol bertuliskan 'Kirim'!</div>",
              "codeExample": null,
              "quiz": {
                "question": "Atribut apakah pada tag <input> yang menentukan apakah kotak input berupa teks biasa, email, atau kotak centang?",
                "options": [
                  "name",
                  "value",
                  "type",
                  "class"
                ],
                "correct": 2,
                "explanations": [
                  "Salah, atribut name digunakan sebagai penanda data saat dikirim ke server.",
                  "Salah, atribut value menentukan nilai bawaan di dalam input.",
                  "Benar! Atribut type menentukan jenis kontrol input yang ditampilkan (text, email, number, checkbox, dll).",
                  "Salah, atribut class digunakan untuk styling CSS."
                ]
              },
              "teacherNotes": "<p>Periksa hasil latihan formulir siswa. Pastikan tombol &lt;button&gt; berada di dalam &lt;form&gt;.</p>"
            }
          ]
        },
        {
          "id": "lesson-3-4",
          "title": "Struktur Semantik",
          "slides": [
            {
              "id": "slide-3-4-1",
              "title": "Memberi Makna dengan HTML Semantik",
              "content": "<p>Kata <em>semantik</em> berarti <strong>makna atau arti</strong>. Elemen semantik adalah tag HTML yang secara jelas memberitahu browser dan mesin pencari apa peran dari bagian halaman tersebut.</p><p>Beberapa elemen semantik utama dalam HTML5:</p><ul><li><code>&lt;header&gt;</code>: Bagian kepala halaman (logo, judul web, slogan).</li><li><code>&lt;nav&gt;</code>: Area menu navigasi yang menampung tautan utama situs.</li><li><code>&lt;main&gt;</code>: Area konten utama yang menjadi topik bahasan pokok halaman.</li><li><code>&lt;section&gt;</code>: Bagian/seksi mandiri dari konten (misalnya: Seksi Profil, Seksi Galeri).</li><li><code>&lt;footer&gt;</code>: Bagian kaki halaman (hak cipta, info kontak, media sosial).</li></ul><div class=\"info-box\"><strong>📌 Keuntungan Semantik:</strong> Memudahkan mesin pencari Google memahami isi situs dan membantu aplikasi screen reader bagi penyandang disabilitas melompat langsung ke konten pokok!</div>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Gunakan analogi koran: ada kepala koran (header), menu kategori (nav), berita utama (main), kolom opini (section), dan cetakan percetakan di bagian paling bawah (footer).</p>"
            },
            {
              "id": "slide-3-4-2",
              "title": "Kerangka Semantik vs Tag <div> Polos",
              "content": "<p>Sebelum HTML5, orang sering menggunakan tag <code>&lt;div&gt;</code> untuk semua bagian. Secara visual mungkin terlihat sama, tetapi secara makna dan struktur dokumen sangatlah berbeda!</p><p>Mari bandingkan struktur halaman menggunakan elemen semantik modern berikut:</p>",
              "codeExample": {
                "code": "<body>\n  <header>\n    <h1>SMA Unggulan Badridduja</h1>\n    <p>Membentuk Generasi Berakhlak dan Berteknologi</p>\n  </header>\n\n  <nav>\n    <a href=\"#profil\">Profil</a> | \n    <a href=\"#kegiatan\">Kegiatan</a>\n  </nav>\n\n  <main>\n    <section id=\"profil\">\n      <h2>Profil Sekolah</h2>\n      <p>SMA Unggulan Badridduja berkomitmen memajukan literasi komputer.</p>\n    </section>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 Ekstrakurikuler Komputer SMA Unggulan Badridduja</p>\n  </footer>\n</body>",
                "explanation": "<p>Dengan tag semantik, siapapun yang membaca kode dapat langsung memahami struktur dokumen secara jelas dan teratur.</p>"
              },
              "quiz": null,
              "teacherNotes": "<p>Tunjukkan bagaimana struktur di atas sangat mudah dibaca oleh manusia maupun mesin pembaca otomatis.</p>"
            },
            {
              "id": "slide-3-4-3",
              "title": "Kuis: Tag Semantik HTML",
              "content": "<p>Uji pemahamanmu tentang pemanfaatan tag semantik pada halaman web modern!</p><div class=\"practice-box\"><strong>✏️ Praktik:</strong> Rapikan file <code>index.html</code> milikmu dengan membungkus bagian atas ke dalam <code>&lt;header&gt;</code>, isi konten ke dalam <code>&lt;main&gt;</code>, dan bagian hak cipta di bawah ke dalam <code>&lt;footer&gt;</code>!</div>",
              "codeExample": null,
              "quiz": {
                "question": "Elemen semantik manakah yang paling tepat digunakan untuk membungkus konten pokok dan terpenting dari sebuah halaman web?",
                "options": [
                  "<header>",
                  "<nav>",
                  "<main>",
                  "<footer>"
                ],
                "correct": 2,
                "explanations": [
                  "Salah, <header> digunakan untuk kepala atau pengantar halaman.",
                  "Salah, <nav> digunakan khusus untuk daftar menu navigasi/tautan.",
                  "Benar! Elemen <main> mewakili konten pokok yang unik dan paling penting dari halaman tersebut.",
                  "Salah, <footer> digunakan untuk area catatan kaki di bagian paling bawah halaman."
                ]
              },
              "teacherNotes": "<p>Tekankan bahwa di dalam sebuah halaman web hanya boleh ada satu elemen &lt;main&gt;.</p>"
            }
          ]
        }
      ]
    },
    {
      "id": "group-4",
      "label": "Pertemuan 13–20",
      "title": "Proyek",
      "description": "Menggabungkan semua materi, merancang, dan mengerjakan proyek halaman web.",
      "lessons": [
        {
          "id": "lesson-4-1",
          "title": "Menggabungkan Elemen HTML",
          "slides": [
            {
              "id": "slide-4-1-1",
              "title": "Merangkai Semua Elemen Menjadi Satu",
              "content": "<p>Selamat telah menyelesaikan seluruh materi dasar! Sekarang kita memasuki babak paling mengasyikkan: <strong>menggabungkan semua elemen menjadi satu halaman web utuh</strong>.</p><p>Kilas balik elemen yang telah kamu kuasai:</p><ul><li><strong>Kerangka & Semantik:</strong> <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code>.</li><li><strong>Teks:</strong> <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>.</li><li><strong>Daftar & Tautan:</strong> <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code>, <code>&lt;a&gt;</code>.</li><li><strong>Media, Tabel & Form:</strong> <code>&lt;img&gt;</code>, <code>&lt;table&gt;</code>, <code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;button&gt;</code>.</li></ul>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Berikan semangat dan apresiasi kepada siswa karena mereka telah mempelajari begitu banyak materi penting sejak pertemuan pertama.</p>"
            },
            {
              "id": "slide-4-1-2",
              "title": "Contoh Halaman Terintegrasi: Profil Diri",
              "content": "<p>Berikut adalah contoh bagaimana seluruh elemen tersebut berpadu harmonis dalam satu halaman web sederhana bertema <em>Profil Diri</em>.</p><p>Perhatikan susunan rapi dari atas ke bawah:</p>",
              "codeExample": {
                "code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>Profil Diri - Muhammad Rizky</title>\n  </head>\n  <body>\n    <header>\n      <h1>Halo, Saya Rizky!</h1>\n      <p>Siswa SMA Unggulan Badridduja & Anggota Ekskul Komputer</p>\n    </header>\n\n    <main>\n      <section>\n        <h2>Hobi Favorit</h2>\n        <ul>\n          <li>Coding HTML</li>\n          <li>Desain Grafis</li>\n          <li>Bermain Futsal</li>\n        </ul>\n      </section>\n\n      <section>\n        <h2>Hubungi Saya</h2>\n        <p>Kunjungi Instagram saya di <a href=\"https://instagram.com\" target=\"_blank\">@rizky_coding</a></p>\n      </section>\n    </main>\n\n    <footer>\n      <p>&copy; 2026 Muhammad Rizky</p>\n    </footer>\n  </body>\n</html>",
                "explanation": "<p>Halaman ini memadukan struktur dasar standar, elemen semantik, heading, paragraf, daftar berpoin, dan hyperlink keluar secara seimbang.</p>"
              },
              "quiz": null,
              "teacherNotes": "<p>Tampilkan contoh kode ini di editor dan buka di browser agar siswa melihat korelasi antara kode dan hasil visualnya.</p>"
            },
            {
              "id": "slide-4-1-3",
              "title": "Kerapihan Kode & Indentasi",
              "content": "<p>Ketika halaman web mulai panjang dan memiliki banyak elemen bersarang (tag di dalam tag), kode bisa menjadi sulit dibaca jika tidak rapi.</p><ul><li><strong>Indentasi (Lekukan ke Dalam):</strong> Gunakan tombol <code>Tab</code> atau 2 spasi setiap kali menulis tag anak di dalam tag induk.</li><li><strong>Komentar Kode (<code>&lt;!-- komentar --&gt;</code>):</strong> Gunakan komentar untuk memberi catatan pengingat bagi dirimu sendiri tanpa ditampilkan oleh browser.</li></ul><div class=\"tip-box\"><strong>💡 Manfaat Kerapihan:</strong> Kode yang rapi akan membuatmu 10 kali lebih cepat menemukan kesalahan (bug) saat ada tampilan yang belum pas di browser!</div>",
              "codeExample": {
                "code": "<!-- Bagian Navigasi Utama -->\n<nav>\n  <ul>\n    <li><a href=\"#beranda\">Beranda</a></li>\n    <li><a href=\"#tentang\">Tentang Saya</a></li>\n    <li><a href=\"#kontak\">Kontak</a></li>\n  </ul>\n</nav>",
                "explanation": "<p>Perhatikan lekukan ke dalam: <code>&lt;nav&gt;</code> membungkus <code>&lt;ul&gt;</code>, dan <code>&lt;ul&gt;</code> membungkus <code>&lt;li&gt;</code>. Sangat mudah dipahami dan dikelola!</p>"
              },
              "quiz": null,
              "teacherNotes": "<p>Ajari siswa shortcut otomatis perapian kode di editor (misalnya Alt+Shift+F di VS Code) jika tersedia.</p>"
            },
            {
              "id": "slide-4-1-4",
              "title": "Kuis: Integrasi Elemen Web",
              "content": "<p>Uji kesiapanmu sebelum memulai penyusunan proyek mandiri!</p><div class=\"practice-box\"><strong>✏️ Praktik Latihan:</strong> Buat satu file baru bernama <code>latihan-gabungan.html</code>. Gabungkan minimal 5 jenis elemen HTML berbeda yang telah kamu pelajari ke dalam satu file tersebut!</div>",
              "codeExample": null,
              "quiz": {
                "question": "Di dalam susunan halaman semantik standar, elemen manakah yang secara logis diletakkan di bagian paling atas dokumen?",
                "options": [
                  "<footer>",
                  "<main>",
                  "<header>",
                  "<section>"
                ],
                "correct": 2,
                "explanations": [
                  "Salah, <footer> diletakkan di bagian paling bawah halaman sebagai kaki dokumen.",
                  "Salah, <main> diletakkan di bagian tengah sebagai penampung konten utama.",
                  "Benar! <header> diletakkan di bagian paling atas sebagai kepala halaman pengantar konten.",
                  "Salah, <section> berada di dalam <main> untuk membagi seksi konten."
                ]
              },
              "teacherNotes": "<p>Pastikan pemahaman alur semantik atas-tengah-bawah sudah tertanam kuat pada seluruh siswa.</p>"
            }
          ]
        },
        {
          "id": "lesson-4-2",
          "title": "Merancang dan Mengerjakan Proyek",
          "slides": [
            {
              "id": "slide-4-2-1",
              "title": "Memilih Tema Proyek Akhir Web",
              "content": "<p>Mulai pertemuan ini hingga pertemuan ke-20, kamu akan fokus merancang dan membangun proyek halaman web mandiri.</p><p>Pilih salah satu dari <strong>5 tema menarik</strong> berikut:</p><ol><li><strong>Profil Diri:</strong> Mengenalkan siapa dirimu, hobi, cita-cita, foto, dan kontak media sosial.</li><li><strong>Profil Sekolah:</strong> Profil SMA Unggulan Badridduja, visi & misi, fasilitas unggulan, dan peta kegiatan.</li><li><strong>Ekstrakurikuler:</strong> Mengenalkan ekskul favoritmu (Komputer, Pramuka, Olahraga), jadwal latihan, dan pengurus.</li><li><strong>Hobi Favorit:</strong> Membahas hobi favoritmu (fotografi, memasak, olahraga, merakit PC), alat yang dibutuhkan, dan panduannya.</li><li><strong>Jadwal Pelajaran:</strong> Menampilkan tabel jadwal belajar mingguan, mata pelajaran favorit, dan catatan tugas.</li></ol><div class=\"info-box\"><strong>📌 Syarat Kelulusan:</strong> Halaman harus bisa dibuka di browser secara lancar, dan kamu harus memahami setiap baris kode yang kamu tulis!</div>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Bantu siswa yang ragu memilih tema. Biarkan mereka memilih apa yang paling mereka sukai agar proses mengerjakan proyek terasa menyenangkan.</p>"
            },
            {
              "id": "slide-4-2-2",
              "title": "Checklist Kelengkapan Proyek",
              "content": "<p>Sebelum mulai mengetik kode, jadikan daftar periksa (checklist) ini sebagai panduan kerjamu:</p><ul><li>Struktur HTML dasar (<code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>).</li><li>Judul tab halaman yang jelas dengan <code>&lt;title&gt;</code>.</li><li>Minimal satu judul utama heading (<code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code>).</li><li>Minimal dua paragraf teks (<code>&lt;p&gt;</code>).</li><li>Daftar (<code>&lt;ul&gt;</code> atau <code>&lt;ol&gt;</code>) dengan minimal 3 butir item.</li><li>Minimal satu tautan aktif (<code>&lt;a&gt;</code>).</li><li>Menyertakan gambar dengan atribut <code>alt</code> yang deskriptif.</li><li>Menyertakan tabel terstruktur atau formulir sederhana sesuai tema.</li></ul>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Tuliskan 8 butir checklist ini di papan tulis kelas atau bagikan lembar cek fisik ke setiap siswa.</p>"
            },
            {
              "id": "slide-4-2-3",
              "title": "Alur Kerja Pengerjaan Proyek",
              "content": "<p>Jangan terburu-buru menulis kode rumit! Ikuti alur kerja profesional berikut:</p><ol><li><strong>Tentukan Tema:</strong> Pilih satu tema yang paling kamu sukai.</li><li><strong>Sketsa di Kertas (Wireframe):</strong> Gambar tata letak kotak-kotak di buku tulismu: di mana letak judul, gambar, paragraf, dan tabel.</li><li><strong>Tulis Kerangka Kode:</strong> Buka editor, buat file <code>proyek.html</code>, ketik struktur dasar HTML.</li><li><strong>Isi Konten Bertahap:</strong> Masukkan teks, daftar, gambar, dan tabel satu per satu.</li><li><strong>Cek di Browser:</strong> Simpan (<code>Ctrl + S</code>) dan muat ulang (<code>F5</code>) setiap kali menambah satu elemen baru.</li><li><strong>Uji & Periksa:</strong> Cocokkan dengan checklist proyek.</li></ol><div class=\"practice-box\"><strong>✏️ Tugas Hari Ini:</strong> Ambil selembar kertas, tuliskan tema pilihanmu, dan buat sketsa kasar tata letak halaman webmu sekarang!</div>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Periksa sketsa kertas siswa sebelum mereka membuka komputer. Langkah sketsa ini sangat menghemat waktu dan mencegah kebingungan.</p>"
            },
            {
              "id": "slide-4-2-4",
              "title": "Rubrik Penilaian Proyek Web",
              "content": "<p>Penilaian proyek akhir ini dinilai secara transparan berdasarkan 4 aspek berikut:</p><ul><li><strong>Keaktifan & Latihan (20%):</strong> Kedisiplinan hadir, keaktifan bertanya, dan kelengkapan latihan harian selama 24 pertemuan.</li><li><strong>Ketepatan Kode HTML (30%):</strong> Kode ditulis valid tanpa tag rusak, hierarki penulisan benar, dan tidak ada tag yang lupa ditutup.</li><li><strong>Kelengkapan Proyek (30%):</strong> Seluruh 8 butir checklist terpenuhi dan halaman menampilkan informasi yang utuh sesuai tema.</li><li><strong>Presentasi (20%):</strong> Mampu membuka file di browser, mendemonstrasikan tampilan, dan menjelaskan fungsi kode dengan percaya diri.</li></ul><div class=\"info-box\"><strong>📌 Kunci Utama:</strong> Pastikan kamu memahami setiap baris kode yang kamu tulis!</div>",
              "codeExample": null,
              "quiz": {
                "question": "Manakah dua aspek dengan bobot penilaian tertinggi dalam rubrik evaluasi proyek akhir (masing-masing bernilai 30%)?",
                "options": [
                  "Kehadiran fisik dan kecepatan mengetik sepuluh jari",
                  "Ketepatan Kode HTML dan Kelengkapan Proyek",
                  "Jumlah animasi berkedip dan warna halaman",
                  "Merek perangkat laptop yang digunakan siswa"
                ],
                "correct": 1,
                "explanations": [
                  "Salah, kecepatan mengetik bukan bagian dari rubrik penilaian proyek.",
                  "Benar! Ketepatan kode (30%) dan kelengkapan pemenuhan checklist (30%) merupakan pilar utama penilaian.",
                  "Salah, materi kita berfokus pada struktur HTML yang benar, bukan animasi berlebihan.",
                  "Salah, semua siswa dinilai berdasarkan kompetensi pemahaman kode, bukan perangkat."
                ]
              },
              "teacherNotes": "<p>Jelaskan rubrik ini agar siswa memahami standar kualitas yang diharapkan dari proyek mereka.</p>"
            }
          ]
        },
        {
          "id": "lesson-4-3",
          "title": "Menguji dan Memperbaiki Kode",
          "slides": [
            {
              "id": "slide-4-3-1",
              "title": "Mengenal Kesalahan Umum (Bug) HTML",
              "content": "<p>Dalam dunia pemrograman, kesalahan pada kode disebut <strong>bug</strong>, dan proses menemukan serta memperbaikinya disebut <strong>debugging</strong>.</p><p>Beberapa kesalahan yang paling sering terjadi pada pemula:</p><ul><li><strong>Lupa menutup tag:</strong> Membuka <code>&lt;p&gt;</code> tetapi lupa menulis <code>&lt;/p&gt;</code> di akhir paragraf.</li><li><strong>Typo nama tag atau atribut:</strong> Menuliskan <code>&lt;img scr=\"...\"&gt;</code> (seharusnya <code>src</code>) atau <code>&lt;tabel&gt;</code> (seharusnya <code>&lt;table&gt;</code>).</li><li><strong>Salah hierarki penulisan:</strong> Menuliskan <code>&lt;li&gt;</code> di luar <code>&lt;ul&gt;</code>, atau urutan penutup terbalik seperti <code>&lt;b&gt;&lt;i&gt;teks&lt;/b&gt;&lt;/i&gt;</code>.</li><li><strong>Lupa tanda kutip atribut:</strong> Menuliskan <code>href=halaman.html</code> tanpa tanda kutip ganda.</li></ul>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Ingatkan siswa bahwa menemukan bug adalah hal yang sangat biasa bagi programmer profesional sekalipun, jadi tidak perlu berkecil hati jika kode tidak langsung sempurna.</p>"
            },
            {
              "id": "slide-4-3-2",
              "title": "Latihan Debugging: Temukan Kesalahannya!",
              "content": "<p>Mari berlatih menjadi detektif kode! Perhatikan contoh kode di samping yang sengaja disisipi beberapa kesalahan sintaks.</p><div class=\"warning-box\"><strong>⚠️ Perhatian:</strong> Kode di samping sengaja dibuat SALAH untuk latihan mendeteksi bug!</div><p>Dapatkah kamu menemukan 3 kesalahan fatal pada kode tersebut?</p><ol><li>Tag pembuka <code>&lt;h1&gt;</code> ditutup keliru dengan <code>&lt;/h2&gt;</code>.</li><li>Penulisan atribut gambar keliru: <code>scr</code> seharusnya <code>src</code>.</li><li>Tag <code>&lt;li&gt;</code> berdiri sendirian tanpa dibungkus wadah <code>&lt;ul&gt;</code> atau <code>&lt;ol&gt;</code>.</li></ol>",
              "codeExample": {
                "code": "<!-- KODE DENGAN KESALAHAN (CONTOH SALAH) -->\n<h1>Profil Sekolahku</h2>\n\n<img scr=\"sekolah.jpg\" alt=\"Foto Sekolah\">\n\n<p>Berikut adalah ekskul pilihan:\n<li>Komputer</li>\n<li>Pramuka</li>\n</p>",
                "explanation": "<p>Perbaikan yang tepat: samakan penutup menjadi <code>&lt;/h1&gt;</code>, perbaiki atribut menjadi <code>src=\"sekolah.jpg\"</code>, dan bungkus <code>&lt;li&gt;</code> dengan wadah <code>&lt;ul&gt;...&lt;/ul&gt;</code>.</p>"
              },
              "quiz": null,
              "teacherNotes": "<p>Minta siswa saling menunjuk kesalahan di proyektor sebelum guru membuka pembahasannya.</p>"
            },
            {
              "id": "slide-4-3-3",
              "title": "Memanfaatkan Fitur Inspect Element di Browser",
              "content": "<p>Semua browser modern memiliki alat bantu inspeksi bawaan yang luar biasa untuk mencari bug:</p><ol><li>Buka halaman webmu di Google Chrome atau Mozilla Firefox.</li><li>Klik kanan pada bagian yang ingin diperiksa, lalu pilih <strong>Inspect (Periksa)</strong>, atau tekan tombol <strong>F12</strong> di keyboard.</li><li>Tab <strong>Elements</strong> akan memperlihatkan susunan HTML yang sedang dibaca browser secara langsung. Jika ada tag yang tidak tertutup, browser akan menyorot kejanggalan tersebut!</li></ol><div class=\"practice-box\"><strong>✏️ Praktik Debugging:</strong> Buka proyekmu di browser, tekan <code>F12</code>, dan pastikan tidak ada teks yang bocor atau tag yang berantakan di panel Inspect!</div><div class=\"tip-box\"><strong>💡 Tips:</strong> Biasakan memeriksa kode sebelum menyimpan dan mengumpulkan proyek.</div>",
              "codeExample": null,
              "quiz": {
                "question": "Apa fungsi utama fitur Inspect Element (F12) yang tersedia pada browser web?",
                "options": [
                  "Mematikan sambungan internet komputer secara mendadak",
                  "Melihat dan memeriksa struktur kode HTML yang sedang dirender oleh browser",
                  "Menghapus seluruh file dari hard disk secara otomatis",
                  "Membeli domain website baru secara berbayar"
                ],
                "correct": 1,
                "explanations": [
                  "Salah, Inspect Element tidak mematikan sambungan internet.",
                  "Benar! Fitur Inspect Element memungkinkan kita memeriksa susunan elemen HTML dan mempermudah pelacakan kesalahan kode.",
                  "Salah, fitur ini aman dan tidak akan menghapus file dari komputer.",
                  "Salah, Inspect Element adalah alat bantu bawaan gratis di peramban web."
                ]
              },
              "teacherNotes": "<p>Tunjukkan cara memakai Inspect Element di proyektor: ubah teks langsung di tab Elements untuk menunjukkan bahwa kita bisa bereksperimen dengan cepat.</p>"
            }
          ]
        }
      ]
    },
    {
      "id": "group-5",
      "label": "Pertemuan 21–24",
      "title": "Presentasi & Evaluasi",
      "description": "Menyempurnakan proyek, presentasi hasil, evaluasi, dan materi pengayaan.",
      "lessons": [
        {
          "id": "lesson-5-1",
          "title": "Checklist dan Persiapan Presentasi",
          "slides": [
            {
              "id": "slide-5-1-1",
              "title": "Pemeriksaan Terakhir Checklist Proyek",
              "content": "<p>Sebelum maju ke depan kelas, lakukan audit mandiri terhadap proyek webmu dengan memeriksa 8 butir kriteria utama:</p><ul><li>✅ Apakah dokumen memiliki deklarasi <code>&lt;!DOCTYPE html&gt;</code> dan tag <code>&lt;html&gt;</code>?</li><li>✅ Apakah tab browser menampilkan judul yang tepat lewat <code>&lt;title&gt;</code>?</li><li>✅ Apakah ada heading judul (<code>&lt;h1&gt;</code>) dan minimal 2 paragraf rapi (<code>&lt;p&gt;</code>)?</li><li>✅ Apakah terdapat daftar berpoin/bernomor dengan minimal 3 butir item?</li><li>✅ Apakah tautan <code>&lt;a&gt;</code> berfungsi dan membuka halaman yang benar saat diklik?</li><li>✅ Apakah gambar muncul tanpa tanda silang/rusak dan memiliki atribut <code>alt</code>?</li><li>✅ Apakah tabel atau formulir tertata rapi sesuai tema yang kamu pilih?</li></ul><div class=\"tip-box\"><strong>💡 Tips:</strong> Jika masih ada yang kurang, manfaatkan sesi persiapan ini untuk melengkapinya sebelum penilaian dimulai!</div>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Berikan waktu 15–20 menit bagi siswa untuk menyelesaikan butir checklist yang masih tertinggal.</p>"
            },
            {
              "id": "slide-5-1-2",
              "title": "Strategi Presentasi yang Menarik & Percaya Diri",
              "content": "<p>Presentasi proyek web bukan sekadar membaca tulisan di layar, melainkan menceritakan karya ciptaanmu kepada teman-teman:</p><ol><li><strong>Salam & Perkenalan Diri:</strong> Sebutkan nama, kelas, dan alasan memilih tema proyek tersebut.</li><li><strong>Buka Halaman di Browser:</strong> Tunjukkan tampilan visual halaman webmu dan peragakan fitur interaktifnya (klik tautan, isi formulir, atau tunjukkan gambar).</li><li><strong>Buka Editor Kode:</strong> Tunjukkan jendela VS Code/Notepad, lalu jelaskan 2 atau 3 tag HTML yang paling kamu banggakan cara penggunaannya.</li><li><strong>Ceritakan Pengalaman Debugging:</strong> Bagikan jika kamu sempat menemukan kesalahan kode dan bagaimana cara kamu berhasil memperbaikinya.</li><li><strong>Tutup dengan Ucapan Terima Kasih:</strong> Beri kesempatan jika guru atau teman ingin bertanya atau memberikan apresiasi.</li></ol><div class=\"practice-box\"><strong>✏️ Latihan Berpasangan:</strong> Latihlah cara menjelaskan proyekmu kepada teman sebangku selama 3 menit secara bergantian!</div>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Bantu mencairkan ketegangan siswa. Tekankan bahwa kelas ekskul ini adalah ruang belajar bersama yang suportif dan saling menyemangati.</p>"
            },
            {
              "id": "slide-5-1-3",
              "title": "Kuis Kesiapan Presentasi",
              "content": "<p>Mari cek kesiapan mental dan teknis sebelum tampil di panggung kelas!</p><div class=\"tip-box\"><strong>💡 Tips:</strong> Tidak perlu menghafal semua baris kode di luar kepala — yang terpenting kamu PAHAM fungsi dari elemen yang kamu tulis.</div>",
              "codeExample": null,
              "quiz": {
                "question": "Hal apakah yang paling krusial dipersiapkan secara teknis sebelum memulai presentasi proyek web di depan kelas?",
                "options": [
                  "Menghafal nomor baris kode di luar kepala tanpa melihat layar",
                  "Memastikan file HTML dapat dibuka lancar di browser dan file kode siap dibuka di editor",
                  "Membeli baju seragam baru khusus untuk tampil",
                  "Memasang musik latar bersuara keras saat mendemonstrasikan halaman"
                ],
                "correct": 1,
                "explanations": [
                  "Salah, kamu tidak perlu menghafal kode di luar kepala; kamu cukup memahami fungsinya saat menjelaskan.",
                  "Benar! Memastikan file HTML siap di browser dan editor kode adalah langkah persiapan teknis yang paling penting.",
                  "Salah, pakaian seragam sekolah biasa sudah sangat cukup dan pantas.",
                  "Salah, musik keras justru akan mengganggu penjelasan materi presentasimu."
                ]
              },
              "teacherNotes": "<p>Ingatkan siswa untuk menutup tab-tab pribadi di browser sebelum proyektor dihubungkan ke komputer mereka.</p>"
            }
          ]
        },
        {
          "id": "lesson-5-2",
          "title": "Presentasi Proyek dan Evaluasi",
          "slides": [
            {
              "id": "slide-5-2-1",
              "title": "Panggung Presentasi: Tunjukkan Karyamu!",
              "content": "<p>Hari yang dinanti telah tiba! Saatnya setiap siswa memamerkan hasil kerja keras dan kreativitasnya selama 24 pertemuan.</p><p>Etika bagi seluruh peserta di dalam kelas:</p><ul><li>Dengarkan penjelasan teman yang sedang maju dengan tenang dan penuh rasa hormat.</li><li>Berikan tepuk tangan hangat sebelum dan sesudah teman mempresentasikan karyanya.</li><li>Boleh memberikan pertanyaan atau komentar yang membangun dan mengapresiasi.</li></ul><div class=\"info-box\"><strong>📌 Suasana Belajar Positif:</strong> Setiap orang memulai dari titik awal yang berbeda. Setiap baris kode yang berhasil ditulis dan ditampilkan adalah prestasi yang patut dirayakan!</div>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Panggil siswa secara bergiliran dengan nada menyemangati. Catat nilai per rubrik secara teliti di lembar penilaian guru.</p>"
            },
            {
              "id": "slide-5-2-2",
              "title": "Mengingat Kembali Rubrik Penilaian",
              "content": "<p>Guru akan menilai presentasi dan dokumen proyekmu dengan panduan rubrik resmi berikut:</p><ol><li><strong>Keaktifan & Latihan (20%):</strong> Konsistensi belajar dan partisipasi aktif selama proses pembelajaran di lab komputer.</li><li><strong>Ketepatan Kode HTML (30%):</strong> Kerapihan penulisan tag, penutupan tag yang benar, dan ketiadaan error saat dirender di browser.</li><li><strong>Kelengkapan Proyek (30%):</strong> Kesesuaian tema dan pemenuhan seluruh 8 butir checklist materi.</li><li><strong>Presentasi (20%):</strong> Kejelasan dalam mendemonstrasikan halaman di browser dan kemampuan menjelaskan kode yang digunakan.</li></ol>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Tampilkan kembali rubrik ini agar penilaian dirasakan adil, objektif, dan terbuka oleh seluruh siswa.</p>"
            },
            {
              "id": "slide-5-2-3",
              "title": "Makna Evaluasi & Kuis Penilaian",
              "content": "<p>Nilai yang kamu dapatkan bukanlah sekadar angka penentu, melainkan potret kemajuan belajarmu.</p><div class=\"info-box\"><strong>📌 Evaluasi Positif:</strong> Evaluasi bukan untuk menakut-nakuti — ini untuk mengukur apa yang sudah kamu pelajari. Setiap usaha dan karya sangat dihargai!</div>",
              "codeExample": null,
              "quiz": {
                "question": "Berapakah total bobot penilaian gabungan antara Ketepatan Kode HTML dan Kelengkapan Proyek?",
                "options": [
                  "20%",
                  "40%",
                  "60%",
                  "100%"
                ],
                "correct": 2,
                "explanations": [
                  "Salah, 20% adalah bobot untuk aspek Keaktifan atau Presentasi saja.",
                  "Salah, 40% bukan jumlah gabungan kedua aspek tersebut.",
                  "Benar! Ketepatan kode (30%) + Kelengkapan proyek (30%) = 60% dari total evaluasi keseluruhan.",
                  "Salah, 100% adalah total nilai seluruh aspek termasuk presentasi dan keaktifan."
                ]
              },
              "teacherNotes": "<p>Berikan umpan balik positif secara personal kepada setiap siswa setelah mereka selesai mempresentasikan karya mereka.</p>"
            }
          ]
        },
        {
          "id": "lesson-5-3",
          "title": "Remedial, Pengayaan, dan Etika Digital",
          "slides": [
            {
              "id": "slide-5-3-1",
              "title": "Sesi Remedial: Memperkokoh Pondasi",
              "content": "<p>Bagi teman-teman yang kodenya masih mengalami error atau belum memenuhi checklist, jangan berkecil hati! Waktu remedial disediakan untuk memperbaiki kekurangan tersebut.</p><ul><li>Tinjau kembali struktur dasar: <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, dan <code>&lt;body&gt;</code>.</li><li>Periksa tag yang belum tertutup rapat (misalnya lupa <code>&lt;/p&gt;</code> atau <code>&lt;/ul&gt;</code>).</li><li>Periksa penulisan nama file pada atribut <code>src</code> gambar dan <code>href</code> tautan.</li></ul><div class=\"practice-box\"><strong>✏️ Praktik Perbaikan:</strong> Perbaiki bagian proyek yang disarankan oleh guru hingga halaman dapat tampil sempurna di browser!</div>",
              "codeExample": null,
              "quiz": null,
              "teacherNotes": "<p>Dampingi siswa yang membutuhkan bimbingan remedial secara lebih intensif. Libatkan siswa yang sudah selesai sebagai rekan tutor sebaya.</p>"
            },
            {
              "id": "slide-5-3-2",
              "title": "Sesi Pengayaan: Tantangan Lebih Jauh",
              "content": "<p>Bagi kamu yang sudah menuntaskan proyek dengan sempurna, saatnya mengasah kemampuan ke tingkat berikutnya!</p><ul><li><strong>Tantangan 1 (Multi-Halaman):</strong> Buat file kedua bernama <code>tentang.html</code>, lalu hubungkan secara timbal-balik dengan <code>index.html</code> menggunakan tautan <code>&lt;a href=\"...\"&gt;</code>.</li><li><strong>Tantangan 2 (Full Semantic):</strong> Tata seluruh halaman menggunakan elemen semantik lengkap: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, dan <code>&lt;footer&gt;</code>.</li></ul>",
              "codeExample": {
                "code": "<!-- Menu Navigasi Multi Halaman Sederhana -->\n<nav>\n  <a href=\"index.html\">Beranda</a> | \n  <a href=\"tentang.html\">Tentang Sekolah</a> | \n  <a href=\"kontak.html\">Hubungi Kami</a>\n</nav>",
                "explanation": "<p>Dengan menghubungkan beberapa file HTML yang berbeda dalam satu folder, kamu telah berhasil menciptakan website multi-halaman yang utuh!</p>"
              },
              "quiz": null,
              "teacherNotes": "<p>Berikan tantangan pengayaan ini kepada siswa yang bergerak cepat agar mereka tetap antusias dan terasah bakat teknologinya.</p>"
            },
            {
              "id": "slide-5-3-3",
              "title": "Etika Digital & Penggunaan AI yang Bertanggung Jawab",
              "content": "<p>Sebagai calon pengembang web muslim yang berakhlak mulia di SMA Unggulan Badridduja, pegang teguh 3 prinsip etika digital:</p><ol><li><strong>Hormati Karya Orang Lain:</strong> Gunakan gambar dan tulisan karya sendiri atau yang berlisensi bebas. Jangan mengambil konten tanpa izin.</li><li><strong>Lindungi Privasi Diri & Teman:</strong> Jangan mempublikasikan nomor telepon pribadi, kata sandi, atau rahasia keluarga ke halaman web terbuka.</li><li><strong>Kritisi & Pahami Saran AI:</strong> Gunakan AI sebagai kawan diskusi. Selalu baca, pahami, dan uji ulang setiap saran kode sebelum digunakan. Jangan asal menjiplak tanpa mengerti.</li></ol><div class=\"info-box\"><strong>📌 Pesan Penutup:</strong> Teknologi adalah sarana kebaikan di tangan orang yang berilmu dan berakhlak mulia. Teruslah berkarya dan berprestasi!</div>",
              "codeExample": null,
              "quiz": {
                "question": "Manakah tindakan yang BENAR dan beretika saat kamu memanfaatkan bantuan AI dalam belajar membuat website?",
                "options": [
                  "Menyalin kode secara langsung tanpa membaca atau memahaminya",
                  "Mengunggah kata sandi dan alamat rumah asli teman ke dalam kode web publik",
                  "Mempelajari penjelasan kode dari AI, mengujinya, dan memastikannya aman serta relevan",
                  "Mengambil foto pribadi orang lain tanpa izin dan memajangnya di halaman web"
                ],
                "correct": 2,
                "explanations": [
                  "Salah, menyalin tanpa memahami tidak akan menambah ilmu dan rawan memicu bug.",
                  "Salah, membocorkan data pribadi melanggar etika privasi dan keamanan digital.",
                  "Benar! Pengembang web yang bijak selalu membaca, memahami, menguji, dan memastikan kode yang didapat bermanfaat serta aman.",
                  "Salah, mengambil karya orang lain tanpa izin melanggar hak cipta dan etika kesopanan."
                ]
              },
              "teacherNotes": "<p>Tutup kursus 24 pertemuan ini dengan doa dan motivasi agar siswa terus mengembangkan keterampilan komputernya di masa depan.</p>"
            }
          ]
        }
      ]
    }
  ],
  "project": {
    "description": "Proyek akhir adalah membuat halaman web sederhana yang menggabungkan semua materi yang telah dipelajari selama 24 pertemuan. Halaman harus bisa dibuka di browser dan kamu harus mampu menjelaskan kode yang kamu gunakan kepada guru dan teman-teman.",
    "themes": [
      "Profil Diri — Halaman tentang dirimu: nama, hobi, cita-cita, dan hal menarik lainnya",
      "Profil Sekolah — Halaman tentang sekolahmu: nama sekolah, visi misi, fasilitas, dan kegiatan",
      "Ekstrakurikuler — Halaman tentang kegiatan ekskul yang kamu ikuti: jadwal, kegiatan, anggota",
      "Hobi — Halaman tentang hobi favoritmu: cara melakukannya, alat yang dibutuhkan, manfaatnya",
      "Jadwal Pelajaran — Halaman berisi tabel jadwal pelajaranmu lengkap dengan hari dan waktu"
    ],
    "checklist": [
      "Struktur HTML dasar (<!DOCTYPE html>, <html>, <head>, <body>)",
      "Judul halaman dengan <title>",
      "Minimal satu heading (h1–h6)",
      "Minimal dua paragraf (<p>)",
      "Daftar (ul/ol) dengan minimal tiga item",
      "Minimal satu tautan (<a>)",
      "Gambar dengan atribut alt (jika digunakan)",
      "Tabel atau formulir sederhana sesuai tema"
    ],
    "rubric": [
      {
        "category": "Keaktifan & Latihan",
        "weight": "20%",
        "description": "Partisipasi aktif di kelas dan menyelesaikan latihan-latihan yang diberikan selama pertemuan."
      },
      {
        "category": "Ketepatan Kode HTML",
        "weight": "30%",
        "description": "Kode HTML ditulis dengan benar, menggunakan tag yang tepat, dan tidak ada error saat dibuka di browser."
      },
      {
        "category": "Kelengkapan Proyek",
        "weight": "30%",
        "description": "Proyek memenuhi semua item dalam checklist dan sesuai dengan tema yang dipilih."
      },
      {
        "category": "Presentasi",
        "weight": "20%",
        "description": "Mampu menampilkan halaman di browser dan menjelaskan kode HTML yang digunakan dengan jelas."
      }
    ]
  }
};
