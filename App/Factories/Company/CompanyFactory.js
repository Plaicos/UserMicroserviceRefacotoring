var App = require("../../../Application");

module.exports = class CompanyFactory {
    static Build(request) {
        try {
            let data = request.CompanyData;
            let company = new App.Models.Company();
            company.Cnpj = data.Cnpj;
            return company;
        }
        catch (erro) {
            throw erro;
        }
    }
}