const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = false;
  
  if (Array.isArray(members)) {
    let possibleTeamName = members.reduce(function (teamName, item) {
      if (typeof(item) === 'string') {
        teamName.push(item.trim()[0].toUpperCase());
      }
      
      return teamName
    }, []);

    if (possibleTeamName !== []) {
      result = possibleTeamName.sort().join('');
    }
  }
  return result;
};
