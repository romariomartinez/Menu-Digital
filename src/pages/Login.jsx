import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Eye, EyeOff } from "lucide-react";
import logo from "../assets/logo.png";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (login(form.email, form.password)) {
      nav("/");
    } else {
      setErr("Credenciales incorrectas");
    }
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-sierra dark:text-white flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 dark:text-white rounded-xl p-6 w-full max-w-md shadow-xl">
        
        {/* Logo dentro de círculo con degradado dinámico */}
<div className="flex justify-center mb-6">
  <div
    className="
      w-32 h-32 rounded-full p-[4px] shadow-lg
      bg-gradient-to-r from-green-400 via-lime-400 to-green-600
      dark:from-green-400 dark:via-lime-400 dark:to-green-600
    "
  >
    <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-800 flex items-center justify-center">
      <img
        src={logo}
        alt="Licores La Sierra"
        className="w-50 h-50 object-contain p-2"
      />
    </div>
  </div>
</div>


        {/* título */}
        <h1 className="text-2xl font-bold mb-6 text-center">
          Iniciar Sesión
        </h1>

        {/* formulario */}
        <form onSubmit={submit} className="space-y-4">
          {/* Usuario */}
          <input
            type="text"
            placeholder="Usuario"
            className="w-full border border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-slate-800 
                       text-black dark:text-white 
                       rounded-lg px-3 py-2 focus:outline-none 
                       focus:ring-2 focus:ring-[#CCFF66]"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          {/* Contraseña */}
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Contraseña"
              className="w-full border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-slate-800 
                         text-black dark:text-white 
                         rounded-lg px-3 py-2 pr-10 focus:outline-none 
                         focus:ring-2 focus:ring-[#CCFF66]"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-400"
            >
              {show ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {err && <p className="text-lime-400 text-sm">{err}</p>}

          {/* Botón Entrar */}
          <button
            type="submit"
            className="w-full bg-black text-white dark:bg-white dark:text-black 
                       font-semibold py-2 rounded-lg shadow 
                       hover:opacity-90 transition"
          >
            Entrar
          </button>
        </form>

        {/* volver al menú */}
        <div className="mt-4">
          <button
            onClick={() => nav("/")}
            type="button"
            className="w-full bg-gray-200 text-gray-800 
                       dark:bg-slate-700 dark:text-white 
                       px-3 py-2 rounded-lg shadow 
                       hover:bg-gray-300 dark:hover:bg-slate-600 transition"
          >
            ← Volver al menú
          </button>
        </div>
      </div>
    </div>
  );
}
