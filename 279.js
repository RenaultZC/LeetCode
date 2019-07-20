/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let i, j, dp = [0]
  for (i = 0; i <= n; i ++) {
    dp[i] = i;
  }
  for (i = 0; i <= n; i ++) {
    for (j = 1;i + j * j <= n;j ++) {
      dp[i + j * j] = Math.min(dp[i + j * j], dp[i] + 1)
    }
  }
  return dp[n]
};