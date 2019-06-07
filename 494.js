var findTargetSumWays = function(nums, S) {
  let dp = [], i, j, len = nums.length, arrLen = 0  
  for (i = 0; i < len; i ++) {
    arrLen += nums[i]
  }
  if (S < -arrLen || S > arrLen) {
    return 0
  }
  for (i = 0; i < len; i ++) {
    dp[i] = []
  }
  for (i = 0; i <= 2 * arrLen; i ++) {
    dp[0][i] = 0
    if (i === arrLen - nums[0]) {
      dp[0][i] ++
    }
    if (i === nums[0] + arrLen) {
      dp[0][i] ++
    }
  }
  for (i = 1; i < len; i ++) {
    for (j = 0; j <= 2 * arrLen; j ++) {
      dp[i][j] = 0
      if (nums[i] + j <= 2 * arrLen) {
        dp[i][j] += dp[i - 1][nums[i] + j]
      }
      if (j - nums[i] >= 0) {
        dp[i][j] += dp[i - 1][j - nums[i]]
      }
    }
  }
  return dp[i - 1][S + arrLen]
};