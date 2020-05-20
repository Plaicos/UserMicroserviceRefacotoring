var App = require("../../../Application");

module.exports = class CompanyFactory {
    static async Build(request, govermentData) {
        try {
            let company = new App.Models.Company();
            company.Cnpj = this.ParseCnpj(request.CompanyData.Cnpj);
            company.Owner = request.Username;
            company.Name = govermentData.Name;
            company.Address = govermentData.Address;
            company.Size = govermentData.Size;
            company.ZipCode = govermentData.ZipCode;
            company.Status = govermentData.Status;
            company.Phone = govermentData.Phone;
            company.Cofins = request.CompanyData.Cofins;
            company.Icms = request.CompanyData.Icms;
            company.Pis = request.CompanyData.Pis;

            return company;
        }
        catch (erro) {
            throw erro;
        }
    }

    static ParseCnpj(cnpj) {
        try {
            let regex = /[^0-9]/g
            return cnpj.replace(regex, "");
        }
        catch (erro) {
            throw erro;
        }
    }
}