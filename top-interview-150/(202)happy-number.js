/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let res = 0;
  let arr = [];

  while (true) {
    while (n) {
      res += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }
    if (arr.includes(res)) {
      return false;
    }
    if (res === 1) {
      return true;
    }
    arr.push(res);
    n = res;
    res = 0;
  }
};
