var App = require("../../Application");

module.exports = async (company) => {
    try {
        return await App.Dependencies.DAO.RegisterCompany(company);
    }
    catch (erro) {
        throw erro;
    }
}