/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buyIndex = 0;
  let sellIndex = 1;
  let maxProf = 0;

  for (; sellIndex < prices.length; sellIndex++) {
    maxProf = Math.max(maxProf, prices[sellIndex] - prices[buyIndex]);
    if (prices[sellIndex] < prices[buyIndex]) {
      buyIndex = sellIndex;
    }
  }

  return maxProf;
};
