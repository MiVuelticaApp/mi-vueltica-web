# Mi VuelTica · Website

Marketing website for Mi VuelTica: a catalog of free plans and activities all over Costa Rica that presents the app and links to the app stores.

| Repository | What it is |
|---|---|
| [mi-vueltica-app](https://github.com/MiVuelticaApp/mi-vueltica-app) | Mobile app (iOS, Android and web) |
| [mi-vueltica-api](https://github.com/MiVuelticaApp/mi-vueltica-api) | REST API and MCP server |
| **mi-vueltica-web** | Marketing website |
| [mi-vueltica-crawler](https://github.com/MiVuelticaApp/mi-vueltica-crawler) | Event crawler (private) |

## Features

- Single page that presents the app and its sample plans, filtered by audience (students, families, seniors).
- App Store and Google Play buttons, shown as "Muy pronto en" until the store links are set.
- Social links (Instagram and TikTok) and a contact email.

## Tech stack

- Static HTML, CSS and JavaScript (no framework, no build step)
- Node.js static server with no dependencies (`server.js`)
- Docker and Railway for deployment

## Requirements

- Node.js 18 or later
- No `npm install` needed: there are no dependencies

## Getting started

```bash
npm start
```

Open <http://localhost:3000>. To use another port:

```bash
# macOS / Linux / Git Bash
PORT=8080 npm start

# PowerShell
$env:PORT=8080; npm start
```

## Commands

| Command | What it does |
|---|---|
| `npm start` | Static server on port 3000 (or `PORT`) |
| `docker compose up -d --build` | Build the image and start the container |
| `docker compose logs -f` | Follow the logs |
| `docker compose down` | Stop the container |

## Configuration

| Setting | Where |
|---|---|
| `PORT` | Environment variable, default 3000 (Railway sets it) |
| App Store / Google Play links | `STORE_LINKS` in [`public/js/main.js`](public/js/main.js) |
| Texts and catalog plans | [`public/index.html`](public/index.html): each plan is an `<article class="plan">`, and `data-aud` (`student`, `family`, `senior`) sets the filters it appears in |
| Colors and spacing | Variables in [`public/css/tokens.css`](public/css/tokens.css) |

Brand rules for the site: no emojis, blue `#0b2f7a`, red `#c8102e` and white, and Costa Rican "voseo" in the copy ("descargá", "armá", "vos").

## Project structure

```
├── public/              # Everything served on the web
│   ├── index.html       # Single page
│   ├── css/
│   │   ├── tokens.css   # Design tokens (colors, typography, spacing)
│   │   └── site.css     # Site styles
│   ├── js/main.js       # Store links, filters and animations
│   └── img/             # Logos
├── server.js            # Static server (no dependencies)
├── package.json
└── railway.json         # Deployment settings
```

## Deployment

Railway builds the `Dockerfile` and redeploys on every push to `main`:

1. In [Railway](https://railway.com): **New Project → Deploy from GitHub repo** and pick this repository.
2. Railway assigns `PORT` automatically.
3. In **Settings → Networking → Generate Domain**, create the public URL or connect a custom domain.

Without Railway:

```bash
docker build -t mivueltica-web .
docker run -d -p 3000:3000 --name mivueltica-web mivueltica-web
```

## Documentation

- [`CLAUDE.MD`](CLAUDE.MD): project conventions
- Instagram: [@mi_vueltica](https://www.instagram.com/mi_vueltica/)
