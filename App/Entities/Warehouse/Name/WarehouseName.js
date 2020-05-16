var DataField = require("../../IDataField/IDataField")

module.exports = class WarehouseName extends DataField {
    static Validate(name){
        try {
            let App = this.GetApp();
        }
        catch(erro){
            throw erro;
        }
    }
}