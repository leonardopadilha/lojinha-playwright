const HandlerExceptions = require("../handler-exceptions");

module.exports = class BaseException extends HandlerExceptions {

    constructor (message, exception) {
        super();
        this.message = message;
        this.exception = exception;
        this.stack = (new Error()).stack;
    }

}