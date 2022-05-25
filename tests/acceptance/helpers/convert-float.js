/**
 * Recebe uma string e retorna float
 */

module.exports = function convertStringFloat(value){
    value = value.replace(".","").replace(",",".");
    value = parseFloat(value).toFixed(2);
    return value;
}