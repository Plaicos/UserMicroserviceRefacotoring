var App = require("../../Application");

module.exports = async (user) => {
    try {
        return await App.Dependencies.DAO.RegisterUser(user);
    }
    catch (erro) {
        throw erro;
    }
}