const redis = require('redis');

// Redis client'ı oluştur
const client = redis.createClient({
  url: 'redis://localhost:6379'
});

// Bağlantı hatalarını dinle
client.on('error', (err) => {
  console.error('Redis bağlantı hatası:', err);
});

// Bağlantı başarılı
client.on('connect', () => {
  console.log('Redis serverına bağlanıldı.');

  // Veriyi Redis'e ekle
  client.set('message', 'Hello World from Redis!', (err, reply) => {
    if (err) {
      console.error('Veri ekleme hatası:', err);
    } else {
      console.log('Veri eklendi:', reply);

      // Veriyi okuma
      client.get('message', (err, reply) => {
        if (err) {
          console.error('Veri okuma hatası:', err);
        } else {
          console.log('Redis mesajı:', reply);
        }
        client.quit(); // Bağlantıyı kapat
      });
    }
  });
});
