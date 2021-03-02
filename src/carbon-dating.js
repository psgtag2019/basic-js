const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let message = false;

  if (typeof(sampleActivity) === 'string') {
    let numSampleActivity = parseFloat(sampleActivity);

    if (numSampleActivity < MODERN_ACTIVITY && numSampleActivity > 0) {
      const ln2 = 0.693;
      const k = ln2 / HALF_LIFE_PERIOD;
      const t = Math.log(MODERN_ACTIVITY / numSampleActivity) / k;
      message = Math.ceil(t);
    }
  }

  return message;
};
