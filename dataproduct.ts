
import { Conexion } from "./conection";
import { DTProduct } from "./product";

export class DataProduct
{
    private static instancia: DataProduct;
    private constructor() { }
    static getInstance=()=> {
        if (!DataProduct.instancia) {
            DataProduct.instancia = new DataProduct();
        }
        return DataProduct.instancia;
     }
    
   getProducts=async()=> {
    let conection = await Conexion.uri().connect();
        try {
            const collection = conection.db("CrudMongodb").collection("Product");
            const result = await collection.find({}).toArray();
            let array = [];
            for (var p of result)
            {
                var obj = new DTProduct(p._id, p.Namep, p.PriceP)
                array.push(obj);
            }
            conection.close();
            return array;
            
           
    
        }
        catch (e) {
            return e.message
        }
    
    
    }
    getProduct=async(name)=> {
        let conection = await Conexion.uri().connect();
        try {
    
            let query = { Namep: name }
            const collection = conection.db("CrudMongodb").collection("Product");
            const p = await collection.findOne(query);
            
            var obj = new DTProduct(p._id, p.Namep, p.PriceP);
            conection.close();
            return obj;
            
    
        }
        catch (e) {
            return e.message
        }
      
    
    }
    //********************************************************************** */
    addProduct=async(dtproduct:DTProduct)=> {
        let conection = await Conexion.uri().connect();
        try {
            const col = conection.db("CrudMongodb").collection("Product");
            
            let query = {Namep: dtproduct.namep, PriceP: dtproduct.pricep };
            const result = await col.insertOne(query);
            conection.close();
            return true;
           
    
        }
        catch (e) {
            return e.message
        }
    }
    deleteProduct=async(dtproduct:DTProduct)=> {
        let conection = await Conexion.uri().connect();
        try {
            let query = { Namep: dtproduct.namep };
            const result = conection.db("CrudMongodb").collection("Product").deleteOne(query);
            return true;
        }
        catch (e) {
            return e.message
        }
    }
    updateProduct=async(dtproduct:DTProduct)=> {
        let conection = await Conexion.uri().connect();
        try {
    
            let query = {Namep: dtproduct.namep};
            var newvalues = { $set: {PriceP: dtproduct.pricep } };
            const result = conection.db("CrudMongodb").collection("Product").updateOne(query, newvalues);
            return true;
           
    
        }
        catch (e) {
            return e.message
        }
    }


}
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
