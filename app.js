const { getProductos, getProductoAzar } = require('./controller');
const express = require('express');
const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log('Servidor corriendo en puerto', PORT);
});

server.on('error', err => console.log('Upaaaaaaaaa algo paso: ', err));

app.get('/', (req, res) => {
    res.send('Server is up!');
});

app.get('/productos', async (req, res) => {
    res.send(await getProductos());
});

app.get('/productoRandom', async (req, res) => {
    res.send(await getProductoAzar());
});