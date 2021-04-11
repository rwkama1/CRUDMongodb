export class DTProduct
{
    _id = "";
    _namep = "";
    _pricep = 0;
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
    constructor(idd, name, price)
    {
        this.id = idd;
        this.namep = name;
        this.pricep = price
    }
}
