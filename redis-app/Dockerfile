# Node.js imajını kullan
FROM node:18

# Çalışma dizini oluştur ve ayarla
WORKDIR /app

# Uygulama dosyalarını kopyala
COPY . .

# Bağımlılıkları yükle
RUN npm install

# Uygulamayı başlat
CMD ["node", "redis-app.js"]
