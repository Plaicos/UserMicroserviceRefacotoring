module.exports = class WarehouseEntity {
    //data fields
    static Id = require("./Id/Id")
    static Name = require("./Name/WarehouseName");

    //instance of CompanyModel as input
    static async ValidateWarehouse(warehouse) {
        try {
            let App = this.GetApp();
            await this.ValidateDataFields();
            await App.Entities.Location.ValidateLocation(warehouse.Location);
        }
        catch (erro) {
            throw erro;
        }
    }

    static async ValidateWarehouseList(warehouseList) {
        try {
            for (let warehouse of warehouseList) {
                await this.ValidateWarehouse(warehouse);
            }
            return;
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
            this.Name.Validate(warehouse.Name);
            return;
        }
        catch (erro) {
            throw erro;
        }
    }
}