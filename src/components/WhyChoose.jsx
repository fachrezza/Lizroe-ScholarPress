import {
  ShieldCheck,
  Clock3,
  FileCheck2,
  Wallet,
} from "lucide-react";

const items = [
  {
    icon: <ShieldCheck size={34} strokeWidth={2.2} />,
    title: "Aman & Rahasia",
    desc: "Semua dokumen penelitian dan data klien ditangani secara aman dan rahasia.",
  },
  {
    icon: <Clock3 size={34} strokeWidth={2.2} />,
    title: "Respon Cepat",
    desc: "Konsultasi cepat dan komunikasi responsif selama proses layanan berlangsung.",
  },
  {
    icon: <FileCheck2 size={34} strokeWidth={2.2} />,
    title: "Pendampingan Profesional",
    desc: "Bantuan akademik yang disesuaikan dengan standar publikasi dan kebutuhan penelitian.",
  },
  {
    icon: <Wallet size={34} strokeWidth={2.2} />,
    title: "Harga Terjangkau",
    desc: "Layanan berkualitas dengan harga yang fleksibel dan ramah untuk mahasiswa maupun peneliti.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="whyus"
      className="
        py-16 md:py-28
        px-4 sm:px-6
        relative
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center">

          <span className="inline-block px-3 sm:px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs sm:text-sm font-medium">
            Mengapa Memilih Kami
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-5 sm:mt-6">
            Layanan Bantuan Akademik
            <br />
            Profesional
          </h2>

          <p className="text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed text-sm sm:text-lg px-2 sm:px-0">
            Kami menyediakan layanan bantuan akademik yang terpercaya dengan fokus pada
            profesionalisme, kerahasiaan, dan komunikasi yang responsif.
          </p>

        </div>

        {/* CARDS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6 sm:gap-8
            mt-12 sm:mt-20
          "
        >

          {items.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                border border-gray-200
                rounded-2xl sm:rounded-[32px]
                p-6 sm:p-8
                hover:-translate-y-1 sm:hover:-translate-y-2
                hover:border-green-300
                hover:shadow-[0_20px_60px_rgba(34,197,94,0.12)]
                transition-all duration-300
              "
            >

              {/* ICON */}
              <div
                className="
                  w-12 sm:w-16
                  h-12 sm:h-16
                  rounded-xl sm:rounded-2xl
                  bg-green-100
                  text-green-600
                  flex items-center justify-center
                  group-hover:scale-105 sm:group-hover:scale-110
                  transition
                "
              >
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-5 sm:mt-7">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}