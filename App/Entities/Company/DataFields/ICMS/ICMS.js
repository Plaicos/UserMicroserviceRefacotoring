var DataField = require("../../../IDataField/IDataField");

module.exports = class Icms extends DataField {

    //instance of UserModel
    static Validate(icms) {
        try {
            let App = this.GetApp();
            let isLesserThanZero = icms < 0;
        
            if (isLesserThanZero) {
                new App.Errors.Validation("ICMS", "Não pode ser menor que zero");
            }
            return;
        }
        catch (erro) {
            throw (erro);
        }
    }

}