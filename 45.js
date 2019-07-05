/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let len = nums.length, i, res = 0, max = 0, temp = 0
  if (len === 1) {
    return 0
  }
  for (i = 0;i < len; i++) {
    if (i + nums[i] > max) {
      max = i + nums[i]
    }
    if (i >= res) {
      res = max
      temp ++
    }
    if (res >= len - 1) {
      break
    }
  }
  return temp
};
console.log(jump([2,3,1,1,4]))