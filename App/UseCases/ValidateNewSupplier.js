var App = require("../../Application");

module.exports = async (supplier) => {
    try {
        return await App.Entities.User.Supplier.ValidateNewSupplier(supplier);
    }
    catch (erro) {
        throw erro;
    }
}