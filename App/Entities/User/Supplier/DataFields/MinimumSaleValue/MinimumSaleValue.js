var DataField = require("../../../../IDataField/IDataField");

module.exports = class MinimumSaleValue extends DataField {
    static Validate(value) {
        try {
            value = this.ValidateType(value);
            let App = this.GetApp();
            let isGreaterThanZero = value > 0;
        
            if (!isGreaterThanZero) {
                new App.Errors.Validation("valor minimo de venda", "Não pode ser igual ou menor que zero");
            }
            return;
        }
        catch (erro) {
            throw (erro);
        }
    }

    static ValidateType(value) {
        try {
            let isNumber = (typeof value === "number");
            if (!isNumber) {
                value = this.TryToParse(value)
            }
            return value;
        }
        catch (erro) {
            throw (erro);
        }
    }

    static TryToParse(value) {
        try {
            let App = this.GetApp();
            let parsed = parseFloat(value);
            let parsedIsANumber = !(isNaN(parsed));
            if (parsedIsANumber) {
                return parsed;
            }
            else {
                new App.Errors.Validation("valor minimo de venda", "Valor inserido não é um número válido");
            }
        }
        catch (erro) {
            throw (erro);
        }
    }
}