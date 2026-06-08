import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1600&auto=format&fit=crop",
      badge: "Publikasi Scopus & Sinta",
      title: "Publikasikan Riset Anda Dengan Percaya Diri",
      description:
        "Layanan bantuan publikasi jurnal profesional untuk jurnal terindeks Scopus Q1-Q4 dan Sinta.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
      badge: "Dukungan Penulisan Akademik",
      title: "Siapkan Paper Anda Untuk Submit",
      description:
        "Proofreading, formatting, penurunan plagiarisme, dan bantuan penulisan akademik secara profesional.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
      badge: "Pendampingan Riset",
      title: "Partner Terpercaya Untuk Kesuksesan Akademik",
      description:
        "Bantuan analisis data, penyusunan proposal, dan konsultasi penelitian untuk mahasiswa maupun profesional.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="
        relative
        min-h-[85vh] md:min-h-screen
        overflow-hidden
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-all duration-[2000ms]
              ${current === index ? "opacity-100 scale-100" : "opacity-0 scale-110"}
            `}
          />
        ))}

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative z-10
          min-h-[85vh] md:min-h-screen
          flex items-center justify-center
          px-4 sm:px-6
          text-center
        "
      >
        <div className="max-w-3xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
            >
              {/* BADGE */}
              <div className="inline-flex items-center px-3 sm:px-5 py-2 rounded-full border border-white/20 bg-white/10 text-white text-xs sm:text-sm mb-5 sm:mb-7">
                ✦ {slides[current].badge}
              </div>

              {/* TITLE */}
              <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight text-white">
                {slides[current].title}
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-gray-200 leading-relaxed px-2 sm:px-0">
                {slides[current].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="
              flex flex-col sm:flex-row
              justify-center
              gap-3 sm:gap-4
              mt-8 sm:mt-10
            "
          >
            <a
              href="#services"
              className="
                inline-flex items-center justify-center gap-2
                bg-gradient-to-r from-green-500 to-emerald-400
                text-white
                px-5 sm:px-7
                py-3 sm:py-3.5
                rounded-full
                font-semibold
                text-sm sm:text-base
                hover:scale-105 transition
              "
            >
              Lihat Layanan
              <ArrowRight size={18} />
            </a>

            <a
              href="https://wa.me/6285242484213"
              className="
                inline-flex items-center justify-center
                border border-white/20 bg-white/10
                text-white
                px-5 sm:px-7
                py-3 sm:py-3.5
                rounded-full
                font-semibold
                text-sm sm:text-base
                hover:bg-white/20 transition
              "
            >
              Hubungi Kami
            </a>
          </motion.div>

          {/* INDICATORS */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-10 sm:mt-14">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${current === index ? "w-8 sm:w-10 bg-green-400" : "w-2 bg-white/40"}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}