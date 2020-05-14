var DataField = require("../DataField");

module.exports = class Email extends DataField {

    //instance of UserModel
    static async Validate(email) {
        try {
            let nome = "email"
            let App = this.GetApp();
            
            if (typeof email !== "string") {
                new App.Errors.Validation(nome, "Tipo errado", Error().stack);
            }
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

}