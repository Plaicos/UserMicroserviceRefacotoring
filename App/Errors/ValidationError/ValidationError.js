var CustomError = require("../CutomError");

module.exports = class ValidationError extends CustomError {
    constructor(invalidField, reason, stack) {
        super();
        if (reason) {
            this.Message = `Erro de Validação: Campo '${invalidField}' está invalido. Motivo: ${reason}`;
        }
        else {
            this.Message = `Erro de Validação: Campo '${invalidField}' está invalido.`;
        }
        this.StackTrace = stack;
        this.Throw();
    }
}