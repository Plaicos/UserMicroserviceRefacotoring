var UserModel = require("../UserModel");

module.exports = class SupplierModel extends UserModel {
    constructor(){
        this.Type = "supplier";
    }
}