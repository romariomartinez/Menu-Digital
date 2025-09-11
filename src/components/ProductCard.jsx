import React, { useState } from "react";
import { Edit3, Trash2, Star, X } from "lucide-react";

export default function ProductCard({ product, isAdmin, onEdit, onDelete, formatPrice }) {
  const [zoom, setZoom] = useState(false);

  return (
    <>
      <div className="w-44 sm:w-52 bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-lg transition border border-gray-200 dark:border-slate-700 flex flex-col items-center p-4 cursor-pointer">
        
        {/* Imagen */}
        <div
          className="relative w-full h-40 flex items-center justify-center mb-3"
          onClick={() => product.image && setZoom(true)}
        >
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full object-contain"
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

       <div className="w-full text-left">
        
  {/* Precio */}
  <span className="text-base font-bold text-green-600 dark:text-green-400 block">
    {formatPrice(product.price)}
  </span>

  {/* Nombre */}
  <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2 mt-1">
    {product.name}
  </p>

  {/* Presentación */}
  {product.presentation && (
    <span className="inline-block mt-1 px-3 py-1 border rounded-lg text-xs text-gray-600 dark:text-gray-300">
      {product.presentation}
    </span>
  )}

</div>

        {/* Botones admin */}
        {isAdmin && (
          <div className="flex gap-1 mt-3">
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

      {/* Modal de zoom */}
      {zoom && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative max-w-lg w-full p-4">
            <button
              onClick={() => setZoom(false)}
              className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
            <div className="bg-white dark:bg-slate-800 mt-3 p-4 rounded-lg shadow">
              <h2 className="text-lg font-bold">{product.name}</h2>

              {/* Presentación en el modal */}
              {product.presentation && (
                <span className="inline-block mt-1 px-3 py-1 border rounded-lg text-xs text-gray-600 dark:text-gray-300">
                  {product.presentation}
                </span>
              )}

              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 mb-2">
                {product.description || "Sin descripción"}
              </p>
              <span className="text-green-600 dark:text-green-400 font-bold text-xl">
                {formatPrice(product.price)}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
