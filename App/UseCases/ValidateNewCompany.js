var App = require("../../Application");

module.exports = async (company) => {
    try {
        return await App.Entities.Company.ValidateNewCompany(company);
    }
    catch (erro) {
        throw erro;
    }
}