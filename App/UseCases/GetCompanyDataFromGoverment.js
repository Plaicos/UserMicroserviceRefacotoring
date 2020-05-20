var App = require("../../Application");

module.exports = async (cnpj) => {
    try {
        return await App.Dependencies.ReceitaFederal.ValidateAndReturnCnpjData(cnpj);
    }
    catch (erro) {
        throw erro;
    }
}