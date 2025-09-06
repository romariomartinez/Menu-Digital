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
  { id: "bebidas-alimentos", name: "Bebidas y Alimentos" },
];

export default function CategoryChips({ selected, onSelect }) {
  return (
    <nav className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-16 z-30">
      <ul
        className="
          flex items-center justify-start sm:justify-center
          gap-4 sm:gap-6
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
                uppercase transition-colors
                ${
                  selected === c.id
                    ? "text-blue-600 dark:text-yellow-400 font-semibold border-b-2 border-current pb-0.5"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400"
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
