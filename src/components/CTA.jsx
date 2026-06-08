import WAIcon from "../assets/wa.svg";

export default function CTA() {
  return (
    <section
      id="contact"
      className="
        relative
        w-screen
        left-1/2
        -translate-x-1/2
        py-16 md:py-20
        overflow-hidden
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 -z-10" />

      {/* GLOW */}
      <div className="absolute -top-24 -right-24 w-64 md:w-72 h-64 md:h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-64 md:w-72 h-64 md:h-72 bg-white/10 rounded-full blur-3xl" />

      {/* CTA CARD */}
      <div
        className="
          max-w-5xl
          mx-auto
          text-center
          rounded-3xl md:rounded-[35px]
          bg-white/10
          border border-white/20
          backdrop-blur-md
          p-6 sm:p-10 md:p-14
          shadow-[0_25px_70px_rgba(34,197,94,0.25)]
        "
      >
        <span className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-white/15 border border-white/20 text-white text-xs sm:text-sm">
          ✦ Hubungi Tim Kami
        </span>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mt-5 sm:mt-6 leading-tight">
          Siap Mempublikasikan
          <span className="block">Penelitian Anda?</span>
        </h2>

        <p className="mt-4 sm:mt-6 text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Dapatkan bantuan profesional untuk publikasi jurnal, proofreading,
          dan pendampingan penelitian.
        </p>

        <a
          href="https://wa.me/6285242484213"
          className="
            inline-flex items-center justify-center gap-3
            mt-7 sm:mt-8
            bg-white text-green-600
            px-6 sm:px-7 py-3 sm:py-3.5
            rounded-full
            font-semibold
            text-sm sm:text-base
            hover:scale-105 transition
          "
        >
          <img src={WAIcon} className="w-6 sm:w-7 h-6 sm:h-7" />
          Hubungi WhatsApp
        </a>
      </div>
    </section>
  );
}