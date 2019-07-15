/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
  let sum = 0, dp = [0, 0], i, len = A.length
  for (i = 2; i < len ; i ++) {
    dp[i] = 0
    if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      dp[i] = 1 + dp[i - 1]
      sum += dp[i]
    }
  }
  return sum
};