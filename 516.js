var longestPalindromeSubseq = function(s) {
  let i, j, len = s.length, dp = [], tmp
  for (i = 0; i < len; i ++) {
    let arr = []
    for (j = 0; j < len; j ++) {
      arr.push(1)
    }
    dp.push(arr)
  }
  for (i = len - 1; i >= 0 ; i --) {
    for (j = i + 1; j < len; j ++) {
      if (s[i] === s[j]) {
        if (i + 1 > j - 1) {
          dp[i][j] = 2
        } else {
          dp[i][j] = dp[i + 1][j - 1] + 2
        }
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[0][len - 1]
};