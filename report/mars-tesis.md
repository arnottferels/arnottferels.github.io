# Walkability model dengan metode Dynamic Multi-Layer pada desain Transit Hub di Jakarta Barat

```bibtex
@online{fere_2023_walk,
  title = {Walkability model dengan metode {Dynamic} {Multi}-{Layer} pada desain {Transit} {Hub} di {Jakarta} {Barat}},
  author = {Ferels, Arnott},
  publisher = {{School of Architecture, Planning and Policy Development, Institut Teknologi Bandung}},
  url = {https://arnottferels.github.io/report/march-thesis/},
  abstract = {
    Pemprov DKI Jakarta dalam visi-misinya hendak mewujudkan sistem transportasi berkelanjutan di Jakarta. Hal tersebut sudah dibuktikan dengan diterimanya penghargaan Sustainable Transportation Award 2021 oleh ITDP. Namun, seiring berjalannya waktu, Jakarta harus meningkatkan layanan transportasinya, khususnya di Jakarta Barat, yang mana menjadi gerbang masuk internasional karena terkoneksi langsung dengan Bandara Internasional Soekarno-Hatta, serta jaringan tol dan jalan strategis antara provinsi, serta fasilitas transportasi dalam kota seperti: BRT (TransJakarta), KRL, dan MRT. Bagi Jakarta, peningkatan layanan transportasi sangat urgen karena bila tidak terencana secara baik, hal tersebut dapat menimbulkan masalah-masalah baru pada sistem kota, seperti; kemacetan, polusi udara, kriminalitas, dan lain sebagainya. sehingga desain berwujud transit hub (TH) yang terintegrasi dengan transportasi publik dan public space (PS) dapat mendukung SDG tujuan 11 serta visi-misi pemerintah.

    Dalam tesis ini, penulis akan menggali isu, metode, dan solusi, guna mengetahui: isu krusial yang ada, serta berdampak terhadap kawasan dan tapak. Metode dynamic multi-layer (DML) digunakan untuk menyelesaikan permasalahan kompleks yang terjadi pada studi kasus dengan fokus pada isu pergerakan manusia. Tiap layer menggunakan metode berbeda, di antaranya: (1) distilasi dan sub-set data guna menyaring data kepadatan lalu lintas untuk abstraksi model; (2) agent-based modeling (ABM) guna pemodelan dinamis pergerakan manusia; (3) Laplacian smoothing guna penyederhanaan pola-pola pergerakan hasil dari simulasi ABM; (4) pencarian rute terpendek dengan algoritma A-star (SPA+A*) yang menghasilkan nilai pada rute dengan cost individual serta cepat pada simulasi pada layer 5; (5) multi-objective optimization (MOO) dengan objektif, antara lain: (a) meminimalkan jarak rata-rata antara titik koordinat PS terhadap tiap titik ramai primer (T1); (b) meminimalkan jarak rata-rata antara titik koordinat PS terhadap tiap titik ramai sekunder (T2); (c) meminimalkan jarak rata-rata antara titik koordinat PS terhadap titik koordinat PS lainnya; (d) meminimalkan total luas gabungan radius Voronoi per 500m dari tiap titik koordinat PS; dan (e) meminimalkan total jumlah PS; serta (6) clustering data guna pengambilan keputusan dalam memilih alternatif solusi yang paling tepat.

    Kemudian, solusi terbaik digunakan sebagai panduan pada desain TH dan PS, di antaranya sirkulasi pada desain berdasarkan aksis yang tercipta dari tren rute SPA+A* dan karakter agent pada simulasi ABM, serta peletakan PS berdasarkan hasil clustering solusi dari simulasi MOO. Didasari oleh panduan terpilih, maka proses desain arsitektur dapat dilakukan guna mengakomodasi desain, misalnya: perpindahan moda, sirkulasi pejalan kaki, integrasi platform dengan PS serta fungsi penunjangnya. Konsep utama desain adalah pergerakan manusia, konektivitas, dan ruang hijau. Desain diharapkan dapat menjadi solusi pada kasus dengan kompleksitas isu sebagaimana dijelaskan di atas dalam meningkatkan kualitas hidup masyarakat setempat.
  },
  date = {2023-01-27},
  keywords = {dynamic multi-layer method,agent-based modeling,shortest path algorithm A-star,Laplacian smoothing,evolutionary multi-objective optimization,data clustering,transit hub,public space},
  language = {id}
}

```

# Abstrak

Pemprov DKI Jakarta dalam visi-misinya hendak mewujudkan sistem transportasi berkelanjutan di Jakarta. Hal tersebut sudah dibuktikan dengan diterimanya penghargaan Sustainable Transportation Award 2021 oleh ITDP. Namun, seiring berjalannya waktu, Jakarta harus meningkatkan layanan transportasinya, khususnya di Jakarta Barat, yang mana menjadi gerbang masuk internasional karena terkoneksi langsung dengan Bandara Internasional Soekarno-Hatta, serta jaringan tol dan jalan strategis antara provinsi, serta fasilitas transportasi dalam kota seperti: BRT (TransJakarta), KRL, dan MRT. Bagi Jakarta, peningkatan layanan transportasi sangat urgen karena bila tidak terencana secara baik, hal tersebut dapat menimbulkan masalah-masalah baru pada sistem kota, seperti; kemacetan, polusi udara, kriminalitas, dan lain sebagainya. sehingga desain berwujud transit hub (TH) yang terintegrasi dengan transportasi publik dan public space (PS) dapat mendukung SDG tujuan 11 serta visi-misi pemerintah.

Dalam tesis ini, penulis akan menggali isu, metode, dan solusi, guna mengetahui: isu krusial yang ada, serta berdampak terhadap kawasan dan tapak. Metode dynamic multi-layer (DML) digunakan untuk menyelesaikan permasalahan kompleks yang terjadi pada studi kasus dengan fokus pada isu pergerakan manusia. Tiap layer menggunakan metode berbeda, di antaranya: (1) distilasi dan sub-set data guna menyaring data kepadatan lalu lintas untuk abstraksi model; (2) agent-based modeling (ABM) guna pemodelan dinamis pergerakan manusia; (3) Laplacian smoothing guna penyederhanaan pola-pola pergerakan hasil dari simulasi ABM; (4) pencarian rute terpendek dengan algoritma A-star (SPA+A*) yang menghasilkan nilai pada rute dengan _cost individual_ serta cepat pada simulasi pada layer 5; (5) multi-objective optimization (MOO) dengan objektif, antara lain: (a) meminimalkan jarak rata-rata antara titik koordinat PS terhadap tiap titik ramai primer (T1); (b) meminimalkan jarak rata-rata antara titik koordinat PS terhadap tiap titik ramai sekunder (T2); (c) meminimalkan jarak rata-rata antara titik koordinat PS terhadap titik koordinat PS lainnya; (d) meminimalkan total luas gabungan radius Voronoi per 500m dari tiap titik koordinat PS; dan (e) meminimalkan total jumlah PS; serta (6) _clustering data_ guna pengambilan keputusan dalam memilih alternatif solusi yang paling tepat.

Kemudian, solusi terbaik digunakan sebagai panduan pada desain TH dan PS, di antaranya sirkulasi pada desain berdasarkan aksis yang tercipta dari tren rute SPA+A* dan karakter agent pada simulasi ABM, serta peletakan PS berdasarkan hasil clustering solusi dari simulasi MOO. Didasari oleh panduan terpilih, maka proses desain arsitektur dapat dilakukan guna mengakomodasi desain, misalnya: perpindahan moda, sirkulasi pejalan kaki, integrasi platform dengan PS serta fungsi penunjangnya. Konsep utama desain adalah pergerakan manusia, konektivitas, dan ruang hijau. Desain diharapkan dapat menjadi solusi pada kasus dengan kompleksitas isu sebagaimana dijelaskan di atas dalam meningkatkan kualitas hidup masyarakat setempat.

# Kata kunci

dynamic multi-layer method; agent-based modeling; shortest path algorithm A-star; Laplacian smoothing; evolutionary multi-objective optimization; data clustering; transit hub; public space

---

# 1. Pendahuluan

## 1.1. Latar belakang

![Sistem transportasi Jakarta (Akbar et al., 2019; UNSPLASH, 2020)](https://arnottferels.github.io/a/img/1920/RjxL.webp)

_Gambar 1.1. Sistem transportasi Jakarta (Akbar et al., 2019 [^akbar-etal/2019]; UNSPLASH, 2020 [^unsplash/2020])_

Pemerintah Provinsi DKI Jakarta berkomitmen membangun sistem transportasi berkelanjutan. Layanan TransJakarta terus berkembang, dan integrasi JakLingko meningkatkan kualitas transportasi di Jakarta. Penghargaan Sustainable Transportation Award (STA) 2021 dari Institute for Transportation and Development Policy (ITDP) menegaskan pencapaian ini. Jakarta menjadi salah satu kota pertama di Asia Tenggara yang menerima penghargaan tersebut, mengungguli kota-kota besar lainnya (ITDP, 2021 [^itdp/2021]; Prambors, 2020 [^prambors/2020]).

Di sisi lain, arsitek juga berperan dalam mendukung visi ini melalui konsep dan desain yang memperkuat pengembangan sistem transportasi terintegrasi. Penulis melihat potensi pengembangan kawasan TBK, Jakarta Barat, yang berada di jalur utama transportasi darat, baik publik maupun privat. Kawasan ini dilintasi oleh Jl. Daan Mogot, jalan arteri utama yang sejajar dengan Sungai Mokervart (lihat legenda warna biru pada [Gambar 1.2](#fig1.2) dan [Gambar 1.3](#fig1.3)), serta dilengkapi berbagai fasilitas pendukung seperti yang tercantum dalam [Tabel 1.1](#table1.1).

Untuk mengatasi tantangan dalam pengembangan kawasan ini, tesis ini menggunakan metode eksperimen _dynamic multi-layer (DML)_, yang menganalisis berbagai aspek secara bersamaan. Metode ini diharapkan dapat menyelesaikan permasalahan kompleks di tapak, terutama dalam meningkatkan _walkability_ di Jl. Daan Mogot dan Terminal Kalideres, dua area dengan potensi besar untuk berkembang di masa depan.

<a name="fig1.2"></a>

![Konteks tapak dalam peta zonasi Kecamatan Kalideres (Sumber: Lampiran III-1 Perda DKI Jakarta 1/2014 RDTR-PZ, Gambar 17-A Peta Zonasi Kec. Kalideres, Kota Jakarta Barat).](https://arnottferels.github.io/a/img/1920/ANx5.webp)

_Gambar 1.2. Konteks tapak dalam peta zonasi Kecamatan Kalideres (Sumber: Lampiran III-1 Perda DKI Jakarta 1/2014 RDTR-PZ, Gambar 17-A Peta Zonasi Kec. Kalideres, Kota Jakarta Barat)._

<a name="fig1.3"></a>

![Tampilan satelit kawasan Kalideres menunjukkan titik kemacetan signifikan pada area yang disorot. Citra satelit bersumber dari Google Maps (Google Maps, 2022a). Detail yang ditandai sebagai (a) dan (b) ditampilkan pada Gambar 1.4.](https://arnottferels.github.io/a/img/1800/MDDx.webp)

_Gambar 1.3. Tampilan satelit kawasan Kalideres menunjukkan titik kemacetan signifikan pada area yang disorot. Citra satelit bersumber dari Google Maps (Google Maps, 2022a [^google-maps/2022a]). Detail yang ditandai sebagai (a) dan (b) ditampilkan pada Gambar 1.4._

<a name="fig1.4"></a>

![Pengamatan kondisi sekitar Terminal Kalideres menunjukkan beberapa permasalahan: (a1) tidak adanya pembatas antara trotoar dan Sungai Mokervart, dengan utilitas kota yang tidak terawat; (a2) trotoar di atas gorong-gorong yang digunakan secara multi-fungsi tanpa standar keamanan (ITDP, 2021); (a3) jalur pejalan kaki yang menyempit sehingga berpotensi menimbulkan kemacetan; (a4 dan b1) kemacetan akibat bus besar yang terjebak di jalur sempit; (b2) karakteristik angkutan kota (angkot); (b3) kehadiran pedagang kaki lima (PKL) akibat kemacetan; (b4) penyempitan jalur pejalan kaki akibat PKL; (b5) rambu-rambu di Terminal Kalideres.](https://arnottferels.github.io/a/img/1080/DZLn.webp)

_Gambar 1.4. Pengamatan kondisi sekitar Terminal Kalideres menunjukkan beberapa permasalahan: (a1) tidak adanya pembatas antara trotoar dan Sungai Mokervart, dengan utilitas kota yang tidak terawat; (a2) trotoar di atas gorong-gorong yang digunakan secara multi-fungsi tanpa standar keamanan (ITDP, 2021 [^itdp/2021]); (a3) jalur pejalan kaki yang menyempit sehingga berpotensi menimbulkan kemacetan; (a4 dan b1) kemacetan akibat bus besar yang terjebak di jalur sempit; (b2) karakteristik angkutan kota (angkot); (b3) kehadiran pedagang kaki lima (PKL) akibat kemacetan; (b4) penyempitan jalur pejalan kaki akibat PKL; (b5) rambu-rambu di Terminal Kalideres._

<a name="table1.1"></a>

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table1.1).

_Tabel 1.1. Fasilitas di kawasan TBK. (*) ke Stasiun KRL Kalideres, (**) ke Stasiun KA Bandara Soekarno-Hatta (CGK)._

| Fasilitas | Lokasi | Jarak/Waktu |
| --- | --- | --- |
| BRT TransJakarta (Koridor 3) | Halte TJ Kalideres | 0 m |
| Halte TJ Pesakih | 1 km |
| Bus AKAP dan Angkutan Kota (JakLingko) | - | - |
| KRL dan KA Bandara | Stasiun KRL Kalideres | 1,1 km |
| Stasiun KA Bandara Batu Ceper | - |
| 8 menit* |
| 11 menit** |
| Area CBD | CBD Daan Mogot Baru | 850 m |

## 1.2. Studi kasus

Studi kasus ini mengidentifikasi beberapa isu yang dikelompokkan menjadi [Isu arsitektural](#121-isu-arsitektural) dan [Isu Kota Jakarta](#122-isu-kota-jakarta), yang akan dibahas lebih lanjut dalam subbab ini.

### 1.2.1. Isu arsitektural

Berikut adalah isu arsitektural yang ditemukan, terdiri dari satu isu utama dan tiga isu turunan dalam studi kasus ini.

#### 1.2.1.1. Isu utama: Fasilitas di TBK

Fasilitas di TBK secara kuantitatif sudah cukup lengkap, namun belum berfungsi secara sinergis untuk mencapai potensi maksimalnya. Fasilitas yang ada meliputi layanan antar kota (emplasemen bus AKAP), dalam kota (halte TransJakarta, emplasemen angkot, emplasemen bus kota), moda transportasi pendukung lainnya (ojek pangkalan dan ojek daring), serta fasilitas untuk kendaraan pribadi seperti area _drop-off_ dan _park and ride_, serta fasilitas pendukung lainnya seperti _food court_ (lihat [Gambar 1.5](#fig1.5)). Dengan fasilitas tersebut, TBK tergolong terminal tipe A di Jakarta, sesuai Pasal 24 ayat (2) Permenhub PM 24/2021 tentang Penyelenggaraan Terminal Angkutan Jalan.

Namun, secara kualitatif, terminal ini masih memiliki banyak kekurangan. Salah satu masalah utama adalah penataan fasilitas yang kurang optimal, di mana emplasemen yang berdekatan menyebabkan tumpang tindih aktivitas, mengurangi kenyamanan dan efisiensi (lihat [Gambar 1.5](#fig1.5)). Kekurangan ini berkontribusi pada berbagai isu, seperti peningkatan potensi kejahatan, ketidakteraturan perilaku penumpang, dan ketidakcukupan fasilitas transportasi publik yang dibutuhkan masyarakat.

<a name="fig1.5"></a>

![Fasilitas di TBK (Okezone, 2021). (1) Angkot dalam kota; (2) Bus dalam kota; (3) Ojek pangkalan; (4) Kendaraan pribadi; (5) Halte TJ; (6) PKL; (7) Ojek daring.](https://arnottferels.github.io/a/img/1920/aFJf.webp)

_Gambar 1.5. Fasilitas di TBK (Okezone, 2021 [^okezone/2021]). (1) Angkot dalam kota; (2) Bus dalam kota; (3) Ojek pangkalan; (4) Kendaraan pribadi; (5) Halte TJ; (6) PKL; (7) Ojek daring._

#### 1.2.1.2. Isu turunan: Kerawanan kejahatan

Kekurangan fasilitas di TBK menyebabkan munculnya isu turunan, salah satunya adalah tingginya kerawanan kejahatan, termasuk premanisme. Berdasarkan informasi dari Kapolsek Kalideres, Kompol Danu Wiyata, terdapat delapan titik rawan kejahatan seperti hipnotis, bius, dan pencopetan. Titik-titik tersebut meliputi: tempat peristirahatan, loket, area tunggu keberangkatan, tempat parkir, kawasan terminal dalam kota, jalur masuk dan keluar, area makan, serta sekitar lampu merah hingga Mapolsektro Kalideres.

#### 1.2.1.3. Isu turunan: Kebiasaan penumpang

Kekurangan fasilitas di TBK juga berdampak pada kebiasaan penumpang yang tidak teratur (lihat [Gambar 1.6](#fig1.6)). Meskipun fasilitasnya cukup lengkap, desain terminal belum sepenuhnya memenuhi harapan pengguna. Hal ini tercermin dalam grafik piramida kelayakhunian oleh Vischer ([Gambar 1.7](#fig1.7)) yang menunjukkan kurangnya indikator rasa memiliki (_sense of belonging_), kepemilikan (_ownership_), dan kontrol terhadap lingkungan (Zhang et al., 2022 [^zhang-etal/2022]).

<a name="fig1.6"></a>

![Suasana yang memperlihatkan kebiasaan penumpang di TBK (Lingga, 2021; Sugiharto, 2018).](https://arnottferels.github.io/a/img/1920/R7c7.webp)

_Gambar 1.6. Suasana yang memperlihatkan kebiasaan penumpang di TBK (Lingga, 2021 [^lingga/2021]; Sugiharto, 2018 [^sugiharto/2018])._

<a name="fig1.7"></a>

![Grafik piramida kelayakhunian (Vischer, 2007).](https://arnottferels.github.io/a/img/1920/lHdL.webp)

_Gambar 1.7. Grafik piramida kelayakhunian (Vischer, 2007 [^vischer/2007])._

#### 1.2.1.4. Isu turunan: Masyarakat membutuhkan fasilitas transportasi publik

Riset sebelumnya menunjukkan bahwa jika penggunaan transportasi publik meningkat dari 10% menjadi 20% dari total perjalanan, kecelakaan lalu lintas dapat berkurang hingga 15% (Sustainable Mobility for All, 2017 [^sustainable-mobility-for-all/2017]). Rencana Pembangunan Jangka Menengah Nasional (RPJMN) 2020-2024 menekankan pentingnya pembangunan dan peningkatan fasilitas transportasi publik, yang sudah mulai berjalan. Namun, banyak pihak menilai implementasinya masih belum efektif. Pemerintah telah berupaya mengintegrasikan sistem transportasi melalui program _cashless society_ (seperti JakLingko, bus listrik, dan _Intelligent Transport System_), yang memberikan masyarakat alternatif selain kendaraan pribadi untuk mengurangi kemacetan.

Menteri Perhubungan Budi Karya Sumadi, dalam acara Komite Ekonomi dan Industri Nasional (KEIN) pada 22 Februari 2017, menegaskan bahwa kesinambungan antarmoda di seluruh Indonesia sangat penting untuk mendukung stabilitas ekonomi masyarakat. Sebagai contoh, pembangunan sistem BRT di Yogyakarta dan Jakarta serta kapal Ro-Ro (distribusi darat-laut) menunjukkan upaya pemerintah dalam meningkatkan konektivitas antarmoda. Tanpa integrasi yang baik, minat masyarakat terhadap transportasi publik akan tetap rendah, dan kendaraan pribadi akan terus menjadi pilihan utama (Kemenhub, 2017 [^kemenhub/2017]; Kemenhub, 2021 [^kemenhub/2021]).

Transportasi berkelanjutan juga menjadi solusi untuk mengurangi kemacetan, meningkatkan keamanan transportasi publik, serta mendukung penggunaan bahan bakar rendah emisi (Richardson et al., 2000 [^richardson-etal/2000]).

### 1.2.2. Isu Kota Jakarta

Di sisi lain, terdapat isu-isu yang berkaitan dengan kota Jakarta, mencakup dua isu utama dan tiga isu turunan dalam studi kasus ini.

#### 1.2.2.1. Isu utama: Kebutuhan akan TH

Meskipun Jakarta memiliki berbagai moda transportasi, hingga 2021 kota ini masih belum memiliki TH. Kurangnya integrasi antar sistem transportasi menimbulkan tantangan, seperti yang terjadi di kawasan Dukuh Atas. Sebelumnya, kawasan ini tidak terintegrasi, tetapi kini telah menjadi simpul antarmoda yang menghubungkan MRT, LRT, TransJakarta, KRL, KA Bandara, dan ojek daring (Kompas, 2021b [^kompas/2021b]). Selain itu, kawasan ini juga menyediakan ruang interaksi masyarakat (_third place_) (lihat [Gambar 1.8](#fig1.8)).

Jembatan penyeberangan manusia (JPM) Serambi Temu Dukuh Atas, yang dirancang oleh konsultan Urban+, mengusung konsep transit-oriented development (TOD). Jembatan ini mampu menampung hingga 9.000 orang, tahan gempa, dan dirancang tanpa struktur penyangga di atas Kanal Banjir Barat. JPM ini menghubungkan Stasiun KRL Sudirman dengan LRT Dukuh Atas, sekaligus mengurangi area parkir di sekitar kawasan (Farozy, 2021 [^farozy/2021]; Kompas, 2021a [^kompas/2021a]; Kompas, 2021c [^kompas/2021c]; Okta, 2021 [^okta/2021]).

JPM ini juga mengusung konsep konektivitas antarmoda, identitas kota, pengalaman kota, serta ruang publik yang inklusif. Kawasan ini dilengkapi dengan pusat komersial yang mendukung berbagai aktivitas masyarakat, seperti yang terlihat dalam diagram fitur ([Gambar 1.9](#fig1.9)). Proyek ini mendapat dukungan penuh dari Pemprov DKI Jakarta dan Ikatan Arsitek Indonesia (IAI) Jakarta (Putri, 2018 [^putri/2018]).

Berdasarkan hal tersebut, kebutuhan akan TH di Jakarta sangat jelas. Oleh karena itu, TH harus dirancang dengan fokus pada aksesibilitas dan pergerakan manusia (_walkability_), serta mendapat dukungan penuh dari setiap pemangku kepentingan. Hal ini diperlukan untuk mendorong perubahan paradigma kota menuju desain yang lebih berpusat pada manusia (_human-centered design_) dibandingkan kendaraan pribadi (_car-centered design_) (Kompas, 2021b [^kompas/2021b]).

<a name="fig1.8"></a>

![Konsep desain JPM Serambi Temu di siang dan malam hari (MITJ, 2021b).](https://arnottferels.github.io/a/img/1920/ZFRD.webp)

_Gambar 1.8. Konsep desain JPM Serambi Temu di siang dan malam hari (MITJ, 2021b [^mitj/2021b])._

<a name="fig1.9"></a>

![Denah lokasi, konektivitas, dan fitur JPM Serambi Temu Dukuh Atas (MITJ, 2021a; MITJ, 2021c).](https://arnottferels.github.io/a/img/1920/Dt5E.webp)

_Gambar 1.9. Denah lokasi, konektivitas, dan fitur JPM Serambi Temu Dukuh Atas (MITJ, 2021a [^mitj/2021a]; MITJ, 2021c [^mitj/2021c])._

#### 1.2.2.2. Isu utama: Kebutuhan akan PS (RTH)

Jakarta masih tertinggal dalam penyediaan PS dan ruang terbuka hijau (RTH), meskipun keduanya sangat penting bagi kota. Berdasarkan UU 26/2007 tentang Penataan Ruang, setidaknya 30% wilayah kota harus berupa RTH (20% publik dan 10% privat).

Pemprov DKI menargetkan 16% RTH publik pada 2030. RTH berperan penting dalam meningkatkan dampak sosial dan lingkungan (Desyani, 2013 [^desyani/2013]; Ekaputra dan Sudarwani, 2013 [^ekaputra-dan-sudarwani/2013]; Fitri dan Kusuma, 2017 [^fitri-dan-kusuma/2017]). Target ini sejalan dengan Sustainable Development Goals (SDGs) 11.2, yang bertujuan menciptakan sistem transportasi yang aman, nyaman, dan berkelanjutan (UN, 2021a [^un/2021a]).

Namun, kekurangan PS dan RTH sangat terlihat, seperti di Monumen Nasional (Monas), ikon kota Jakarta, yang tidak ramah bagi pengunjung. Monas tertutup, kurang terawat, dan memiliki konsep gerbang serta tembok (_gated and guarded_). Akibatnya, masyarakat lebih memilih pergi ke mal daripada ke PS atau RTH. Prof. Calderia berpendapat _“Kota yang dirancang dengan tembok atau pagar akan merusak keberlanjutan kota itu sendiri.”_ (Juda, 2016 [^juda/2016]).

#### 1.2.2.3. Isu turunan: Kemacetan

Banyak negara berusaha mengurangi kemacetan dan emisi karbon dari kendaraan bermotor (Le dan Trinh, 2016 [^le-dan-trinh/2016]). Di Jakarta, kemacetan jadi masalah utama, terutama karena kurangnya fasilitas transportasi publik. Meski transportasi publik masih terbatas, ada kabar baik. Danang Parikesit, Ketua Umum MTI, menyebutkan, _“Berdasarkan data MTI, penggunaan transportasi publik di Jakarta turun dari 40% menjadi 14% dalam 10 tahun terakhir”_ (Fathiyah, 2013 [^fathiyah/2013]). Penurunan ini membuat kemacetan semakin parah, karena lebih banyak orang beralih ke kendaraan pribadi, terutama sepeda motor, yang dianggap lebih cepat.

![Kemacetan di Jakarta (Antara, 2022; Noviansyah, 2013).](https://arnottferels.github.io/a/img/1920/H9Ut.webp)

_Gambar 1.10. Kemacetan di Jakarta (Antara, 2022 [^antara/2022]; Noviansyah, 2013 [^noviansyah/2013])._

#### 1.2.2.4. Isu turunan: Pelanggaran lalu lintas meningkat

Pelanggaran lalu lintas di Jakarta terus meningkat, terutama akibat ketergantungan kota pada kendaraan pribadi yang mendominasi ruang jalan. Sebagai ibu kota, Jakarta menghadapi berbagai tantangan, termasuk meningkatnya jumlah penduduk dan aktivitas, seperti mahasiswa dan pekerja, yang memperburuk kemacetan dan pelanggaran lalu lintas (Le dan Trinh, 2016 [^le-dan-trinh/2016]).

![Pelanggaran lalu lintas di Jakarta (Fathahilah, 2020; Manggala, 2018).](https://arnottferels.github.io/a/img/1920/66q9.webp)

_Gambar 1.11. Pelanggaran lalu lintas di Jakarta (Fathahilah, 2020 [^fathahilah/2020]; Manggala, 2018 [^manggala/2018])._

#### 1.2.2.5. Isu turunan: destinasi hiburan utama

Tren pembangunan mal di Jakarta muncul sebagai respons terhadap kurangnya ruang sosial dan ekonomi di PS. Atmawidjaja menyatakan, _“Banyaknya mal adalah tanda nyata bahwa kota sedang sakit.”_ Terbatasnya PS membuat kebutuhan sosial dan lingkungan kota tidak dapat terpenuhi dengan baik. Pada 2019, Jakarta memiliki lebih dari 200 mal, meningkat pesat dari 75 mal pada 2012. Artinya, sekitar 125 mal dibangun dalam tujuh tahun saja (Mega, 2019b [^mega/2019b]; Nediari, 2013 [^nediari/2013]).

![Urutan dari kiri ke kanan: Mal di Jakarta (Mega, 2019a) dan suasana di dalam atrium Mal PIM 2 (Kontan, 2019).](https://arnottferels.github.io/a/img/1920/Tzzr.webp)

_Gambar 1.12. Urutan dari kiri ke kanan: Mal di Jakarta (Mega, 2019a [^mega/2019a]) dan suasana di dalam atrium Mal PIM 2 (Kontan, 2019 [^kontan/2019])._

### 1.2.3. Simpulan isu studi kasus

Dari berbagai isu yang dijelaskan, dapat disimpulkan bahwa masalah perkotaan timbul akibat perencanaan transportasi publik dan PS yang kurang optimal. Isu utama dalam studi ini adalah rendahnya _walkability_ di kawasan tersebut. Oleh karena itu, diperlukan desain TH yang terintegrasi dengan transportasi publik dan PS untuk mendukung pencapaian SDG tujuan 11 (UN, 2021b [^un/2021b]) serta visi pemerintah dan Pemprov DKI Jakarta, sebagaimana diatur dalam UU 26/2007 dan PERGUB 63/2020 (lihat [Tabel 1.2](#table1.2) untuk bagan simpulan isu).

<a name="table1.2"></a>

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table1.2).

_Tabel 1.2. Simpulan isu_

| Kategori | Isu |
| --- | --- |
| Isu utama | Pergerakan manusia - walkability |
| Integrasi sistem transportasi publik belum optimal |
| Kurangnya PS di kawasan perkotaan |
| Dampak yang muncul | Minimnya kesadaran akan transportasi publik |
| Kebiasaan buruk penumpang transportasi publik |
| Peningkatan penggunaan transportasi pribadi |
| Meningkatnya kemacetan dan pelanggaran lalu lintas |
| Kerawanan kejahatan di transportasi publik |
| Urgensi | Reformasi sistem transportasi publik |
| Kebutuhan akan transportasi publik yang lebih terintegrasi |
| Transportasi publik terintegrasi mulai dikembangkan |
| Reformasi PS |
| Mal menjadi destinasi hiburan utama masyarakat |
| Ketersediaan PS dan RTH masih minim |
| Banyak PS yang bersifat tertutup (gated) |

## 1.3. Rumusan masalah dan manfaat desain

Berdasarkan latar belakang dan isu yang telah dijelaskan, penulis merumuskan masalah dan manfaat desain sebagai berikut:

### 1.3.1. Rumusan masalah desain

1.  Bagaimana mendesain kawasan dengan mempertimbangkan _walkability_, integrasi sistem transportasi publik, dan PS?
2.  Bagaimana pemodelan yang dapat mengintegrasikan moda transportasi, isu, dan konteks dalam studi kasus ini?
3.  Bagaimana merancang TH dan PS berdasarkan hasil analisis dari poin 1 dan 2?

### 1.3.2. Manfaat desain

1.  Menghasilkan desain kawasan yang mengutamakan _walkability_, integrasi sistem transportasi publik, dan PS.
2.  Mengembangkan model yang dapat mengintegrasikan moda transportasi, isu, dan konteks dalam studi kasus.
3.  Merancang TH dan PS berdasarkan hasil analisis dari poin 1 dan 2.

## 1.4. Ruang lingkup

1.  Lokasi desain berada di Jakarta Barat, DKI Jakarta.
2.  Desain bertujuan untuk memahami masalah utama serta aspek-aspek penting di tapak.
3.  Batasan tapak ditentukan sebagaimana tercantum dalam [Gambar 1.13](#fig1.13).

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table1.3).

_Tabel 1.3. Batasan tapak_

| Tentang | Isi |
| --- | --- |
| Data lokasi | Dekat dengan Terminal Bus Kalideres |
| Alamat | Jl. Daan Mogot, RT.4/RW.1, Kalideres, Kec. Kalideres, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11840 |
| Titik koordinat | -6.156203, 106.707424 |
| Luasan area perencanaan | ±157.989 m2 |
| Peta | Peta: (1) area Terminal Kalideres; (2) area desain; (3) Jalan Arteri Daan Mogot; (4) Sungai Mokervart. |

## 1.5. Alur pikir

Alur pikir dalam tesis ini disusun sebagai berikut:

1.  Mengumpulkan dan mengkaji teori, studi kasus, tipologi, serta peraturan yang relevan. Mengidentifikasi isu-isu di tapak dalam konteks arsitektural dan perkotaan di Jakarta.
2.  Memahami isu desain terkait kawasan, kota, dan arsitektur.
3.  Menentukan metode desain, susunan metode, serta parameter dan data input-output yang diperlukan.
4.  Mengimplementasikan metode desain _dynamic multi-layer_ (DML) melalui enam lapisan (_layers_).
5.  Menentukan konsep dan ide yang mempertimbangkan lingkungan, iklim, dan aspek sosial.
6.  Mengembangkan desain skematik arsitektural berdasarkan analisis dari tahapan sebelumnya.
7.  Menyimpulkan hasil desain.

## 1.6. Nilai kebaharuan

Desain TH dengan pendekatan DML, yang berorientasi pada manusia dan lingkungan, diharapkan memberikan nilai kebaharuan sebagai berikut:

-   **Proses desain**: Metode desain arsitektur dirancang melalui pendekatan _dynamic multi-layer_ (DML) yang terukur, praktis, dan efisien.
-   **Sosial budaya**: Perancangan TH memberikan kesempatan bagi masyarakat untuk lebih memahami esensi transportasi publik yang terintegrasi.
-   **Tipologi kota**: Desain ini berkontribusi pada pembentukan wajah kota serta menciptakan simpul jaringan penghubung yang lebih baik bagi Jakarta.

## 1.7. Sistematika tesis

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table1.4).

_Tabel 1.4. Sistematika tesis_

| No | Bagian | Isi |
| --- | --- | --- |
| 1 | Pendahuluan | Latar belakang, studi kasus, rumusan masalah, manfaat desain, batasan masalah, alur pikir, nilai kebaharuan, sistematika tesis |
| 2 | Tinjauan pustaka | Teori pendekatan, teori tipologi, teori pendukung, studi kasus, preseden, peraturan, simpulan tinjauan pustaka |
| 3 | Metode desain | Metode desain, penjabaran metode desain dynamic multi-layer |
| 4 | Analisis dan simulasi | Analisis dan proses simulasi kawasan, konteks, dan tapak menggunakan metode desain dynamic multi-layer |
| 5 | Desain | Desain skematik arsitektural |
| 6 | Penutup | Kesimpulan, saran |

# 2. Tinjauan pustaka

## 2.1. Tinjauan pendekatan metode desain

Pendekatan metode desain yang digunakan dalam tesis ini adalah _dynamic multi-layer_. Pendekatan DML diterapkan untuk menyelesaikan permasalahan kompleks dalam studi kasus yang berfokus pada isu pergerakan manusia. Setiap lapisan metode menggunakan pendekatan yang berbeda: (1) pendekatan arsitektural, yaitu: _agent-based modeling_ (ABM), _multi-objective optimization_ (MOO); (2) pendekatan non-arsitektural, yaitu distilasi dan sub-set, _Laplacian smoothing_ (LS), rute terpendek dengan algoritma A-star (SPA+A*), Pareto front (PF), algoritma NSGA-2, dan _clustering data_. (penjelasan lebih lanjut tentang pendekatan non-arsitektural dapat ditemukan di [Lampiran](https://arnottferels.github.io/report/mars-tesis/lampiran/)).

### 2.1.1. Agent-based modeling (ABM)

#### 2.1.1.1. Definisi dan prinsip kerja ABM

Model komputasi kompleks yang dijalankan berdasarkan pengaturan aksi-reaksi dinamis dan komunikatif antara _agents_ dalam suatu _environment_ (lingkungan). Tujuannya adalah untuk mengevaluasi kinerja desain dan memperoleh informasi tentang perilaku serta aspek lainnya (Abar et al., 2017 [^abar-etal/2017]; Macal dan North, 2009 [^macal-dan-north/2009]).

![Eksplorasi desain dengan ABM (Lee dan Lee, 2019)](https://arnottferels.github.io/a/img/1920/9m96.webp)

_Gambar 2.1. Eksplorasi desain dengan ABM (Lee dan Lee, 2019 [^lee-dan-lee/2019])_

ABM dapat dikombinasikan dengan pemodelan lain. Misalnya, ABM dapat digabungkan dengan pemodelan kontinum seperti gas-kinetik atau dinamika fluida, yang berguna untuk menyimulasikan penyebaran gas beracun di lingkungan. Contoh lainnya adalah ketika ABM digabungkan dengan simulasi iklim untuk mempelajari respons manusia terhadap kondisi eksternal tertentu (Helbing, 2012 [^helbing/2012]).

#### 2.1.1.2. Praktis dan sifat ABM

Dalam pemodelan ini, setiap _agent_ bertindak sebagai individu dengan atribut dan pengaturan tertentu. Setiap _agent_ mengarahkan dirinya secara otonom dan independen. Pengaturan khusus dari setiap _agent_ terhadap _environment_\-nya dapat menciptakan interaksi dan situasi yang menarik, yang menjadi representasi data mengenai keputusan yang diambil oleh _agent_ dalam tindakannya.

Sifat utama dari setiap _agent_ adalah independen, otonom, dan memiliki sifat sosial terhadap _environment_. _Agent_ dapat berinteraksi dengan _agents_ lainnya, umumnya melalui: kontestasi ruang (_learn and adapt_), menghindari tabrakan antar _agents_, pertukaran informasi antar _agents_, dan mekanisme lainnya (Macal dan North, 2009 [^macal-dan-north/2009]).

#### 2.1.1.3. Demonstrasi ABM

Optimasi dalam demonstrasi ABM dapat dilakukan karena penetapan aturan (_rules_) yang menyatakan kecerdasan kerumunan adaptif dari _agents_. Seperti yang dijelaskan oleh Bonabeau, Dorigo, dan Theraulaz (1999), adaptasi ABM terhadap lingkungan secara berkelanjutan memungkinkan ABM untuk menentukan simpulan permasalahan, seperti penjadwalan dan perutean (Helbing, 2012 [^helbing/2012]; Macal dan North, 2009 [^macal-dan-north/2009]). Demonstrasi ABM dapat digambarkan melalui fenomena seperti _life_ dan _boids_.

![Fenomena pembentukan arus penyeberangan pejalan kaki (Helbing, 1998).](https://arnottferels.github.io/a/img/1920/wxNL.webp)

_Gambar 2.2. Fenomena pembentukan arus penyeberangan pejalan kaki (Helbing, 1998 [^helbing/1998])._

#### 2.1.1.4. Tujuan dan penerapan ABM

Penggunaan metode ini sangat serbaguna dan dapat diterapkan dalam berbagai bidang, antara lain: permasalahan sosial (norma, konflik), finansial, pemodelan ekonomi, penentuan kebijakan pada tata kelola, migrasi, dinamika kemacetan, dinamika kepadatan, dan lain sebagainya (Helbing, 2012 [^helbing/2012]).

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table2.1).

_Tabel 2.1. Contoh konkret penggunaan ABM (Macal dan North, 2009 [^macal-dan-north/2009])._

| Aplikasi pada | Keterangan |
| --- | --- |
| Air Traffic Control | Analisis kebijakan kontrol dan kinerja manajemen pada lalu lintas udara, dalam Conway (2006). |
| Analisa Kriminal | Memetakan tindak kriminal agents pada environment perkotaan secara virtual, dalam Malleson (2009). |
| Analisa Energi | Pengembangan skenario energi angin lepas pantai, dalam Mast et al. (2007). |
| Epidemic Modeling BioWar | Simulasi skala kota dengan aturan sosial, kesehatan, dan jaringan |

Dengan demikian, ABM dinilai cocok untuk menguji simpulan dari studi kasus terperinci. Simpulan ini berfungsi sebagai “sosioskop” yang menggambarkan konsekuensi dari interaksi yang terjadi antara _agents_ untuk merepresentasikan realitas yang terjadi (Helbing, 2012 [^helbing/2012]).

### 2.1.2. Generative design (GD)

#### 2.1.2.1. Sejarah GD

Generative design (GD) dimulai pada 1970-an sebagai metode untuk menghasilkan solusi terbaik untuk masalah definitif yang diberikan melalui batasan (_constraints_). Pada abad ke-21, GD mulai populer dalam ranah arsitektur dan didefinisikan secara khusus dalam bidang desain arsitektur (Caetano et al., 2020 [^caetano-etal/2020]). Saat ini, GD adalah proses desain yang dilakukan dengan mendefinisikan batasan atau _constraints_ menggunakan sistem komputer, lalu mengotomatisasi prosesnya dengan formula algoritma parametrik, sehingga hasil iterasi desain (output) dapat dihasilkan untuk membantu desainer (Singh dan Gu, 2012 [^singh-dan-gu/2012]; Toussi, 2020 [^toussi/2020]; Villaggi dan Nagy, 2018b [^villaggi-dan-nagy/2018b]; Zhang et al., 2022 [^zhang-etal/2022]).

![Urutan dari kiri ke kanan: GD dalam seni (metode: kontrol korosi Titan melalui prosedur kimia) tanpa komputer (Pedeferri, t.t.), industri perhiasan (Soddu, 2002), dan pemodelan 3D kota abad pertengahan dengan form-finding (Soddu, 1988).](https://arnottferels.github.io/a/img/1920/rVDp.webp)

_Gambar 2.3. Urutan dari kiri ke kanan: GD dalam seni (metode: kontrol korosi Titan melalui prosedur kimia) tanpa komputer (Pedeferri, t.t. [^pedeferri/t.t.]), industri perhiasan (Soddu, 2002 [^soddu/2002]), dan pemodelan 3D kota abad pertengahan dengan form-finding (Soddu, 1988 [^soddu/1988])._

#### 2.1.2.2. Proses kerja dan formulasi GD

Proses GD menggunakan ruang virtual komputer analog dan mengikuti proses evolusioner dari alam (Caetano et al., 2020 [^caetano-etal/2020]; Frazer et al., 2002 [^frazer-etal/2002]). Selanjutnya, GD dapat diintegrasikan dan disimulasikan melalui interaksi antara desainer dan program berbantuan komputer (_computer-aided_) (Krause, 2003 [^krause/2003]; McKnight, 2017 [^mcknight/2017]).

![Urutan dari kiri ke kanan: proses GD dalam perancangan bangunan dan simpulnya (Frazer et al., 2002), serta dalam desain kursi (McKnight, 2017).](https://arnottferels.github.io/a/img/1920/cHxH.webp)

_Gambar 2.4. Urutan dari kiri ke kanan: proses GD dalam perancangan bangunan dan simpulnya (Frazer et al., 2002 [^frazer-etal/2002]), serta dalam desain kursi (McKnight, 2017 [^mcknight/2017])._

Dalam proses GD, dibutuhkan formulasi untuk menghasilkan produk luaran yang berkinerja tinggi dan ultra-high performance. Pada tahap pre-GD, selain data model geometri awal, diperlukan data lainnya untuk mendukung penentuan batasan atau `Constraints` dan prasyarat-persyaratan informatif (_requirements_) yang diperlukan dalam desain. Setelah itu, dalam tahapan GD, desain baru dapat dihasilkan (_generate_), dievaluasi kembali (_evaluate_), dan dievolusikan (_adapted_). Pada tahap akhir post-GD, desainer (sebagai unsur kualitatif) secara manual memilih solusi terbaik (_best solution_), yang kemudian diproses kembali untuk memperhalus desain (Toussi, 2020 [^toussi/2020]; Villaggi dan Nagy, 2018a [^villaggi-dan-nagy/2018a]; Villaggi dan Nagy, 2018b [^villaggi-dan-nagy/2018b]).

#### 2.1.2.3. Tujuan dan penerapan GD

Dengan demikian, proses GD membantu desainer bekerja lebih efisien, ringan, serta menawarkan opsi desain dan pengolahan lanjutan (untuk output terpilih). Akibatnya, GD berpotensi menggantikan sistem tradisional karena produk yang dihasilkan memiliki kinerja tinggi (_ultra-high performance_) yang tidak dapat disaingi oleh teknologi tradisional (McKnight, 2017 [^mcknight/2017]).

### 2.1.3. Multi-objective optimization (MOO)

Optimasi dengan metode single-objective optimization (SOO) menjadi tantangan dalam simulasi optimasi solusi ideal yang representatif dengan dunia nyata (_real world_). MOO menawarkan opsi optimasi simultan karena dapat menentukan dua atau lebih objektif desain, dan menurut Suga et al., tidak ada solusi optimal yang absolut (Suga et al., 2010 [^suga-etal/2010]; Veisi et al., 2022 [^veisi-etal/2022]).

#### 2.1.3.1. Proses kerja MOO

Metode MOO adalah bagian dari proses GD. Metode ini berfokus pada sistem dengan banyak batasan (_multi-constraints_) dan kompleksitas dalam pengambilan keputusan. Pendekatan berbasis evolusi (_evolutionary-based_) dapat memfasilitasi pencarian solusi optimal dengan mengeksplorasi berbagai alternatif yang diinginkan, lalu menghitungnya dengan cepat dan efektif (Nayak, 2020 [^nayak/2020]; Toussi, 2020 [^toussi/2020]; Wildman dan Gaynor, 2019 [^wildman-dan-gaynor/2019]).

Dengan peran integratif arsitek sebagai pengguna, mereka dapat mengelaborasi aspek nyata dan tidak nyata (_tangible_ dan _intangible_) pada tahap awal. Dengan sistem integratif ini, arsitek dapat mengevaluasi opsi mereka dan melakukan optimasi kembali tanpa bantuan pemrograman komputer, untuk menjawab pertanyaan desain kontemporer (isu terkini) (Brown, 2020 [^brown/2020]).

![Penerapan tahap desain interaktif antara MOO dan arsitek (Brown, 2020).](https://arnottferels.github.io/a/img/1920/svDN.webp)

_Gambar 2.5. Penerapan tahap desain interaktif antara MOO dan arsitek (Brown, 2020 [^brown/2020])._

#### 2.1.3.2. Tujuan dan penerapan MOO

![Model studi yang dapat digunakan secara interaktif dalam sistem evolusioner (Toussi, 2020).](https://arnottferels.github.io/a/img/1920/S9Mt.webp)

_Gambar 2.6. Model studi yang dapat digunakan secara interaktif dalam sistem evolusioner (Toussi, 2020 [^toussi/2020])._

Berdasarkan riset Toussi (2020), desain studi yang dilakukan secara interaktif dengan metode evolusioner dapat menentukan desain objektif. Proses ini mengkategorikan data tangible dan intangible, serta batasan `Constraints` dan variabel lainnya (`Requirements`). Setelah itu, preseden disiapkan untuk menentukan pendekatan evolusioner dan aplikasi yang tepat untuk set parameter pada data tangible, mendefinisikan kriteria penilaian data intangible, serta mendefinisikan model optimasi yang tepat berdasarkan `Constraints` dan `Requirements` yang ada. Pendekatan evolusioner kemudian disistemkan untuk menentukan shape rules dan model acak pada generasi awal (random first generation). Setelah itu, sistem dievaluasi (weighing system) untuk menghasilkan generasi baru, dan arsitek dapat melakukan evaluasi manual (Toussi, 2020 [^toussi/2020]).

#### 2.1.3.3. Multi-objective evolutionary algorithms

Multi-objective evolutionary algorithms sering digunakan untuk menyelesaikan masalah optimasi multiobjektif dan multikriteria yang dilakukan secara bersamaan. Secara umum, objektifnya bertentangan satu dengan lainnya, sehingga tidak ada opsi teroptimal bagi suatu set solusi untuk tiap objektif. Menurut Akbari et al., melalui PF, satu set solusi optimal akan menjadi hasil representatif (Akbari et al., 2014 [^akbari-etal/2014]; Sadegh et al., 2022 [^sadegh-etal/2022]). PF diperinci lebih lanjut pada [Lampiran](https://arnottferels.github.io/report/mars-tesis/lampiran/).

### 2.1.4. Tinjauan tipologi

#### 2.1.4.1. Transit hub (TH)

Berikut ini adalah pembahasan tentang TH (pengertian, _smart transportation planning_, asas desain, kebutuhan desain, elemen desain, faktor penting, layout letak desain, konsep arsitektur dan interior), yakni:

#### 2.1.4.2. Pengertian TH

Berdasarkan UU 22/2009 tentang LLAJ, simpul adalah tempat perpindahan moda yang dapat berwujud terminal, stasiun KA, pelabuhan, dan bandara. Dalam ilmu komputer, hub adalah konsep pada bagian tengah roda, baling-baling, kipas, atau istilah lainnya yang merujuk pada poros (Elshater dan Ibraheem, 2014 [^elshater-dan-ibraheem/2014]).

![Ilustrasi sistem hub dibandingkan dengan sistem lain dan sistem point-to-point dan hub-and-spoke oleh Rodrigue, 1998 (Elshater dan Ibraheem, 2014; The Free Dictionary, t.t.).](https://arnottferels.github.io/a/img/1920/K9A9.webp)

_Gambar 2.7. Ilustrasi sistem hub dibandingkan dengan sistem lain dan sistem point-to-point dan hub-and-spoke oleh Rodrigue, 1998 (Elshater dan Ibraheem, 2014 [^elshater-dan-ibraheem/2014]; The Free Dictionary, t.t. [^the-free-dictionary/t.t.])._

Pengertian simpul dan hub adalah sama dan serupa. Simpul dalam UU LLAJ dibicarakan dalam konteks desain arsitektur dan jaringan kota, sementara hub dalam ilmu komputer adalah jaringan komputer. Konsep hub dalam TH harus dapat mengakomodasi setiap fungsi utama sehingga secara tidak langsung hub dapat “berbicara dan berkomunikasi” dengan fasilitas yang ditunjangnya, sesuai prinsip _hub and spoke_.

#### 2.1.4.3. Smart transportation planning

_Smart transportation planning_ dalam konsep transportasi publik memiliki prinsip simpul yang terhubung antarmoda dan menerapkan konsep universal design terhadap manusia (komunitas) dan lingkungan. Jika tidak mendukung, harus ada sistem _feeder_ (pengumpan) dari atau ke TH. Selain itu, _smart transportation planning_ juga harus mendukung fungsi lainnya, seperti area ritel komersial hingga penitipan anak (Chhipa, 2018 [^chhipa/2018]).

![Prinsip ideal universal design dalam smart transportation planning (Elshater dan Ibraheem, 2014).](https://arnottferels.github.io/a/img/1920/xnFN.webp)

_Gambar 2.8. Prinsip ideal universal design dalam smart transportation planning (Elshater dan Ibraheem, 2014 [^elshater-dan-ibraheem/2014])._

Dari beberapa literatur, Gordon dan Steuteviller menyatakan bahwa universal design penting diterapkan dalam desain berbasis kebutuhan publik, yang tersusun atas desain sederhana dan intuitif, tidak menyulitkan pengguna, sistem informasi yang jelas, ukuran yang sesuai, mentoleransi kemungkinan kesalahan, fleksibel, dan fasilitas yang setara. Menurut Biehler dan Kolluri, _smart transportation planning_ harus dapat menyeimbangkan finansial, komunitas, tata guna lahan, transportasi, dan lingkungan (Elshater dan Ibraheem, 2014 [^elshater-dan-ibraheem/2014]).

Menurut Sekjen PBB, Ban Ki-moon, penyediaan layanan infrastruktur untuk mobilitas orang dan barang dapat memajukan ekonomi, sosial, dan lingkungan masa kini dan mendatang. Hal ini disebutkan dalam SDG tujuan 3.6 dan tujuan 11.2, yang saling berkaitan dengan tujuan SDG lainnya (Sustainable Mobility for All, 2017 [^sustainable-mobility-for-all/2017]).

#### 2.1.4.4. Asas desain TH

Menurut Elshater dan Ibraheem (2014), sebuah TH harus dirancang berdasarkan tiga prinsip utama agar tetap aktif, efektif, dan mendukung konsep _universal design_ serta _smart transportation planning_. Prinsip tersebut meliputi _Seamless mobility_, _Placemaking_, dan _Successful implementation_, yang masing-masing berfokus pada integrasi moda transportasi, penciptaan ruang yang menarik, serta implementasi yang berkelanjutan dan adaptif (lihat [Tabel 2.2](#table2.2)).

<a name="table2.2"></a>

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table2.2).

_Tabel 2.2. Adaptasi asas desain TH (Elshater dan Ibraheem, 2014 [^elshater-dan-ibraheem/2014])._

| No. | Kategori | Poin |
| --- | --- | --- |
| 1 | Seamless mobility | Integrasi moda yang lancar.Pergerakan orang yang aman dan efisien.Prioritas bagi pejalan kaki.TH dengan pengalaman berkualitas tinggi.Sistem manajemen parkir yang baik. |
| 2 | Placemaking | Menyesuaikan dengan tapak dan konteks.Menjadi PS yang menarik.Memiliki jejak karbon rendah. |
| 3 | Successful implementation | Efektif dalam kerja sama dan insentif bagi investasi swasta.Desain fleksibel yang mengakomodasi pertumbuhan dan perubahan. |

#### 2.1.4.5. Kebutuhan desain TH bagi kawasan

Terdapat enam kebutuhan desain TH bagi sebuah kawasan, yaitu meningkatkan efisiensi, menciptakan lingkungan berkelanjutan, membangun komunitas, meningkatkan kesejahteraan sosial, mendukung kesehatan, dan mempermudah akses perpindahan.

Dalam konteks komunitas dan lingkungan berkelanjutan, sebuah TH yang baik harus menyediakan area publik seperti plaza, taman, dan jalur pejalan kaki yang dirancang untuk manusia, bukan kendaraan. Dengan demikian, tingkat kesehatan penduduk dapat meningkat, dan desain TH akan lebih berhasil karena pengguna merasa nyaman, aman, serta mendapatkan akses yang terintegrasi dengan baik (NJTPA, 2019 [^njtpa/2019]).

#### 2.1.4.6. Elemen desain TH

Berikut adalah elemen utama dalam desain TH:

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table2.3).

_Tabel 2.3. Elemen desain TH (Elshater dan Ibraheem, 2014 [^elshater-dan-ibraheem/2014])._

| No | Kategori | Poin |
| --- | --- | --- |
| 1 | Fasilitas Transit | Menjadi ikon (landmark) bagi masyarakat.Mudah diakses oleh pejalan kaki, pesepeda, dan kendaraan.Memiliki:Area tunggu yang aman dan nyaman.Sistem antarmoda yang efisien.Pencahayaan yang baik.Tata letak yang optimal.Fasilitas bagi penyandang disabilitas dan signage yang jelas.Informasi lengkap tentang jadwal dan waktu transit. |
| 2 | Parkir | Efisiensi penggunaan lahan untuk parkir.Terintegrasi dengan fasilitas penunjang.Ditempatkan di belakang atau di dalam bangunan (jika memungkinkan). |
| 3 | Bangunan | Dikelompokkan berdasarkan fungsi.Mudah diakses dengan berjalan kaki.Meningkatkan kenyamanan transit bagi pejalan kaki sepanjang hari.Menarik dan bervariasi secara arsitektural.Sensitif terhadap karakter masyarakat setempat. |
| 4 | Jalan | Membentuk jaringan yang sesuai dengan blok pejalan kaki.Aman dan nyaman bagi semua pengguna (pejalan kaki, pesepeda, dan pengguna transportasi umum).Memisahkan pejalan kaki dari lalu lintas dengan pepohonan, perabot jalan, dan parkir di pinggir jalan.Membuat aktivitas berjalan kaki lebih menyenangkan.Memiliki pencahayaan yang baik.Mengarahkan pengguna ke aktivitas dan fungsi yang relevan. |
| 5 | PS | Jalur pejalan kaki yang menghubungkan jalan, fasilitas transit, dan bangunan.Fitur desain khusus seperti seni publik (public art).Berfungsi sebagai tempat bersantai, bersosialisasi, dan berkegiatan. |

#### 2.1.4.7. Faktor penting dalam TH

Faktor-faktor penting yang harus diperhatikan dalam desain TH meliputi:

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table2.4).

_Tabel 2.4. Faktor Penting dalam TH (Asian Development Bank, 2015 [^asian-development-bank/2015])._

| No | Faktor | Penjelasan |
| --- | --- | --- |
| 1 | Integrasi dengan perencanaan kota | Menjadi pintu gerbang utama kota dengan jaringan transportasi yang dinamis.Mendukung fasilitas transportasi dan komersial untuk meningkatkan pemanfaatan lahan sekitar TH.Terintegrasi dengan PS atau RTH guna meningkatkan kenyamanan penumpang. |
| 2 | Efisiensi, kenyamanan, dan desain optimal | Semua komponen harus terintegrasi untuk mendukung operasional harian yang efisien.Mengikuti prinsip perencanaan kota yang konsisten.Mengadopsi inovasi dalam menyelesaikan masalah desain dan operasional. |
| 3 | Mendorong penggunaan transportasi publik | Meningkatkan mobilitas dan kenyamanan penumpang.Memprioritaskan konektivitas antarmoda.Memfasilitasi pergerakan pejalan kaki dalam TH.Memiliki fasilitas komersial seperti kedai kopi, toko, dan ruang tunggu untuk meningkatkan pengalaman pengguna.Mengembangkan budaya komuter yang nyaman dan efisien. |
| 4 | Keberlanjutan dan ramah lingkungan | Menggunakan sumber daya secara efisien.Memanfaatkan energi alternatif dan teknologi ramah lingkungan.Mengacu pada standar bangunan hijau untuk mengurangi jejak karbon. |
| 5 | Efisiensi penggunaan ruang | Mengurangi pergerakan yang tidak perlu di dalam dan sekitar TH.Menyeimbangkan kebutuhan PS dan RTH dengan fungsi utama TH. |
| 6 | Pembangunan dan Pembaruan Kota Berkelanjutan | Memastikan desain tetap relevan dan adaptif di masa depan.Menciptakan peluang ekonomi baru bagi kota. |

#### 2.1.4.8. Layout fasilitas di dalam TH

Berikut adalah layout fasilitas yang harus diperhatikan dalam desain TH:

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table2.5).

_Tabel 2.5. Layout Fasilitas di dalam TH (Asian Development Bank, 2015 [^asian-development-bank/2015])._

| No | Kategori | Penjelasan |
| --- | --- | --- |
| 1 | Fasilitas perpindahan vertikal (Gambar 2.9) | Eskalator dan lift ditempatkan di lorong strategis untuk kemudahan akses.Dirancang untuk mendukung difabel, ibu hamil, dan lansia. |
| 2 | Toilet umum | Ditempatkan sebelum area masuk dan keluar untuk efisiensi pergerakan.Memiliki pencahayaan yang cukup dan fasilitas sanitasi yang layak. |
| 3 | Sistem Informasi (Gambar 2.9) | Disediakan dalam berbagai bahasa dan ditempatkan di titik strategis.Informasi akurat, jelas, dan mudah diakses. |
| 4 | Fasilitas umum | Meliputi ruang tunggu, sistem pengelolaan sampah, tempat duduk, dan pendingin udara.Ruang tunggu dilengkapi dengan akses internet, hiburan, dan kursi yang nyaman.Sistem pengelolaan sampah diperlukan untuk menjaga kebersihan. |

<a name="fig2.9"></a>

![Sistem eskalator dan papan informasi di TH Stasiun Beijing (China Friendship Development International Engineering Design and Consultation Corporation, 2015b).](https://arnottferels.github.io/a/img/1920/r5mf.webp)

_Gambar 2.9. Sistem eskalator dan papan informasi di TH Stasiun Beijing (China Friendship Development International Engineering Design and Consultation Corporation, 2015b [^china-friendship-development-international-engineering-design-and-consultation-corporation/2015b])._

#### 2.1.4.9. Arsitektur dan interior TH

Desain arsitektur dan interior TH yang baik memiliki beberapa prinsip utama:

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table2.6).

_Tabel 2.6. Arsitektur dan Interior dalam TH (Asian Development Bank, 2015 [^asian-development-bank/2015])._

| No | Kategori | Penjelasan |
| --- | --- | --- |
| 1 | Memanfaatkan sumber energi alami | Pencahayaan alami penting untuk kenyamanan dan efisiensi energi.Skylight dapat membuat ruang lebih terang dan segar.Ventilasi alami dapat mengurangi penggunaan energi, termasuk di area bawah tanah. |
| 2 | Mendukung produktivitas dan aktivitas | Fasilitas seperti ritel, kios, tempat makan, dan kafe meningkatkan kenyamanan penumpang, baik untuk kebutuhan umum maupun bisnis. |
| 3 | Menggunakan arsitektur dan seni untuk meningkatkan nilai TH | Menghadirkan ikon dan elemen promosi.Desain tradisional dapat memperkuat identitas budaya pengguna.Integrasi karya seni dapat meningkatkan pengalaman perjalanan. |

![Ekspresi arsitektur dengan refleksi tradisional kuil Cina dan karya seni pada langit-langit stasiun (China Friendship Development International Engineering Design and Consultation Corporation, 2015a).](https://arnottferels.github.io/a/img/1920/ddn5.webp)

_Gambar 2.10. Ekspresi arsitektur dengan refleksi tradisional kuil Cina dan karya seni pada langit-langit stasiun (China Friendship Development International Engineering Design and Consultation Corporation, 2015a [^china-friendship-development-international-engineering-design-and-consultation-corporation/2015a])._

### 2.1.5. Public space (PS)

#### 2.1.5.1. Pengertian PS

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table2.7).

_Tabel 2.7. Definisi PS (Alvarado dan Casiano, 2022 [^alvarado-dan-casiano/2022]; Andersson, 2016 [^andersson/2016]; Collins et al., 2020 [^collins-etal/2020])._

| No | Kategori | Poin |
| --- | --- | --- |
| 1 | Pusat kehidupan kota | Memiliki koneksi langsung dengan jalan, alun-alun, dan taman.Tempat untuk bersosialisasi dan berkomunitas, mencerminkan keragaman masyarakat.Merepresentasikan identitas budaya dan reputasi kota.Bersifat inklusif.Dapat berfungsi sebagai ruang fleksibel sesuai kebutuhan. |
| 2 | Pusat politik kota | Menjadi ruang bagi masyarakat untuk berdiskusi dan menyuarakan pendapat, termasuk demonstrasi.Melambangkan kebebasan dan demokrasi. |
| 3 | Menentukan reputasi kota | Mencerminkan kualitas hidup dan kesejahteraan kota.Jika dikelola dengan baik, kota menjadi lebih menarik untuk ditinggali dan bekerja. |

#### 2.1.5.2. Tujuan PS

Menurut Andersson (2016), desain PS yang diterapkan oleh pemerintah bertujuan untuk meningkatkan kualitas hidup, mendukung perekonomian, dan memperkuat keterikatan sosial antar warga. Ruang publik juga berperan dalam menjaga budaya, memfasilitasi interaksi sosial, meningkatkan keamanan, serta berkontribusi pada kesehatan dan kesejahteraan masyarakat. Dari segi mobilitas, ruang publik dapat mendukung pergerakan yang lebih efisien sekaligus meningkatkan kualitas lingkungan agar lebih berkelanjutan (Andersson, 2016 [^andersson/2016]).

#### 2.1.5.3. Kebutuhan dalam PS

Menurut Hajela (2021), PS dibentuk oleh elemen-elemen di sekitarnya, baik berupa bangunan, struktur, maupun area yang berbatasan langsung dengan jalan, jalur pedestrian, atau deretan pohon. Selain faktor fisik, perilaku pengguna juga mencerminkan kualitas ruang publik ini. Agar tetap hidup dan menarik bagi pengunjung, PS perlu memenuhi empat kebutuhan utama: fisiologis, sosiologis, afiliasi, dan penghargaan (_esteem_).

-   **Kebutuhan fisiologis**: mencakup kenyamanan, relaksasi, warna, suara, lingkungan, serta keamanan. Ini termasuk perlindungan dari panas dan silau melalui _shades_ dan _shadows_.
-   **Kebutuhan sosiologis**: berkaitan dengan bagaimana ruang publik mendukung kehidupan sosial melalui _livability_, proteksi, aksesibilitas, konektivitas, serta kualitas batas (_enclosure quality_) yang menciptakan lingkungan yang ramah dan inklusif.
-   **Kebutuhan afiliasi**: menekankan aspek keakraban (_familiarity_), keterbacaan, serta keterlibatan dalam interaksi sosial, baik langsung maupun tidak langsung. Pencahayaan yang tepat menjadi salah satu elemen pendukungnya.
-   **Kebutuhan penghargaan (_esteem_)**: mencerminkan bagaimana ruang publik memberikan pengalaman yang unik dan bermakna melalui ekspresi spontan, keberagaman aktivitas, dan kekhasan tempat. _Active frontages_, fasad yang aktif dan menarik, berperan dalam meningkatkan daya tarik visual dan fungsional ruang publik (Hajela, 2021 [^hajela/2021]).

## 2.2. Tinjauan pendukung

### 2.2.1. Desain inklusif

Desain inklusif mencakup konsep seperti _Design for All_ (DfA) dan _universal design_, yang berkembang untuk memenuhi kebutuhan masyarakat modern. Keberagaman saat ini mencakup faktor usia, budaya, kemampuan, dan disabilitas (Lagatta et al., 2015 [^lagatta-etal/2015]).

Menurut Acolla (2009), DfA terdiri dari dua fase:

1.  **Meta-desain** – Meliputi pengembangan konsep, analisis pengguna dan kebutuhan, serta penyusunan _briefing_.
2.  **Desain** – Meliputi penyusunan _briefing_ desain, pembuatan prototipe, serta pengujian dengan pengguna. Setelah terverifikasi, desain dapat diterapkan dalam proyek nyata (Lagatta et al., 2015 [^lagatta-etal/2015]).

Sementara itu, _universal design_ didefinisikan oleh Ronald Mace (1997) sebagai:

> “Desain produk dan lingkungan yang dapat digunakan oleh semua orang semaksimal mungkin tanpa perlu adaptasi atau desain khusus.”

Tujuan utama _universal design_ adalah menyederhanakan kehidupan dengan menciptakan produk, komunikasi, dan lingkungan binaan yang dapat digunakan oleh semua orang tanpa memandang usia atau kemampuan (Lagatta et al., 2015 [^lagatta-etal/2015]; Mace, 1997 [^mace/1997]).

### 2.2.2. Prinsip desain universal

Menurut Mace (1997), terdapat tujuh prinsip utama dalam _universal design_ agar desain dapat diakses dan digunakan oleh semua orang:

1.  **Equitable Use** – Memastikan desain dapat digunakan oleh semua orang secara adil.
2.  **Flexibility in Use** – Memungkinkan berbagai cara penggunaan sesuai dengan kebutuhan.
3.  **Simple and Intuitive Use** – Membuat desain mudah digunakan tanpa memerlukan pengalaman atau keterampilan khusus.
4.  **Perceptible Information** – Menyajikan informasi dengan jelas agar mudah dipahami.
5.  **Tolerance for Error** – Mengurangi risiko akibat kesalahan pengguna dan meningkatkan keselamatan.
6.  **Low Physical Effort** – Memastikan desain tidak membebani pengguna secara fisik.
7.  **Size and Space for Approach and Use** – Menyediakan ruang yang cukup agar nyaman digunakan dalam berbagai kondisi (Mace, 1997 [^mace/1997]).

## 2.3. Tinjauan studi kasus dan preseden

### 2.3.1. Optimasi aksesibilitas dan walkability (OAW)

Riset ini mengkaji optimasi dalam menemukan pengaturan terbaik untuk struktur perkotaan, meliputi dimensi blok, bentuk, dan orientasi, guna meningkatkan aksesibilitas transportasi publik dalam konteks _multi-objective optimization_ (MOO).

#### 2.3.1.1. Latar belakang dan urgensi OAW

Jarak yang pendek menuju transportasi publik meningkatkan konektivitas kota bagi pejalan kaki, pesepeda, dan pengguna transportasi umum. Faktor ini berperan penting dalam sistem transportasi publik karena mempermudah aksesibilitas dan meningkatkan penggunaannya.

Menurut Calthorpe (1993), sistem transportasi publik yang berkelanjutan didasarkan pada konsep _smart transportation planning_. Oleh karena itu, desain kota harus terintegrasi dengan baik dalam jaringan fasilitas lain, seperti layanan publik, area rekreasi, dan perumahan, guna menciptakan lingkungan yang efisien dan ramah pengguna (Lima et al., 2021 [^lima-etal/2021]).

![Simpul transit kawasan dan jalan tempuhnya (Lima et al., 2021).](https://arnottferels.github.io/a/img/1920/U1Ej.webp)

_Gambar 2.11. Simpul transit kawasan dan jalan tempuhnya (Lima et al., 2021 [^lima-etal/2021])._

#### 2.3.1.2. Proses pikir OAW

Studi kasus oleh Lima et al. (2021) menunjukkan bahwa riset OAW terdiri dari dua tahap utama (Lima et al., 2021 [^lima-etal/2021]).

Pendekatan pertama menggunakan algoritma generatif untuk membentuk blok dalam area studi. Nilai rata-rata _Physical Proximity Index_ (_PPI_) antara semua blok dan blok pusat dijadikan `Fitness Value`, yang dihitung berdasarkan empat variabel optimasi: panjang blok (60–200 m), lebar blok (60–200 m), lebar jalan (12–20 m), dan sudut rotasi grid (-90° hingga 90°) ([Gambar 2.12](#fig2.12)).

Pendekatan kedua mengikuti struktur dasar yang sama tetapi memungkinkan blok memiliki dimensi berbeda sambil tetap menjaga keselarasan grid. Pendekatan ini mencakup 42 variabel parametrik untuk meningkatkan kompleksitas masalah ([Gambar 2.12c](#fig2.12)).

Pada tahap kedua, optimasi dilakukan dengan mengubah struktur grid menggunakan tiga metode deformasi: subdivisi blok, pergeseran sudut, dan pembentukan blok Voronoi ([Gambar 2.13a](#fig2.13), [Gambar 2.13b](#fig2.13), [Gambar 2.13c](#fig2.13)).

Optimasi ini menggunakan aplikasi Wallacei untuk menyeimbangkan aksesibilitas transit (_PPI_) dengan biaya infrastruktur berdasarkan total luas jalan.

<a name="fig2.12"></a>

![Pendekatan untuk menghasilkan pola tata ruang pada tahap 1 (Lima et al., 2021).](https://arnottferels.github.io/a/img/1920/inxL.webp)

_Gambar 2.12. Pendekatan untuk menghasilkan pola tata ruang pada tahap 1 (Lima et al., 2021 [^lima-etal/2021])._

<a name="fig2.13"></a>

![Pendekatan untuk menghasilkan pola tata ruang pada tahap 2 (Lima et al., 2021).](https://arnottferels.github.io/a/img/1920/tx7y.webp)

_Gambar 2.13. Pendekatan untuk menghasilkan pola tata ruang pada tahap 2 (Lima et al., 2021 [^lima-etal/2021])._

#### 2.3.1.3. Simpulan studi kasus OAW

Penggunaan GD memungkinkan eksplorasi berbagai solusi. Sementara itu, optimasi multi-kriteria membantu arsitek mengidentifikasi `Objective` desain, seperti aksesibilitas dan biaya infrastruktur. Pendekatan Voronoi menghasilkan jaringan jalan yang lebih sedikit, sedangkan pendekatan sudut yang bergerak memberikan PPI yang lebih tinggi (Lima et al., 2021 [^lima-etal/2021]).

### 2.3.2. Optimasi Sosial dan Budaya (OSB)

#### 2.3.2.1. Latar Belakang dan Urgensi OSB

Riset ini mengkaji bagaimana aspek sosial dan budaya dapat digunakan sebagai skema desain alternatif untuk memperbaiki morfologi kota dan meningkatkan pengalaman masyarakat perkotaan. Tujuannya adalah menerjemahkan aspek sosial dan budaya ke dalam kumpulan data kuantitatif yang menentukan karakteristik morfologi kota.

Melalui metode _evolutionary multi-objective optimization_ (EMOO), proses pertumbuhan kota disimulasikan dengan mengadaptasi serangkaian individu dan mengoptimalkan beberapa kriteria desain. Riset ini mengukur aspek sosial dan budaya dari salah satu superblok di Kyoto, Jepang, untuk menghasilkan _urban tissue_ (UT) yang dapat merespons pertumbuhan masa depan.

Dalam riset ini, kuantifikasi karakteristik sosial dan budaya bukan menjadi tujuan utama, melainkan sebagai analisis dampak hubungan sosial dan budaya terhadap evolusi bentuk kota serta munculnya karakteristik morfologi tertentu yang dihasilkan dari interaksi tersebut (Choi et al., 2021 [^choi-etal/2021]).

#### 2.3.2.2. Sosial budaya

Menurut Hillier (2007), aspek sosial dan budaya kota merupakan sumber ketahanan yang memungkinkan pertumbuhan ekonomi, pembangunan sosial, serta membantu mengatasi tantangan kritis seperti kemampuan beradaptasi, pertumbuhan perkotaan, dan perubahan iklim.

Sementara itu, Weinstock (2013), Batty dan Marshall (2012), serta Marshall (2008) berpendapat bahwa masalah mendasar dalam perencanaan kota modern adalah pendekatan komprehensif dalam perencanaan kota. Pendekatan generik (top-down) yang terpusat pada struktur berfokus pada penyelesaian masalah kota yang dinamis dan kompleks.

Namun, Jane Jacobs (1961) menjelaskan bagaimana dan mengapa sebuah kota dapat mengalami degradasi dan beregenerasi tanpa memerlukan metode perencanaan terpusat. Ia menggeser paradigma perencanaan menjadi lebih berorientasi pada aspek sosial dan budaya melalui integrasi antar PS kota, yang dapat mendorong aktivitas komunal dan sosial perkotaan (Choi et al., 2021 [^choi-etal/2021]).

Oleh karena itu, Sevtsuk (2008) menyatakan bahwa hubungan antara sosial dan budaya dengan morfologi kota merupakan bagian dari sistem perjanjian, penyesuaian, dan interaksi yang membentuk kehidupan sosial serta mempengaruhi bentuk kota (Choi et al., 2021 [^choi-etal/2021]).

#### 2.3.2.3. Dampak “narrowness” terhadap sosial budaya

Menurut Bring (1978), kota-kota di Asia Timur, termasuk Kyoto, Jepang, memiliki konsep PS yang sangat terhubung dengan gang, permukiman, dan lapisan aktivitas kota yang disebut Roji.

Dalam persepsi umum, Gehl (1987) menyatakan bahwa dimensi arsitektural, seperti jarak, intensitas, dan kedekatan (kehangatan), sangat penting untuk memahami fungsi jangka panjangnya. Roji di Kyoto adalah salah satu contoh yang menunjukkan keterhubungan antara gang dan jalur pejalan kaki, menciptakan lingkungan yang nyaman bagi pejalan kaki.

Di Jepang, gang juga merepresentasikan budaya semi-privat. Selain itu, Imai (2015) menyebutkan bahwa kegiatan kolektif terlihat dalam keberadaan kuil-kuil kecil, toko-toko lokal, dan tempat pemandian (Choi et al., 2021 [^choi-etal/2021]).

Kota-kota di Jepang memiliki karakter yang memadukan unsur modern dan tradisional. Oleh karena itu, aspek sosial dan budaya sangat berperan dalam menentukan morfologi kota. Terdapat dua metode utama dalam tata kota di Jepang:

1.  **Machizukuri** – Perencanaan berbasis komunitas dengan pendekatan skala kecil (bottom-up) yang berfokus pada interaksi sosial dalam lingkungan.
2.  **Toshikeikaku** – Perencanaan kota komprehensif dengan pendekatan top-down yang berorientasi pada strategi tata kota (Choi et al., 2021 [^choi-etal/2021]).

#### 2.3.2.4. Movement dan perilaku sosial

Hillier et al. (1993) sering menggambarkan perilaku sosial dalam konteks gerakan alami (_movement_). Parameter seperti simpang temu memiliki peran besar dalam keberhasilan pergerakan pejalan kaki dalam jaringan jalan.

Özbil et al. (2015) menambahkan bahwa faktor-faktor seperti jarak antara asal dan tujuan, tingkat konektivitas jaringan jalan antara rumah, toko, dan tempat kerja, serta jumlah pilihan rute alternatif dalam jaringan jalan sangat mempengaruhi perilaku pergerakan. Oleh karena itu, selain menyediakan berbagai pilihan rute, meminimalkan jarak perjalanan dan mengoptimalkan panjang setiap segmen jalan berkontribusi pada peningkatan kualitas keseluruhan jaringan jalan.

#### 2.3.2.5. Proses pikir OSB

##### 2.3.2.5.1. Metode evolusioner

![Luaran simulasi berupa model growth dan grafik Diamond Fitness (DF) (Choi et al., 2021).](https://arnottferels.github.io/a/img/1920/KB1y.webp)

_Gambar 2.14. Luaran simulasi berupa model growth dan grafik Diamond Fitness (DF) (Choi et al., 2021 [^choi-etal/2021])._

Salah satu aspek penting dari MOO adalah mencapai optimasi solusi sambil mempertahankan keragaman. Variasi dalam kumpulan solusi mencerminkan keberagaman populasi fenotipik. Dalam studi kasus ini, atribut geometris morfologi kota yang unik adalah hasil dari solusi yang diperlukan.

##### 2.3.2.5.2. Terminologi, pengaturan, Constraints dan Objectives

Pengaturan simulasi tersedia pada ([Tabel 2.8](#table2.8)), sedangkan `Objective` simulasi tersedia pada ([Gambar 2.15](#fig2.15)). `Constraints` utama dalam simulasi ini adalah lebar bangunan.

<a name="table2.8"></a>

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table2.8).

_Tabel 2.8. Pengaturan simulasi. Pengaturan algoritma yang digunakan dalam Deb et al. (2000) (Makki et al., 2015 [^makki-etal/2015])._

| Ukuran Simulasi | Value |
| --- | --- |
| Generation Size | 50 |
| Generation Count | 500 |
| Population Size | 25,000 |
| Search Space | $$3.63 \\times 10^{1272}$$ |
| Mutation Rate | $$\\frac{1}{n}\\quad n \\text{ = jumlah variabel}$$ |
| Total Variabel | 62,807 |
| Pengaturan Algoritma | Value |
| Crossover Probability | 0.9 |
| Mutation Distribution Index | 20 |
| Crossover Distribution Index | 20 |
| Runtime (jam) | 41:50:17 |

<a name="fig2.15"></a>

![Eksperimen Objective desain: Lebar bangunan gang di Ubayanagicho. Biru: gang yang dapat diakses (Choi et al., 2021).](https://arnottferels.github.io/a/img/1920/nJhR.webp)

_Gambar 2.15. Eksperimen Objective desain: Lebar bangunan gang di Ubayanagicho. Biru: gang yang dapat diakses (Choi et al., 2021 [^choi-etal/2021])._

##### 2.3.2.5.3. Struktur OSB

Studi kasus ini menggunakan Wallacei untuk mengeksplorasi proses MOO. Keberhasilan MOO bergantung pada efisiensi `Genes`, `Phenotype` (morfologi), dan `Fitness Criteria`. Dalam riset ini, matriks evolusioner diterapkan untuk mengoptimalkan berbagai aspek desain perkotaan (Lima et al., 2021 [^lima-etal/2021]).

Salah satu fokus utama adalah menentukan kriteria `Fitness Objective` (`FO`), yang mencakup beberapa aspek penting:

-   `FO1`: Meningkatkan kualitas paparan sinar matahari dengan mengukur titik grid setiap 2 m dan memetakan vektor summer solstice di Kyoto antara pukul 10 pagi hingga 4 sore. Titik dengan lebih dari empat vektor menunjukkan paparan sinar matahari lebih dari empat jam dan dimaksimalkan dalam optimasi.
-   `FO2`: Meningkatkan jumlah simpang gang dengan menghitung node dalam jaringan yang memiliki tiga atau lebih segmen penghubung, guna memperkuat konektivitas dan fleksibilitas navigasi.
-   `FO3`: Mengoptimalkan jalur pejalan kaki dengan meminimalkan jumlah belokan menggunakan metode Shortest Walk untuk meningkatkan keterhubungan dalam blok.
-   `FO4`: Mengurangi variasi luas total lantai dengan membatasi ketinggian bangunan berdasarkan panjang segmen dalam jaringan.

Optimalisasi jalur pada `FO3` juga berdampak pada `FO1`, karena bangunan yang lebih kecil memungkinkan lebih banyak cahaya matahari masuk ke dalam kawasan. Efektivitas seluruh kriteria `FO` dikendalikan oleh variabel `Genes`, yang menentukan fenotipe blok kota dan memungkinkan adaptasi morfologi selama proses evolusi.

![Kalkulasi kriteria FO yang diimplementasikan dalam Wallacei (Choi et al., 2021).](https://arnottferels.github.io/a/img/1920/OttX.webp)

_Gambar 2.16. Kalkulasi kriteria FO yang diimplementasikan dalam Wallacei (Choi et al., 2021 [^choi-etal/2021])._

![Genes yang mendefinisikan superblok (Choi et al., 2021).](https://arnottferels.github.io/a/img/1920/Bfj7.webp)

_Gambar 2.17. Genes yang mendefinisikan superblok (Choi et al., 2021 [^choi-etal/2021])._

Untuk menerapkan kriteria ini, penelitian mengembangkan _Primitive Phenotype_, model dasar yang mempertahankan struktur grid kota Kyoto. Empat superblok dengan grid 2×2 digunakan, masing-masing berukuran 120×120 m dan dibagi menjadi 20 segmen per sisi untuk mencerminkan potensi jumlah jalan masuk maksimum. Setiap titik pusat sel grid dicocokkan dengan titik-titik sebaran yang ditentukan berdasarkan nilai X dan Y yang berbeda. Titik grid yang memiliki referensi terdekat yang sama akan bergabung membentuk sel yang lebih besar ([Gambar 2.18](#fig2.18)).

Titik masuk ke dalam jaringan ditentukan berdasarkan perpotongan segmen di sepanjang batas blok. Jalur terpendek kemudian dihitung untuk menghubungkan titik masuk di satu sisi blok dengan sisi lainnya, mencari dua rute dengan jarak paling singkat ([Gambar 2.19](#fig2.19)). Jika kedua rute ini berpotongan, fungsi PS akan muncul sebagai pusat silangan pada jalur utama.

Jaringan blok di-offset sejauh 1–3 m untuk menciptakan ruang pergerakan yang lebih fleksibel. Jalur utama dalam blok diimbangi sebesar 4 m untuk mengakomodasi arus pejalan kaki. Hubungan antarblok dalam superblok dioptimalkan dengan mencari jalur terpendek antara titik PS yang muncul, kemudian meng-offset rute ini sejauh 5 m untuk membentuk gang utama yang lebih luas, memungkinkan lebih banyak aktivitas publik dan komersial ([Gambar 2.19](#fig2.19)).

Ketinggian bangunan dalam model ini ditentukan berdasarkan panjang tepi kaveling:

-   **$$n < 3$$** → tinggi 10–13 lantai.
-   **$$3 < n < 5$$** → tinggi 5–9 lantai.
-   **$$n > 5$$** → tinggi 1–4 lantai ([Gambar 2.20](#fig2.20)).

Pendekatan _Primitive Phenotype_ menyaring geometri dengan perimeter terlalu kecil (<5 m), karena area tersebut tidak ideal untuk pemukiman. Namun, metode ini memungkinkan terbentuknya beberapa PS yang dapat berfungsi sebagai ruang komunal atau jalan kecil yang lebih ramah pejalan kaki ([Gambar 2.21](#fig2.21)).

<a name="fig2.18"></a>

![Mendefinisikan jaringan (Choi et al., 2021).](https://arnottferels.github.io/a/img/1920/zJdz.webp)

_Gambar 2.18. Mendefinisikan jaringan (Choi et al., 2021 [^choi-etal/2021])._

<a name="fig2.19"></a>

![Definisi gang dan PS (Choi et al., 2021).](https://arnottferels.github.io/a/img/1920/Njdt.webp)

_Gambar 2.19. Definisi gang dan PS (Choi et al., 2021 [^choi-etal/2021])._

<a name="fig2.20"></a>

![Alokasi kategori ketinggian berdasarkan jaringan superblok (Choi et al., 2021).](https://arnottferels.github.io/a/img/1920/2QN1.webp)

_Gambar 2.20. Alokasi kategori ketinggian berdasarkan jaringan superblok (Choi et al., 2021 [^choi-etal/2021])._

<a name="fig2.21"></a>

![Definisi jaringan dan PS pada superblok (Choi et al., 2021).](https://arnottferels.github.io/a/img/1920/8Ulp.webp)

_Gambar 2.21. Definisi jaringan dan PS pada superblok (Choi et al., 2021 [^choi-etal/2021])._

##### 2.3.2.5.4. Analisa OSB

Wallacei menyediakan berbagai metode analisis untuk mengevaluasi output agar algoritma lebih mudah dipahami. Berikut adalah analisis yang dilakukan:

1.  **Analisis Parallel Coordinate Plot (PCP)** ([Gambar 2.22](#fig2.22)) digunakan untuk mengidentifikasi konflik antar `Objective`. Analisis ini membandingkan `Fitness Value` setiap solusi populasi pada beberapa sumbu. Visualisasi menunjukkan pola nilai yang berulang selama simulasi. Lebar garis menunjukkan frekuensi pengulangan `Fitness Value`, sementara posisi garis pada sumbu y menunjukkan seberapa dekat nilai kebugaran dengan nilai optimal. Semakin rendah nilainya, semakin dekat ke optimal.

<a name="fig2.22"></a>

![Visualisasi grafik PCP (Choi et al., 2021).](https://arnottferels.github.io/a/img/1920/QzVB.webp)

_Gambar 2.22. Visualisasi grafik PCP (Choi et al., 2021 [^choi-etal/2021])._

<a name="fig2.23"></a>

![Visualisasi varian dan optimasi: (a) grafik SDG, (b) grafik FVG, (c) grafik MVT (Choi et al., 2021).](https://arnottferels.github.io/a/img/1920/PhlJ.webp)

_Gambar 2.23. Visualisasi varian dan optimasi: (a) grafik SDG, (b) grafik FVG, (c) grafik MVT (Choi et al., 2021 [^choi-etal/2021])._

2.  **Analisis grafik MVT** ([Gambar 2.23c](#fig2.23)) menunjukkan bahwa dibandingkan dengan grafik `Fitness Value` berulang ([Gambar 2.22](#fig2.22)), hasilnya mengalami peningkatan konvergensi pada tahap simulasi berikutnya. Nilai rata-rata `Fitness Value` di setiap `Generation` meningkat signifikan pada `Gen.100` dan semakin stabil menuju `Generation` terbaru.
3.  **Analisis grafik FVG** ([Gambar 2.23b](#fig2.23)) menunjukkan bahwa tiga `Objective` pertama memiliki banyak `Fitness Value` berulang yang mendekati nilai optimal. Namun, `Objective` keempat tidak menunjukkan pola yang jelas mendekati nilai optimal `Fitness Criteria`, meskipun nilai rata-rata `Fitness Value` tetap stabil pada `Generation` terbaru.
4.  **Analisis grafik SDG** ([Gambar 2.23a](#fig2.23)) menunjukkan konvergensi lebih tinggi pada tiga `Objective` pertama dibandingkan dengan `Objective` keempat. Namun, `Objective` keempat terus menunjukkan peningkatan rata-rata `Fitness Value`, yang mengindikasikan bahwa dengan `Runtime` simulasi lebih lama, konvergensi masih memungkinkan.
5.  **Analisis grafik DF** ([Gambar 2.24](#fig2.24)) menunjukkan bahwa `Generation` selanjutnya dipilih berdasarkan kesesuaian nilai rata-rata. `Gen.499` dijadikan `Generation` terbaru untuk optimasi. Solusi PF dipilih berdasarkan prinsip Fogel (2008), yakni solusi yang tidak memiliki alternatif lebih unggul dalam `Search Space`. Dari 26 solusi PF, analisis komparatif `Fitness Value` dilakukan menggunakan grafik ([Gambar 2.24](#fig2.24)). Karena `Objective` berada dalam kondisi konflik, tidak ada solusi yang optimal untuk semua `Objective`. Oleh karena itu, solusi PF dianalisis dengan memprioritaskan `FO1` dan `FO2`, mengingat superblok Kyoto mengalami kekurangan paparan sinar matahari di lantai dasar serta tingginya jumlah persimpangan.

<a name="fig2.24"></a>

![26 solusi PF dari generasi terakhir. Grafik DF mewakili keempat FO; semakin dekat berlian ke pusat grafik, semakin cocok solusinya (Choi et al., 2021).](https://arnottferels.github.io/a/img/1920/t5MZ.webp)

_Gambar 2.24. 26 solusi PF dari generasi terakhir. Grafik DF mewakili keempat FO; semakin dekat berlian ke pusat grafik, semakin cocok solusinya (Choi et al., 2021 [^choi-etal/2021])._

6.  **Analisis `FO3` dan `FO4`** menunjukkan bahwa `FO3` mengoptimalkan jumlah belokan minimum dalam jalur terpendek antar blok. Grafik MVT menunjukkan bahwa `FO3` memiliki optimasi yang baik karena nilainya hampir setengah dari nilai terburuk dalam `Objective`. Solusi PF menunjukkan hasil yang sebanding dengan superblok Kyoto ([Gambar 2.23c](#fig2.23)). `FO4` mempertahankan kepadatan blok Kyoto dan ditempatkan sebagai prioritas terakhir, karena walkability dalam jaringan perkotaan lebih penting. Grafik DF dengan jarak yang sama dianggap optimal, tetapi pemilihan individu bergantung pada prioritas `Objective` dalam desain keseluruhan. Oleh karena itu, `Idv.31`, `Idv.39`, dan `Idv.45` dipilih untuk analisis lanjutan.
7.  **Analisis tambahan** dilakukan melalui simulasi evolusioner dengan berbagai metode. Pendekatan ini tidak hanya menggunakan satu metode untuk mendapatkan pemahaman yang lebih jelas terhadap hasil simulasi. _False positive_ diidentifikasi dan dieliminasi. Dalam analisis `FO3`, nilai yang dieksplorasi berkisar antara 110–414 putaran, menunjukkan bahwa simulasi dapat dijalankan dengan rentang nilai yang luas.

##### 2.3.2.5.5. Simpulan studi kasus OSB

1.  **Dampak sosial budaya terhadap bentuk kota**: Studi ini mengeksplorasi bagaimana ciri sosial budaya memengaruhi pengembangan bentuk kota, terutama berdasarkan konsep Roji (gang). Faktor yang dianalisis mencakup lanskap jalan Kyoto, dimensi superblok (2x2), hubungan antara gang dan PS, kepadatan penduduk, distribusi program, solar gain, serta konektivitas fisik dan visual.
2.  **Pentingnya `Fitness Value`, `Objective`, dan parameter**: Penentuan `Fitness Value`, `Objective`, dan parameter sangat penting dalam merumuskan masalah desain. Hal ini memungkinkan simulasi mengoptimalkan dampak karakteristik morfologi lanskap kota.
3.  **Struktur numerik gang sebagai faktor utama**: Struktur numerik gang menjadi faktor utama dalam mengukur ciri sosial budaya yang membentuk dasar morfologi kota. Meskipun hasil percobaan menunjukkan peningkatan terhadap superblok perkotaan yang sudah ada, pendekatan ini tetap memerlukan evaluasi lebih lanjut.
4.  **Tantangan dalam kuantifikasi sosial budaya**: Kuantifikasi ciri sosial budaya masih menjadi tantangan kompleks karena banyaknya parameter yang menentukan bentuk kota.
5.  **Peran gang dalam superblok Kyoto**: Dalam konteks superblok Kyoto, gang memainkan peran penting dalam perkembangan sosial budaya dan keterhubungan antar ruang kota.
6.  **Keterbatasan penelitian dan kebutuhan riset lanjutan**: Masih ada aspek sosial budaya yang belum sepenuhnya dipertimbangkan dalam riset ini. Keterbatasan penelitian ini menunjukkan perlunya riset lanjutan untuk mengeksplorasi lebih jauh ekspresi sosial budaya dalam konteks perkotaan, mengingat karakteristik kota terus berkembang seiring waktu.

![Fitness Value berubah melalui perubahan morfologi di dalam superblok, merepresentasikan kenaikan dan penurunan dari semua kriteria. (Choi et al., 2021).](https://arnottferels.github.io/a/img/1920/6Uv3.webp)

_Gambar 2.25. Fitness Value berubah melalui perubahan morfologi di dalam superblok, merepresentasikan kenaikan dan penurunan dari semua kriteria. (Choi et al., 2021 [^choi-etal/2021])._

![Alur kerja dalam sistem kerja manual, semi-otomatis, dan otomatis. (Choi et al., 2021).](https://arnottferels.github.io/a/img/1920/Zn7K.webp)

_Gambar 2.26. Alur kerja dalam sistem kerja manual, semi-otomatis, dan otomatis. (Choi et al., 2021 [^choi-etal/2021])._

### 2.3.3. Oculus

Oculus (WTC Transportation Hub, New York, Amerika Serikat) berdiri di atas permukaan jalan sebagai struktur bebas yang terletak pada sumbu sepanjang tepi selatan plaza “_Wedge of Light_.” Bangunan ini merupakan bagian dari masterplan WTC yang dirancang oleh Daniel Libeskind, sementara arsitekturnya didesain oleh Santiago Calatrava. Selain memiliki 12 jalur _subway_, Oculus juga mencakup stasiun WTC PATH, berbagai ritel, dan merupakan area dengan aktivitas tinggi.

-   **Batasan Tapak**: Di utara, timur, dan barat berbatasan dengan Fulton, Greenwich, dan Church Streets, sementara di selatan berbatasan dengan Tower 3 ([Gambar 2.27](#fig2.27)).

<a name="fig2.27"></a>

![Tapak Oculus dan sekitarnya (Google Maps, 2022c).](https://arnottferels.github.io/a/img/1920/edXT.webp)

_Gambar 2.27. Tapak Oculus dan sekitarnya (Google Maps, 2022c [^google-maps/2022c])._

-   **Akses**: Dari luar: Oculus memiliki dua pintu masuk utama di sisi timur dan barat, sejajar dengan Church Street dan Greenwich Street. Dari dalam: Akses tersedia melalui tangga simetris dengan elevator kaca, memungkinkan pengunjung melihat ruang interior elips (±121,9 x 65,8 meter) secara menyeluruh dan mengakses MTA 1, R, dan E subway lines, serta Towers 2, 3, dan 4.

![Oculus dari luar dan dalam (ArchDaily, t.t.).](https://arnottferels.github.io/a/img/1920/yN3w.webp)

_Gambar 2.28. Oculus dari luar dan dalam (ArchDaily, t.t. [^archdaily/t.t.])._

-   **Arsitektur**: Struktur elips melengkung (±106 x 35 meter) dengan puncak setinggi 29 meter. Rangka baja Oculus memanjang ke atas menyerupai sayap terbuka, membentuk kanopi setinggi 51 meter dpl. Desain ini terinspirasi dari mandorla Bizantium, sayap kerubim Tabut Perjanjian, dan motif pelindung pada guci kanopi Mesir.

![Konsep arsitektural Oculus (ArchDaily, t.t.).](https://arnottferels.github.io/a/img/1920/h5kH.webp)

_Gambar 2.29. Konsep arsitektural Oculus (ArchDaily, t.t. [^archdaily/t.t.])._

![Skylight di Oculus (ArchDaily, t.t.).](https://arnottferels.github.io/a/img/1920/Rpvf.webp)

_Gambar 2.30. Skylight di Oculus (ArchDaily, t.t. [^archdaily/t.t.])._

-   **Struktur**: Dibangun sebagai pengingat peristiwa 9/11, struktur ini sejajar dengan sudut matahari saat serangan terjadi pada 11 September pukul 08:46 pagi hingga runtuhnya bangunan kedua pada pukul 10:28 pagi. _Skylight_ juga dirancang untuk selaras dengan sudut matahari, memungkinkan cahaya masuk ke dalam Oculus.

![Kesejajaran struktur Oculus terhadap sudut matahari saat peristiwa 9/11 (ArchDaily, t.t.).](https://arnottferels.github.io/a/img/1920/Qnpb.webp)

_Gambar 2.31. Kesejajaran struktur Oculus terhadap sudut matahari saat peristiwa 9/11 (ArchDaily, t.t. [^archdaily/t.t.])._

-   **Fungsi dan Aktivitas**: Lantai utama menjadi area tersibuk dengan tingginya lalu lintas komuter, pembelanja, dan pengunjung. Beragam acara seperti pasar tani, pagelaran seni, dan pertunjukan musik juga diadakan di sini.

![Aktivitas di Oculus (ArchDaily, t.t.).](https://arnottferels.github.io/a/img/1920/rhLP.webp)

_Gambar 2.32. Aktivitas di Oculus (ArchDaily, t.t. [^archdaily/t.t.])._

-   **Keunikan**: Oculus memiliki transparansi tinggi dan banyak ruang terbuka, sesuatu yang jarang ditemukan di stasiun _subway_ New York.

![Keunikan di Oculus (ArchDaily, t.t.).](https://arnottferels.github.io/a/img/1920/ZhJV.webp)

_Gambar 2.33. Keunikan di Oculus (ArchDaily, t.t. [^archdaily/t.t.])._

-   **Linkage**: Menghubungkan ruang terbuka hijau kota dari City Hall Park hingga Battery Park di tepi Sungai Hudson.
-   **Data Proyek**: Pemilik: Port Authority of New York and New Jersey; Operator ritel: Unibail-Rodamco-Westfield (swasta).

### 2.3.4. STC

STC (Salesforce Transit Center, San Francisco, Amerika Serikat) adalah TH multi-moda canggih di pusat kota. Pusat ini menghubungkan 11 sistem transit dan menghubungkan kota SF ke kawasan, negara bagian, serta negara. Desainnya inovatif dan berkelanjutan, dengan _rooftop garden_ seluas 2,2 hektar yang mendukung lingkungan _mixed-use_. Pusat ini dirancang oleh Pelli Clarke Pelli Architects.

-   **Batasan Tapak** – STC membentang sepanjang lima blok di Mission Street, satu blok di selatan distrik finansial. Dindingnya bergelombang lembut, mengambang di atas jalan dengan kolom baja miring, menciptakan bentuk yang anggun, bercahaya, dan ramah.

![Tapak STC dan sekitarnya (Google Maps, 2022b).](https://arnottferels.github.io/a/img/1920/dRpb.webp)

_Gambar 2.34. Tapak STC dan sekitarnya (Google Maps, 2022b [^google-maps/2022b])._

-   **Akses** – STC menghubungkan 11 sistem transit. Terhubung langsung melalui _sky bridge_ ke Salesforce Tower dan Parcel F serta memiliki banyak koneksi ke gedung-gedung sekitar.

![Lokasi dan tampak atas STC (Google Maps, 2022b; Pelli Clarke dan Partners, 2018).](https://arnottferels.github.io/a/img/1920/GV9K.webp)

_Gambar 2.35. Lokasi dan tampak atas STC (Google Maps, 2022b [^google-maps/2022b]; Pelli Clarke dan Partners, 2018 [^pelli-clarke-dan-partners/2018])._

<a name="fig2.36"></a>

![Denah STC (Pelli Clarke dan Partners, 2018).](https://arnottferels.github.io/a/img/1920/6KBH.webp)

_Gambar 2.36. Denah STC (Pelli Clarke dan Partners, 2018 [^pelli-clarke-dan-partners/2018])._

-   **Arsitektur** – Pengembangan STC menghilangkan hambatan Bay Bridge terhadap pertumbuhan lingkungan ([Gambar 2.37](#fig2.37)). Karakter arsitektur diekspresikan melalui panel melengkung dan bergelombang yang memantulkan cahaya serta memberikan kesan ringan.

<a name="fig2.37"></a>

![Konektivitas STC terhadap konteks, yaitu Bay Bridge dan lingkungan sekitar (ArchDaily, 2018).](https://arnottferels.github.io/a/img/1920/FTPd.webp)

_Gambar 2.37. Konektivitas STC terhadap konteks, yaitu Bay Bridge dan lingkungan sekitar (ArchDaily, 2018 [^archdaily/2018])._

<a name="fig2.38"></a>

![Bentuk fasad dan pola panel STC (ArchDaily, 2018).](https://arnottferels.github.io/a/img/1920/9wnz.webp)

_Gambar 2.38. Bentuk fasad dan pola panel STC (ArchDaily, 2018 [^archdaily/2018])._

-   **Konsep Hijau** – Taman atap memiliki sirkulasi melengkung yang memberikan pengalaman unik bagi pengunjung, baik untuk _contemplation_ maupun _social interaction_. Taman ini mengintegrasikan _vegetated hills_ dengan atap arsitektur kubah, yang memungkinkan cahaya matahari masuk ke TH di bawahnya. Desain taman juga berkontribusi pada kualitas lingkungan dengan:
    1.  Menggunakan dan mendaur ulang air ([Gambar 2.37](#fig2.37)).
    2.  Menjadi _urban locus_ bagi burung, kupu-kupu, dan penyerbuk lainnya ([Gambar 2.36](#fig2.36)).
    3.  Mengumpulkan dan mengolah _storm-water runoff_ dari _rooftop garden_ serta air terminal di _wetland_ buatan, lalu menggunakannya untuk toilet di seluruh terminal ([Gambar 2.36](#fig2.36)).
    4.  Menyerap karbon dioksida (CO2) dari emisi kendaraan seperti bus ([Gambar 2.38](#fig2.38)).

![Denah konsep hijau STC (Pelli Clarke dan Partners, 2018).](https://arnottferels.github.io/a/img/1920/Rp5A.webp)

_Gambar 2.39. Denah konsep hijau STC (Pelli Clarke dan Partners, 2018 [^pelli-clarke-dan-partners/2018])._

![Potongan prinsip hijau STC (Pelli Clarke dan Partners, 2018).](https://arnottferels.github.io/a/img/1920/64iB.webp)

_Gambar 2.40. Potongan prinsip hijau STC (Pelli Clarke dan Partners, 2018 [^pelli-clarke-dan-partners/2018])._

![Potongan konsep hijau STC (Pelli Clarke dan Partners, 2018; Pelli Clarke dan Partners, 2018)](https://arnottferels.github.io/a/img/1920/lxNv.webp)

_Gambar 2.41. Potongan konsep hijau STC (Pelli Clarke dan Partners, 2018 [^pelli-clarke-dan-partners/2018]; Pelli Clarke dan Partners, 2018 [^pelli-clarke-dan-partners/2018])_

![Potongan aksonometri konsep hijau STC (Pelli Clarke dan Partners, 2018)](https://arnottferels.github.io/a/img/1920/yfp9.webp)

_Gambar 2.42. Potongan aksonometri konsep hijau STC (Pelli Clarke dan Partners, 2018 [^pelli-clarke-dan-partners/2018])_

-   **Fungsi dan Aktivitas**
    1.  Di permukaan jalan, terdapat toko dan kafe yang menarik pengunjung serta menciptakan interaksi dengan lingkungan sekitar ([Gambar 2.43](#fig2.43)). Di atas bangunan, _rooftop garden_ berfungsi sebagai ruang multifungsi untuk istirahat, aktivitas, dan edukasi bagi pengguna transit serta penduduk lokal. Taman ini memiliki area tanah luas untuk pohon dan semak yang besar dan sehat, dirancang untuk mengundang pengunjung bertahan lebih lama, mengubah STC dari sekadar pusat komuter menjadi _urban destination_ yang berkelanjutan ([Gambar 2.43](#fig2.43)).
    2.  Di dalam STC, terdapat PS yang dipenuhi cahaya alami. Struktur _skylight_ ekspresif yang disebut “_Light Columns_” dirancang untuk membawa sinar matahari jauh ke dalam bangunan, menciptakan suasana yang hidup dan mengundang. _Light Column_ terbesar menjadi elemen utama _Grand Hall_ (36 meter), yang merupakan ruang utama STC. Struktur ini membentang dari taman, melewati dek bus dan _Main Hall_, hingga ke peron kereta dua lantai di bawah tanah, memberikan pencahayaan alami dan pandangan terbuka ke seluruh area STC ([Gambar 2.44](#fig2.44)).

<a name="fig2.43"></a>

![Aktivitas di lantai dasar dan atap (rooftop garden) STC (ArchDaily, 2018; Pelli Clarke dan Partners, 2018).](https://arnottferels.github.io/a/img/1920/wTXf.webp)

_Gambar 2.43. Aktivitas di lantai dasar dan atap (rooftop garden) STC (ArchDaily, 2018 [^archdaily/2018]; Pelli Clarke dan Partners, 2018 [^pelli-clarke-dan-partners/2018])._

<a name="fig2.44"></a>

![Potongan konsep fungsi dan aktivitas STC (ArchDaily, 2018; Pelli Clarke dan Partners, 2018)](https://arnottferels.github.io/a/img/1920/BXfr.webp)

_Gambar 2.44. Potongan konsep fungsi dan aktivitas STC (ArchDaily, 2018 [^archdaily/2018]; Pelli Clarke dan Partners, 2018 [^pelli-clarke-dan-partners/2018])_

-   **Keunikan** – Seluruh bangunan berventilasi alami. Peron bus terbuka di samping, sehingga tidak memerlukan AC, sistem exhaust, atau penyaringan udara. Taman dengan 600 pohon dan 16.000 tanaman menciptakan atap hijau yang membantu mendinginkan lingkungan serta meningkatkan kualitas udara.
-   **Sertifikasi** – Konsumsi energi tahunan 50% lebih rendah dari Title 24 Energy Efficiency Standards 2008 dan mendapatkan sertifikasi LEED Gold 2009.
-   **Data Proyek** – Pemilik: Transbay Joint Powers Authority; LED: Jenny Holzer (seniman); Pola fasad: Sir Roger Penrose (matematikawan, penerima Nobel).

### 2.3.5. Simpulan studi kasus dan preseden

Berikut adalah simpulan dari studi kasus dan preseden yang telah dibahas sebelumnya:

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table2.9).

_Tabel 2.9. Simpulan studi kasus dan preseden._

| OAW | Pentingnya penggunaan GD dalam eksplorasi solusi desain Objective. |
| --- | --- |
| Pentingnya menentukan Fitness Value dan Constraints dalam desain untuk menghasilkan Objective yang tepat. |
| Pentingnya membagi tahapan simulasi agar lebih terstruktur. |
| Pentingnya memahami cara kerja perangkat simulasi. |
| Optimasi multikriteria membantu arsitek mengidentifikasi desain yang optimal. Dalam kasus ini, Objective mencakup aksesibilitas dan biaya infrastruktur (lebar jalan). |
| Dalam kasus ini, pendekatan Voronoi menghasilkan jaringan jalan yang lebih sedikit, sedangkan pendekatan sudut yang bergerak memberikan PPI yang lebih tinggi. |
| Dalam perencanaan kota, terutama dalam sarana prasarana (SP), Objective aksesibilitas seperti jarak tempuh harus dipertimbangkan (Lima et al., 2021 [^lima-etal/2021]). |
| OSB | Dalam kasus ini, penting untuk memahami preferensi perkembangan sosial budaya kota Kyoto, seperti Roji (gang), agar dapat menentukan Objective pada desain. |
| Objective lain yang perlu dipertimbangkan dalam konteks sosial budaya meliputi lanskap jalan (streetscape), dimensi superblok (2×2), hubungan antara gang dan PS, kepadatan penduduk, distribusi program, solar gain, serta konektivitas fisik dan visual. |
| Pentingnya menentukan Fitness Value, Objective, dan parameter agar simulasi optimal serta karakteristik morfologi lanskap perkotaan lebih baik. |
| Kuantifikasi ciri sosial budaya tetap menjadi tantangan kompleks karena banyaknya parameter yang menentukan bentuk kota. |
| Dalam kasus ini, beberapa ciri sosial budaya belum dipertimbangkan, sehingga terdapat keterbatasan dalam desain dan diperlukan riset lanjutan. |
| Oculus | Mempertimbangkan aksis bangunan terhadap kota dan konteks sekitar, termasuk PS sekitar tapak hingga Sungai Hudson. |
| Mempertimbangkan aksis bangunan terhadap peristiwa sejarah, seperti Serangan 9/11 yang menciptakan community attachment. |
| Mempertimbangkan akses masuk-keluar dan konektivitas dengan transportasi publik. |
| Mengolah konsep bentuk, di mana Calatrava menggabungkan unsur budaya Bizantium, Mesir, dan Yahudi. |
| Pengadaan program publik di lantai dasar. |
| Perencanaan fungsi ritel, budaya, dan acara penunjang lainnya. |
| Desain TH harus memiliki nilai kebaruan, seperti Oculus yang berbeda dari subway umumnya dengan skylight yang menerangi hingga lantai terbawah. |
| STC | Menyelesaikan masalah aktual pada tapak dan konteks, seperti beban Bay Bridge terhadap lingkungan. |
| Membuat konsep terbuka di lantai dasar untuk meningkatkan konektivitas dengan lingkungan sekitar. |
| Mempertimbangkan akses masuk dan keluar. |
| Konektivitas dengan transportasi publik. |
| Konsep skylight yang menyalurkan cahaya dari lantai teratas hingga terbawah. |
| Integrasi konsep ekologi dalam bangunan publik, seperti rooftop garden dalam desain ini. |
| Perencanaan fasad yang estetis dan fungsional. |

## 2.4. Tinjauan peraturan

Subbab ini akan meninjau peraturan terkait desain serta simpulannya yang akan digunakan dan diterjemahkan dalam desain.

Berikut adalah ringkasan peraturan terkait desain:

1.  Berdasarkan visi, misi, dan rencana tata ruang Jakarta Barat, terutama Kecamatan Kalideres sebagaimana tercantum dalam Perda RDTR 2030 dan RDTR-PZ, didapati bahwa pengembangan, pembangunan, serta peningkatan sistem transportasi darat dan kereta, serta penghijauan, menjadi urgensi kota yang ingin dicapai.
2.  Hal tersebut dapat dicapai melalui sarana dan prasarana (SP) pendukung, seperti TH, _Park & Ride_, RTH, dan PS, sebagaimana dinyatakan dalam UU Penataan Ruang dan UU Cipta Kerja.
3.  SP dapat dikategorikan sebagai kepentingan umum (KU), karena termasuk dalam hak prioritas (HP) pemerintah dalam membangun infrastruktur utama sebagaimana dinyatakan dalam UU Cipta Kerja.
4.  Berdasarkan poin 1 di atas, terdapat urgensi pengembangan TH di kawasan Terminal Kalideres (existing). Tapak ini terletak di Jl. Daan Mogot, yang menghubungkan Jakarta Barat dan Kota Tangerang. Lokasi ini berbatasan langsung dengan Kali Mookervaart, yang menghubungkan Kali Cisadane (Tangerang) dan Kali Angke (Jakarta). Selain itu, dengan adanya rencana pembangunan MRT Stasiun Kalideres sebagaimana tercantum dalam Perda RDTR-PZ, serta proses feasibility study oleh pihak MRT dan harapan Dirut MRT Jakarta untuk mengintegrasikan seluruh moda transportasi (Bisnis Indonesia, 2021a [^bisnis-indonesia/2021a]; Bisnis Indonesia, 2021b [^bisnis-indonesia/2021b]), pengembangan TH menjadi semakin relevan.
5.  Berdasarkan poin 1, 2, dan 3, TH dikategorikan sebagai KU dan SP. Oleh karena itu, TH dapat dibangun di atas SP yang terkait dengan terminal, seperti sistem jalan, serta, jika diperlukan, di atas sistem air.
6.  Desain dapat dijalankan dengan pertimbangan BKPRD dan Gubernur, apabila memberikan manfaat bagi kepentingan umum (KU), termasuk aspek sosial, ekonomi, serta lingkungan sekitar dan kota, sekaligus mendukung visi kota Jakarta Barat.
7.  Dengan adanya UU Cipta Kerja tentang UMK serta UU Tata Ruang tentang RTH, desain harus menyediakan elemen-elemen tersebut dalam SP. Dengan demikian, desain ini mendukung pencapaian SDGs serta cita-cita pemerintah kota Jakarta dalam menambah ruang terbuka dan RTH kota (Desyani, 2013 [^desyani/2013]; Ekaputra dan Sudarwani, 2013 [^ekaputra-dan-sudarwani/2013]; Fitri dan Kusuma, 2017 [^fitri-dan-kusuma/2017]).

Berikut ini adalah penjabaran poin penting peraturan yang berhubungan langsung dengan rencana desain serta dasar hukum terkait:

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table2.10).

_Tabel 2.10. Peraturan terkait desain._

| No | Hal dan Pemahaman | Dasar Hukum |
| --- | --- | --- |
| 1 | Visi, Misi, Rencana Tata Ruang, dan SP | Perda DKI 1/2012, Pasal 3, 4, dan 143 |
| Perda DKI 1/2014, Pasal 223 ayat (1) huruf a dan b, Pasal 223 ayat (2) huruf a, b, f, dan g, Pasal 230 huruf a, b, c, dan f, Pasal 233 ayat (1) dan (2) |
| Pusat kawasan industri selektif |
| Transportasi darat dan perkeretaapian |
| Terminal dan stasiun terpadu Kalideres, permukiman lama dan baru |
| 2 | Pemanfaatan Ruang: Kepentingan Umum (KU) dan Hak Prioritas (HP) | Perda DKI 1/2014, Pasal 241 ayat (1), Tabel-3 Pelaksanaan Kegiatan dalam Sub Zona Lampiran VI |
| UU 26/2007, Pasal 33 ayat (3) huruf d |
| UU 11/2021, Pasal 123 ayat (2), mengubah UU 2/2012, Pasal 10 huruf d, l, dan r |
| Rencana kawasan Terminal dan Stasiun Kalideres, fasilitas umum dan sosial, serta RTH |
| 3 | Pemanfaatan Ruang: Bangunan Gedung (BG) dan BG di atas Air | UU 28/2002, Pasal 1 ayat (1), Pasal 7 ayat (4) jo. Perda DKI 1/2014, Pasal 1 angka 12, Pasal 616 ayat (1) huruf c dan d, Pasal 619 ayat (1) |
| PP 16/2021, Pasal 11 ayat (2) dan (3) jo. UU 28/2002, Pasal 51 ayat (5) |
| PERGUB DKI 135/2019, Lampiran 2.7.1 dan 2.7.2 |
| Syarat: Sesuai RTRL, RTRW, RDTR, dan/atau RTBL |
| Persetujuan Gubernur dan BKPRD untuk pemanfaatan ruang di atas air |
| Menjaga keseimbangan lingkungan dan tidak menimbulkan pencemaran |
| Keandalan BG sesuai fungsi dan klasifikasi |
| Memperhatikan fungsi utama serta kebersihan sungai/kali |
| 4 | Terminal, Transportasi, SP, dan Park & Ride Kalideres | Perda DKI 1/2012, Pasal 121 ayat (1) |
| Perda DKI 1/2014, Pasal 1 angka 110, Pasal 233 ayat (2) dan (3) |
| Peningkatan jalan, moda angkutan umum, dan SP penunjang |
| Terminal atau stasiun terpadu di Sentra Primer Barat dan Kalideres |
| MRT dan kereta komuter Jabodetabek di Stasiun Kalideres |
| SP parkir perpindahan moda di Kelurahan Kalideres |
| 5 | RTH dan UMK | UU 26/2007, Pasal 1 angka 31 |
| UU 11/2021, Pasal 104 ayat (1) dan (2) |
| Terminal harus memiliki UMK (30% luas tempat perbelanjaan) dan RTH |

## 2.5. Simpulan tinjauan pustaka

Simpulan dari tinjauan pustaka di atas adalah sebagai berikut:

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table2.11).

_Tabel 2.11. Simpulan tinjauan pustaka._

| Hal | Penjelasan |
| --- | --- |
| Pendekatan Multilayer* | Penyaringan data mempermudah proses desain pada tahap berikutnya. |
| Pemodelan ABM merepresentasikan karakter agen dalam hubungannya dengan lingkungan atau sesamanya. |
| Penyederhanaan bentuk melalui LS dan proksimitas dapat mempercepat proses simulasi. |
| Pemahaman alur kerja desain penting untuk menghasilkan solusi yang lebih efisien. |
| GD terinspirasi oleh prinsip-prinsip biologis dan matematika. |
| Definisi kebutuhan desain yang tepat sangat krusial. |
| Menentukan Constraints dan Objectives untuk menghasilkan desain yang optimal dan efisien. |
| Kuantifikasi data kualitatif memungkinkan perhitungan dalam simulasi. |
| Pemodelan generatif digunakan untuk mempersiapkan dan menjalankan simulasi MOO. |
| MOO mengoptimalkan berbagai kriteria untuk menghasilkan solusi desain yang lebih kaya. |
| MOO menggunakan sistem Generation, yang menjadi lebih efisien seiring bertambahnya generasi. |
| Arsitek dapat mengambil pendekatan integratif dalam desain, mempertimbangkan aspek tangible dan intangible. |
| Keterlibatan arsitek sangat krusial untuk menjawab kebutuhan kontemporer. |
| Tipologi TH | TH berfungsi sebagai titik perpindahan moda transportasi. |
| Efisiensi parkir, fasilitas transit, dan PS sangat penting dalam desain. |
| Pertimbangan jarak tempuh dan aksesibilitas antar fungsi harus diperhatikan. |
| Desain harus efisien, aman, dan nyaman. |
| Transit hub harus mendukung sistem transportasi perkotaan. |
| Penerapan konsep hijau dan tanggung jawab lingkungan harus menjadi prioritas. |
| Fasilitas sirkulasi vertikal dan toilet umum harus disesuaikan dengan kebutuhan. |
| Sistem informasi harus jelas dan mudah diakses. |
| Desain harus mengakomodasi:Ekspresi budaya dan seni sebagai ikon arsitektur TH.Konsep placemaking dan seamless mobility. |
| Harus mempertimbangkan:Konsep smart transportation planning.Universal design untuk inklusivitas dalam bangunan publik. |
| Tipologi PS | Menghidupkan kota. |
| Menunjukkan identitas budaya dan reputasi kota. |
| Meningkatkan kualitas hidup, interaksi sosial, dan lingkungan. |
| Peka terhadap digitalisasi dalam PS. |
| Memenuhi kebutuhan fisiologis, sosiologis, dan esteem pengguna. |
| Memiliki active frontages. |
| Pencahayaan yang baik. |
| Aksesibilitas dan konektivitas terhadap konteks. |
| Mempertimbangkan unsur warna dan suara. |
| Peraturan | TH dan PS terintegrasi dalam rencana Pemda DKI Jakarta. |
| TH dan PS termasuk SP umum dan KU. |
| Urgensi pengembangan TH di Terminal Kalideres. |
| Rencana MRT Stasiun Kalideres sedang dalam tahap feasibility study. |
| SP dapat dibangun di atas sistem jalan dan air. |
| Desain dapat disetujui oleh BKPRD dan Gubernur jika bermanfaat bagi KU. |
| SP harus menyediakan ruang untuk UMK (30% luas ritel). |
| SP harus mencakup RTH kota. |

Oleh sebab itu, dapat dihasilkan simpulan data `Constraint` dan `Objective` guna proses metode desain dalam desain TH, antara lain:

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table2.12).

_Tabel 2.12. Simpulan data Constraints dan Objective._

| Hal | Data |
| --- | --- |
| Objective | Total jarak rata-rata antar PS. |
| Jumlah PS yang tersedia. |
| Efektivitas radius jangkauan PS. |
| Constraints | Model lingkungan untuk ABM. |
| Batas jarak maksimal antar PS. |
| Jarak minimum antara PS dan TH. |

# 3. Metode desain

## 3. Metode desain

[Tabel 3.1](#table3.1) memaparkan tahapan metode desain yang digunakan dalam proses desain TH.

<a name="table3.1"></a>

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table3.1).

_Tabel 3.1. Tahapan metode desain._

| No. | Tahapan | Deskripsi |
| --- | --- | --- |
| 1 | Pengayaan | Mengkaji teori, studi kasus, preseden, peraturan, dan tipologi sebagai dasar pemahaman isu desain. |
| 2 | Pemahaman isu desain | Menganalisis isu yang relevan dalam konteks dan lokasi proyek. |
| 3 | Penentuan metode desain | Menetapkan metode pendekatan dan parameter Objective, Constraints, serta Generation untuk proses desain. |
| 4 | Implementasi metode dynamic multi-layer | Menerapkan metode desain dynamic multi-layer. Lihat detail di Bab 3.2. |
| 5 | Konsep dan ide desain | Mengembangkan konsep berdasarkan analisis isu, strategi desain, dan hasil metode dynamic multi-layer. |
| 6 | Pengembangan desain | Menyempurnakan desain berdasarkan output tahap 4 serta konsep dan ide tahap 5. |
| 7 | Kesimpulan desain | Merumuskan kesimpulan yang menjawab permasalahan desain. |

## 3.2. Penjabaran metode desain DML

[Gambar 3.1](#fig3.1) menjelaskan diagram metode desain DML, dari Layer pertama hingga keenam, serta objektif dan hasil tiap layer, yaitu:

<a name="fig3.1"></a>

![Metode desain DML. Proses desain DML terdiri dari beberapa langkah: (1) mengumpulkan data dan menyiapkan model geometri, (2) memprediksi model dinamis sistem kompleks dengan metode ABM, (3) menyederhanakan pola pergerakan menggunakan metode LS, (4) menentukan tujuan untuk menyelesaikan masalah tapak dan kawasan serta menyiapkan algoritma dengan metode SPA+A*, (5) mengoptimalkan tujuan dengan metode MOO, dan (6) mengelompokkan hasil untuk menemukan solusi terbaik.](https://arnottferels.github.io/a/img/1536/W3kb.webp)

_Gambar 3.1. Metode desain DML. Proses desain DML terdiri dari beberapa langkah: (1) mengumpulkan data dan menyiapkan model geometri, (2) memprediksi model dinamis sistem kompleks dengan metode ABM, (3) menyederhanakan pola pergerakan menggunakan metode LS, (4) menentukan tujuan untuk menyelesaikan masalah tapak dan kawasan serta menyiapkan algoritma dengan metode SPA+A*, (5) mengoptimalkan tujuan dengan metode MOO, dan (6) mengelompokkan hasil untuk menemukan solusi terbaik._

Secara teknis, pendekatan desain DML dijelaskan dalam [Tabel 3.2](#table3.2), sebagai berikut:

<a name="table3.2"></a>

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table3.2).

_Tabel 3.2. Tahapan metode DML._

| Layer | Input | Metode |
| --- | --- | --- |
| 1 | Data typical traffic | Mengumpulkan data representatif dari Google Maps Typical Traffic (GMTT) dan observasi lapangan.Menganalisis pola pergerakan dan kemacetan melalui penyaringan menggunakan metode distilasi data serta subset data pada rute representatif. |
| 2 | Output Layer 1 | Menerjemahkan data dari Layer 1.Merepresentasikan dalam suatu set kondisi pada pemodelan dinamis kawasan menggunakan metode ABM. |
| 3 | Output Layer 2 | Mengagregasi data Layer 2 dengan metode LS, yang diulang 35 kali. |
| 4 | Output Layer 3 | Memetakan pengaturan rute terpendek dengan metode SPA+A* dari titik tengah data Layer 3. |
| 5 | Output Layer 4 | Melakukan simulasi dan optimasi solusi berdasarkan lima objektif (dua utama, tiga pendukung).Menggunakan sembilan kriteria jarak titik PS terhadap titik TH dengan metode evolutionary algorithm dan NSGA-2. |

# 4. Analisis dan simulasi

Metode DML dalam tesis ini ([Gambar 3.1](#fig3.1)) diterapkan dalam enam lapisan:

-   **Layer 1** – _Typical traffic_
-   **Layer 2** – _Agent-based modeling_ (ABM)
-   **Layer 3** – _Laplacian smoothing_ (LS)
-   **Layer 4** – _Shortest path algorithm_ (A-star) (SPA+A\*)
-   **Layer 5** – _Multi-objective optimization_ (MOO)
-   **Layer 6** – _Clustering_

Setiap layer memiliki input dan output. Input biasanya berasal dari layer sebelumnya, sedangkan output menjadi dasar untuk tahap berikutnya. Berikut hasil analisis dan simulasi metode DML.

## 4.1. Layer 1: Analisis typical traffic

![Flowchart algoritma Layer 1.](https://arnottferels.github.io/a/img/1920/BtrV.webp)

_Gambar 4.1. Flowchart algoritma Layer 1._

Pada layer ini, analisis dilakukan untuk mengidentifikasi titik-titik atraktif di kawasan strategis sekitar titik bakal desain TH. Metode yang digunakan adalah abstraksi melalui distilasi data dan _subset data_ dari Google Maps yang menunjukkan pola kemacetan di kawasan Kalideres. Data diambil menggunakan mode _typical traffic_ dari pukul 06.00 hingga 22.00, dengan interval satu jam.

<video src="https://arnottferels.github.io/a/media/ut5E.mp4"></video>

_Video 4.1. Kompilasi representatif typical traffic melalui GMTT (Google Maps, 2022a). (https://arnottferels.github.io/a/media/ut5E.mp4)_

![Pembagian data ruas jalan untuk analisis lebih lanjut.](https://arnottferels.github.io/a/img/1920/5oPV.webp)

_Gambar 4.2. Pembagian data ruas jalan untuk analisis lebih lanjut._

Berdasarkan observasi lapangan, ruas jalan (_route segment_/RS) disaring lebih lanjut. Terdapat 7 bagian representatif yang ditentukan (lihat [Gambar 4.3](#fig4.3)):

-   **RS A** – Jl. Daan Mogot (arah Tangerang–Jakarta)
-   **RS B** – Jl. Daan Mogot (arah Jakarta–Tangerang)
-   **RS C** – Jalan Inspeksi di selatan Jl. Daan Mogot
-   **RS X** – Jl. Peta Selatan dan CBD DMB (ke arah pemukiman warga)
-   **RS Y** – Akses menuju Jl. Daan Mogot (dari pemukiman warga)
-   **RS N** – Fitur jalan putar balik (_U-turn_)

Selain itu, dilakukan persiapan geometri (_mesh_ dan _boundary representation object_ atau BREP) yang diperoleh dari data PlanetOSM menggunakan Grasshopper + Caribou. Persiapan lain, seperti penentuan titik dan legenda, juga dilakukan untuk mendukung proses analisis, kompilasi, serta penentuan bakal _targets_ dan _agents_ pada Layer 2.

### 4.1.1. Analisis typical traffic dari GMTT

Analisis _typical traffic_ memiliki tingkat representasi tinggi karena datanya berasal dari _crowdsourced_ GMTT. Data ini dikategorikan ke dalam 9 jenis RS.

Setiap interval dinyatakan dengan bilangan bulat:

-   **1** – Lancar (tidak macet)
-   **2** – Sedikit macet
-   **3** – Macet
-   **4** – Sangat macet

Nilai setiap segmen dijumlahkan dan dibandingkan dengan segmen tetangga untuk menentukan peringkat. Pemeringkatan ini membantu mengidentifikasi titik atraktif yang menjadi _targets_ dan _agents_ pada Layer 2.

Sebagai konfirmasi data observasi lapangan, terdapat dua jenis indeks:

-   **Berdasarkan hari** – Menjumlahkan data lalu lintas harian.
-   **Berdasarkan jam** – Menjumlahkan data lalu lintas per jam.

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table4.1).

_Tabel 4.1. Analisis data typical traffic kawasan Kalideres pada tiap RS._

| RS | Analisis dan penjelasan |
| --- | --- |
| A | Indeks tertinggi – RS A3 i:218, terjadi setelah masuk terminal bus (arah Jakarta), menandakan kemacetan sering terjadi.Lokasi strategis – RS A5 i:215, setelah RS A3, sebelum lampu merah Pesakih (arah Jakarta) dan belokan ke CBD DMB.Sebelum lampu merah – RS A2 i:214, berada sebelum lampu merah Jl. Peta Selatan (arah Jakarta).Data RS A dan hasil indeks penilaiannya.Heatmap dan grafik RS A. |
| B | Indeks tertinggi – RS B4 i:175, sebelum masuk terminal bus (arah Tangerang), menunjukkan kemacetan sering terjadi.Setelah titik padat – RS B5 i:163, di Jl. Daan Mogot (arah Tangerang) setelah RS B4.Data RS B dan hasil indeks penilaiannya.Heatmap dan grafik batang RS B. |
| C | Indeks tertinggi – RS C2 i:216, di ruas jalan inspeksi Timur (akses pemukiman padat), menyebabkan kemacetan sering terjadi.Akses industri – RS C3 i:146, berada di ruas jalan inspeksi Barat (akses kawasan industri).Data RS C dan hasil indeks penilaiannya. |
| XYZ | Indeks tertinggi – RS Y2 i:191, di ruas jalan dari Jl. Peta Selatan (pemukiman) menuju RS A3 Jl. Daan Mogot.Pemukiman tipe rusun – RS Z6 i:187, di ruas jalan dari Jl. Rusunawa Pesakih.Akses stasiun – RS Z2 i:186, di ruas jalan dari arah Stasiun Kalideres, Jl. Semanan Raya.Nilai indeks rendah – RS X (X2 dan X6).Data RS X, Y, dan Z serta hasil indeks penilaiannya.Heatmap dan grafik batang RS X, Y, dan Z. |
| N | Indeks tertinggi – RS N3 i:239, di belokan dari Terminal ke Jl. Daan Mogot (arah Tangerang), disebabkan penyempitan jalan di RS B3 dan adanya titik keramaian.Penyempitan jalan – RS N4 i:209, di belokan dari Terminal ke Jl. Daan Mogot (arah Jakarta), akibat penyempitan jalan dalam terminal serta simpul RS A3.Indeks sedang – RS N2, N6, dan N5.Data RS N dan hasil indeks penilaiannya.Heatmap dan grafik batang RS N. |

### 4.1.2. Persiapan geometri environment dari PlanetOSM

![Data geometri jalan (ways), titik (nodes), dan teks (legends) dari metadata PlanetOSM.](https://arnottferels.github.io/a/img/1920/CPpj.webp)

_Gambar 4.13. Data geometri jalan (ways), titik (nodes), dan teks (legends) dari metadata PlanetOSM._

Persiapan data geometri (_mesh_ dan BREP) digunakan untuk melengkapi analisis _typical traffic_ serta sebagai dasar pengaturan _environment_ pada ABM di Layer 2. Dalam radius 1 km dari bakal TH, terdapat berbagai fasilitas utama, seperti:

-   **Transportasi** – TransJakarta, stasiun.
-   **Pendidikan** – Sekolah, kampus.
-   **Ekonomi** – Pasar, supermarket.
-   **Kesehatan** – Rumah sakit, klinik.

### 4.1.3. Observasi lapangan

<a name="fig4.14"></a>

![Situasi kawasan Kalideres (arah Jakarta Barat).](https://arnottferels.github.io/a/img/1920/Hjhb.webp)

_Gambar 4.14. Situasi kawasan Kalideres (arah Jakarta Barat)._

<a name="fig4.15"></a>

![Situasi kawasan Kalideres (arah Tangerang).](https://arnottferels.github.io/a/img/1920/SZJt.webp)

_Gambar 4.15. Situasi kawasan Kalideres (arah Tangerang)._

Dalam radius 2 km dari terminal, kendaraan pribadi lebih dominan. Namun, semakin dekat ke terminal (radius 1 km), kendaraan umum seperti bus, angkot, dan ojek lebih sering terlihat.

Di dalam radius 500 meter dari terminal, kendaraan umum sering berhenti menunggu penumpang, menyebabkan kemacetan. Keberadaan pedagang asongan dan PKL di area ramai semakin memperparah kondisi ini. Meski jalur pedestrian telah direvitalisasi, sebagian area digunakan untuk memperluas fungsi bangunan atau oleh PKL yang berjualan.

### 4.1.4. Kesimpulan Layer 1

Berdasarkan analisis _typical traffic_ dari GMTT, metadata dan geometri PlanetOSM, serta observasi lapangan, titik representatif untuk simulasi ABM di Layer 2 telah ditentukan (lihat: [Gambar 4.17](#fig4.17)).

<a name="fig4.17"></a>

![(a) Representasi grafis segmen jalan (RS) berdasarkan peringkat; (b) Peta titik simulasi ABM dengan agen (⬤ AR, ⬤ AT) dan target (⬤ T1, ⬤ T2 ).](https://arnottferels.github.io/a/img/1920/UFF1.webp)

_Gambar 4.17. (a) Representasi grafis segmen jalan (RS) berdasarkan peringkat; (b) Peta titik simulasi ABM dengan agen (⬤ AR, ⬤ AT) dan target (⬤ T1, ⬤ T2 )._

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table4.2).

_Tabel 4.2. Legenda targets dan agents untuk input Layer 2._

| Warna | Definisi | Jumlah |
| --- | --- | --- |
| T1 | Target primer. Titik dengan keramaian tinggi, seperti PKL, pedagang asongan, kendaraan umum yang menunggu penumpang, dan penyempitan jalur. | 16 |
| T2 | Target sekunder. Titik dengan keramaian sedang, seperti PKL, pedagang asongan, kendaraan umum yang menunggu penumpang, dan penyempitan jalur. | 22 |
| AT | Agents (Transit). Titik asal manusia dari pusat kedatangan/keberangkatan, seperti halte TransJakarta, terminal (AKAP, Jaklingko, ojek), dan area menunggu penumpang informal. | 25 |
| AR | Agents (Residen). Titik asal manusia dari area pemukiman, seperti perumahan, perkampungan, apartemen, rusunawa, dan CBD. | 49 |

## 4.2. Layer 2: Agent-based modeling (ABM)

![Flowchart algoritma Layer 2.](https://arnottferels.github.io/a/img/1920/6K1E.webp)

_Gambar 4.18. Flowchart algoritma Layer 2._

Analisis pada layer ini bertujuan mendapatkan _curve trails_ representatif untuk setiap agen berdasarkan karakteristiknya. Tiga karakter dominan dirangkum dalam [Tabel 4.3](#table4.3).

Proses iterasi dijalankan sekitar 300 kali menggunakan geometri dari Layer 1 ([Gambar 4.17](#fig4.17)). Pemodelan dilakukan dengan Grasshopper dan Quelea.

### 4.2.1. Pengaturan agents dan proses simulasi

<a name="table4.3"></a>

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table4.3).

_Tabel 4.3. Pengaturan agents Layer 2._

| Iterasi | Tipe Agent | Properti | Pengaturan |
| --- | --- | --- | --- |
| Wandering | Align Force |
| 1 | Solo commuting | Pelajar dan pekerja | Activate | Deactivate |
| 2 | Solo walking | Pejalan kaki santai | Deactivate | Deactivate |
| 3 | Group touring | Tur kelompok | Deactivate | Activate |

Berdasarkan analisis Layer 1 dan observasi lapangan ([Gambar 4.14](#fig4.14), [Gambar 4.15](#fig4.15)), terdapat tiga karakter dominan yang dianalisis secara iteratif:

-   **Iterasi 1** – Representasi perilaku komuter
-   **Iterasi 2** – Representasi pejalan kaki santai
-   **Iterasi 3** – Representasi kelompok pejalan kaki

Setiap iterasi memiliki pengaturan unik untuk gaya, fokus, dan peran ([Tabel 4.3](#table4.3)). Selain itu, ada pengaturan umum untuk semua iterasi ([Tabel 4.4](#table4.4)).

<a name="table4.4"></a>

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table4.4).

_Tabel 4.4. Pengaturan umum simulasi ABM Layer 2._

| Pengaturan | Properti | Nilai |
| --- | --- | --- |
| Particle settings | Umur | −1 |
| Massa | 50 |
| Ukuran tubuh | 50 |
| Panjang riwayat | 500 |
| Agent settings | Kecepatan maksimum | 10 |
| Ambang batas | 2.5 |
| Jangkauan penglihatan | 50 |
| Sudut penglihatan | 360° |
| Emitter settings | Tingkat pembuatan | 1 |
| Titik (⬤ AR) | 49 |
| Titik (⬤ AT) | 25 |
| Quelea (⬤ AR) | 10 |
| Quelea (⬤ AT) | 40 |
| Kecepatan (⬤ AR) | 0.5, 0.5, 0 (vektor) |
| Kecepatan (⬤ AT) | 2, 2, 0 (vektor) |
| System (Particle Rules) | Jangkauan radius kedatangan (⬤ T1) | 8 |
| Jangkauan radius kedatangan (⬤ T2) | 13 |
| System (Agents Rules) | Pengali radius penglihatan | 0.9 |
| Waktu minimum untuk tabrakan (collision) | 9 unit |
| Jarak potensi tabrakan (collision) | 100 unit |

## 4.3. Representatif step tiap iterasi simulasi Layer 2

![Hasil simulasi per step di setiap iterasi Layer 2. (https://youtube.com/embed/SrGGRn_z6vc)](https://img.youtube.com/vi/SrGGRn_z6vc/sddefault.jpg)

_Video 4.2. Hasil simulasi per step di setiap iterasi Layer 2. (https://youtube.com/embed/SrGGRn_z6vc)_

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table4.5).

_Tabel 4.5. Hasil simulasi per step di setiap iterasi Layer 2._

| Iterasi (step) | Penjelasan |
| --- | --- |
| 1 (100) | Agents dominan bergerak ke timur dari terminal dan stasiun.Sedikit agents dari arah barat.Step 100 pada Iterasi 1. |
| 1 (200) | Jejak semakin tebal di timur.Agents dari barat mulai masuk persimpangan, belok ke selatan (stasiun), lalu ke timur.Agents dalam Arrival Radius target langsung berbalik karena Wandering aktif.Step 200 pada Iterasi 1. |
| 1 (349) | Jejak top 33% (ungu) dominan di timur persimpangan.Jejak top 66% (biru) lebih terlihat ke selatan menuju stasiun.Jejak sisanya (merah) tidak tampak.Step 349 (akhir) pada Iterasi 1. |
| 2 (100) | Pola pergerakan mirip Iterasi 1: dominan ke timur, sedikit dari barat.Step 100 pada Iterasi 2. |
| 2 (200) | Jejak semakin tebal di timur.Agents berputar dalam Arrival Radius target ⬤ T1, lalu ⬤ T2.Agents dari barat masuk persimpangan, belok ke selatan, lalu ke timur.Step 200 pada Iterasi 2. |
| 2 (299) | Jejak top 33% (ungu) tersebar luas.Jejak top 66% (biru) dominan di timur dan selatan.Jejak sisanya (merah) sedikit dan menyebar.Step 299 (akhir) pada Iterasi 2. |
| 3 (100) | Agents dominan menuju target ⬤ T1.Tidak ada pergerakan cepat seperti iterasi sebelumnya.Step 100 pada Iterasi 3. |
| 3 (300) | Jejak top 33% (ungu) dan top 66% (biru) lebih banyak berkumpul di Arrival Radius ⬤ T1 dan ⬤ T2.Jejak sisanya (merah) juga terkonsentrasi di Arrival Radius.Step 300 (akhir) pada Iterasi 3. |

### 4.3.1. Kesimpulan Layer 2

Pemodelan dinamis di setiap iterasi menggambarkan karakter masing-masing _agents_ (manusia). Perbedaan karakter terlihat jelas pada cara pergerakan mereka dalam ABM _environment_. Secara umum, area persimpangan terlihat padat dan ramai, yang diwakili oleh ⬤ T1 dan ⬤ T2. Pola persilangan di ruas jalan juga dapat menjadi dasar dalam menentukan aksis makro dan mikro pada tahap desain.

## 4.4. Layer 3: LS

![Flowchart algoritma Layer 3.](https://arnottferels.github.io/a/img/1920/xvxt.webp)

_Gambar 4.28. Flowchart algoritma Layer 3._

Pada layer ini, penghalusan dilakukan dengan menggabungkan tiga iterasi yang telah dilakukan sebelumnya. _Curve trails_ pada langkah akhir tiap iterasi digabung, lalu disederhanakan untuk menyederhanakan data menggunakan pengulangan metode LS. Aplikasi yang digunakan untuk pemodelan ini adalah Grasshopper dan Anemone.

### 4.4.1. Pengaturan algoritma LS dan proses iterasi

Proses simplifikasi menggunakan metode LS dilakukan dengan mendefinisikan setiap titik pada jarak 25 meter. Data titik kemudian dipisahkan menjadi titik ujung (_start_ dan _end points_) serta titik antara (_clothed points_). Setiap _clothed points_ dihitung berdasarkan perhitungan adaptasi dari metode LS, dengan variabel geometri “magnet” yang berasal dari titik proksimitas dan arah rata-rata vektornya (_average_). Perhitungan ini dilakukan berulang melalui sistem pengulangan (_loop_). Setelah variabel loop ditetapkan, iterasi dipilih secara bebas untuk mendapatkan abstraksi yang sesuai, yaitu penggambaran _curve trails_ baru yang lebih halus (_smoothed curves_).

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table4.6).

_Tabel 4.6. Representasi curve trails setiap langkah (step) iterasi Layer 3._

| Step | Iterasi |
| --- | --- |
| 0/35 | Step 0 dari 35 pada metode LS di Layer 3. |
| 5/35 | Step 5 dari 35 pada metode LS di Layer 3. |
| 10/35 | Step 10 dari 35 pada metode LS di Layer 3. |
| 15/35 | Step 15 dari 35 pada metode LS di Layer 3. |
| 20/35 | Step 20 dari 35 pada metode LS di Layer 3. |
| 25/35 | Step 25 dari 35 pada metode LS di Layer 3. |
| 30/35 | Step 30 dari 35 pada metode LS di Layer 3. |
| 35/35 | Step 35 dari 35 pada metode LS di Layer 3. |

### 4.4.2. Kesimpulan Layer 3

Penentuan step 10 dipilih karena bentuk _curve trails_ masih cukup representatif terhadap _curve trails_ awal, sehingga dapat diproses lebih lanjut pada layer berikutnya, yaitu Layer 4: SPA+A*. _Smoothed curve trails_ pada step 10 terlihat lebih sederhana, tetap representatif, dan tidak banyak berpindah. Berbeda dengan step 35, di mana _curve trails_ telah sangat dimodifikasi karena pengaruh “magnet” titik proksimitas.

## 4.5. Layer 4: SPA+A*

![Flowchart algoritma Layer 4.](https://arnottferels.github.io/a/img/1920/IDZ9.webp)

_Gambar 4.37. Flowchart algoritma Layer 4._

Pada layer ini, algoritma SPA+A* diterapkan untuk mempercepat simulasi pada layer berikutnya, Layer 5: MOO, yang memerlukan efisiensi dalam menghasilkan ribuan solusi. Seperti yang dijelaskan oleh Alieksieiev dan Mitall et al., algoritma A* terbukti cepat dan efektif dalam menghasilkan solusi (Alieksieiev, 2019 [^alieksieiev/2019]; Mittal et al., 2021 [^mittal-etal/2021]).

Penentuan titik-titik ujung (utara, timur, selatan, dan barat) sebagai end points dan titik tengah TH sebagai start point penting untuk persiapan algoritma A*. Selanjutnya, membuat mesh dengan edges rapat dan padat memungkinkan simulasi mendekati kondisi nyata (_real-world_). Aplikasi yang digunakan adalah pemodelan melalui Grasshopper, Arachne, dan Kangaroo 2 (TriRemesh).

### 4.5.1. Persiapan sistem algoritma SPA+A*

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table4.7).

_Tabel 4.7. Tahap persiapan sistem algoritma SPA+A* pada Layer 4._

| Iterasi (step) | Penjelasan |
| --- | --- |
| 1 | Menyiapkan polyline yang dihasilkan dari smoothed curve trails pada output dari Layer 3.Tahapan 1: Persiapan polylines pada Layer 4. |
| 2 | Melakukan offset pada polyline dan mengambil outer lines untuk persiapan mesh.Tahapan 2: Outer polylines pada Layer 4. |
| 3 | Menyederhanakan susunan control points dan degree of curve (derajat kurva) pada polylines.Tahapan 3: Rebuild dan simplify polylines pada Layer 4. |
| 4 | Mengonversi polylines yang tertutup menjadi mesh.Tahapan 4: Konversi polylines menjadi mesh pada Layer 4. |
| 5 | Mesh pada Tahapan 4 perlu dimodifikasi untuk merepresentasikan simulasi SPA+A*. Menggunakan komponen Kangaroo 2, yaitu TriRemesh, untuk mengonversi mesh menjadi segitiga yang mendekati sama sisi.Tahapan 5: Konversi mesh menjadi segitiga sama sisi pada Layer 4. |
| 6 | Menjalankan simulasi SPA+A* pada titik-titik representatif. Rute diwakili oleh garis dari mesh yang telah dimodifikasi.Implementasi dapat diteruskan ke Layer 5 dengan metode MOO. Start points: PS, End points: ⬤ T1 dan ⬤ T2.Tahapan 6: Implementasi SPA+A* pada Layer 4. |

### 4.5.2. Pengaturan algoritma SPA+A*

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table4.8).

_Tabel 4.8. Representasi hasil sistem algoritma SPA+A* pada Layer 5._

| No. | Penjelasan |
| --- | --- |
| 1 | Simulasi berjalan lancar pada Layer 5 menggunakan MOO. Titik awal: PS (nilai vektor tidak tetap, akan dioptimasi). Titik akhir: ⬤ T1 dan ⬤ T2 (nilai vektor tetap).Untuk visualisasi, garis-garis bertumpuk disederhanakan agar lebih mudah dipahami. Perhitungan tetap mengacu pada data awal.Pengaturan aktual SPA+A* untuk persiapan MOO pada Layer 5. |
| 2 | Penyederhanaan rute dengan $$\\text{control points} = 10$$, $$\\text{degree of curve} = 3$$.Tujuan: mempermudah pembacaan grafik tanpa mengubah data perhitungan.Pengaturan representatif SPA+A* untuk persiapan MOO pada Layer 5. |

### 4.5.3. Kesimpulan Layer 4

Ekstraksi data angka (_number_) dari setiap jarak antara titik start dan end (_curves_) menjadi dasar untuk pengolahan data pada simulasi MOO di Layer 5. Penggunaan algoritma A* pada simulasi SPA sangat penting, terutama jika hasil simulasi diharapkan kompleks dengan banyak opsi (_generative_). Oleh karena itu, algoritma dengan waktu komputasi yang cepat dibutuhkan.

## 4.6. Layer 5: MOO

![Flowchart algoritma Layer 5.](https://arnottferels.github.io/a/img/1920/ptBr.webp)

_Gambar 4.46. Flowchart algoritma Layer 5._

Pada Layer 5, simulasi MOO dijalankan menggunakan algoritma NSGA-2. Penyiapan `objectives` dilakukan berdasarkan kajian teori pada TH dan PS, menghasilkan 5 `objectives` yang mencakup:

1.  Jarak rata-rata antara titik koordinat PS terhadap tiap Target 1.
2.  Jarak rata-rata antara titik koordinat PS terhadap tiap Target 2.
3.  Jarak rata-rata antara titik koordinat PS terhadap titik koordinat PS lainnya.
4.  Total luas gabungan radius Voronoi per 500 m dari tiap titik koordinat PS.
5.  Total jumlah PS (lihat: [Tabel 4.9](#table4.9)).

Simulasi ini bertujuan agar setiap `objective` mencapai nilai minimum. Namun, menurut Sadegh et al., setiap `objective` tidak dapat mencapai nilai minimum secara bersamaan, karena set solusi akan saling bertentangan antar `objective`. Berdasarkan algoritma NSGA-2, penggunaan PF menghasilkan satu set solusi optimal yang representatif (Akbari et al., 2014 [^akbari-etal/2014]; Sadegh et al., 2022 [^sadegh-etal/2022]). `Objective` ini selanjutnya disebut sebagai `FO`.

Secara teknis, nilai setiap `FO` dan `Genes` sangat penting. Penyusunan algoritma parametrik untuk persiapan harus dilakukan dengan cermat. `Genes` yang digunakan adalah set parameter jarak antara _center points_ (bakal TH) dan PS dalam jangkauan (range) 300 m sampai 500 m dengan interval 10 m. Batas atas 500 m ditetapkan berdasarkan TOD Standard 3.0. Aplikasi yang digunakan untuk pemodelan adalah Grasshopper + Wallacei X + Wallacei Analytics.

### 4.6.1. Penentuan FO dan pengaturan algoritma mesin simulasi

<a name="table4.9"></a>

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table4.9).

_Tabel 4.9. Definisi FO Layer 5._

| FO | Definisi |
| --- | --- |
| FO1 (PS-to-T1 average distance) | Rata-rata jarak antara titik koordinat PS dan setiap ⬤ T1. |
| FO2 (PS-to-T2 average distance) | Rata-rata jarak antara titik koordinat PS dan setiap ⬤ T2. |
| FO3 (PS-to-PS distance) | Rata-rata jarak antara titik koordinat PS dan titik koordinat PS lainnya. |
| FO4 (PS radius area) | Total luas gabungan radius Voronoi dalam 500m dari setiap titik koordinat PS. |
| FO5 (Total PS) | Total jumlah PS. |

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table4.10).

_Tabel 4.10. Pengaturan simulasi dan parameter algoritma yang digunakan dalam Layer 5._

| Pengaturan | Parameter |
| --- | --- |
| Population | Generation Size |
| Generation Count |
| Population Size |
| Algorithms Parameters | Crossover Probability |
| Mutation Rate |
| Mutation Distribution Index |
| Crossover Distribution Index |
| Random Seed |
| Simulation Parameters | No. of Genes (Sliders) |
| No. of Values (Sliders Values) |
| No. of FO |
| Search Space |
| Runtime | Simulation Runtime |

Simulasi dilakukan selama ±25 menit pada komputer dengan OS Windows 10, Processor i7-7950H, CPU 2.60 GHz (12 CPUs), ~2.6GHz, Memory 16 GB RAM.

### 4.6.2. Output mesin simulasi

Setelah 2500 iterasi solusi, sesuai pengaturan di atas, analisis dapat ditarik seperti yang terlihat pada [Gambar 4.47](#fig4.47).

<a name="fig4.47"></a>

![Output grafik untuk setiap FO pada solusi data Layer 5. Hasil simulasi menampilkan (a) visualisasi PCP, (b) Pareto front dari 2.500 solusi, dan (c) grafik komprehensif yang menggambarkan FO1-FO5 pada FVG, SDG, dan SDT.](https://arnottferels.github.io/a/img/1080/JJhH.webp)

_Gambar 4.47. Output grafik untuk setiap FO pada solusi data Layer 5. Hasil simulasi menampilkan (a) visualisasi PCP, (b) Pareto front dari 2.500 solusi, dan (c) grafik komprehensif yang menggambarkan FO1-FO5 pada FVG, SDG, dan SDT._

Sebagaimana dijelaskan oleh Makki et al. (2019), grafik FVG dan PCP menunjukkan bahwa simulasi berjalan dengan baik. Garis pada `Last Generation` yang berwarna biru menunjukkan nilai minimum pada setiap `FO`, kecuali untuk `FO5`. Nilai `FO5` hanya mencakup 3 angka, yaitu 6, 7, dan 8, yang tidak menjadi masalah besar. Sejalan dengan FVG dan PCP, grafik MVT dan SDT menunjukkan tren yang melandai pada setiap `FO`, kecuali `FO5`. Grafik SDG juga menunjukkan penurunan, dengan nilai yang semakin kecil dan mengarah ke kiri pada setiap `FO`, kecuali `FO5`. Di grafik PF dalam bentuk bidang (_surface_) di ruang _objective_, terlihat bahwa titiknya mengarah ke (0,0,0), yang menandakan bahwa simulasi telah berjalan dengan baik (Makki et al., 2019 [^makki-etal/2019]).

### 4.6.3. Kesimpulan Layer 5

Simulasi MOO yang dilakukan pada mesin yang telah diset dengan `50 Gen` dan `50 Idv` tiap `Generation`, serta `Search Space` senilai `2500 Solutions`, menunjukkan hasil yang baik. Berdasarkan grafik FVG, MVT, SDT, SDG, PCP, dan PF di ruang _objective spaces_ dari `First Generation` hingga `Last Generation`, dapat disimpulkan bahwa simulasi evolusioner telah berjalan dengan lancar dan siap untuk dianalisis lebih lanjut dengan metode _clustering_ untuk memilih solusi terbaik berdasarkan intervensi desainer pada layer berikutnya.

## 4.7. Layer 6: Clustering

Dengan 2500 solusi yang dihasilkan, perlu dilakukan pemilihan metode _clustering_ untuk menyintesiskan satu solusi terbaik yang akan menjadi panduan untuk tahap desain skematik.

### 4.7.1. Clustering solusi Layer 6

Pada layer ini, _clustering_ dilakukan melalui sembilan iterasi: Iterasi 1 (Iter1), Iterasi 2 (Iter2), Iterasi 3 (Iter3), Iterasi 5 (Iter5), Iterasi 6 (Iter6), Iterasi 7 (Iter7), Iterasi 8 (Iter8), dan Iterasi 9 (Iter9). Pemilihan metode dan tahapan _clustering_ disesuaikan dengan prioritas objektif yang ada.

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table4.11).

_Tabel 4.11. Clustering solusi data Layer 6._

| Pendekatan | Iterasi | Tujuan (Objective) | Alat (Tools) |
| --- | --- | --- | --- |
| Machine-driven | Iter0 | Simulasi evolusioner pada Layer 5 menghasilkan kandidat solusi (Gambar 4.48). | Rhino, Grasshopper, Wallacei |
| Iter1 | Algoritma clustering K-means mengelompokkan solusi dari Iter0 menjadi lima klaster (Gambar 4.49). | Rhino, Grasshopper, Wallacei |
| Algorithm-driven | Iter2 | Memberikan skor indeks pada solusi FO dari Iter1 berdasarkan prioritas dalam konteks yang diberikan (Gambar 4.49). | Rhino, Grasshopper |
| Iter3 | Menyoroti 20 nilai teratas untuk setiap solusi tujuan dari Iter2 (Gambar 4.49). | Rhino, Grasshopper |
| Iter4 | Menggabungkan output data dari Iter2 dan Iter3 (Gambar 4.49). | Rhino, Grasshopper |
| Iter5 | Mengidentifikasi solusi dominasi teratas dari Iter4 (Gambar 4.49). | Rhino, Grasshopper |
| Collaborative-driven | Iter6 | Mengidentifikasi klaster visual baru berdasarkan pengenalan FO dari solusi Iter5 menggunakan grafik DF (Gambar 4.50). | Microsoft Excel |
| Context-driven | Iter7 | Memilih klaster visual dengan skor indeks tertinggi dari solusi Iter6 menggunakan metode pengindeksan yang sama seperti Iter2 (Gambar 4.51 bagian bawah). | Microsoft Excel |
| Iter8 | Menyesuaikan pengindeksan berdasarkan panjang rute dalam radius pertama TOD dan menghitungnya untuk solusi Iter7 (Gambar 4.52). | Microsoft Excel |
| Iter9 | Menghitung ulang output dari Iter8 untuk menemukan panduan desain dengan pengindeksan yang disesuaikan berdasarkan panjang rute, dengan tujuan untuk menemukan rute terbaik menuju lalu lintas utama berdasarkan potensi konektivitas TOD, khususnya Rute Selatan (Gambar 4.52). | Microsoft Excel |

#### 4.7.1.1. Iter1: K-means clustering melalui PF (All Generation)

<a name="fig4.48"></a>

![K-means clustering, PF dalam objective spaces.](https://arnottferels.github.io/a/img/1800/sXRj.webp)

_Gambar 4.48. K-means clustering, PF dalam objective spaces._

Pada Iter1, _clustering_ dilakukan menggunakan mesin WallaceiX pada 2.500 solusi berdasarkan K-means _clustering_ pada PF dari seluruh generasi (`All Generation`), yang dibagi menjadi 5 klaster. Hasilnya adalah 263 solusi dengan profil rata-rata K-means pada cluster 1 (C1) `Gen30, Idv38`, C2 `Gen40, Idv27`, C3 `Gen32, Idv4`, C4 `Gen39, Idv34`, dan C5 `Gen23, Idv10`.

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table4.12).

_Tabel 4.12. Profil cluster, jumlah cluster, dan nilai rata-rata cluster pada Iter1._

| Cluster | Jumlah | Gen | Idv |
| --- | --- | --- | --- |
| C1 | 57 | Gen30 | Idv38 |
| C2 | 40 | Gen40 | Idv27 |
| C3 | 14 | Gen32 | Idv4 |
| C4 | 5 | Gen39 | Idv34 |
| C5 | 148 | Gen23 | Idv10 |

#### 4.7.1.2. Iter2: Nilai indeks total teratas (semua FO)

Pada Iter2, _clustering_ dilakukan pada 263 solusi dari Iter1 dalam empat langkah. Langkah pertama, setiap nilai diindeks ulang berdasarkan tingkat prioritasnya, yaitu: FO1 (`0 to 30`), FO2 (`0 to 30`), FO3 (`0 to 20`), FO4 (`0 to 10`), dan FO5 (`0 to 10`). Langkah kedua, semua nilai indeks dijumlahkan. Langkah ketiga, dilakukan sortir dari tinggi ke rendah. Langkah keempat, nilai indeks tertinggi atau top 1 diambil. Hasilnya adalah 81 solusi.

#### 4.7.1.3. Iter3: Nilai indeks total 20 teratas (tiap FO)

Pada Iter3, _clustering_ dilakukan pada 263 solusi dari Iter1 dalam tiga langkah. Langkah pertama, data diambil dari Iter2 langkah pertama. Langkah kedua, dilakukan sortir dari tinggi ke rendah untuk setiap FO. Langkah ketiga, 20 nilai indeks tertinggi atau top 20 diambil. Hasilnya adalah 100 solusi, dengan 56 solusi tunggal.

<a name="fig4.49"></a>

![Metode algorithm-driven yang diformulasikan di Grasshopper.](https://arnottferels.github.io/a/img/1800/v5OF.webp)

_Gambar 4.49. Metode algorithm-driven yang diformulasikan di Grasshopper._

#### 4.7.1.4. Iter4: Penggabungan data Iter2 dan Iter3

Pada Iter4, data dari Iter2 dan Iter3 digabungkan menjadi 181 solusi. Langkah ini dilakukan untuk mengidentifikasi nilai indeks tertinggi, baik secara keseluruhan maupun berdasarkan setiap objektif. Nilai yang berulang menjadi dasar untuk menentukan solusi yang paling tren (_repeated solutions_).

#### 4.7.1.5. Iter5: Nilai indeks solusi yang paling sering muncul

Pada Iter5, _clustering_ pada 181 solusi dari Iter4 dilakukan dalam dua langkah. Langkah pertama, dilakukan sortir dari tinggi ke rendah untuk setiap FO. Langkah kedua, dua nilai indeks tertinggi atau top 2 diambil. Hasilnya adalah 29 solusi, dengan rincian: 8 solusi untuk top 1 dan 21 solusi untuk top 2.

#### 4.7.1.6. Iter6: Penyederhanaan clustering dengan visual radar plot

Pada Iter6, _clustering_ pada 29 solusi dari Iter5 dilakukan dalam dua langkah. Langkah pertama, dilakukan sortir visual pada radar plot yang berulang. Langkah kedua, data berulang dibagi ke dalam masing-masing kluster. Hasilnya adalah 4 kluster dengan komposisi seperti yang ditunjukkan pada [Gambar 4.50](#fig4.50).

<a name="fig4.50"></a>

![Legenda peta untuk koordinat PS dan variabel terkait pada Iter8 dan Iter9.](https://arnottferels.github.io/a/img/1800/mRvN.webp)

_Gambar 4.50. Legenda peta untuk koordinat PS dan variabel terkait pada Iter8 dan Iter9._

#### 4.7.1.7. Iter7: Nilai indeks kluster teratas

Pada Iter7, _clustering_ dilakukan pada 4 kluster dari Iter6. Tujuannya adalah untuk menentukan data terbaik berdasarkan perulangan data (yang populer) dan tingkat prioritas setiap FO. Dengan merujuk pada porsi persentase pada Iter2 langkah 1, berdasarkan [Persamaan 1](#eq1).

$$
V \\times \\sum\_{i=1}^{5} \\text{FO}\_i \\times w\_i \\tag{1}
$$

Dimana $${w\_1=w\_2=0.3}$$, $${w\_3=0.2}$$, dan $${(w\_4=w\_5=0.1)}$$.

Diketahui bahwa hasilnya menunjukkan kluster 1 memiliki nilai indeks tertinggi, yaitu 240. Dengan demikian, diperoleh 16 solusi untuk kluster 1 (lihat [Gambar 4.50](#fig4.50)).

<a name="fig4.51"></a>

![Profil kluster dari hasil simplifikasi radar plot secara visual.](https://arnottferels.github.io/a/img/1800/lv5O.webp)

_Gambar 4.51. Profil kluster dari hasil simplifikasi radar plot secara visual._

#### 4.7.1.8. Iter8: Nilai indeks ring 1 PS ke titik pusat (center point)

Pada Iter8, pemeringkatan ulang dilakukan secara spesifik pada setiap ring 1 titik $${\\text{PS}\_{\\text{east}\_1}}$$, $${\\text{PS}\_{\\text{south}\_1}}$$, dan $${\\text{PS}\_{\\text{west}\_1}}$$. Tujuan langkah ini adalah untuk mereduksi jarak tempuh pada radius prioritas. Berdasarkan porsi persentase keterhubungan antara terminal dan stasiun, South-1 memiliki bobot 2 poin, sementara yang lainnya 1 poin. Berdasarkan [Persamaan 2](#eq2), hasilnya adalah 5 solusi.

$$
\\sum\_{\\text{direction} \\in \\{\\text{east}, \\text{south}, \\text{west}\\}} \\text{PS}\_{\\text{direction}\_1} \\times w\_{\\text{direction}} \\tag{2}
$$

Dimana $$w\_{\\text{east}} = 0.25$$, $$w\_{\\text{south}} = 0.5$$, dan $$w\_{\\text{west}} = 0.25$$.

<a name="fig4.52"></a>

![Proses clustering pada Iter7 berdasarkan rumus bobot kustom untuk setiap FO.](https://arnottferels.github.io/a/img/1800/VZvF.webp)

_Gambar 4.52. Proses clustering pada Iter7 berdasarkan rumus bobot kustom untuk setiap FO._

#### 4.7.1.9. Iter9: Nilai indeks PS (selatan) ke titik pusat (center point)

Pada Iter9, pemeringkatan ulang dilakukan secara spesifik pada ruas jalan selatan, yang dinilai sangat penting berdasarkan analisis typical traffic pada Layer 1 dan observasi lapangan, yaitu South-1 ($${\\text{PS}\_{\\text{south}\_1}}$$), South-2 ($${\\text{PS}\_{\\text{south}\_2}}$$), dan South-3 ($${\\text{PS}\_{\\text{south}\_3}}$$). Tujuannya adalah untuk mereduksi jarak tempuh pada rute prioritas (selatan). Berdasarkan porsi persentase keterhubungan antara PS dan titik pusat (yang akan menjadi TH), $${\\text{PS}\_{\\text{south}\_1}}$$ memiliki bobot lima poin, $${\\text{PS}\_{\\text{south}\_2}}$$ tiga poin, dan $${\\text{PS}\_{\\text{south}\_3}}$$ dua poin. Berdasarkan [Persamaan 3](#eq3), hasil yang diperoleh adalah 2 solusi identik, sehingga salah satunya dipilih: `Gen47, Idv30`.

$$
\\sum\_{i=1}^{3} \\text{PS}\_{\\text{south}\_i} \\times w\_i \\tag{3}
$$

Dimana $$w\_1 = 0.5$$, $$w\_2 = 0.3$$, dan $$w\_3 = 0.2$$.

### 4.7.2. Kesimpulan Layer 6

Setelah dilakukan _clustering_ sebanyak 5 kali dengan metodologi yang disusun untuk menyintesiskan hasil representatif, diperoleh hasil terpilih yang ditunjukkan pada [Gambar 4.53](#fig4.53).

<a name="fig4.53"></a>

![Selected solution yang dihasilkan melalui metode clustering.](https://arnottferels.github.io/a/img/1800/uVj9.webp)

_Gambar 4.53. Selected solution yang dihasilkan melalui metode clustering._

## 4.8. Simpulan penerapan metode desain DML

_Selected solution_ yaitu: `Gen47, Idv30`, memiliki kriteria sebagai berikut:

1.  `Genes` pada tiap titik PS terhadap center points bakal TH memenuhi standar: Jarak di bawah 500 meter, sesuai dengan TOD Standard 3.0.
2.  PS pada Ring 1 dengan jarak minimum adalah solusi terbaik (_best solution_): Lebih dekat dengan jalan utama dan center points bakal TH; dipertimbangkan dan diputuskan berdasarkan hasil Layer 1.
3.  PS di posisi selatan adalah solusi terbaik (_best solution_): Lebih dekat dengan jalan utama, bakal TH, dan menurun ke arah stasiun Kalideres; dipertimbangkan dan diputuskan berdasarkan hasil Layer 1 dan ABM.
4.  Garis hasil SPA+A* dapat menjadi dasar dalam menentukan pola pergerakan manusia: Mendukung simulasi ABM; berfungsi sebagai aksis mayor dan minor dalam desain TH.
5.  PS dengan perwakilan titik dapat menjadi panduan dalam proses desain skematik TH: Memberikan acuan dalam pengembangan desain skematik TH.

# 5. Desain

## 5.1. Konteks dan konsep desain

Berdasarkan analisis dan simulasi pada [Bab 4](#analisis-dan-simulasi) (ringkasan ilustrasi: [Gambar 5.1](#fig5.1)), penyusunan desain TH dan PS didasarkan pada hasil `Gen47, Idv30`. Dengan demikian, lokasi rekomendasi untuk PS dapat dipetakan. Sesuai dengan prinsip TOD ([Gambar 5.2](#fig5.2)), terutama aspek _walkability_, konektivitas antara terminal dan stasiun, serta aksesibilitas dari kawasan permukiman ke terminal dan stasiun dapat ditingkatkan.

<a name="fig5.1"></a>

![Aksonometri pola pergerakan berdasarkan hasil analisis dan simulasi ABM, SPA+A*, dan MOO.](https://arnottferels.github.io/a/img/1814/bDRr.webp)

_Gambar 5.1. Aksonometri pola pergerakan berdasarkan hasil analisis dan simulasi ABM, SPA+A*, dan MOO._

<a name="fig5.2"></a>

![Konteks penempatan koordinat PS, pusat PS sebagai TH, serta jangkauan radiusnya; blok bangunan TH, titik-titik PS, fungsi bangunan sekitar, dan cakupan radiusnya.](https://arnottferels.github.io/a/img/1371/jL3m.webp)

_Gambar 5.2. Konteks penempatan koordinat PS, pusat PS sebagai TH, serta jangkauan radiusnya; blok bangunan TH, titik-titik PS, fungsi bangunan sekitar, dan cakupan radiusnya._

Pada [Gambar 5.2](#fig5.2) (warna biru di tengah), massa bangunan ditempatkan di pusat kawasan, tepat di atas Jalan Nasional Jl. Daan Mogot. Bentuknya dikembangkan dari pola hasil simulasi sebelumnya, sehingga diharapkan pergerakan pengguna dalam desain menjadi lebih nyaman dan efisien.

![Site plan yang menunjukkan pola desain platform, bangunan TH, entrance, ruang hijau, dan konteksnya. (a) Potongan A-A (lihat: Gambar 5.4); (b) Potongan B-B (lihat: Gambar 5.4).](https://arnottferels.github.io/a/img/1920/cLtF.webp)

_Gambar 5.3. Site plan yang menunjukkan pola desain platform, bangunan TH, entrance, ruang hijau, dan konteksnya. (a) Potongan A-A (lihat: Gambar 5.4); (b) Potongan B-B (lihat: Gambar 5.4)._

<a name="fig5.4"></a>

![Potongan A-A](https://arnottferels.github.io/a/img/1485/0st3.webp)

_Gambar 5.4. Potongan A-A_

![Potongan B-B](https://arnottferels.github.io/a/img/1485/ptft.webp)

_Gambar 5.5. Potongan B-B_

Secara konseptual, setiap sisi _entrance_ platform dilengkapi _ramp_ untuk memastikan aksesibilitas bagi penyandang disabilitas. Sirkulasi utama memiliki atap sebagai peneduh. Area _green space_ berada di tengah platform dengan void di bagian tengahnya. Pada sumbu utara-selatan (lihat: [Gambar 5.4](#fig5.4) dan [Gambar 5.6](#fig5.6)), terdapat bangunan semi-publik dengan sistem peneduh yang lebih besar dibandingkan platform.

<a name="fig5.6"></a>

![Visualisasi suasana pagi dan malam hari pada bangunan semi-publik di sumbu utara-selatan, dengan sistem peneduh lebih besar dibandingkan platform.](https://arnottferels.github.io/a/img/1920/Tj9S.webp)

_Gambar 5.6. Visualisasi suasana pagi dan malam hari pada bangunan semi-publik di sumbu utara-selatan, dengan sistem peneduh lebih besar dibandingkan platform._

![Visualisasi entrance gate dari berbagai arah: timur (arah Jakarta), barat (arah Tangerang), selatan (arah stasiun/pasar), dan utara (arah terminal).](https://arnottferels.github.io/a/img/1920/MDtd.webp)

_Gambar 5.7. Visualisasi entrance gate dari berbagai arah: timur (arah Jakarta), barat (arah Tangerang), selatan (arah stasiun/pasar), dan utara (arah terminal)._

## 5.2. Zona utama dan fitur penting dalam desain

<a name="fig5.8"></a>

![Aksonometri pola pergerakan, konteks, dan implementasinya dalam desain TH. (1) Trees and vegetation, (2) green space, (3) ramp, (4) entrance gate.](https://arnottferels.github.io/a/img/1920/HZPV.webp)

_Gambar 5.8. Aksonometri pola pergerakan, konteks, dan implementasinya dalam desain TH. (1) Trees and vegetation, (2) green space, (3) ramp, (4) entrance gate._

Zona utama dalam TH terbagi menjadi dua bagian (lihat: [Gambar 5.8](#fig5.8)).

Platform berfungsi sebagai zona publik yang dapat diakses oleh semua pengguna. Sementara itu, _tower_ memiliki pembagian fungsi: lantai dasar dan lantai satu sebagai zona publik, sedangkan lantai dua, tiga, dan empat sebagai zona semi-publik.

Fitur _green space_ dirancang di tengah setiap sisi platform, menciptakan ruang yang lebih atraktif bagi pengguna dan lingkungan sekitar. Selain itu, desain ini juga berkontribusi terhadap peningkatan RTH di Jakarta ([Gambar 5.9](#fig5.9)).

<a name="fig5.9"></a>

![Visualisasi suasana pagi dan malam hari pada green space di platform.](https://arnottferels.github.io/a/img/1920/ndfx.webp)

_Gambar 5.9. Visualisasi suasana pagi dan malam hari pada green space di platform._

## 5.3. Program ruang, fitur, dan aksesibilitas dalam desain

<a name="fig5.10"></a>

![Aksonometri zona, program ruang, fitur, dan aksesibilitas dalam desain TH.](https://arnottferels.github.io/a/img/1485/s18i.webp)

_Gambar 5.10. Aksonometri zona, program ruang, fitur, dan aksesibilitas dalam desain TH._

Platform mencakup beberapa fungsi utama: _information center_, area UMKM, _viewing deck_, _green space_, _bridge_, dan layanan pendukung lainnya. _Tower_ mencakup ruang servis, operasional, manajemen, restoran, hotel, _multiuse space_, serta fasilitas lain. Visualisasi dapat dilihat pada [Gambar 5.11](#fig5.11) hingga [Gambar 5.17](#fig5.17).

<a name="fig5.11"></a>

![Urutan Urutan dari kiri ke kanan: Visualisasi halte TJ di sisi timur, selatan, barat, dan area sirkulasi.](https://arnottferels.github.io/a/img/1920/Czpt.webp)

_Gambar 5.11. Urutan Urutan dari kiri ke kanan: Visualisasi halte TJ di sisi timur, selatan, barat, dan area sirkulasi._

![Urutan Urutan dari kiri ke kanan: Visualisasi entrance gate dari arah timur (Jakarta), barat (Tangerang), selatan (stasiun/pasar), dan utara (terminal).](https://arnottferels.github.io/a/img/1920/cBLL.webp)

_Gambar 5.12. Urutan Urutan dari kiri ke kanan: Visualisasi entrance gate dari arah timur (Jakarta), barat (Tangerang), selatan (stasiun/pasar), dan utara (terminal)._

![Visualisasi halte TJ dan koneksi sirkulasi di berbagai sisi.](https://arnottferels.github.io/a/img/1920/QLr3.webp)

_Gambar 5.13. Visualisasi halte TJ dan koneksi sirkulasi di berbagai sisi._

![Urutan Urutan dari kiri ke kanan: Visualisasi transisi sirkulasi dari lantai 1 platform ke/dari tower arah terminal, serta pemandangan dari tangga.](https://arnottferels.github.io/a/img/1920/cpNF.webp)

_Gambar 5.14. Urutan Urutan dari kiri ke kanan: Visualisasi transisi sirkulasi dari lantai 1 platform ke/dari tower arah terminal, serta pemandangan dari tangga._

![Visualisasi fitur bridge yang menghubungkan platform timur dan barat.](https://arnottferels.github.io/a/img/1921/BfTj.webp)

_Gambar 5.15. Visualisasi fitur bridge yang menghubungkan platform timur dan barat._

![Visualisasi area tengah yang digunakan untuk UMKM, information center, dan acara temporal.](https://arnottferels.github.io/a/img/1920/x5kn.webp)

_Gambar 5.16. Visualisasi area tengah yang digunakan untuk UMKM, information center, dan acara temporal._

<a name="fig5.17"></a>

![Visualisasi viewing deck serta tampilannya dari jalan raya.](https://arnottferels.github.io/a/img/1920/WVrd.webp)

_Gambar 5.17. Visualisasi viewing deck serta tampilannya dari jalan raya._

## 5.4. Sekuensial potongan desain

Potongan perspektif menunjukkan desain dari timur ke barat (`X1`–`X7`) dan selatan ke utara (`Y1`–`Y7`). Lihat [Gambar 5.18](#fig5.18) dan [Gambar 5.19](#fig5.19).

<a name="fig5.18"></a>

![Urutan dari atas ke bawah: Potongan perspektif X1–X7, menunjukkan suasana di zona publik dan semi-publik, termasuk green space dan UMKM.](https://arnottferels.github.io/a/img/1920/A1Eb.webp)

_Gambar 5.18. Urutan dari atas ke bawah: Potongan perspektif X1–X7, menunjukkan suasana di zona publik dan semi-publik, termasuk green space dan UMKM._

<a name="fig5.19"></a>

![Urutan dari atas ke bawah: Potongan perspektif Y1–Y7, menggambarkan aktivitas dari zona publik hingga semi-publik dalam bangunan.](https://arnottferels.github.io/a/img/1920/DfhJ.webp)

_Gambar 5.19. Urutan dari atas ke bawah: Potongan perspektif Y1–Y7, menggambarkan aktivitas dari zona publik hingga semi-publik dalam bangunan._

## 5.5. Konsep hijau

Konsep hijau diterapkan melalui sistem koleksi air di _gutter_ atap dan lantai platform untuk menyiram tanaman di _green space_. Efisiensi energi dicapai melalui bukaan vertikal (jendela) dan horizontal (_skylight_, _void_). Penggunaan material prefabrikasi meningkatkan efisiensi konstruksi serta kenyamanan ruang (lihat [Gambar 5.10](#fig5.10)).

## 5.6. Struktur dan material

Material utama yang digunakan (lihat [Gambar 5.10](#fig5.10)):

1.  **Atap** – _Prefab tempered glass_ dengan struktur baja bentang panjang.
2.  **Fasad** – Panel _Fiberglass Reinforced Plastic_ (GRP) dengan struktur _Glass Fiber Reinforced Polymer_ (GFRP).
3.  **Lantai** – Beton bertulang dengan finishing _epoxy coating_.
4.  **Struktur lantai platform** – Beton bertulang dengan sistem _waffle slab_.
5.  **Struktur lantai non-platform** – Beton bertulang, dengan area _green space_ menggunakan ketebalan minimal 1 meter.

## 5.7. Gambar arsitektur

Lihat online: https://arnottferels.github.io/a/pdf/d3aB.pdf

> [!TIP]
Versi HTML dari table ini tersedia [di sini](https://arnottferels.github.io/report/mars-tesis/#table5.1).

_Tabel 5.1. Gambar arsitektur_

| Hal | Gambar | Skala |
| --- | --- | --- |
| 1 | Konteks (Context) | 1:12500 (A3) |
| 2 | Blok Plan | 1:6250 (A3) |
| 3 | Site Plan | 1:1250 (A3) |
| 4 | Denah Lantai Dasar | 1:1250 (A3) |
| 5 | Denah Lantai 1 | 1:1250 (A3) |
| 6 | Denah Lantai 2, 3, dan 4 | 1:1250 (A3) |
| 7 | Tampak Selatan, Timur, Barat, dan Utara | 1:1250 (A3) |
| 8 | Potongan A-A dan B-B | 1:1250 (A3) |
| 9 | Potongan Detail C-C | 1:200 (A3) |
| 10 | Aksonometri: Pola pergerakan, titik ruang publik, dan konteks | NTS |
| 11 | Aksonometri: Pola pergerakan dan konteks terhadap desain | NTS |
| 12 | Aksonometri: Struktur dan material | NTS |
| 13 | Aksonometri: Zona, program ruang, fitur, dan aksesibilitas | NTS |
| 14 | Aksonometri: Konsep hijau | NTS |
| 15 | Potongan Perspektif Y1 dan Y2 | NTS |
| 16 | Potongan Perspektif Y3, Y4, Y5, Y6, dan Y7 | NTS |
| 17 | Potongan Perspektif X1 dan X2 | NTS |
| 18 | Potongan Perspektif X3 dan X4 | NTS |
| 19 | Potongan Perspektif X5, X6, dan X7 | NTS |
| 20 | 3D Visualisasi | NTS |
| 21 | 3D Visualisasi | NTS |
| 22 | 3D Visualisasi | NTS |

# 6. Penutup

## 6.1. Kesimpulan

Metode DML membantu desainer menciptakan kawasan yang lebih ramah pejalan kaki, terintegrasi dengan transportasi publik, dan memiliki tata letak PS yang optimal berdasarkan aspek _walkability_. Dengan pendekatan dinamis, DML memungkinkan analisis fenomena, simulasi, dan pemilihan solusi terbaik. Metode ini menggabungkan berbagai isu transportasi dan konteks studi kasus, sehingga dapat menjadi panduan desain yang efektif. Hasil analisisnya juga dapat digunakan sebagai dasar perancangan TH dan PS.

## 6.2. Saran

1.  **Untuk desainer dan arsitek** – Dapat menggunakan dan mengembangkan DML sesuai dengan kebutuhan proyek atau studi kasus.
2.  **Untuk peneliti dan pengembang** – Dapat mengembangkan DML agar lebih canggih dalam mendukung desain berbasis _walkability_, mobilitas manusia, dan integrasi transportasi.
3.  **Untuk pemerintah** – Dapat memanfaatkan DML untuk mengidentifikasi simpul strategis, seperti lokasi PS, serta menghubungkan kawasan hingga skala kota guna meningkatkan kualitas hidup masyarakat.
4.  **Untuk masyarakat** – Dapat berpartisipasi dalam proses desain dengan memberikan masukan kepada pemerintah, desainer, atau arsitek agar tata ruang lebih sesuai dengan kebutuhan sosial dan budaya lokal.

# A. Lampiran

Lihat: _[Lampiran](https://arnottferels.github.io/report/mars-tesis/lampiran/)._

# Referensi

[^abar-etal/2017]: Abar, S., Theodoropoulos, G. K., Lemarinier, P., dan O’Hare, G. M. P. (2017): Agent Based Modelling and Simulation tools: A review of The state-of-art software, Computer Science Review, 24, 13–33. [https://doi.org/10.1016/j.cosrev.2017.03.001](https://doi.org/10.1016/j.cosrev.2017.03.001)
[^akbar-etal/2019]: Akbar, A. (2019): Ilustrasi: Rangkaian kereta MRT melintas di bawah Halte Transjakarta Centrale Stichting Wederopbouw (CSW) koridor 13 di Jakarta, Antaranews, Jakarta, diperoleh 24 April 2022, melalui situs internet: [https://www.antaranews.com/berita/1374858](https://www.antaranews.com/berita/1374858).
[^akbari-etal/2014]: Akbari, M., Asadi, P., Besharati Givi, M. K., dan Khodabandehlouie, G. (2014): 13 - Artificial neural network and optimization (Woodhead Publishing Series in Welding and Other Joining Technologies), 543–599 dalam M. K. B. Givi dan P. Asadi, ed., Advances in Friction-Stir Welding and Processing, Woodhead Publishing. [https://doi.org/10.1533/9780857094551.543](https://doi.org/10.1533/9780857094551.543)
[^alieksieiev/2019]: Alieksieiev, V. (2019): Artificial Locust Swarm Routing Algorithm: : An Approach to Consider both Routing via FRA and Applying RAD, 2019 International Conference on Information and Digital Technologies (IDT), 1–10. [https://doi.org/10.1109/DT.2019.8813465](https://doi.org/10.1109/DT.2019.8813465)
[^alvarado-dan-casiano/2022]: Alvarado Vazquez, S., dan Casiano Flores, C. (2022): The perception of public spaces in Mexico city, a governance approach, Journal of Urban Management, 11(1), 72–81. [https://doi.org/10.1016/j.jum.2021.10.002](https://doi.org/10.1016/j.jum.2021.10.002)
[^andersson/2016]: Andersson, C. (2016): Public Space and The New Urban Agenda, The Journal of Public Space, 1(1), 5–10. [https://doi.org/10.5204/jps.v1i1.4](https://doi.org/10.5204/jps.v1i1.4)
[^antara/2022]: Antara (2022): Kemacetan di DKI Jakarta, VOI, Jakarta, diperoleh 27 April 2022, melalui situs internet: [https://voi.id/bernas/135620/kemacetan-dki-jakarta-menurun-kini-peringkat-46-kota-termacet-di-dunia-ini-salah-satu-faktornya](https://voi.id/bernas/135620/kemacetan-dki-jakarta-menurun-kini-peringkat-46-kota-termacet-di-dunia-ini-salah-satu-faktornya).
[^archdaily/2018]: ArchDaily (29 Agustus 2018): Salesforce Transit Center / Pelli Clarke Pelli Architects, diperoleh 24 Mei 2022, melalui situs internet: [https://www.archdaily.com/900117/salesforce-transit-center-pelli-clarke-pelli-architects](https://www.archdaily.com/900117/salesforce-transit-center-pelli-clarke-pelli-architects).
[^archdaily/t.t.]: ArchDaily (t.t.): Oculus Transportation Hub, diperoleh 24 Mei 2022, melalui situs internet: [https://www.officialworldtradecenter.com/content/wtc/en/local/learn-about-wtc/oculus-transportation-hub.html](https://www.officialworldtradecenter.com/content/wtc/en/local/learn-about-wtc/oculus-transportation-hub.html).
[^asian-development-bank/2015]: Asian Development Bank (2015): Improving Interchanges: Introducing Best Practices on Multimodal Interchange Hub Development in The People’s Republic of China, Asian Development Bank, diperoleh 27 April 2022, melalui situs internet: [https://www.adb.org/publications/improving-interchanges-multimodal-interchange-hub-development-prc](https://www.adb.org/publications/improving-interchanges-multimodal-interchange-hub-development-prc).
[^bisnis-indonesia/2021a]: Bisnis Indonesia (17 Maret 2021a): Bos MRT Jakarta Ingin Integrasi Transportasi Publik Terwujud | Ekonomi, diperoleh 25 Mei 2022, melalui situs internet: [https://ekonomi.bisnis.com/read/20210317/98/1368828/bos-mrt-jakarta-ingin-integrasi-transportasi-publik-terwujud](https://ekonomi.bisnis.com/read/20210317/98/1368828/bos-mrt-jakarta-ingin-integrasi-transportasi-publik-terwujud).
[^bisnis-indonesia/2021b]: Bisnis Indonesia (17 Maret 2021b): MRT Jakarta Siapkan Opsi Pendanaan Proyek Fase 3 dan 4 | Ekonomi, diperoleh 25 Mei 2022, melalui situs internet: [https://ekonomi.bisnis.com/read/20210317/98/1368872/mrt-jakarta-siapkan-opsi-pendanaan-proyek-fase-3-dan-4](https://ekonomi.bisnis.com/read/20210317/98/1368872/mrt-jakarta-siapkan-opsi-pendanaan-proyek-fase-3-dan-4).
[^brown/2020]: Brown, N. C. (2020): Design performance and designer preference in an interactive, data-driven conceptual building design scenario, Design Studies, 68, 1–33. [https://doi.org/10.1016/j.destud.2020.01.001](https://doi.org/10.1016/j.destud.2020.01.001)
[^caetano-etal/2020]: Caetano, I., Santos, L., dan Leitão, A. (2020): Computational design in architecture: Defining parametric, generative, and algorithmic design, Frontiers of Architectural Research, 9(2), 287–300. [https://doi.org/10.1016/j.foar.2019.12.008](https://doi.org/10.1016/j.foar.2019.12.008)
[^chhipa/2018]: Chhipa, N. (1 Juni 2018): Multi Modal Transit Hub at Gandhigram, Gujarat Technological University.
[^china-friendship-development-international-engineering-design-and-consultation-corporation/2015a]: China Friendship Development International Engineering Design & Consultation Corporation (2015a): Beijing South PRC, Curved Station Roof Reflects Traditional Temple Design & Tianjin East, People’s Republic of China. Painting on The Ceiling Station., China Friendship Development International Engineering Design & Consultation Corporation, diperoleh 20 Mei 2022, melalui situs internet: [https://www.adb.org/publications/improving-interchanges-multimodal-interchange-hub-development-prc](https://www.adb.org/publications/improving-interchanges-multimodal-interchange-hub-development-prc).
[^china-friendship-development-international-engineering-design-and-consultation-corporation/2015b]: China Friendship Development International Engineering Design & Consultation Corporation (2015b): _Escalators inside The Beijing station & Information signs 2_, China Friendship Development International Engineering Design & Consultation Corporation, diperoleh 20 Mei 2022, melalui situs internet: [https://www.adb.org/publications/improving-interchanges-multimodal-interchange-hub-development-prc](https://www.adb.org/publications/improving-interchanges-multimodal-interchange-hub-development-prc).
[^choi-etal/2021]: Choi, J., Nguyen, P. C. T., dan Makki, M. (2021): The design of social and cultural orientated urban tissues through evolutionary processes, International Journal of Architectural Computing, 19(3), 331–359. [https://doi.org/10.1177/1478077120951948](https://doi.org/10.1177/1478077120951948)
[^collins-etal/2020]: Collins, D., dan Stadler, S. L. (2020): Public Spaces, Urban, 103–111 dalam A. Kobayashi, ed., International Encyclopedia of Human Geography (Second Edition), Elsevier, Oxford. [https://doi.org/10.1016/B978-0-08-102295-5.10212-4](https://doi.org/10.1016/B978-0-08-102295-5.10212-4)
[^desyani/2013]: Desyani, A. (12 Desember 2013): Ahok Optimistis Target Ruang Hijau Tercapai, Tempo.Co, diperoleh 27 April 2022melalui situs internet: [https://metro.tempo.co/read/536852/ahok](https://metro.tempo.co/read/536852/ahok).
[^ekaputra-dan-sudarwani/2013]: Ekaputra, Y. D., dan Sudarwani, M. M. (2013): Implikasi Program Pengembangan Kota Hijau (P2KH) Terhadap Pemenuhan Luasan Ruang Terbuka Hijau (RTH) Perkotaan, Prosiding SNST Fakultas Teknik, diperoleh 27 April 2022melalui situs internet: [https://publikasiilmiah.unwahas.ac.id/index.php/PROSIDING_SNST_FT/article/view/717](https://publikasiilmiah.unwahas.ac.id/index.php/PROSIDING_SNST_FT/article/view/717), 1(1).
[^elshater-dan-ibraheem/2014]: Elshater, A. M., dan Ibraheem, F. (2014): From Typology Concept to Smart Transportation Hub, Procedia - Social and Behavioral Sciences, 153, 531–541. [https://doi.org/10.1016/j.sbspro.2014.10.086](https://doi.org/10.1016/j.sbspro.2014.10.086)
[^farozy/2021]: Farozy, I. H. (3 September 2021): Beginilah Rancang Bangun Jembatan Pemadu Moda Dukuh Atas, diperoleh 24 April 2022, melalui situs internet: redigest.web.id/2021/09/beginilah.
[^fathahilah/2020]: Fathahilah, B. (2020): Pengendara Motor Menerobos Trotoar Pejalan Kaki, Media Indonesia, Jakarta, diperoleh 27 April 2022, melalui situs internet: [https://mediaindonesia.com/megapolitan/328182/ini-15-pelanggaran-lalu-lintas-yang-akan-ditilang](https://mediaindonesia.com/megapolitan/328182/ini-15-pelanggaran-lalu-lintas-yang-akan-ditilang).
[^fathiyah/2013]: Fathiyah, A. (16 Juni 2013): Ini Alasan Jakarta Semakin Macet, diperoleh 27 April 2022, melalui situs internet: [https://metro.tempo.co/read/488595/ini-alasan-jakarta-semakin-macet](https://metro.tempo.co/read/488595/ini-alasan-jakarta-semakin-macet).
[^fitri-dan-kusuma/2017]: Fitri, U. A., dan Kusuma, R. P. (2017): Analisis Kebijakan Pemerintah Provinsi DKI Jakarta dalam Membangun Ruang Publik Terpadu Ramah Anak (RPTRA) Kaitannya Berdasarkan Kerangka SDGs Poin 11, Balcony, 1(1), 77–89.
[^frazer-etal/2002]: Frazer, J., Frazer, J., Xiyu, L., Mingxi, T., dan Janssen, P. (2002): Generative and evolutionary techniques for building envelope design, 16.
[^google-maps/2022a]: Google Maps (2022a): Kalideres, Kec. Kalideres, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta, diperoleh 24 Mei 2022, melalui situs internet: [https://goo.gl/maps/tzL58PBChagmGxzo6](https://goo.gl/maps/tzL58PBChagmGxzo6).
[^google-maps/2022b]: Google Maps (2022b): Salesforce Transit Center, 425 Mission St, San Francisco, CA 94105, United States, diperoleh 24 Mei 2022, melalui situs internet: [https://goo.gl/maps/KjztBFktjuFqNAvL7](https://goo.gl/maps/KjztBFktjuFqNAvL7).
[^google-maps/2022c]: Google Maps (2022c): World Trade Center PATH Station, Vesey St, New York, NY 10006, United States, diperoleh 24 Mei 2022, melalui situs internet: [https://goo.gl/maps/1SDicNJSPffD6z458](https://goo.gl/maps/1SDicNJSPffD6z458).
[^hajela/2021]: Hajela, P. (2021): Dimensions of public spaces.
[^helbing/1998]: Helbing, D. (1998): Similarities Between Granular and Traffic Flow (NATO ASI Series), 547–552 dalam H. J. Herrmann, J.-P. Hovi, dan S. Luding, ed., Physics of Dry Granular Media, Springer Netherlands, Dordrecht. [https://doi.org/10.1007/978-94-017-2653-5_40](https://doi.org/10.1007/978-94-017-2653-5_40)
[^helbing/2012]: Helbing, D. (2012): Agent-Based Modeling (Understanding Complex Systems), 25–70 dalam D. Helbing, ed., Social Self-Organization: Agent-Based Simulations and Experiments to Study Emergent Social Behavior, Springer, Berlin, Heidelberg. [https://doi.org/10.1007/978-3-642-24004-1_2](https://doi.org/10.1007/978-3-642-24004-1_2)
[^itdp/2021]: ITDP (24 Februari 2021): Jakarta, Indonesia to Receive the 2021 Sustainable Transport Award, diperoleh 23 April 2022, melalui situs internet: [https://www.itdp.org/press-release/jakarta](https://www.itdp.org/press-release/jakarta).
[^juda/2016]: Juda, D. (2 Januari 2016): More open space in Jakarta, please!!, diperoleh 27 April 2022melalui situs internet: [https://www.thejakartapost.com/news/2016/01/02/more-open-space-jakarta-please.html](https://www.thejakartapost.com/news/2016/01/02/more-open-space-jakarta-please.html).
[^kemenhub/2021]: Kemenhub (15 Juni 2021): Menuju Transportasi Perkotaan yang Ramah dan Nyaman, diperoleh 24 April 2022, melalui situs internet: [http://dephub.go.id/post/read/menuju-transportasi-perkotaan-yang-ramah-dan-nyaman](http://dephub.go.id/post/read/menuju-transportasi-perkotaan-yang-ramah-dan-nyaman).
[^kemenhub/2017]: Kemenhub (22 Februari 2017): Menhub : Transportasi Sudah Menjadi Kebutuhan Dasar Masyarakat, diperoleh 24 April 2022, melalui situs internet: [http://dephub.go.id/post/read/menhub-transportasi-sudah-menjadi-kebutuhan-dasar-masyarakat](http://dephub.go.id/post/read/menhub-transportasi-sudah-menjadi-kebutuhan-dasar-masyarakat).
[^kompas/2021c]: Kompas (14 Oktober 2021c): “Transport Hub” Dukuh Atas Resmi Dicanangkan, seperti Apa Fungsinya?, diperoleh 24 April 2022melalui situs internet: [https://megapolitan.kompas.com/read/2021/10/14/08065581/transport](https://megapolitan.kompas.com/read/2021/10/14/08065581/transport).
[^kompas/2021a]: Kompas (28 September 2021a): Desain JPM Dukuh Atas, Ramah Pejalan Kaki dan Pesepeda, diperoleh 24 April 2022melalui situs internet: [https://www.kompas.com/properti/read/2021/09/29/060000421/desain-jpm-dukuh-atas-ramah-pejalan-kaki-dan-pesepeda](https://www.kompas.com/properti/read/2021/09/29/060000421/desain-jpm-dukuh-atas-ramah-pejalan-kaki-dan-pesepeda).
[^kompas/2021b]: Kompas (30 September 2021b): 8 Oktober, Transport Hub Pertama di Indonesia Mulai Dibangun, diperoleh 24 April 2022melalui situs internet: [https://www.kompas.com/properti/read/2021/09/30/170616521/8](https://www.kompas.com/properti/read/2021/09/30/170616521/8).
[^kontan/2019]: Kontan (2019): Atraksi flying trapeze di Pondok Indah Mall 2, Jakarta, Kontan, Jakarta, diperoleh 27 April 2022, melalui situs internet: [https://industri.kontan.co.id/news/pondok-indah-mall-pim-kunjungan-periode-natal-dan-tahun-baru-akan-naik-20](https://industri.kontan.co.id/news/pondok-indah-mall-pim-kunjungan-periode-natal-dan-tahun-baru-akan-naik-20).
[^krause/2003]: Krause, J. (2003): Reflections: The Creative Process of Generative Design in Architecture, Generative Art, diperoleh 21 Mei 2022, melalui situs internet: [http://www.generativeart.com/on/cic/papersGA2003/a14.htm](http://www.generativeart.com/on/cic/papersGA2003/a14.htm).
[^lagatta-etal/2015]: Lagatta, J., Di Nicolatonio, M., dan Vallicelli, A. (2015): Design for Inclusion. Differences and Similarities between DfA and UD in The Field of Sailing Yacht Design, Procedia Manufacturing, 3, 2714–2721. [https://doi.org/10.1016/j.promfg.2015.07.675](https://doi.org/10.1016/j.promfg.2015.07.675)
[^le-dan-trinh/2016]: Le, T. P. L., dan Trinh, T. A. (2016): Encouraging Public Transport Use to Reduce Traffic Congestion and Air Pollutant: A Case Study of Ho Chi Minh City, Vietnam, Procedia Engineering, 142, 236–243. [https://doi.org/10.1016/j.proeng.2016.02.037](https://doi.org/10.1016/j.proeng.2016.02.037)
[^lee-dan-lee/2019]: Lee, J., dan Lee, H. (2019): Agent-driven accessibility and visibility analysis in nursing units: 24th International Conference on Computer-Aided Architectural Design Research in Asia: Intelligent and Informed, CAADRIA 2019, Intelligent and Informed - Proceedings of The 24th International Conference on Computer-Aided Architectural Design Research in Asia, CAADRIA 2019, 351–360.
[^lima-etal/2021]: Lima, F., Brown, N., dan Duarte, J. (2021): Urban design optimization: generative approaches towards urban fabrics with improved transit accessibility and walkability.
[^lingga/2021]: Lingga, R. A. (2021): Bus Sinar Jaya di Terminal Kalideres, Antara, Jakarta, diperoleh melalui situs internet: [https://kabar24.bisnis.com/read/20210503/15/1389537/jelang](https://kabar24.bisnis.com/read/20210503/15/1389537/jelang).
[^macal-dan-north/2009]: Macal, C. M., dan North, M. J. (2009): Agent-based modeling and simulation, Proceedings of The 2009 Winter Simulation Conference (WSC), 86–98. [https://doi.org/10.1109/WSC.2009.5429318](https://doi.org/10.1109/WSC.2009.5429318)
[^mace/1997]: Mace, R. (1997): The 7 Principles | Centre for Excellence in Universal Design, diperoleh 23 Mei 2022, melalui situs internet: [https://universaldesign.ie/what-is-universal-design/the-7-principles/](https://universaldesign.ie/what-is-universal-design/the-7-principles/).
[^makki-etal/2015]: Makki, M., Farzaneh, A., dan Navarro-Mateu, D. (2015): The Evolutionary Adaptation of Urban Tissues through Computational Analysis.
[^makki-etal/2019]: Makki, M., Showkatbakhsh, M., dan Song, Y. (2019): Wallacei Primer 2.0.
[^manggala/2018]: Manggala, A. (2018): Sejumlah pengendara sepeda motor melawan arus lalu ketika melintasi Jalan Ciledug Raya, Jakarta, Liputan6, Jakarta, diperoleh 27 April 2022, melalui situs internet: [https://www.liputan6.com/otomotif/read/3657076/tekan](https://www.liputan6.com/otomotif/read/3657076/tekan).
[^mcknight/2017]: McKnight, M. (2017): Generative Design: What it is? How is it being used? Why it’s a game changer, KnE Engineering, 176–181. [https://doi.org/10.18502/keg.v2i2.612](https://doi.org/10.18502/keg.v2i2.612)
[^mega/2019a]: Mega, R. (2019a): Jakarta, city with the largest number of malls, Local Guides Connect, diperoleh 27 April 2022, melalui situs internet: [https://www.localguidesconnect.com/t5/General-Discussion/Jakarta-city-with-the-largest-number-of-malls/td-p/2026606](https://www.localguidesconnect.com/t5/General-Discussion/Jakarta-city-with-the-largest-number-of-malls/td-p/2026606).
[^mega/2019b]: Mega, R. (22 Oktober 2019b): Jakarta, city with the largest number of malls, diperoleh 27 April 2022, melalui situs internet: [https://www.localguidesconnect.com/t5/General-Discussion/Jakarta-city-with-the-largest-number-of-malls/td-p/2026606](https://www.localguidesconnect.com/t5/General-Discussion/Jakarta-city-with-the-largest-number-of-malls/td-p/2026606).
[^mitj/2021a]: MITJ (2021a): Fitur Desain JPM Dukuh Atas, MITJ, Jakarta, diperoleh melalui situs internet: [https://redigest.web.id/2021/09/beginilah](https://redigest.web.id/2021/09/beginilah).
[^mitj/2021b]: MITJ (2021b): Ilustrasi Jembatan Pemadu Moda (JPM) Dukuh Atas, MITJ, Jakarta, diperoleh melalui situs internet: [https://redigest.web.id/2021/09/beginilah](https://redigest.web.id/2021/09/beginilah).
[^mitj/2021c]: MITJ (2021c): Site Map JPM Dukuh Atas, MITJ, Jakarta, diperoleh melalui situs internet: [https://redigest.web.id/2021/09/beginilah](https://redigest.web.id/2021/09/beginilah).
[^mittal-etal/2021]: Mittal, D., Turrin, M., Tenpierik, M. J., Murukannaiah, P. K., dan Goldstein, R. (2021): A Framework for Multi-Agent and Acoustic Simulation for Office Design, 9.
[^nayak/2020]: Nayak, S. (2020): Chapter nine - Multiobjective optimization, 253–270 dalam S. Nayak, ed., Fundamentals of Optimization Techniques with Algorithms, Academic Press. [https://doi.org/10.1016/B978-0-12-821126-7.00009-7](https://doi.org/10.1016/B978-0-12-821126-7.00009-7)
[^nediari/2013]: Nediari, A. (2013): Fenomena Mal bagi Masyarakat Urban di Jakarta, Humaniora, 4(1), 183. [https://doi.org/10.21512/humaniora.v4i1.3428](https://doi.org/10.21512/humaniora.v4i1.3428)
[^njtpa/2019]: NJTPA (2019): TNJ Guidebook for Transit Hub Planning, NJTPA, diperoleh 27 April 2022, melalui situs internet: [https://www.njtpa.org/Newsroom/NJTPA-News/NJPTA-Update-Blog/2019/June/Workshop-and-Guidebook-on-Developing-Transit-Hubs.aspx](https://www.njtpa.org/Newsroom/NJTPA-News/NJPTA-Update-Blog/2019/June/Workshop-and-Guidebook-on-Developing-Transit-Hubs.aspx).
[^noviansyah/2013]: Noviansyah, A. (2013): Ilustrasi kemacetan lalu lintas, Tempo, Jakarta, diperoleh 27 April 2022, melalui situs internet: [https://metro.tempo.co/read/488595/ini-alasan-jakarta-semakin-macet](https://metro.tempo.co/read/488595/ini-alasan-jakarta-semakin-macet).
[^okezone/2021]: Okezone (2021): Terminal Kalideres, Okezone, Jakarta, diperoleh 23 April 2022, melalui situs internet: [https://megapolitan.okezone.com/read/2021/04/10/338/2392328/](https://megapolitan.okezone.com/read/2021/04/10/338/2392328/).
[^okta/2021]: Okta, M. (6 September 2021): Jembatan Penyeberangan Multi Guna “Serambi Temu” Koneksikan Beragam Moda Transportasi, diperoleh 24 April 2022, melalui situs internet: [https://www.kabarpenumpang.com/jembatan-penyeberangan-multi-guna-serambi-temu-koneksikan-beragam-moda-transportasi/](https://www.kabarpenumpang.com/jembatan-penyeberangan-multi-guna-serambi-temu-koneksikan-beragam-moda-transportasi/).
[^pedeferri/t.t.]: Pedeferri, P. (t.t.): Generative Art using chemical procedure by controlling titan corrosion, Generative Art International Conferences, diperoleh 21 Mei 2022, melalui situs internet: [https://www.generativeart.com/](https://www.generativeart.com/).
[^pelli-clarke-dan-partners/2018]: Pelli Clarke dan Partners (2018): Salesforce Transit Center, diperoleh 24 Mei 2022, melalui situs internet: [https://pcparch.com/work/salesforce-transit-center](https://pcparch.com/work/salesforce-transit-center).
[^prambors/2020]: Prambors (2 November 2020): Jakarta Terpilih sebagai Kota Terbaik di Dunia Versi Sustainable Transport Award (STA) 2021, diperoleh 23 April 2022, melalui situs internet: [https://www.pramborsfm.com/news/jakarta-terpilih-sebagai-kota-terbaik-di-dunia-versi-sustainable-transport-award-sta-2021](https://www.pramborsfm.com/news/jakarta-terpilih-sebagai-kota-terbaik-di-dunia-versi-sustainable-transport-award-sta-2021).
[^putri/2018]: Putri, I. C. (28 September 2018): Malam Penghargaan Sayembara Transport Hub di Kawasan Dukuh Atas | IAI Jakarta, diperoleh 26 April 2022, melalui situs internet: [https://iai-jakarta.org/pustaka/lihat/malam-penghargaan-sayembara-transport-hub-di-kawasan-dukuh-atas](https://iai-jakarta.org/pustaka/lihat/malam-penghargaan-sayembara-transport-hub-di-kawasan-dukuh-atas).
[^richardson-etal/2000]: Richardson, H. W., Bae, C.-H. C., dan Baxamusa, M. (2000): Compact Cities in Developing Countries: Assessment and Implications dalam Compact Cities, Routledge, diperoleh melalui situs internet: [https://www.taylorfrancis.com/chapters/edit/10.4324/9780203478622-7/compact-cities-developing-countries-assessment-implications-harry-richardson-chang-hee-christine-bae-murtaza-baxamusa](https://www.taylorfrancis.com/chapters/edit/10.4324/9780203478622-7/compact-cities-developing-countries-assessment-implications-harry-richardson-chang-hee-christine-bae-murtaza-baxamusa).
[^sadegh-etal/2022]: Sadegh, S. O., Gasparri, E., Brambilla, A., dan Globa, A. (2022): Kinetic facades: An evolutionary-based performance evaluation framework, Journal of Building Engineering, 53, 104408. [https://doi.org/10.1016/j.jobe.2022.104408](https://doi.org/10.1016/j.jobe.2022.104408)
[^singh-dan-gu/2012]: Singh, V., dan Gu, N. (2012): Towards an integrated generative design framework, Design Studies, 33(2), 185–207. [https://doi.org/10.1016/j.destud.2011.06.001](https://doi.org/10.1016/j.destud.2011.06.001)
[^soddu/1988]: Soddu, C. (1988): First Generative Design Project: typical Italian Medieval towns., Generative Art International Conferences, diperoleh 21 Mei 2022, melalui situs internet: [https://www.generativeart.com/](https://www.generativeart.com/).
[^soddu/2002]: Soddu, C. (2002): Generative Design for industrial production of all different jewels, Generative Art International Conferences, diperoleh 21 Mei 2022, melalui situs internet: [https://www.generativeart.com/](https://www.generativeart.com/).
[^suga-etal/2010]: Suga, K., Kato, S., dan Hiyama, K. (2010): Structural analysis of Pareto-optimal solution sets for multi-objective optimization: An application to outer window design problems using Multiple Objective Genetic Algorithms, Building and Environment, 45(5), 1144–1152. [https://doi.org/10.1016/j.buildenv.2009.10.021](https://doi.org/10.1016/j.buildenv.2009.10.021)
[^sugiharto/2018]: Sugiharto, B. A. (2018): Ilustrasi, CNNIndonesia, Jakarta, diperoleh melalui situs internet: [https://www.cnnindonesia.com/nasional/20180617155634-20-306816/puncak](https://www.cnnindonesia.com/nasional/20180617155634-20-306816/puncak).
[^sustainable-mobility-for-all/2017]: Sustainable Mobility for All (2017): Global Mobility Report 2017: Tracking Sector Performance, diperoleh 26 April 2022, melalui situs internet: [http://hdl.handle.net/10986/28542](http://hdl.handle.net/10986/28542).
[^the-free-dictionary/t.t.]: The Free Dictionary (t.t.): Hubs and Switches, The Free Dictionary, diperoleh 27 April 2022, melalui situs internet: [https://encyclopedia2.thefreedictionary.com/Ethernet+switch](https://encyclopedia2.thefreedictionary.com/Ethernet+switch).
[^toussi/2020]: Toussi, H. E. (2020): The application of evolutionary, generative, and hybrid approaches in architecture design optimization, 2, 1–20.
[^un/2021a]: UN (2021a): Goal 11 Department of Economic and Social Affairs, diperoleh 27 April 2022, melalui situs internet: [https://sdgs.un.org/goals/goal11](https://sdgs.un.org/goals/goal11).
[^un/2021b]: UN (2021b): Goal 11 Infographic, UN, New York, diperoleh melalui situs internet: [https://unstats.un.org/sdgs/report/2021/](https://unstats.un.org/sdgs/report/2021/).
[^unsplash/2020]: UNSPLASH (2020): Ibu kota Indonesia, Jakarta, Prambors, Jakarta, diperoleh 24 April 2022, melalui situs internet: [https://www.pramborsfm.com/news/jakarta-terpilih-sebagai-kota-terbaik-di-dunia-versi-sustainable-transport-award-sta-2021](https://www.pramborsfm.com/news/jakarta-terpilih-sebagai-kota-terbaik-di-dunia-versi-sustainable-transport-award-sta-2021).
[^veisi-etal/2022]: Veisi, O., Shakibamanesh, A., dan Rahbar, M. (2022): Using intelligent multi-objective optimization and artificial neural networking to achieve maximum solar radiation with minimum volume in The archetype urban block, Sustainable Cities and Society, 86, 104101. [https://doi.org/10.1016/j.scs.2022.104101](https://doi.org/10.1016/j.scs.2022.104101)
[^villaggi-dan-nagy/2018b]: Villaggi, L., dan Nagy, D. (10 Januari 2018b): Generative Design for Architectural Space Planning, diperoleh 21 Mei 2022, melalui situs internet: [https://medium.com/autodesk-university/generative-design-for-architectural-space-planning-9f82cf5dcdc0](https://medium.com/autodesk-university/generative-design-for-architectural-space-planning-9f82cf5dcdc0).
[^villaggi-dan-nagy/2018a]: Villaggi, L., dan Nagy, D. (2018a): Generative design for architecture workflow, diperoleh 21 Mei 2022, melalui situs internet: [https://medium.com/autodesk-university/generative-design-for-architectural-space-planning-9f82cf5dcdc0](https://medium.com/autodesk-university/generative-design-for-architectural-space-planning-9f82cf5dcdc0).
[^vischer/2007]: Vischer, J. C. (2007): The effects of the physical environment on job performance: towards a theoretical model of workspace stress, Stress and Health, 23(3), 175–184. [https://doi.org/10.1002/smi.1134](https://doi.org/10.1002/smi.1134)
[^wildman-dan-gaynor/2019]: Wildman, R., dan Gaynor, A. (2019): 11 - Topology optimization for robotics applications (Woodhead Publishing in Materials), 251–292 dalam S. M. Walsh dan M. S. Strano, ed., Robotic Systems and Autonomous Platforms, Woodhead Publishing. [https://doi.org/10.1016/B978-0-08-102260-3.00011-1](https://doi.org/10.1016/B978-0-08-102260-3.00011-1)
[^zhang-etal/2022]: Zhang, Y., Xiao, B., Al-Hussein, M., dan Li, X. (2022): Prediction of human restorative experience for human-centered residential architecture design: A non-immersive VR–DOE-based machine learning method, Automation in Construction, 136, 104189. [https://doi.org/10.1016/j.autcon.2022.104189](https://doi.org/10.1016/j.autcon.2022.104189)

