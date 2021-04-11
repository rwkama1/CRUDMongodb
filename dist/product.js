"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DTProduct = void 0;
class DTProduct {
    constructor(idd, name, price) {
        this._id = "";
        this._namep = "";
        this._pricep = 0;
        this.id = idd;
        this.namep = name;
        this.pricep = price;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get namep() {
        return this._namep;
    }
    set namep(value) {
        this._namep = value;
    }
    get pricep() {
        return this._pricep;
    }
    set pricep(value) {
        this._pricep = value;
    }
}
exports.DTProduct = DTProduct;
//# sourceMappingURL=product.js.map