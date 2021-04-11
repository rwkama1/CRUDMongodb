
import {MongoClient} from "mongodb";
export class Conexion {
    static _uri = "mongodb+srv://rwkamandriw:IF3JJQIm00NdGzcq@carlosrodriguezcluster.eaywr.mongodb.net/CrudMongodb?retryWrites=true&w=majority";
    static uri() {
        try {
         const clientcon = new MongoClient(this._uri, { useNewUrlParser: true, useUnifiedTopology: true })
         return clientcon;
        } catch (error) {
            throw new Error("Could not connect to MongoDB: " + error.message);
        }
       
    }
}
