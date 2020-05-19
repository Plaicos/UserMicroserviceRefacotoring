var App = require("../../../Application");
var Controller = require("../../../App/Controllers/Controller");

//MUST implement the .proto file
module.exports = class gRPCServcieImplementation {
    async CreateSupplier(call, callback){
        await Controller.CreateNewSupplier(call, callback);
    }
}