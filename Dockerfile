# Stage 1: Build
FROM node:18-alpine AS build

# Setel direktori kerja di dalam kontainer
WORKDIR /app

# Salin package.json dan package-lock.json ke direktori kerja
COPY package*.json ./

# Instal dependensi aplikasi di mode produksi
RUN npm install --omit=dev

# Instal PM2 secara global
RUN npm install -g pm2

# Salin sisa kode aplikasi ke direktori kerja
COPY . .

# Stage 2: Runtime
FROM node:18-alpine

# Setel direktori kerja di dalam kontainer
WORKDIR /app

# Salin dari stage build
COPY --from=build /app /app

# Expose port 5001
EXPOSE 5001

# Gunakan PM2 untuk memulai aplikasi
CMD ["pm2-runtime", "index.js"]
