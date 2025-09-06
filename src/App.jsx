// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

// 👉 página 404 muy simple
function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-6">Página no encontrada</p>
      <a
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Volver al inicio
      </a>
    </div>
  );
}

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-sierra dark:text-white transition-colors">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Routes>
          {/* Público */}
          <Route path="/" element={<Layout><Catalog /></Layout>} />

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Ruta privada */}
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Layout><Catalog /></Layout>
              </PrivateRoute>
            }
          />

          {/* Catch-all → 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}
