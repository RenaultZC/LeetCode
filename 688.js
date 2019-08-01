/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
var knightProbability = function(N, K, r, c) {
  let jump = [[-1, 2], [-1, -2], [1, 2], [1, -2], [2, -1], [2, 1], [-2, 1], [-2, -1]], res = 0, brr = [], i, j, k, arr = []
  for (i = 0; i < N; i ++) {
    arr[i] = []
    brr[i] = []
    for (j = 0; j < N; j ++) {
      arr[i][j] = 0
      brr[i][j] = 0
    }
  }
  arr[r][c] = 1
  brr[r][c] = 1
  for (let s = 0; s < K; s ++) {
    for (i = 0; i < N; i ++) {
      brr[i] = []
      for (j = 0; j < N; j ++) {
        brr[i][j] = 0
      }
    }
    for (i = 0; i < N; i ++) {
      for (j = 0; j < N; j ++) {
        for (k = 0; k < 8; k ++) {
          let x = i + jump[k][0], y = j + jump[k][1]
          if (x >= 0 && y >= 0 && x < N && y < N) {
            brr[i][j] += arr[x][y] / 8
          }
        }
      }
    }
    for (i = 0; i < N; i ++) {
      for (j = 0; j < N; j ++) {
        arr[i][j] = brr[i][j]
      }
    }
  }
  for (i = 0; i < N; i ++) {
    for (j = 0; j < N; j ++) {
      res += brr[i][j]
    }
  }
  return res
};
console.log(knightProbability( 3, 2, 0, 0));