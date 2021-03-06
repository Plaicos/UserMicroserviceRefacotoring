var App = require("../../Application");
var SupplierFactory = require("../Factories/User/SupplierFactory");

module.exports = async (request) => {
    try {
        let supplier = SupplierFactory.Build(request);
        return supplier;
    }
    catch (erro) {
        throw erro;
    }
}