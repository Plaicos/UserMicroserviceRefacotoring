var UserModel = require("../UserModel");

module.exports = class SupplierModel extends UserModel {
    MinimumSaleValue;
    
    constructor(){
        super();
        this.Type = "supplier";
    }
}