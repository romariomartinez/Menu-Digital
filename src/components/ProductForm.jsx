import React, { useState } from "react";
import { Save, X } from "lucide-react";
import { supabase } from "../supabaseClient"; // asegúrate de que este archivo exista en src/

const categories = [
  { id: "aguardientes", name: "Aguardientes" },
  { id: "rones", name: "Rones" },
  { id: "whisky", name: "Whisky" },
  { id: "cervezas", name: "Cervezas" },
  { id: "vinos", name: "Vinos" },
];

export default function ProductForm({ product, onSave, onCancel }) {
  const [f, setF] = useState(
    product || { name: "", category: "aguardientes", price: 0, description: "", image: "" }
  );
  const [uploading, setUploading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    onSave(f);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      // limpiar nombre del archivo
      const cleanName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
      const fileName = `${Date.now()}_${cleanName}`;

      // subir a bucket "licores"
      const { error: uploadError } = await supabase.storage
        .from("licores")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // obtener URL pública
      const { data, error: urlError } = supabase.storage
        .from("licores")
        .getPublicUrl(fileName);

      if (urlError) throw urlError;

      if (data?.publicUrl) {
        setF({ ...f, image: data.publicUrl });
      } else {
        console.error("❌ No se pudo generar la URL pública");
      }
    } catch (err) {
      console.error("Error subiendo imagen a Supabase:", err);
    }
    setUploading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-slate-900 dark:text-white rounded-xl p-6 w-full max-w-md shadow-xl">
        <div className="flex justify-between mb-4 items-center">
          <h3 className="font-bold text-lg">{product ? "Editar" : "Nuevo"} Producto</h3>
          <button onClick={onCancel} className="text-gray-500 hover:text-red-600">
            <X />
          </button>
        </div>

        <form onSubmit={submit} className="space-y-3">
          {/* Nombre */}
          <input
            className="w-full border p-2 rounded dark:bg-slate-800 dark:border-slate-700"
            placeholder="Nombre"
            value={f.name}
            onChange={(e) => setF({ ...f, name: e.target.value })}
            required
          />

          {/* Categoría */}
          <select
            className="w-full border p-2 rounded dark:bg-slate-800 dark:border-slate-700"
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
            className="w-full border p-2 rounded dark:bg-slate-800 dark:border-slate-700"
            placeholder="Precio"
            value={f.price}
            onChange={(e) => setF({ ...f, price: parseInt(e.target.value) || 0 })}
            required
          />

          {/* Descripción */}
          <textarea
            className="w-full border p-2 rounded dark:bg-slate-800 dark:border-slate-700"
            placeholder="Descripción"
            value={f.description}
            onChange={(e) => setF({ ...f, description: e.target.value })}
          />

          {/* Imagen */}
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {uploading && <p className="text-sm text-blue-500">Subiendo imagen...</p>}
          {f.image && (
            <img
              src={f.image}
              alt="preview"
              className="mt-2 w-24 h-24 object-cover rounded"
            />
          )}

          {/* Botones */}
          <div className="flex gap-2 pt-2">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white px-3 py-2 rounded flex items-center justify-center gap-1 hover:bg-blue-700"
            >
              <Save className="w-4 h-4" /> Guardar
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-gray-400 px-3 py-2 rounded hover:bg-gray-500"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
