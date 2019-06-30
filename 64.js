/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let n = grid.length, m = grid[0].length, i, j
  for (i = 1; i < n; i ++) {
    grid[i][0] += grid[i - 1][0]
  }
  for (i = 1; i < m; i ++) {
    grid[0][i] += grid[0][i - 1]
  }
  for (i = 1; i < n; i ++) {
    for (j = 1; j < m; j ++) {
      grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j]
    }
  }
  return grid[n - 1][m - 1]
};
console.log(minPathSum([
  [1,3,1],
  [1,5,1],
  [4,2,1]
]))