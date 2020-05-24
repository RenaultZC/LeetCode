/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let len = nums1.length + nums2.length, nums = [], res ;
  for(; nums1.length && nums2.length;) {
    if (nums1[0] < nums2[0]) {
      nums.push(nums1.shift());
    } else {
      nums.push(nums2.shift());
    }
  }
  if (!nums2.length) {
    for(;nums1.length;) {
      nums.push(nums1.shift());
    }
  }
  if (!nums1.length) {
    for(;nums2.length;) {
      nums.push(nums2.shift());
    }
  }
  if (len % 2) {
    res = nums[Math.floor(len / 2)]
  } else {
    res = (nums[len / 2 - 1] + nums[len / 2]) / 2;
  }
  return res;
};

console.log(findMedianSortedArrays([1,3],[2, 4]));