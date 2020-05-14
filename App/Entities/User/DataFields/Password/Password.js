var DataField = require("../DataField");

module.exports = class Password extends DataField {

    //instance of UserModel
    static async Validate(password) {
        try {
            let App = this.GetApp();
            let regex = /\W/
            
            if (typeof password !== "string") {
                new App.Errors.Validation("senha", "Tipo errado", Error().stack);
            }
            if (password.length < 10) {
                new App.Errors.Validation("senha", "Precisa conter 10 caracteres ou mais", Error().stack);
            }
            if(regex.test(password)) {
                new App.Errors.Validation("senha", "Não pode conter caracteres especiais", Error().stack);
            }
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

}