/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  let res = [1], len = ratings.length, i, result = 0
  for (i = 1; i < len; i ++) {
    if (ratings[i] > ratings[i - 1]) {
      res[i] = res[i - 1] + 1
    } else {
      res[i] = 1
    }
  }
  for (i = len - 2; i > -1; i --) {
    if (ratings[i] > ratings[i + 1] && res[i] <= res[i + 1]) {
      res[i] = res[i + 1] + 1
    }
    result += res[i]
  }
  result += res[len - 1]
  return result
};