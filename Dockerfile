# Gunakan image Node.js resmi sebagai base image
FROM node:18-alpine AS build

# Setel direktori kerja di dalam kontainer
WORKDIR /app

# Salin package.json dan package-lock.json ke direktori kerja
COPY package*.json ./

# Instal dependensi aplikasi
RUN npm install --omit=dev

# Salin sisa kode aplikasi ke direktori kerja
COPY . .

# Stage : Runtime
FROM node:18-alpine

# Setel direktori kerja di dalam kontainer
WORKDIR /app

# Salin dari stage build
COPY --from=build /app /app

# Expose port 5001
EXPOSE 5001

# Gunakan PM2 untuk memulai aplikasi
CMD ["node", "index.js"]