import { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { services } from "../data/services";

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section
      id="services"
      className="
        py-16 md:py-28
        px-4 sm:px-6
        relative
        bg-gradient-to-b
        from-white
        to-green-50/40
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs sm:text-sm font-medium">
            ✦ Layanan Kami
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-5 sm:mt-6 leading-tight">
            Layanan Bantuan Akademik
            <span className="block text-green-600">
              Profesional
            </span>
          </h2>

          <p className="text-gray-600 mt-4 sm:mt-6 leading-relaxed text-sm sm:text-lg">
            Layanan pendampingan akademik lengkap untuk publikasi jurnal,
            penulisan ilmiah, proofreading, dan bantuan penelitian.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5 sm:gap-8
            mt-12 sm:mt-20
          "
        >
          {visibleServices.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                bg-white
                border border-gray-200
                rounded-2xl sm:rounded-[30px]
                p-6 sm:p-8
                hover:-translate-y-1 sm:hover:-translate-y-2
                hover:border-green-300
                hover:shadow-[0_20px_60px_rgba(34,197,94,0.12)]
                transition-all duration-300
                overflow-hidden
              "
            >
              {/* GLOW */}
              <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-green-100/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition" />

              {/* ICON */}
              <div className="relative w-12 sm:w-14 h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500 to-emerald-400 text-white flex items-center justify-center shadow-lg shadow-green-500/20">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="relative text-lg sm:text-2xl font-semibold text-gray-900 mt-5 sm:mt-7 leading-snug">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="relative text-gray-600 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                {item.desc}
              </p>

              {/* CTA */}
              <a
                href="https://wa.me/6285242484213"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative
                  inline-flex
                  items-center
                  gap-2
                  mt-6 sm:mt-8
                  text-green-600
                  font-medium
                  text-sm sm:text-base
                  hover:text-green-500
                  transition
                "
              >
                Pesan Layanan
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                />
              </a>
            </div>
          ))}
        </div>

        {/* SHOW MORE */}
        {services.length > 3 && (
          <div className="flex justify-center mt-10 sm:mt-14">
            <button
              onClick={() => setShowAll(!showAll)}
              className="
                flex
                flex-col
                items-center
                gap-1 sm:gap-2
                text-green-600
                hover:text-green-500
                font-medium
                text-sm sm:text-base
                transition
              "
            >
              {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua Layanan"}

              {showAll ? (
                <ChevronUp size={26} className="animate-bounce" />
              ) : (
                <ChevronDown size={26} className="animate-bounce" />
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}