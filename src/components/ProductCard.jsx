import React from "react";
import { Edit3, Trash2, Star } from "lucide-react";

export default function ProductCard({ product, isAdmin, onEdit, onDelete, formatPrice }) {
  return (
    <div className="w-88 rounded-lg overflow-hidden bg-white text-black dark:bg-slate-800 dark:text-white shadow-md hover:shadow-lg transition border border-gray-200 dark:border-slate-700">
      
      {/* Imagen */}
      <div className="relative bg-white dark:bg-slate-700 flex items-center justify-center h-35">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full object-contain p-2"
          />
        ) : (
          <span className="text-gray-400 text-xs">Sin imagen</span>
        )}

        {/* Etiquetas */}
        {product.featured && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
            <Star className="w-3 h-3" /> Destacado
          </span>
        )}
        {product.stock === 0 && (
          <span className="absolute inset-0 bg-black/70 flex items-center justify-center text-white font-bold text-sm">
            AGOTADO
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="p-3 flex flex-col gap-1">
        <h3 className="font-semibold text-sm truncate">{product.name}</h3>
        <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
          {product.description}
        </p>

        {/* Solo precio */}
        <div className="mt-1">
          <span className="text-green-600 dark:text-green-400 font-bold text-sm">
            {formatPrice(product.price)}
          </span>
        </div>

        {/* Botones admin */}
        {isAdmin && (
          <div className="flex gap-1 mt-2">
            <button
              onClick={() => onEdit(product)}
              className="flex items-center gap-1 px-2 py-1 text-[10px] rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              <Edit3 className="w-3 h-3" /> Editar
            </button>
            <button
              onClick={() => onDelete(product.id)}
              className="flex items-center gap-1 px-2 py-1 text-[10px] rounded-md bg-red-600 text-white hover:bg-red-700"
            >
              <Trash2 className="w-3 h-3" /> Borrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
