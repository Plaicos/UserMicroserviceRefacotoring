var Dependency = require("dependency-manager.js").Models.Dependency;
var superagent = require("superagent");

module.exports = class ReceitaFederal extends Dependency {
    static Name = "ReceitaFederal";
    static InitializeAsyncMustBeCalled = false;
    static AuthToken = "785fc5e4-eeb0-48fc-8644-9685564e140f-c482ed56-f32e-459c-893f-8d65c4868756";
    static CnpjDataAdapter = require("./Adapters/CnpjData")

    static ParseCnpj(cnpj) {
        try {
            let regex = /[^0-9]/g
            return cnpj.replace(regex, "");
        }
        catch (erro) {
            throw erro;
        }
    }

    static GetCnpjData(cnpj) {
        return new Promise((resolve, reject) => {
            try {
                cnpj = this.ParseCnpj(cnpj);
                superagent.get(`https://api.cnpja.com.br/companies/${cnpj}`)
                    //.query({ cnpj })
                    .set("Authorization", this.AuthToken)
                    .end((erro, resp) => {
                        if (erro) {
                            throw erro
                        }
                        return resolve(resp.body);
                    })
            }
            catch (erro) {
                return reject(erro);
            }
        })

    }

    static AdaptCnpjData(data) {
        try {
            return ReceitaFederal.CnpjDataAdapter.AdaptToCompanyModel(data);
        }
        catch (erro) {
            return reject(erro);
        }
    }

    async ValidateAndReturnCnpjData(cnpj) {
        try {
            let data = await ReceitaFederal.GetCnpjData(cnpj);
            return ReceitaFederal.AdaptCnpjData(data);
        }
        catch (erro) {
            throw erro;
        }
    }
}