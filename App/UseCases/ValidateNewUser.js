var App = require("../../Application");
var UserEntity = require("../Entities/User/UserEntity");

module.exports = async (user) => {
    try {
        return await UserEntity.ValidateNewUser(user);
    }
    catch (erro) {
        throw erro;
    }
}