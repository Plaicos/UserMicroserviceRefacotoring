var App = require("../../Application");
var UseCaseOperator = require("../UseCases/Operator");

module.exports = class Controller {
    static async CreateNewSupplier(call, callback) {
        try {
            let request = App.Adapters.GrpcRequest.ToNewSupplier(call);
            await UseCaseOperator.CreateNewSupplier(request);
        }
        catch (erro) {
            this.HandleError(callback, erro);
        }
    }

    static HandleError(callback, error) {
        try {
            console.log(error);
            return callback({
                message: error.message
            })
        }
        catch (erro) {
            console.log(erro);
        }
    }
}