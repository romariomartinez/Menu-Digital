import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext'; // 👈 importa el ThemeProvider
import Header from './components/Header';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import Login from './pages/Login';

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
      <ThemeProvider> {/* 👈 envolvemos todo en ThemeProvider */}
        <Routes>
          <Route path="/" element={<Layout><Catalog/></Layout>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}

