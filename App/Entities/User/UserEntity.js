module.exports = class UserEntity {
    //data fields
    static Username = require("./DataFields/Username/Username");
    static Password = require("./DataFields/Password/Password");
    static Email = require("./DataFields/Email/Email");

    //instance of UserModel as input
    static async ValidateUser(user) {
        try {
            await this.ValidateDataFields(user);
            await this.ValidateCompany(user.Company);
        }
        catch (erro) {
            throw erro;
        }
    }

    static GetApp() {
        return require("../../../Application");
    }

    static async ValidateDataFields(user) {
        try {
            await this.Username.Validate(user.Username);
            await this.Password.Validate(user.Password);
            await this.Email.Validate(user.Email);
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    static async ValidateCompany(company){
        try {
            let App = this.GetApp();
            return await App.Entities.Company.ValidateCompany(company);
        }
        catch (erro) {
            throw erro;
        }
    }
}