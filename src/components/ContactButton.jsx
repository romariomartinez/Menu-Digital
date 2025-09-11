import React, { useState } from "react";
import { FaPhone, FaWhatsapp, FaCommentDots, FaTimes, FaHeadset } from "react-icons/fa";

export default function ContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botón principal */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-lg hover:bg-orange-600 transition"
      >
        {open ? (
          <FaTimes className="text-white text-xl" />
        ) : (
          <FaHeadset className="text-white text-xl" />
        )}
      </button>

      {/* Opciones flotantes */}
      {open && (
        <div className="absolute bottom-16 right-0 flex flex-col gap-3">
          {/* Teléfono */}
          <a
            href="tel:+573001234567"
            className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shadow-md hover:bg-orange-600 transition"
          >
            <FaPhone className="text-white text-lg" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-md hover:bg-green-600 transition"
          >
            <FaWhatsapp className="text-white text-lg" />
          </a>

          {/* Chat interno */}
          <a
            href="#chat"
            className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shadow-md hover:bg-orange-600 transition"
          >
            <FaCommentDots className="text-white text-lg" />
          </a>
        </div>
      )}
    </div>
  );
}
