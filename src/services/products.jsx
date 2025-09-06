// src/services/products.js
import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const productsRef = collection(db, "products");

// Obtener productos
export const getProducts = async () => {
  const snapshot = await getDocs(productsRef);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
};

// Agregar producto
export const addProduct = async (product) => {
  const docRef = await addDoc(productsRef, product);
  return { id: docRef.id, ...product };
};

// Editar producto
export const updateProduct = async (id, product) => {
  const productDoc = doc(db, "products", id);
  await updateDoc(productDoc, product);
};

// Borrar producto
export const deleteProduct = async (id) => {
  const productDoc = doc(db, "products", id);
  await deleteDoc(productDoc);
};
