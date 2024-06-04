/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  //first solution:
  // s.split("").forEach((char, index) => {
  //     t=t.replace(char, "");
  //     s=s.replace(char, "")
  // })

  // if (s.length === 0 && t.length === 0) return true;
  // return false;
  //end of first solution

  //second solution
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");
  if (s === t) return true;
  return false;
};
