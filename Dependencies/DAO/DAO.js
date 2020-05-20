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
            Users: this.Db.collection("Users"),
            Companies: this.Db.collection("Companies"),
            Plans: this.Db.collection("Plans")
        }
    }

    async RegisterUser(user) {
        try {
            return await this.Collections.Users.insertOne(user);
        }
        catch (erro) {
            throw erro;
        }
    }

    async RegisterCompany(company) {
        try {
            return await this.Collections.Companies.insertOne(company);
        }
        catch (erro) {
            throw erro;
        }
    }

    async CheckIfUserExist(user) {
        return new Promise((resolve, reject) => {
            try {
                this.Collections.Users.find({ Username: user }).toArray((erro, array) => {
                    var userExist = array.length > 0;

                    if (erro) {
                        return reject(erro);
                    }
                    if (userExist) {
                        return resolve(true);
                    }
                    else {
                        return resolve(false)
                    }
                })
            }
            catch (erro) {
                reject(erro);
            }
        })
    }

    async CheckIfCompanyExist(cnpj) {
        return new Promise((resolve, reject) => {
            try {
                this.Collections.Companies.find({ Cnpj: cnpj }).toArray((erro, array) => {
                    var companyExist = array.length > 0;

                    if (erro) {
                        return reject(erro);
                    }
                    if (companyExist) {
                        return resolve(true);
                    }
                    else {
                        return resolve(false)
                    }
                })
            }
            catch (erro) {
                reject(erro);
            }
        })
    }

    async GetUserData(user) {
        return new Promise((resolve, reject) => {
            try {
                this.Collections.Users.findOne({ Username: user }).toArray((erro, array) => {
                    if (erro) {
                        return reject(erro);
                    }
                    return resolve(array[0]);
                })
            }
            catch (erro) {
                reject(erro);
            }
        })
    }

    async GetAvailablePlansAcordingToType(type) {
        try {

        }
        catch (erro) {
            throw erro;
        }
    }
}