const envStringException = require("../handlers/exceptions/env-string-exception");
require('dotenv').config();
/**
 * Recupera um env string.
 *
 * @param {string} name env name.
 * @returns {String}
 */
module.exports = function getEnvString (name) {
    const value = process.env[ name ];
    
    if (!value) {
        throw new envStringException("Env string invalido");
    }
    return value;
}