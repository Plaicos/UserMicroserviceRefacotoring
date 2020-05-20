var DataField = require("../../../IDataField/IDataField");

module.exports = class Cofins extends DataField {

    //instance of UserModel
    static Validate(cofins) {
        try {
            let App = this.GetApp();
            let isLesserThanZero = cofins < 0;
        
            if (isLesserThanZero) {
                new App.Errors.Validation("COFINS", "Não pode ser menor que zero");
            }
            return;
        }
        catch (erro) {
            throw (erro);
        }
    }

}