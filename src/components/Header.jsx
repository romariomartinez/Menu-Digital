import React from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, LogOut } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  const { user, logout } = useAuth();
  const { dark, setDark } = useTheme();

  return (
    <header className="sticky top-0 z-40 shadow-md transition-colors border-b border-gray-200 dark:border-gray-700">
      <div
        className={`w-full mx-auto px-4 py-3 flex items-center justify-between
        bg-gradient-to-r 
        from-gray-100 to-gray-200 
        dark:from-gray-800 dark:to-gray-900`}
      >
        {/* Logo + nombre */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-md flex-shrink-0">
            <img
              src={logo}
              alt="Licores La Sierra"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center leading-tight">
   <h1 className="text-lg sm:text-xl font-light uppercase text-gray-900 dark:text-white tracking-widest">
  Licores La Sierra
</h1>


            <p className="text-sm italic text-gray-600 dark:text-gray-300">
              Tu licorería de confianza
            </p>
          </div>
        </div>

        {/* Botones */}
        <div className="flex items-center gap-3">
          {/* Toggle claro/oscuro */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 
                       dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 
                       transition-colors duration-300"
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
