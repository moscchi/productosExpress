const { productos, productoAzar } = require('./productosService');

const getProductos = async() => {
    const products = await productos();
    return products;
};

 const getProductoAzar = async() => {
    const products = productoAzar();
    return products;
    };

module.exports = {getProductos, getProductoAzar};