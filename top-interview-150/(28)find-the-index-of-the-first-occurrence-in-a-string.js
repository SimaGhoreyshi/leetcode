/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let index = -1;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.charAt(i) === needle.charAt(0)) {
      index = i;
      for (let j = i; j < needle.length; j++) {
        if (j - i + 1 === needle.length) {
          return index;
        }
        if (haystack.charAt(j) !== needle.charAt(j - i)) {
          index = -1;
          break;
        }
      }
      if (index === i) {
        break;
      }
    }
  }

  return index;
  //Solution 2 : return haystack.indexOf(needle);
};
