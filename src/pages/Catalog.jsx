// src/pages/Catalog.jsx
import React, { useState, useEffect, useMemo } from "react";
import { Plus } from "lucide-react";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";
import CategoryChips from "../components/CategoryChips";
import { useAuth } from "../context/AuthContext";

// 👇 servicios firebase
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../services/products";

export default function Catalog() {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [category, setCategory] = useState("todos");

  // cargar productos desde Firestore al montar
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Error cargando productos:", err);
      }
    };
    fetchData();
  }, []);

  //  filtrar por categoría
  const filtered = useMemo(
    () =>
      products.filter(
        (p) => category === "todos" || p.category === category
      ),
    [products, category]
  );

  // formato de precio
  const formatPrice = (p) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(p);

  // guardar producto (nuevo o edición)
  const save = async (data) => {
    try {
      if (editing) {
        await updateProduct(editing.id, data);
        setProducts((prev) =>
          prev.map((p) =>
            p.id === editing.id ? { ...data, id: editing.id } : p
          )
        );
        setEditing(null);
      } else {
        const newProd = await addProduct(data);
        setProducts((prev) => [...prev, newProd]);
      }
      setShowAdd(false);
    } catch (err) {
      console.error("Error guardando producto:", err);
    }
  };

  // borrar producto
  const del = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Error borrando producto:", err);
    }
  };

  return (
    <div className="p-6">
      {/* Filtros de categorías */}
      <CategoryChips selected={category} onSelect={setCategory} />

     {/* listado de productos */}
<div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
  {filtered.map((p) => (
    <ProductCard
      key={p.id}
      product={p}
      isAdmin={!!user}
      onEdit={setEditing}
      onDelete={del}
      formatPrice={formatPrice}
    />
  ))}
</div>


      {/* botón flotante agregar */}
      {user && (
        <button
          onClick={() => setShowAdd(true)}
          className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition"
        >
          <Plus />
        </button>
      )}

      {/* formularios */}
      {editing && (
        <ProductForm
          product={editing}
          onSave={save}
          onCancel={() => setEditing(null)}
        />
      )}
      {showAdd && (
        <ProductForm
          onSave={save}
          onCancel={() => setShowAdd(false)}
        />
      )}
    </div>
  );
}
