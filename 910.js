/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeII = function(A, K) {
  if (A.length <= 1) {
    return 0;
  }
  A = A.sort((a,b)=>a - b);
  let len = A.length, i, max, min, res = A[len - 1] - A[0]
  for (i = 0; i < len - 1; i++) {
    max = Math.max(A[i] + K, A[len - 1] - K)
    min = Math.min(A[i + 1] - K, A[0] + K);
    res = Math.min(res, max - min);
  }
  return res
};
console.log(smallestRangeII([3,1,10], 4));