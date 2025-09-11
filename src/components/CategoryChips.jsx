import React from "react";

const categories = [
  { id: "todos", name: "Todos" },
  { id: "aguardientes", name: "Aguardientes" },
  { id: "rones", name: "Rones" },
  { id: "whisky", name: "Whisky" },
  { id: "cervezas", name: "Cervezas" },
  { id: "vinos", name: "Vinos" },
  { id: "tequilas", name: "Tequilas" },
  { id: "cocteleria", name: "Coctelería" },
  { id: "picadas", name: "Picadas" },
  { id: "ofertas", name: "Ofertas" },
];

export default function CategoryChips({ selected, onSelect }) {
  return (
    <nav className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-16 z-30">
      <ul
        className="
          flex items-center justify-start sm:justify-center
          gap-3 sm:gap-5
          px-2 sm:px-6
          py-2
          overflow-x-auto scrollbar-hide
          text-xs sm:text-sm md:text-base
          whitespace-nowrap
        "
      >
        {categories.map((c) => (
          <li key={c.id}>
            <button
              onClick={() => onSelect(c.id)}
              className={`
                uppercase px-4 py-1.5 rounded-full transition-all duration-200
                ${
                  selected === c.id
                    ? "bg-[#CCFF66] text-black font-bold shadow-md scale-105"
  : "text-gray-700 dark:text-gray-300 hover:text-[#CCFF66] dark:hover:text-[#CCFF66]"
                }
              `}
            >
              {c.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
