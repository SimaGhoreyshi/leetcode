/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const points = {};
  let i;

  for (i = 0; i < nums.length; i++) {
    if (points[nums[i]]) {
      points[nums[i]]++;
    } else {
      points[nums[i]] = 1;
    }
    if (points[nums[i]] >= nums.length / 2) {
      return nums[i];
    }
  }
};
