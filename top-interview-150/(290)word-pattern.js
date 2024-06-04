/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const obj = {};
  let ret = true;
  if (pattern.length !== s.split(" ").length) return false;
  s.split(" ").forEach((str, index) => {
    if (obj[pattern[index]] && obj[pattern[index]] !== str) {
      ret = false;
    } else obj[pattern[index]] = str;
  });

  s.split(" ").forEach((str, index) => {
    if (Object.values(obj).filter((item) => item === str).length > 1)
      ret = false;
  });

  return ret;
};
