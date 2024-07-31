# Gunakan image Node.js resmi sebagai base image
FROM node:18

# Setel direktori kerja di dalam kontainer
WORKDIR /app

# Salin package.json dan package-lock.json ke direktori kerja
COPY package*.json ./

# Instal dependensi aplikasi
RUN npm install

# Instal PM2 secara global
RUN npm install -g pm2

# Salin sisa kode aplikasi ke direktori kerja
COPY . .

# Expose port 5001
EXPOSE 5001

# Gunakan PM2 untuk memulai aplikasi
CMD ["pm2-runtime", "index.js"]