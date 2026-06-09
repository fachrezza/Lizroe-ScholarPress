import Scopus from "../assets/logos/scopus.png";
import Scholar from "../assets/logos/scholar.png";
import Sinta from "../assets/logos/sinta.png";
import Doaj from "../assets/logos/doaj.svg";
import Turnitin from "../assets/logos/turnitin.png";
import Quillbot from "../assets/logos/quillbot.jpg";
import Copernicus from "../assets/logos/coppernicus.png";

const logos = [
  Scopus,
  Scholar,
  Sinta,
  Doaj,
  Turnitin,
  Quillbot,
  Copernicus,
];

export default function Tools() {
  return (
    <section className="py-10 md:py-14 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            PLATFORM TERPERCAYA
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
            Didukung & Dioptimalkan Untuk
          </h2>
        </div>

        {/* LOGOS */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="
                bg-white
                border border-gray-100
                rounded-2xl
                px-6 py-4
                shadow-sm
                hover:shadow-md
                transition
                hover:-translate-y-1
              "
            >
              <img
                src={logo}
                alt="logo"
                className="
                  h-10 md:h-12
                  object-contain
                  grayscale
                  hover:grayscale-0
                  transition
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}