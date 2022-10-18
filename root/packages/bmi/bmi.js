const convercmTom = require("../convert/convert");
const bmi = (weight,height) => (weight/convercmTom(Math.pow(height,2)))*100
// the bmi function divides the weight over the power of the height, converting the result of the height sqaured into meter.
module.exports = bmi;