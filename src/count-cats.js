const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const cat = '^^';
  let count = 0;

  matrix.forEach(element => {
    element.forEach(item => {
      if (item === cat) {
        count++;
      }
    });
  });
  return count;
//  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
