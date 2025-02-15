FROM node:22-alpine

# Imposta la directory di lavoro all'interno del container
WORKDIR /app

# Installa pnpm globalmente
RUN npm install -g pnpm

# Copia prima il packages
COPY package.json ./

# Installa le dipendenze utilizzando pnpm
RUN pnpm install

# Copia il resto del codice dell'applicazione nella directory di lavoro
# Specificare eventuali file o cartelle da ignorare sul docker ignore
COPY . .

# Run the application.
CMD ["pnpm","run","prod"]