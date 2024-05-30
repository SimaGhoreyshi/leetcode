/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {https://leetcode.com/problems/merge-sorted-array/
  let i = m + n - 1;
  let f = m - 1;
  let s = n - 1;

  while (s >= 0) {
    if (nums1[f] > nums2[s]) {
      nums1[i] = nums1[f];
      i--;
      f--;
    } else {
      nums1[i] = nums2[s];
      i--;
      s--;
    }
  }
};
