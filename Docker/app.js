const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Merhaba Dünya!');
});

app.listen(port, () => {
    console.log(`Uygulama http://localhost:${port} adresinde çalışıyor.`);
});
