const fs = require('fs');

class Container {
    constructor(ruta){
        this.ruta = ruta
    };
    async getById(id){
        try {
            let objs = await fs.promises.readFile('./productos.txt', 'utf-8');
            let objsParsed = JSON.parse(objs);
            let byId = objsParsed.filter(obj => obj.id === id);
            console.log('object', byId)
            return byId;
            } 
        catch (err) {
            console.log(err);
            };
    
    }     
    async getAll(){
        try{
            const objs = await fs.promises.readFile('./productos.txt', 'utf-8');
            return JSON.parse(objs);
        }catch(err){
            return []
        }
    }
}
const contenedor = new Container('./productos.txt');

module.exports = { contenedor };