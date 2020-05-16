var App = require("../../Application");
var CompanyFactory = require("../Factories/Company/CompanyFactory");

module.exports = async (request) => {
    try {
        let company = CompanyFactory.Build(request);
        return company;
    }
    catch (erro) {
        throw erro;
    }
}