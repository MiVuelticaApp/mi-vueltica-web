# Mi VuelTica — sitio web
# Imagen liviana: el servidor no tiene dependencias, solo necesita Node.
FROM node:22-alpine

ENV NODE_ENV=production \
    PORT=3000

WORKDIR /app

COPY package.json server.js ./
COPY public ./public

# Correr sin privilegios de root
USER node

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- "http://127.0.0.1:${PORT}/" > /dev/null || exit 1

CMD ["node", "server.js"]
