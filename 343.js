/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  let i, j, dp = [0, 1]
  for (i = 2; i <= n; i ++) {
    dp[i] = 0
    for (j = 0; j < i; j ++) {
      dp[i] = Math.max(dp[i], Math.max((i - j) * dp[j], (i - j) * j))
    }
  }
  return dp[n] 
};