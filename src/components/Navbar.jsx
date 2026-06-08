import { useState } from "react";
import { Menu, X } from "lucide-react";
import WAIcon from "../assets/wa.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    ["Home", "#hero"],
    ["Services", "#services"],
    ["Why Us", "#whyus"],
    ["Contact", "#contact"],
  ];

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-white/70 backdrop-blur-xl
        border-b border-gray-200/60
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">

        {/* LOGO */}
        <a href="#hero" className="leading-tight">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900">
            Lizroe
            <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent ml-1">
              ScholarPress
            </span>
          </h1>

          <p className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-gray-400">
            Academic Publishing
          </p>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="
                text-gray-700 font-medium
                hover:text-green-500 transition
                relative after:absolute after:left-0 after:-bottom-1
                after:w-0 after:h-[2px] after:bg-green-500
                hover:after:w-full after:transition-all
              "
            >
              {label}
            </a>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* WHATSAPP */}
          <a
            href="https://wa.me/6285242484213"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden sm:flex items-center gap-2
              bg-gradient-to-r from-green-500 to-emerald-400
              text-white px-4 sm:px-5 py-2.5
              rounded-full font-semibold
              shadow-lg shadow-green-500/20
              hover:scale-105 transition
            "
          >
            <img src={WAIcon} className="w-5 h-5" />
            WhatsApp
          </a>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="
              md:hidden w-10 h-10
              rounded-full border border-gray-200
              flex items-center justify-center
              text-gray-700 hover:bg-gray-100
            "
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden bg-white/95 backdrop-blur-xl
          border-t border-gray-200/50
          transition-all duration-300 overflow-hidden
          ${open ? "max-h-96 py-4" : "max-h-0"}
        `}
      >
        <nav className="flex flex-col px-6 gap-3">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium py-2 hover:text-green-500"
            >
              {label}
            </a>
          ))}

          <a
            href="https://wa.me/6285242484213"
            className="
              mt-2 flex items-center justify-center gap-2
              bg-gradient-to-r from-green-500 to-emerald-400
              text-white py-3 rounded-full font-semibold
            "
          >
            <img src={WAIcon} className="w-5 h-5" />
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}