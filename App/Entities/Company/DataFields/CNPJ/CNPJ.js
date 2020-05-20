var DataField = require("../../../IDataField/IDataField");

module.exports = class Cnpj extends DataField {

    //instance of UserModel
    static async Validate(cnpj) {
        try {
            let App = this.GetApp();
            //await App.Dependencies.ReceitaFederal.ValidateAndReturnDataCnpj(cnpj);
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

}