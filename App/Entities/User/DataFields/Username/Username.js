var DataField = require("../../../IDataField/IDataField");

module.exports = class Username extends DataField {

    //instance of UserModel
    static async Validate(user) {
        try {
            let App = this.GetApp();
            
            if (typeof user !== "string") {
                new App.Errors.Validation("username", "Tipo errado", Error().stack);
            }
            if (user.length < 5) {
                new App.Errors.Validation("username", "Precisa conter 5 caracteres ou mais", Error().stack);
            }
            //TODO check if already exists in the db
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

}