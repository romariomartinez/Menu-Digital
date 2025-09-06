import React from "react";

const categories = [
  { id: "todos", name: "Todos" },
  { id: "aguardientes", name: "Aguardientes" },
  { id: "rones", name: "Rones" },
  { id: "whisky", name: "Whisky" },
  { id: "cervezas", name: "Cervezas" },
  { id: "vinos", name: "Vinos" },
];

export default function CategoryChips({ selected, onSelect }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {categories.map((c) => (
        <button
          key={c.id}
          onClick={() => onSelect(c.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${
              selected === c.id
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-slate-700 dark:text-gray-200 dark:hover:bg-slate-600"
            }`}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}
