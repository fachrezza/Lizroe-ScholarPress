import { X } from "lucide-react";
import { useState } from "react";
import WAIcon from "../assets/wa.svg";

export default function FloatingWA() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* WHATSAPP OPTIONS */}
      <div
        className={`
          absolute
          bottom-20
          right-0
          flex flex-col gap-3
          transition-all duration-300
          ${
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-4 pointer-events-none"
          }
        `}
      >
        {/* WA 1 */}
        <a
          href="https://wa.me/6285242484213"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center
            gap-3
            bg-white
            hover:bg-green-50
            px-5
            py-3
            rounded-2xl
            shadow-xl
            border border-gray-200
            transition
            whitespace-nowrap
          "
        >
          <div
            className="
              w-10
              h-10
              rounded-full
              bg-green-500
              flex
              items-center
              justify-center
            "
          >
            <img
              src={WAIcon}
              alt="WhatsApp"
              className="w-5 h-5"
            />
          </div>

          <div>
            <p className="text-sm text-gray-500">
              WhatsApp 1
            </p>

            <p className="font-semibold text-gray-900">
              +62 852-4248-4213
            </p>
          </div>
        </a>

        {/* WA 2 */}
        <a
          href="https://wa.me/6282296190144"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center
            gap-3
            bg-white
            hover:bg-green-50
            px-5
            py-3
            rounded-2xl
            shadow-xl
            border border-gray-200
            transition
            whitespace-nowrap
          "
        >
          <div
            className="
              w-10
              h-10
              rounded-full
              bg-green-500
              flex
              items-center
              justify-center
            "
          >
            <img
              src={WAIcon}
              alt="WhatsApp"
              className="w-5 h-5"
            />
          </div>

          <div>
            <p className="text-sm text-gray-500">
              WhatsApp 2
            </p>

            <p className="font-semibold text-gray-900">
              +62 822-9619-0144
            </p>
          </div>
        </a>
      </div>

      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          bg-green-500
          hover:bg-green-400
          text-white
          w-16
          h-16
          rounded-full
          flex
          items-center
          justify-center
          shadow-2xl
          hover:scale-110
          transition-all duration-300
        "
      >
        {open ? (
          <X size={28} />
        ) : (
          <img
            src={WAIcon}
            alt="WhatsApp"
            className="w-8 h-8"
          />
        )}
      </button>
    </div>
  );
}