var DataField = require("../../../IDataField/IDataField");

module.exports = class Type extends DataField {

    //instance of UserModel
    static async Validate(type) {
        try {
            let App = this.GetApp();
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

}