var App = require("../../Application");

module.exports = class GrpcRequestAdapter {
    static ToNewSupplier(call) {
        try {
            let data = call.request;
            let request = new App.Models.request.NewSupplier();
            //
            request.Username = data.user;
            request.Password = data.password;
            request.Email = data.email;
            request.RecoveryEmail = data.recoveryEmail;
            request.MinimumSaleValue = data.minimumSaleValue;
            //
            request.CompanyData = {
                Cnpj: data.cnpj,
                Cofins: data.cofins,
                Icms: data.icms,
                Pis: data.pis
            }
            //
            return request;
        }
        catch (erro) {
            throw erro;
        }
    }
}