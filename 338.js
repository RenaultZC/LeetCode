/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  if (num === 0) {
    return [0]
  }
  if (num === 1) {
    return [0, 1]
  }
  let res = [0, 1, 1]
  for (let i = 3; i <= num; i ++) {
    if (i % 2) {
      res[i] = res[i - 1] + 1
    } else {
      res[i] = res[i / 2]
    }
  }
  return res
};