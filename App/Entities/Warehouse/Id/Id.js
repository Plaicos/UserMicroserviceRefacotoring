var DataField = require("../../IDataField/IDataField")

module.exports = class WarehouseId extends DataField {
    static Validate(id){
        try {
            let App = this.GetApp();
        }
        catch(erro){
            throw erro;
        }
    }
}