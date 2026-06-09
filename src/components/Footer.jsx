export default function Footer() {
  return (
    <footer
      className="
        border-t border-gray-200
        bg-[#F8FAF8]
        py-8 sm:py-10
        text-center
      "
    >
      <div className="max-w-7xl mx-auto px-4">
        
        <p className="text-gray-600 text-sm sm:text-base">
          © 2026{" "}
          <span className="font-semibold text-gray-900">
            Publish Mate
          </span>
          . All rights reserved.
        </p>

        <p className="text-gray-400 text-xs sm:text-sm mt-2">
          Academic Publishing • Research Support • Journal Assistance
        </p>

      </div>
    </footer>
  );
}