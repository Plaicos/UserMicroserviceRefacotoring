var App = require("../../Application");

module.exports = class GrpcRequestAdapter {
    static ToNewSupplier(call){
        try {
            let data = call.request;
            let request = new App.Models.request.NewSupplier();
            request.Username = data.user;
            request.Password = data.password;
            
        } 
        catch (erro) {
            throw erro;    
        }
    }
}