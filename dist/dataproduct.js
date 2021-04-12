"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataProduct = void 0;
const conection_1 = require("./conection");
const product_1 = require("./product");
class DataProduct {
    constructor() {
        this.getProducts = async () => {
            let conection = await conection_1.Conexion.uri().connect();
            try {
                const collection = conection.db("CrudMongodb").collection("Product");
                const result = await collection.find({}).toArray();
                let array = [];
                for (var p of result) {
                    var obj = new product_1.DTProduct(p._id, p.Namep, p.PriceP);
                    array.push(obj);
                }
                conection.close();
                return array;
            }
            catch (e) {
                return e.message;
            }
        };
        this.getProduct = async (name) => {
            let conection = await conection_1.Conexion.uri().connect();
            try {
                let query = { Namep: name };
                const collection = conection.db("CrudMongodb").collection("Product");
                const p = await collection.findOne(query);
                var obj = new product_1.DTProduct(p._id, p.Namep, p.PriceP);
                conection.close();
                return obj;
            }
            catch (e) {
                return e.message;
            }
        };
        //********************************************************************** */
        this.addProduct = async (dtproduct) => {
            let conection = await conection_1.Conexion.uri().connect();
            try {
                const col = conection.db("CrudMongodb").collection("Product");
                let query = { Namep: dtproduct.namep, PriceP: dtproduct.pricep };
                const result = await col.insertOne(query);
                conection.close();
                return true;
            }
            catch (e) {
                return e.message;
            }
        };
        this.deleteProduct = async (dtproduct) => {
            let conection = await conection_1.Conexion.uri().connect();
            try {
                let query = { Namep: dtproduct.namep };
                const result = conection.db("CrudMongodb").collection("Product").deleteOne(query);
                return true;
            }
            catch (e) {
                return e.message;
            }
        };
        this.updateProduct = async (dtproduct) => {
            let conection = await conection_1.Conexion.uri().connect();
            try {
                let query = { Namep: dtproduct.namep };
                var newvalues = { $set: { PriceP: dtproduct.pricep } };
                const result = conection.db("CrudMongodb").collection("Product").updateOne(query, newvalues);
                return true;
            }
            catch (e) {
                return e.message;
            }
        };
    }
}
exports.DataProduct = DataProduct;
DataProduct.getInstance = () => {
    if (!DataProduct.instancia) {
        DataProduct.instancia = new DataProduct();
    }
    return DataProduct.instancia;
};
// var pr = new DTProduct(0, "asfgsag", 6655);
// DataProduct.getInstance().addProduct(pr).then(datad1 => {
//    console.log(datad1);
// })
// DataProduct.getInstance().getProducts().then(datad1 => {
//    console.log(datad1);
// })
// DataProduct.getInstance().getProduct("asfgsag").then(datad1 => {
//    console.log(datad1);
// })
// DataProduct.getInstance().deleteProduct(pr).then(datad1 => {
//    console.log(datad1);
// })
// DataProduct.getInstance().updateProduct(pr).then(datad1 => {
//    console.log(datad1);
// })
//# sourceMappingURL=dataproduct.js.map