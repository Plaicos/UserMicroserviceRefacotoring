var App = require("../../../Application");

module.exports = class CnpjDataAdapter {
    static AdaptToCompanyModel(data) {
        try {
            let company = new App.Models.Company();
            company.Name = data.name;
            company.Status = data.registration.status;
            company.Phone = data.phone;
            company.ZipCode = data.address.zip;
            company.Size = data.size;
            return company;
        }
        catch (erro) {
            throw erro;
        }
    }
}