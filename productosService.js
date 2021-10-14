const { contenedor } = require('./container');

const productos = async () => {
    const products = await contenedor.getAll();
    return products;
};

const productoAzar = async () => {
    const num = Math.round((Math.random())*2)+1;
    const productoAzar = await contenedor.getById(num);
    return productoAzar;
}

module.exports = {productos, productoAzar};