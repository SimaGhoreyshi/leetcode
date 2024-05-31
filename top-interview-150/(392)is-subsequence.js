/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sp = 0,
    tp = 0,
    point = 0;

  while (sp < s.length && tp < t.length) {
    if (s[sp] === t[tp]) {
      sp++;
      tp++;
      point++;
    } else {
      tp++;
    }
  }

  if (point >= s.length) {
    return true;
  }
  return false;
};
