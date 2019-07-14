/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
  let len1 = s1.length, len2 = s2.length, i, j, dp = [], count = 0
  for (i = 0; i <= len1; i ++) {
    dp[i] = [count]
    count += s1.charCodeAt(i)
  }
  if (!len2) {
    return count
  }
  count = 0
  for (i = 0; i <= len2; i ++) {
    dp[0][i] = count
    count += s2.charCodeAt(i)
  }
  if (!len1) {
    return count
  }
  for (i = 1; i <= len1; i ++) {
    for (j = 1; j <= len2; j ++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + s1.charCodeAt(i - 1),
          dp[i - 1][j - 1] + s1.charCodeAt(i - 1) + s2.charCodeAt(j - 1),
          dp[i][j - 1] + s2.charCodeAt(j - 1)
        )
      }
    }
  }
  return dp[len1][len2]
};