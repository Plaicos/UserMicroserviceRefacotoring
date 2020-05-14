module.exports = class CustomError {
    StackTrace;
    Message;
    Type;

    Throw(){
        let error = new Error();
        error.stack = this.StackTrace;
        error.message = this.Message;
        throw error;
    }
}