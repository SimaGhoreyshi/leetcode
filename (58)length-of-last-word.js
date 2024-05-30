/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const reversed = s.split("").reverse().join("");
  let metTheWord = false;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (reversed[i] !== " ") {
      if (!metTheWord) {
        metTheWord = true;
      }
      count++;
    } else {
      if (metTheWord) {
        break;
      }
    }
  }
  return count;
};
