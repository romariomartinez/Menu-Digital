# 🍾 Licores La Sierra

Aplicación web responsive para catálogo digital de la licorería **Licores La Sierra**.  
Permite a los usuarios explorar el portafolio de productos y al administrador gestionar los licores desde un panel privado.

---

## ✨ Características

- 📱 **Responsive**: Se adapta a cualquier dispositivo (móvil, tablet y escritorio).
- 🌙 **Modo oscuro / claro**: Cambio dinámico de tema.
- 🔐 **Autenticación**: Login privado para administrador.
- 🛒 **Gestión de productos**:
  - Crear, editar y eliminar productos.
  - Subida de imágenes con vista previa.
  - Categorías y presentaciones personalizadas (ej: 375ml, 750ml, 1L).
  - Etiquetas de "Destacado" y "Agotado".
- 🔎 **Filtrado por categorías**.
- 🎨 **UI moderna** con TailwindCSS y componentes reutilizables.
- ☁️ **Firebase / Supabase** para autenticación, almacenamiento y base de datos.
- 📤 **Despliegue** en Firebase Hosting o Vercel.

---

## 🛠️ Tecnologías

- **Frontend**: React + Vite
- **Estilos**: TailwindCSS
- **Iconos**: Lucide React & React Icons
- **Backend / DB**: Firebase Firestore ó Supabase (según configuración)
- **Autenticación**: Firebase Auth
- **Hosting**: Firebase Hosting / Vercel

---

## 📂 Estructura del proyecto

src/
├── assets/ # Imágenes, logos, videos
├── components/ # Componentes reutilizables (Header, Footer, ProductCard, etc.)
├── context/ # Contextos (Auth, Theme)
├── pages/ # Páginas principales (Catalog, Login)
├── services/ # Conexión a Firebase/Supabase (CRUD productos)
├── supabaseClient.js # Configuración Supabase
├── App.jsx # Rutas principales
└── main.jsx # Punto de entrada

yaml
Copiar código

---

## 🚀 Instalación y uso

### 1️⃣ Clonar repositorio
```bash
git clone https://github.com/tuusuario/licores-la-sierra.git
cd licores-la-sierra
2️⃣ Instalar dependencias
bash
Copiar código
npm install
3️⃣ Variables de entorno
Crea un archivo .env en la raíz con las variables necesarias:

env
Copiar código
# Firebase
VITE_FIREBASE_API_KEY=xxxx
VITE_FIREBASE_AUTH_DOMAIN=xxxx
VITE_FIREBASE_PROJECT_ID=xxxx
VITE_FIREBASE_STORAGE_BUCKET=xxxx
VITE_FIREBASE_MESSAGING_SENDER_ID=xxxx
VITE_FIREBASE_APP_ID=xxxx

# Supabase
VITE_SUPABASE_URL=xxxx
VITE_SUPABASE_KEY=xxxx
4️⃣ Iniciar en modo desarrollo
bash
Copiar código
npm run dev
5️⃣ Compilar para producción
bash
Copiar código
npm run build
🔑 Credenciales por defecto (ejemplo)
Usuario: admin

Contraseña: admin123

(Recuerda cambiarlas en Firebase Auth o en tu backend).

📸 Capturas de pantalla
💻 Catálogo público
<img width="1916" height="862" alt="image" src="https://github.com/user-attachments/assets/8f87d5a3-e9a8-4abb-b67d-21173ba56a2b" />


🔐 Login
<img width="1907" height="854" alt="image" src="https://github.com/user-attachments/assets/7de87191-d965-497b-b9be-3fd0f23174b0" />

🛠️ Panel administrador
<img width="1885" height="852" alt="image" src="https://github.com/user-attachments/assets/425b1e51-6055-4deb-b901-26ed020789f8" />


📬 Contacto del desarrollador
📧 Correo: contacto@lasierra.com
📱 WhatsApp: wa.me/573245703281
📸 Instagram: @licoreralasierra

📄 Licencia
Este proyecto es de uso privado para Licores La Sierra.
Todos los derechos reservados © 2025.
