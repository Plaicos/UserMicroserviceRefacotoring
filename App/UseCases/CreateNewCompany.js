var App = require("../../Application");
var CompanyFactory = require("../Factories/Company/CompanyFactory");

module.exports = async (request) => {
    try {
        await App.Entities.Company.ValidateCnpj(request.CompanyData.Cnpj);
        let companyGovermentData = await App.UseCases.GetCompanyDataFromGoverment(request.CompanyData.Cnpj);
        return await CompanyFactory.Build(request, companyGovermentData);
    }
    catch (erro) {
        throw erro;
    }
}