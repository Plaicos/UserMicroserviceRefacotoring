module.exports = class DataField {

    //instance of UserModel
    static async Validate() {
        throw Error("User Data Field Entity Error: Validate() method not implemented");
    }

    static GetApp(){
        return require("../../../../Application");
    }
}