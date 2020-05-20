var App = require("../../../Application");

module.exports = class SupplierFactory {
    static Build(request) {
        try {
            let supplier = new App.Models.User.Supplier();
            supplier.Username = request.Username;
            supplier.Password = request.Password;
            supplier.Email = request.Email;
            supplier.RecoveryEmail = request.RecoveryEmail;
            supplier.MinimumSaleValue = request.MinimumSaleValue;
            supplier.BillingData = request.BillingData;
            return supplier;
        }
        catch (erro) {
            throw erro;
        }
    }
}