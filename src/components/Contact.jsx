import { Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-[#F8FAF8]">
      <div
        className="
          max-w-6xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-5 sm:gap-6
        "
      >
        {/* EMAIL */}
        <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition">
          <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
            <Mail size={20} className="sm:size-[22px]" />
          </div>

          <div>
            <p className="text-gray-500 text-xs sm:text-sm">Email</p>
            <a className="text-gray-900 font-medium text-sm sm:text-base hover:text-green-600">
              hello@lizroescholarpress.com
            </a>
          </div>
        </div>

        {/* WA 1 */}
        <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition">
          <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
            <Phone size={20} />
          </div>

          <div>
            <p className="text-gray-500 text-xs sm:text-sm">Admin 1 WhatsApp</p>
            <a className="text-gray-900 font-medium text-sm sm:text-base hover:text-green-600">
              +62 852-4248-4213
            </a>
          </div>
        </div>

        {/* WA 2 */}
        <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition">
          <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
            <Phone size={20} />
          </div>

          <div>
            <p className="text-gray-500 text-xs sm:text-sm">Admin 2 WhatsApp</p>
            <a className="text-gray-900 font-medium text-sm sm:text-base hover:text-green-600">
              +62 822-9619-0144
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}