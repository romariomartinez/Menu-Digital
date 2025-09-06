import React from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  const { user, logout } = useAuth();
  const { dark, setDark } = useTheme();

  return (
    <header className="bg-black/30 backdrop-blur border-b border-white/10 sticky top-0 z-40">
      <div className="w-full px-4 py-3 flex items-center justify-between">
        
        {/* Logo + nombre */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-r from-yellow-400 to-orange-500 flex-shrink-0">
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <img
                src={logo}
                alt="Licores La Sierra"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center leading-tight">
            <h1 className="text-lg sm:text-xl font-bold text-white">
              Licores La Sierra
            </h1>
            <p className="text-blue-200 text-xs sm:text-sm">
              Tu licorería de confianza
            </p>
          </div>
        </div>

        {/* Botones */}
        <div className="flex items-center gap-3">
          {/* Toggle claro/oscuro */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {user && (
            <button
              onClick={logout}
              className="bg-red-600 text-white px-3 py-1.5 rounded-lg hover:bg-red-700 text-sm"
            >
              Cerrar sesión
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
