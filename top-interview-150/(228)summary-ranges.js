/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let start = nums[0];
  let end = nums[0];
  let output = [];

  for (let i = nums[0]; i <= nums[nums.length - 1] + 1; i++) {
    if (nums.includes(i)) {
      end = i;
    }
    if (!nums.includes(i) || nums.length === 1) {
      if (start == end) {
        output.push(`${end}`);
      } else {
        output.push(`${start}->${end}`);
      }
      let index = nums.indexOf(end);
      nums.splice(0, index + 1);
      start = nums[0];
      end = nums[0];
      i = nums[0];
    }
  }
  return output;
};
