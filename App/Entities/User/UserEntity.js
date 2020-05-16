module.exports = class UserEntity {
    //data fields
    static Username = require("./DataFields/Username/Username");
    static Password = require("./DataFields/Password/Password");
    static Email = require("./DataFields/Email/Email");
    static Type = require("./DataFields/Type/Type");

    //instance of UserModel as input
    static async ValidateUser(user) {
        try {
            await this.ValidateDataFields(user);
            await this.ValidateBillingData(user.BillingData);
        }
        catch (erro) {
            throw erro;
        }
    }

    //user cant already exist
    static async ValidateNewUser(user) {
        try {
            await this.ValidateDataFields(user);
            await this.CheckIfUserAlreadyExist(user.Username);
            await this.ValidateBillingData(user.BillingData);
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
            await this.Email.Validate(user.RecoveryEmail);
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    static async ValidateBillingData(billingData){
        try {
            let App = this.GetApp();
            return await App.Entities.BillingData.ValidateBillingData(billingData);
        }
        catch (erro) {
            throw erro;
        }
    }

    static async CheckIfUserAlreadyExist(user){

    }

}