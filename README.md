# Mi VuelTica — sitio web

Página catálogo de la app **Mi VuelTica**: planes y actividades gratuitas en todo Costa Rica.
La app tiene todas las funciones; esta web las presenta y lleva a las tiendas de aplicaciones.

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior

No hay dependencias que instalar. No hace falta correr `npm install`.

## Correr en local

```bash
npm start
```

Abrí <http://localhost:3000>.

Para usar otro puerto:

```bash
# macOS / Linux / Git Bash
PORT=8080 npm start

# PowerShell
$env:PORT=8080; npm start
```

Para detener el servidor: `Ctrl + C`.

## Estructura

```
├── public/              # Todo lo que se sirve en la web
│   ├── index.html       # Página única
│   ├── css/
│   │   ├── tokens.css   # Tokens de diseño (colores, tipografía, espaciado)
│   │   └── site.css     # Estilos del sitio
│   ├── js/main.js       # Links de tiendas, filtros y animaciones
│   └── img/             # Logos
├── server.js            # Servidor estático (sin dependencias)
├── package.json
└── railway.json         # Configuración de deploy
```

## Cambios frecuentes

### Activar los links de las tiendas

En [`public/js/main.js`](public/js/main.js), pegá los links en `STORE_LINKS`:

```js
const STORE_LINKS = {
  appStore: 'https://apps.apple.com/...',
  googlePlay: 'https://play.google.com/store/apps/details?id=...',
};
```

Mientras un link esté vacío, su botón dice "Muy pronto en" y la página muestra un aviso para seguirnos en Instagram.

### Editar textos o planes del catálogo

Todo el contenido está en [`public/index.html`](public/index.html). Cada plan es un `<article class="plan">`.
El atributo `data-aud` define en qué filtros aparece: `student`, `family` y/o `senior`.

### Colores y estilos

Usá siempre las variables de [`public/css/tokens.css`](public/css/tokens.css). Reglas de la marca:

- Sin emojis en la web.
- Azul `#0b2f7a`, rojo `#c8102e` y blanco.
- Textos con voseo ("descargá", "armá", "vos").

## Deploy en Railway

1. Subí los cambios a GitHub (`git push`).
2. En [Railway](https://railway.com): **New Project → Deploy from GitHub repo** y elegí este repositorio.
3. Railway detecta Node y usa `npm start`. El puerto se toma de la variable `PORT` que Railway asigna automáticamente.
4. En **Settings → Networking → Generate Domain** generás la URL pública, o conectás un dominio propio.

Cada `push` a la rama principal vuelve a desplegar el sitio automáticamente.

## Redes

Instagram: [@mi_vueltica](https://www.instagram.com/mi_vueltica/)
