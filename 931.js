/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
  if (!A.length) {
    return 0
  }
  let i, j, len1 = A.length, len2 = A[0].length
  for (i = 1; i < len1; i ++) {
    for (j = 0; j < len2; j ++) {
      A[i][j] += Math.min(
        A[i - 1][j], 
        j - 1 > -1 ? A[i - 1][j - 1] : Infinity, 
        j + 1 < len2 ? A[i - 1][j + 1] : Infinity)
    }
  }
  return Math.min.apply(null, A[len1 - 1])
};