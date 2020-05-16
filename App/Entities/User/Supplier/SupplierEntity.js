var UserEntity = require("../UserEntity");

module.exports = class SupplierEntity extends UserEntity {
    //data fields
    static MinimumSaleValue = require("./DataFields/MinimumSaleValue/MinimumSaleValue");

    //instance of SupplierModel as input
    static async ValidateSupplier(supplier) {
        try {
            await this.ValidateUser(supplier);
            await this.ValidateExclusiveDataFields(supplier);
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    static async ValidateExclusiveDataFields(supplier){
        try {
            this.MinimumSaleValue.Validate(supplier.MinimumSaleValue);
            return;
        }
        catch (erro) {
            throw erro;
        }
    }
}