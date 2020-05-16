module.exports = class LocationEntity {
    //data fields

    //instance of CompanyModel as input
    static async ValidateLocation(location) {
        try {
            await this.ValidateDataFields();

        }
        catch (erro) {
            throw erro;
        }
    }

    static GetApp() {
        return require("../../../Application");
    }

    static async ValidateDataFields(warehouse) {
        try {

        }
        catch (erro) {
            throw erro;
        }
    }
}