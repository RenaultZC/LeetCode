/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function(A) {
  let len = A.length, set = new Set(A), i, j, ans = 0
  for (i = 0; i < len; i ++) {
    for (j = i + 1; j < len; j ++) {
      let x = A[j], y = A[i] + A[j], z, length = 2
      while (set.has(y)) {
        z = x + y
        x = y
        y = z
        ans = Math.max(ans, ++ length)
      }
    }
  }
  return ans >= 3 ? ans : 0
};