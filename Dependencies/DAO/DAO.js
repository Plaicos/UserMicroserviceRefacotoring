var Dependency = require("dependency-manager.js").Models.Dependency;

//Adapted for MongoDB
module.exports = class DAO extends Dependency {
    static Name = "DAO";
    static AsyncInitMustBeCalled = false;

    //properties
    Db;
    ObjectId;
    Collections;

    constructor() {
        super();
    }

    //methods
    SetDatabase(db) {
        this.Db = db.Connection;
        this.ObjectId = db.ObjectId
        this.Collections = {
            Credentials: this.Db.collection("Credentials")
        }
    }

    async GetAvailablePlansAcordingToType(type){

    }
}