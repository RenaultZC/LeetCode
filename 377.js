/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  let i = 0, j = 0, dp = [1], res = 0, len = nums.length
  for (i = 1; i <= target; i ++) {
    res = 0
    for (j = 0; j < len; j ++) {
      if (nums[j] <= dp.length) {
        res += dp[i - nums[j]]
      }
    }
    dp.push(res)
  }
  return dp[target]
};
console.log(combinationSum4( [1, 2, 3], 4));