import React from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, LogOut } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  const { user, logout } = useAuth();
  const { dark, setDark } = useTheme();

  return (
    <header className="bg-gradient-to-r from-slate-900/80 to-slate-800/70 backdrop-blur-md border-b border-white/10 sticky top-0 z-40 shadow-lg">
      <div className="max-w-6xl mx-auto w-full px-4 py-3 flex items-center justify-between">
        
        {/* Logo + nombre */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 to-orange-500 shadow-md shadow-yellow-500/30 flex-shrink-0">
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <img
                src={logo}
                alt="Licores La Sierra"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center leading-tight">
            <h1 className="text-lg sm:text-xl font-extrabold text-white tracking-wide">
              LA SIERRA LICORES
            </h1>
            <p className="text-blue-300 text-xs sm:text-sm italic">
              Tu licorería de confianza
            </p>
          </div>
        </div>

        {/* Botones */}
        <div className="flex items-center gap-3">
          {/* Toggle claro/oscuro */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors duration-300"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {user && (
            <button
              onClick={logout}
              className="flex items-center gap-1 bg-red-600/90 text-white px-3 py-1.5 rounded-lg hover:bg-red-700 transition-colors duration-300 text-sm shadow-md"
            >
              <LogOut className="w-4 h-4" />
              <span>Cerrar sesión</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
