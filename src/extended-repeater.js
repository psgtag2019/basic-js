const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, opt ) {
  str = String(str);

  let options = {
    repeatTimes: ('repeatTimes' in opt && typeof(opt.repeatTimes) === 'number') ? opt.repeatTimes : 1, // кол-во повторений строки
    separator: 'separator' in opt ? opt.separator : '+', // разделитель строки
    addition: 'addition' in opt ? String(opt.addition) : '', // допополнение к строке
    additionRepeatTimes: ('additionRepeatTimes' in opt && typeof(opt.additionRepeatTimes) === 'number') ? opt.additionRepeatTimes : 1, // кол-во дополнений к строке
    additionSeparator: 'additionSeparator' in opt ? opt.additionSeparator : '|' // разделитель дополлнений к строке
  };

  let extra = '';
  if (options.additionRepeatTimes > 0) {
    extra = options.addition;
    for (let i = 1; i < options.additionRepeatTimes; i++) {
      extra += options.additionSeparator + options.addition
    }
  }

  let result = str + extra;
  for (let i = 1; i < options.repeatTimes; i++) {
      result += options.separator + str + extra;
  }
  
  return result;
};
  