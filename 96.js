/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let dp = [1, 1], i, j
  for (i = 2; i <= n; i ++) {
    dp[i] = 0
    for (j = 1; j <= i; j ++) {
      dp[i] += (dp[j - 1] * dp[i - j])
    }
  }
  return dp[n]
};
console.log(numTrees(3))