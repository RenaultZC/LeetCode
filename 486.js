var PredictTheWinner = function(nums) {
  let len = nums.length

  let dp = []
  for (let i = 0; i < len; i++) {
    dp[i] = []
  }

  for (let i = len - 1; i >= 0; i--){
    for (let j = i; j < len; j++) {
      if (i === j){
        dp[i][j] = nums[i]
        console.log(dp[i][j], i, j)
        continue
      }
      dp[i][j] = Math.max(nums[i] - dp[i+1][j], nums[j] - dp[i][j-1])
      console.log(dp[i][j], i, j)
    }
  }
  return dp[0][len-1] >= 0
};