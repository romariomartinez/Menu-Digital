// src/components/ProductList.jsx
import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, isAdmin, onEdit, onDelete, formatPrice }) {
  if (!products || products.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500 dark:text-gray-300">
        No hay productos disponibles
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            isAdmin={isAdmin}
            onEdit={onEdit}
            onDelete={onDelete}
            formatPrice={formatPrice}
          />
        ))}
      </div>
    </div>
  );
}
