"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conexion = void 0;
const mongodb_1 = require("mongodb");
class Conexion {
    static uri() {
        try {
            const clientcon = new mongodb_1.MongoClient(this._uri, { useNewUrlParser: true, useUnifiedTopology: true });
            return clientcon;
        }
        catch (error) {
            throw new Error("Could not connect to MongoDB: " + error.message);
        }
    }
}
exports.Conexion = Conexion;
Conexion._uri = "mongodb+srv://rwkamandriw:IF3JJQIm00NdGzcq@carlosrodriguezcluster.eaywr.mongodb.net/CrudMongodb?retryWrites=true&w=majority";
//# sourceMappingURL=conection.js.map