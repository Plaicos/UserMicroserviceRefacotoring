module.exports = class CompanyEntity {
    //data fields

    //instance of CompanyModel as input
    static async ValidateCompany(company) {
        try {
            await this.ValidateDataFields(user);
            
        }
        catch (erro) {
            throw erro;
        }
    }

    static async ValidateNewCompany(company){
        try {
            await this.ValidateDataFields(company);
            await this.CheckIfCompanyAlreadyExists(company.Cnpj);
        }
        catch (erro) {
            throw erro;
        }
    }

    static GetApp() {
        return require("../../../Application");
    }

    static async ValidateDataFields(company) {
        try {
            
        }
        catch (erro) {
            throw erro;
        }
    }

    static async CheckIfCompanyAlreadyExists(cnpj){
        try {
            
        } 
        catch (erro) {
            throw erro;    
        }
    }
}