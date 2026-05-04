# Lista de la Compra

Práctica del módulo de **Desarrollo de Interfaces** (2º DAM).

El objetivo es crear una aplicación con interfaz gráfica para gestionar una lista de la compra. He usado **React + Vite** porque es lo que vimos en clase con el ejemplo del to-do, así que me ha resultado más cómodo partir de ahí.

---

## ¿Qué hace la aplicación?

- Añadir productos escribiendo en el campo de texto y pulsando el botón o la tecla **Enter**
- Ver todos los productos en una lista
- Eliminar un producto con el botón ✕
- Marcar productos como comprados (se tachan al hacer clic sobre ellos)
- Vaciar la lista entera con el botón de abajo
- Muestra el total de productos y cuántos están ya comprados
- No deja añadir productos vacíos ni repetidos

---

## Tecnologías usadas

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- CSS propio (sin librerías externas)

---

## Estructura del proyecto

```
lista-compra/
├── public/
├── src/
│   ├── components/
│   │   ├── Add/        → Formulario para añadir productos
│   │   ├── Item/       → Cada producto de la lista
│   │   └── List/       → Contenedor de la lista
│   ├── App.jsx         → Lógica principal y estado
│   ├── constants.js    → Productos de ejemplo iniciales
│   ├── index.css       → Estilos
│   └── main.jsx        → Punto de entrada
├── index.html
└── package.json
```

---

## Cómo ejecutarlo

Necesitas tener **Node.js** instalado.

```bash
# Instalar dependencias
yarn install (o npm install)

# Arrancar en modo desarrollo
yarn dev (o npm run dev)

# abrir el navegador en `http://localhost:5173`

---

## Funcionalidades implementadas

### Obligatorias según práctica
- [x] Añadir producto mediante campo de texto
- [x] Mostrar productos en una lista visible
- [x] Eliminar un producto de la lista

### Opcionales
- [x] Marcar productos como comprados
- [x] Vaciar la lista completa
- [x] Mostrar el número total de productos
- [x] Evitar productos vacíos o repetidos
- [x] Mejoras en el diseño de la interfaz

---

## Notas

He partido del ejemplo del to-do que vimos en clase y lo he adaptado. El to-do original solo mostraba la lista con datos de prueba y tenía el formulario sin conectar, así que he añadido toda la lógica de añadir, eliminar y marcar como comprado, además del CSS.

---

*Elías — 2º DAM · Desarrollo de Interfaces · *
