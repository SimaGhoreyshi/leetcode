/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let common = "";
  let breaker = false;
  let i = 0;

  while (!breaker) {
    const character = strs[0][i];
    strs.forEach((str, index) => {
      if (str[i] !== character || !str[i]) {
        breaker = true;
      }
    });
    if (!breaker) {
      common += character;
    } else {
      break;
    }
    i++;
  }

  return common;
};
