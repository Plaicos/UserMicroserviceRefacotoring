module.exports = class CompanyEntity {
    //data fields
    static Cnpj = require("./DataFields/CNPJ/CNPJ");
    static Cofins = require("./DataFields/COFINS/COFINS");
    static Icms = require("./DataFields/ICMS/ICMS");
    static Pis = require("./DataFields/PIS/PIS")

    //instance of CompanyModel as input
    static async ValidateCompany(company) {
        try {
            return await this.ValidateDataFields(company);
        }
        catch (erro) {
            throw erro;
        }
    }

    static async ValidateNewCompany(company) {
        try {
            await this.ValidateDataFields(company);
            await this.CheckIfCompanyAlreadyExist(company.Cnpj);
        }
        catch (erro) {
            throw erro;
        }
    }

    static async ValidateCnpj(cnpj) {
        await this.Cnpj.Validate(cnpj);
    }

    static GetApp() {
        return require("../../../Application");
    }

    static async ValidateDataFields(company) {
        try {
            await this.Cnpj.Validate(company.Cnpj);
            this.Cofins.Validate(company.Cofins);
            this.Icms.Validate(company.Icms);
            this.Pis.Validate(company.Pis);
        }
        catch (erro) {
            throw erro;
        }
    }

    static async CheckIfCompanyAlreadyExist(cnpj) {
        try {
            let App = this.GetApp();
            let companyExist = await App.Dependencies.DAO.CheckIfCompanyExist(cnpj);

            if (companyExist) {
                new App.Errors.Validation("CNPJ", "Esse CNPJ já está cadstrado.");
            }
            else {
                return;
            }
        }
        catch (erro) {
            throw erro;
        }
    }
}