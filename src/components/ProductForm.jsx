// src/components/ProductForm.jsx
import React, { useState } from "react";
import { Save, X, Upload } from "lucide-react";
import { supabase } from "../supabaseClient";

const categories = [
  { id: "aguardientes", name: "Aguardientes" },
  { id: "rones", name: "Rones" },
  { id: "whisky", name: "Whisky" },
  { id: "cervezas", name: "Cervezas" },
  { id: "vinos", name: "Vinos" },
  { id: "tequilas", name: "Tequilas" },
  { id: "cocteleria", name: "Coctelería" },
  { id: "picadas", name: "Picadas" },
];

export default function ProductForm({ product, onSave, onCancel }) {
  const [f, setF] = useState(
    product || {
      name: "",
      category: "aguardientes",
      price: "",
      presentation: "",
      description: "",
      image: "",
    }
  );

  const [uploading, setUploading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!f.name || !f.price || !f.presentation) {
      alert("⚠️ Todos los campos obligatorios deben estar completos");
      return;
    }
    onSave(f);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const cleanName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
      const fileName = `${Date.now()}_${cleanName}`;

      const { error: uploadError } = await supabase.storage
        .from("licores")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data, error: urlError } = supabase.storage
        .from("licores")
        .getPublicUrl(fileName);

      if (urlError) throw urlError;

      if (data?.publicUrl) {
        setF({ ...f, image: data.publicUrl });
      }
    } catch (err) {
      console.error("❌ Error subiendo imagen:", err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-slate-900 dark:text-white rounded-xl p-6 w-full max-w-md shadow-2xl">
        
        {/* Header modal */}
        <div className="flex justify-between mb-4 items-center border-b pb-2 dark:border-slate-700">
          <h3 className="font-bold text-lg">
            {product ? "Editar Producto" : "Nuevo Producto"}
          </h3>
          <button
            onClick={onCancel}
            className="text-gray-500 hover:text-red-600 transition"
          >
            <X />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="space-y-4">
          
          {/* Nombre */}
          <input
            className="w-full border-2 border-lime-300 p-2 rounded-lg bg-white text-black placeholder-gray-500 
                       focus:ring-2 focus:ring-lime-300 focus:outline-none"
            placeholder="Nombre del producto"
            value={f.name}
            onChange={(e) => setF({ ...f, name: e.target.value })}
            required
          />

          {/* Categoría */}
          <select
            className="w-full border-2 border-lime-300 p-2 rounded-lg bg-white text-black 
                       focus:ring-2 focus:ring-lime-300 focus:outline-none"
            value={f.category}
            onChange={(e) => setF({ ...f, category: e.target.value })}
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>

          {/* Precio */}
          <input
            type="number"
            min="0"
            className="w-full border-2 border-lime-300 p-2 rounded-lg bg-white text-black placeholder-gray-500 
                       focus:ring-2 focus:ring-lime-300 focus:outline-none"
            placeholder="Precio (COP)"
            value={f.price}
            onChange={(e) => setF({ ...f, price: parseInt(e.target.value) || "" })}
            required
          />

          {/* Presentación */}
          <input
            className="w-full border-2 border-lime-300 p-2 rounded-lg bg-white text-black placeholder-gray-500 
                       focus:ring-2 focus:ring-lime-300 focus:outline-none"
            placeholder="Presentación (ej: 375ml, 750ml, 1L)"
            value={f.presentation}
            onChange={(e) => setF({ ...f, presentation: e.target.value })}
            required
          />

          {/* Descripción */}
          <textarea
            className="w-full border-2 border-lime-300 p-2 rounded-lg bg-white text-black placeholder-gray-500 
                       focus:ring-2 focus:ring-lime-300 focus:outline-none"
            placeholder="Descripción (opcional)"
            value={f.description}
            onChange={(e) => setF({ ...f, description: e.target.value })}
          />

          {/* Imagen */}
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-lime-300 rounded-lg p-4 cursor-pointer hover:border-lime-400 transition">
            <Upload className="w-6 h-6 mb-1 text-gray-500" />
            <span className="text-sm text-gray-600">
              {uploading ? "Subiendo..." : "Subir imagen"}
            </span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          {f.image && (
            <img
              src={f.image}
              alt="preview"
              className="mt-2 w-full h-40 object-cover rounded-lg shadow-md"
            />
          )}

          {/* Botones */}
          <div className="flex gap-2 pt-3">
            <button
              type="submit"
              className="flex-1 bg-lime-300 text-black font-semibold px-3 py-2 rounded-lg flex items-center justify-center gap-1 hover:bg-lime-400 transition"
            >
              <Save className="w-4 h-4" /> Guardar
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-gray-300 text-black px-3 py-2 rounded-lg hover:bg-gray-400 transition"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
