const steps = [
  {
    title: "Konsultasi Awal",
    desc: "Diskusi kebutuhan penelitian, jurnal target, dan tujuan publikasi.",
  },
  {
    title: "Pengiriman Dokumen",
    desc: "Kirim draft paper, data penelitian, atau file yang sudah tersedia.",
  },
  {
    title: "Analisis Kebutuhan",
    desc: "Kami menganalisis struktur, format, dan standar jurnal tujuan.",
  },
  {
    title: "Proses Pendampingan",
    desc: "Editing, proofreading, formatting, hingga peningkatan kualitas paper.",
  },
  {
    title: "Hasil Akhir",
    desc: "Dokumen final siap submit ke jurnal Scopus / Sinta atau institusi terkait.",
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="
        py-16 md:py-28
        px-4 sm:px-6
        bg-gradient-to-b from-white to-green-50/40
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs sm:text-sm font-medium">
            ✦ Cara Kerja Kami
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-5 sm:mt-6">
            Proses Mudah Menuju
            <span className="block text-green-600">
              Publikasi Jurnal
            </span>
          </h2>

          <p className="text-gray-600 mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed">
            Kami membantu Anda dari tahap awal hingga artikel siap dipublikasikan
            di jurnal bereputasi dengan proses yang jelas dan terstruktur.
          </p>
        </div>

        {/* STEPS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
            gap-5 sm:gap-6
            mt-12 sm:mt-20
          "
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                relative
                bg-white
                border border-gray-200
                rounded-2xl sm:rounded-3xl
                p-6 sm:p-7
                text-center
                hover:-translate-y-1
                hover:shadow-[0_20px_60px_rgba(34,197,94,0.12)]
                transition-all duration-300
              "
            >
              {/* NUMBER */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-gradient-to-br from-green-500 to-emerald-400 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                {index + 1}
              </div>

              {/* TITLE */}
              <h3 className="mt-5 sm:mt-6 font-semibold text-gray-900 text-base sm:text-lg">
                {step.title}
              </h3>

              {/* DESC */}
              <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                {step.desc}
              </p>

              {/* connector line (desktop only feel) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-green-200" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}