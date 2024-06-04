/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const objS = {};
  const objT = {};

  for (let index = 0; index < s.length; index++) {
    if (!objT.hasOwnProperty(t[index])) {
      objT[t[index]] = s[index];
    }
    if (!objS.hasOwnProperty(s[index])) {
      objS[s[index]] = t[index];
    }
    if (objS[s[index]] !== t[index] || objT[t[index]] !== s[index]) {
      return false;
    }
  }

  return true;
};
