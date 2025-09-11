import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MapPin, Clock } from "lucide-react";
import logo from "../assets/logo1.png";

export default function Footer() {
  return (
    <footer className="bg-white text-black dark:bg-black/30 dark:text-gray-300 border-t border-gray-200 dark:border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm items-center">
        
       {/* Columna izquierda → Logo + derechos */}
<div className="flex flex-col items-center sm:items-start">
  <img
    src={logo} 
    alt="La Sierra Licores"
    className="w-20 h-20 object-contain mb-2"
  />
  
</div>

        {/* Columna centro */}
        <div className="flex flex-col items-center sm:items-start gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#CCFF66] drop-shadow-[0_0_2px_rgba(0,0,0,0.6)]" />
            <span>Calle 9#6a-98 Barrio Las Flores</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#CCFF66] drop-shadow-[0_0_2px_rgba(0,0,0,0.6)]" />
            <span>Lun - Dom: 8:00am - 11:00pm</span>
          </div>
           <p className="text-xs text-gray-500 dark:text-gray-400">
    © 2020 - Todos los derechos reservados
  </p>
        </div>

        {/* Columna derecha */}
        <div className="flex items-center justify-center sm:justify-end gap-4">
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-green-500 hover:bg-green-600 transition shadow-lg"
          >
            <FaWhatsapp className="text-white text-xl" />
          </a>
          <a
            href="https://www.instagram.com/licoreralasierra/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90 transition shadow-lg"
          >
            <FaInstagram className="text-white text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}
