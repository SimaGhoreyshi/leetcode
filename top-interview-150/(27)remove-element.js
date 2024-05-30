/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;

  nums.forEach((num, index) => {
    if (num === val) {
      k++;
      nums[index] = 101;
    }
  });
  nums.sort((a, b) => a - b);
  return nums.length - k;
};
