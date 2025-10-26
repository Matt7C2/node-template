# =========================
# STAGE 1 — Build
# =========================
FROM node:22-alpine AS builder

# Directory di lavoro
WORKDIR /app

# Installa pnpm globalmente
RUN npm install -g pnpm

# Copia solo i file necessari per installare le dipendenze
COPY package.json pnpm-lock.yaml* ./

# Installa solo le dipendenze di produzione e senza opzionali
RUN pnpm install --frozen-lockfile --prod --no-optional

# Copia il resto del codice
COPY src/ .

RUN rm -f package.json pnpm-lock.yaml

# Se hai build step (es. TypeScript) li fai qui
# RUN pnpm run build

# =========================
# STAGE 2 — Runtime minimale
# =========================
FROM node:22-alpine AS runtime

WORKDIR /app

# Copia solo node_modules di produzione e codice dall'immagine builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app ./

# Entry point diretto con node
# Sostituisci dist/index.js con il tuo entry point reale
CMD ["node", "index.js"]
