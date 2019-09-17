/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  let arr = [p1, p2, p3, p4], res = [], i, j;
  for (i = 0; i < 4; i ++) {
    for (j = i + 1; j < 4; j ++) {
      res.push((arr[i][0] - arr[j][0]) ** 2 + (arr[i][1] - arr[j][1]) ** 2);
    }
  }
  res.sort((a, b) => a - b);
  return res[4] === res[5] && res[0] === res[2] && res[1] === res[3] && res[0] === res[1] && res[0] !== 0;
};