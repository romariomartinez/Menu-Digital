import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png"; // tu logo aquí

export default function Splash() {
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFade(true), 2500);
    const timer2 = setTimeout(() => navigate("/catalog"), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [navigate]);

  return (
    <div
      className={`fixed inset-0 bg-white flex flex-col items-center justify-center z-50 transition-opacity duration-700 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo centrado */}
      <img
        src={logo}
        alt="La Sierra Licores"
        className="w-60 sm:w-80 mb-6"
      />

      
    </div>
  );
}
