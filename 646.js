/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  pairs = pairs.sort((a, b) => a[1] - b[1])
  let i, temp = -Infinity, res = 0, len = pairs.length
  for (i = 0; i < len; i ++) {
    if (pairs[i][0] > temp) {
      temp = pairs[i][1]
      res ++
    }
  }
  return res
};