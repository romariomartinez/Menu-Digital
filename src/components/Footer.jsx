import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-black dark:bg-black/30 dark:text-gray-300 border-t border-gray-200 dark:border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm">
        <p className="font-semibold">🍾 Licores La Sierra</p>
        <p className="mt-1">© 2025 - Todos los derechos reservados</p>

        {/* 👇 espacio para contacto */}
        <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
          <span>📍 Dirección disponible</span>
          <span>📱 WhatsApp: +57 300 123 4567</span>
          <span>🕒 Horarios de atención</span>
        </div>
      </div>
    </footer>
  );
}
