export default function About() {
  return (
    <section
      id="about"
      className="
        py-16 md:py-28
        px-4 sm:px-6
        bg-white
        relative
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE / VISUAL */}
        <div className="relative order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1720411201674-a9ed01606298?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Publish Mate"
              className="w-full h-[320px] sm:h-[420px] object-cover"
            />

            {/* overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
          </div>

          
        </div>

        {/* RIGHT CONTENT */}
        <div className="order-1 lg:order-2 text-center lg:text-left">

        {/* BADGE */}
        <span className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs sm:text-sm font-medium">
            ✦ Tentang Publish Mate
        </span>

        {/* TITLE */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-5 sm:mt-6 leading-tight">
            Partner Terpercaya
            <span className="block text-green-600">
            Untuk Publikasi Akademik
            </span>
        </h2>

        {/* DESC */}
        <p className="text-gray-600 mt-5 sm:mt-6 text-sm sm:text-lg leading-relaxed">
            <span className="font-semibold text-gray-900">Publish Mate</span> adalah layanan
            pendampingan akademik yang membantu mahasiswa, dosen, dan peneliti dalam
            proses penulisan, pengolahan data, hingga publikasi jurnal ilmiah
            terindeks Scopus dan Sinta.
        </p>

        <p className="text-gray-600 mt-4 text-sm sm:text-lg leading-relaxed">
            Kami berfokus pada <span className="text-green-600 font-medium">kualitas, kerahasiaan,
            dan ketepatan waktu</span> agar setiap karya ilmiah memiliki standar tinggi
            dan siap diterima di jurnal bereputasi.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">

            <div className="text-center">
            <p className="text-xl sm:text-3xl font-bold text-green-600">15+</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Tahun Pengalaman
            </p>
            </div>

            <div className="text-center">
            <p className="text-xl sm:text-3xl font-bold text-green-600">98%</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Tingkat Kepuasan
            </p>
            </div>

            <div className="text-center">
            <p className="text-xl sm:text-3xl font-bold text-green-600">500+</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Client Terbantu
            </p>
            </div>

        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
            href="#services"
            className="
                inline-flex items-center justify-center
                bg-gradient-to-r from-green-500 to-emerald-400
                text-white
                px-6 py-3
                rounded-full
                font-semibold
                text-sm sm:text-base
                hover:scale-105 transition
            "
            >
            Lihat Layanan
            </a>

            <a
            href="https://wa.me/6285242484213"
            target="_blank"
            rel="noopener noreferrer"
            className="
                inline-flex items-center justify-center
                border border-gray-200
                bg-white
                text-gray-700
                px-6 py-3
                rounded-full
                font-semibold
                text-sm sm:text-base
                hover:bg-gray-50 transition
            "
            >
            Konsultasi Gratis
            </a>
        </div>

        </div>
      </div>
    </section>
  );
}