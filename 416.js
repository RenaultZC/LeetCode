/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let i, j, len = nums.length, dp = [], num = 0
  nums.sort((a, b) => a- b);
  for (i = 0; i < len; i ++) {
    num += nums[i]
  }
  num /= 2
  if (num % 1) {
    return false;
  }
  for (i = 0; i < len; i ++) {
    dp[i] = Array(num + 1).fill(false)
    dp[i][0] = true
    dp[i][nums[i]] = true
  }
  for (i = 1; i < len; i ++) {
    for (j = 1; j <= num; j ++) {
      dp[i][j] = dp[i - 1][j] || dp[i][j]
      if (nums[i] <= j) {
        dp[i][j] = dp[i][j] || (dp[i - 1][j - nums[i]])
      }
    }
  }
  return dp[len - 1][num];
};