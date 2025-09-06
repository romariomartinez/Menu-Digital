import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // 👈 añadí Link
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
        
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-r from-yellow-400 to-orange-500">
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <img
                src={logo}
                alt="Licores La Sierra"
                className="w-full h-full object-cover"
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
          <input
            type="text"
            placeholder="Usuario"
            className="w-full border p-3 rounded dark:bg-slate-800 dark:border-slate-700"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Contraseña"
              className="w-full border p-3 rounded pr-10 dark:bg-slate-800 dark:border-slate-700"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-3 text-gray-500 dark:text-gray-400"
            >
              {show ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {err && <p className="text-red-600 text-sm">{err}</p>}

          <button
            type="submit"
            className="bg-blue-600 text-white px-3 py-2 rounded w-full hover:bg-blue-700"
          >
            Entrar
          </button>
        </form>

        {/* volver al menú */}
        <div className="mt-4">
  <button
    onClick={() => nav("/")}
    type="button"
    className="w-full bg-gray-200 text-gray-800 dark:bg-slate-700 dark:text-white px-3 py-2 rounded hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors"
  >
    ← Volver al menú
  </button>
</div>
      </div>
    </div>
  );
}
