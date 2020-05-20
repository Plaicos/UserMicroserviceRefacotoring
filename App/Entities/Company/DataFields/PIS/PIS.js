var DataField = require("../../../IDataField/IDataField");

module.exports = class Pis extends DataField {

    //instance of UserModel
    static Validate(pis) {
        try {
            let App = this.GetApp();
            let isLesserThanZero = pis < 0;

            if (isLesserThanZero) {
                new App.Errors.Validation("PIS", "Não pode ser menor que zero");
            }
            return;
        }
        catch (erro) {
            throw (erro);
        }
    }

}