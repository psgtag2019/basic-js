const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    let count = 1;

    arr.forEach(element => {
      if (Array.isArray(element)) {
        count = Math.max(count, 1 + this.calculateDepth(element))
      }  
    });

    return count;
  }
};