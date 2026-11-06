# Mi VuelTica — sitio web

Sitio catálogo de la app Mi VuelTica (planes y actividades gratuitas en Costa Rica).
La app tiene toda la funcionalidad; la web solo la presenta y manda a las tiendas.

## Estructura
- `public/index.html` — página única
- `public/css/tokens.css` — tokens de diseño (fuente: Figma). Usar siempre estas variables.
- `public/css/site.css` — estilos del sitio
- `public/js/main.js` — links de tiendas (`STORE_LINKS`), filtros del catálogo, animaciones
- `public/img/` — logos
- `server.js` — servidor estático sin dependencias (Railway)

## Reglas de estilo
- Sin emojis en la web.
- Colores de marca: azul `#0b2f7a`, rojo `#c8102e`, blanco. Motivo: carretera blanca con línea punteada (`.road`).
- Voz: español de Costa Rica, voseo ("descargá", "armá", "vos").
- Fuente: Atkinson Hyperlegible.

## Correr local
`npm start` y abrir http://localhost:3000
