var App = require("../../Application");

module.exports = class UseCaseOperator {
    //instance of NewSupplierRequest
    static async CreateNewSupplier(request) {
        try {
            let supplier = await App.UseCases.CreateNewSupplier(request);
            let company = await App.UseCases.CreateNewCompany(request);

            await App.UseCases.ValidateNewUser(supplier);
            await App.UseCases.ValidateNewCompany(company);

            await App.UseCases.RegisterUser(supplier);
            await App.UseCases.RegisterCompany(company);
            return;
        } 
        catch (erro) {
            throw erro;
        }
    }
}