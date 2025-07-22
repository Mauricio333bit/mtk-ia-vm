
# MKT-AI

MKT-AI es una plataforma web para la visualización y gestión de soluciones de inteligencia artificial aplicadas al diagnóstico por imágenes médicas. El proyecto está desarrollado con React y Vite, y presenta un catálogo interactivo de productos de IA de diferentes proveedores, cada uno con descripciones, imágenes, videos tutoriales y funcionalidades destacadas.

## Características principales

- **Catálogo de productos IA**: Visualiza soluciones de IA para radiología, resonancia magnética, tomografía, mamografía, ecografía y medicina nuclear.
- **Visualización de imágenes**: Cada producto incluye una galería de imágenes ilustrativas y descripciones detalladas.
- **Videos tutoriales**: Acceso rápido a videos de uso para cada solución.
- **Filtrado por categoría**: Explora productos por modalidad (CR/DX, MR, CT, MG, US, NM).
- **Listado de funcionalidades**: Cada producto muestra sus principales features y modo de uso.

## Estructura del proyecto

```
MKT-AI/
├── public/
│   └── img/           # Imágenes de productos y recursos gráficos
├── src/
│   ├── api/           # Lógica de conexión a APIs externas (si aplica)
│   ├── assets/        # Recursos estáticos y logos
│   ├── common/        # Componentes reutilizables (formularios, etc.)
│   ├── context/       # Contextos de React para manejo de estado global
│   ├── data/          # Archivos de datos (ej: aiProducts.js)
│   ├── features/      # Vistas y componentes principales por funcionalidad
│   ├── hooks/         # Custom hooks de React
│   ├── store/         # Manejo de estado (ej: Authstore.js)
│   ├── theme/         # Temas y estilos globales
│   ├── utils/         # Utilidades y helpers
│   ├── App.jsx        # Componente principal
│   └── main.jsx       # Punto de entrada de la app
├── index.html         # HTML principal
├── package.json       # Dependencias y scripts
├── vite.config.js     # Configuración de Vite
└── README.md          # Este archivo
```

## Instalación y ejecución

1. **Clona el repositorio:**
   ```powershell
   git clone https://github.com/Mauricio333bit/mtk-ia-vm.git
   cd mtk-ia-vm
   ```

2. **Instala las dependencias:**
   ```powershell
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```powershell
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173` (o el puerto que indique la terminal).

## Scripts disponibles

- `npm run dev` – Inicia el servidor de desarrollo.
- `npm run build` – Genera la versión de producción.
- `npm run preview` – Previsualiza la build de producción.

## Dependencias principales

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) (si aplica)
- [Otras dependencias según package.json]

## Personalización

- Puedes agregar o modificar productos editando el archivo `src/data/aiProducts.js`.
- Las imágenes de productos se encuentran en `public/img/`.
- Los estilos globales y temas están en `src/theme/`.

## Contribución

¡Las contribuciones son bienvenidas! Por favor, abre un issue o pull request para sugerencias, mejoras o reportar errores.

## Licencia

Este proyecto es privado y su uso está restringido a fines demostrativos y comerciales internos. Para más información, contacta al autor.

---

**Autor:** Mauricio333bit
