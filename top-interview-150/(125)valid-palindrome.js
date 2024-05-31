/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const str = String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  if (str.length < 2) return true;
  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if (str[i] !== str[j]) return false;
  }
  return true;
};
