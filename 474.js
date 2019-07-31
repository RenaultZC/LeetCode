/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  let i, j, k, len = strs.length, dp = [], z, o
  if (!len) {
    return 0
  }
  for (i = 0; i <= m; i ++) {
    dp[i] = []
    for (j = 0; j <= n; j ++) {
      dp[i][j] = 0
    }
  }
  for (i = 0; i < len; i ++) {
    z = 0
    o = 0
    for (j = 0; j < strs[i].length; j ++) {
      if (strs[i][j] === '0') {
        z ++
      } else {
        o ++
      }
    }
    for (j = m; j >= z; j --) {
      for (k = n; k >= o; k --) {
        dp[j][k] = Math.max(dp[j][k], j - z >= 0 && k - o >= 0 ? 1 + dp[j - z][k - o] : 0);
      }
    }
  }
  return dp[m][n]
};
console.log(findMaxForm(["10","0001","111001","1","0"], 4, 3))