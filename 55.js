/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let len = nums.length, i, res = 0
  for (i = 0; i <= res && i < len; i++) {
    if (i + nums[i] > res) {
      res = i + nums[i]
    }
    if (res >= len - 1) {
      break
    }
  }
  return res >= len - 1
};
console.log(canJump([2,3,1,1,4]))