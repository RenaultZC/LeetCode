/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let len = nums.length, i, j, res = 0, tmp;
  for (i = 0; i < len; i ++) {
    tmp = nums[i];
    for (j = i + 1; j < len; j ++) {
      if (tmp === k) {
        res ++;
      }
      tmp += nums[j];
    }
    if (tmp === k) {
      res ++;
    }
  }
  return res;
};
console.log(subarraySum([1,1,1], 2));