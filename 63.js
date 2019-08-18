/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let i, j, m = obstacleGrid.length, n = obstacleGrid[0].length, dp = [];
  for (i = 0; i < m; i ++) {
    dp[i] = [];
    for (j = 0; j < n; j ++) {
      dp[i][j] = 0;
    }
  }
  dp[0][0] = obstacleGrid[0][0] ? 0 : 1;
  for (i = 1; i < m; i ++) {
    dp[i][0] = dp[i - 1][0];
    if (obstacleGrid[i][0]) {
      dp[i][0] = 0;
    }
  }
  for (i = 1; i < n; i ++) {
    dp[0][i] = dp[0][i - 1];
    if (obstacleGrid[0][i]) {
      dp[0][i] = 0;
    }
  }
  for (i = 1; i < m; i ++) {
    for (j = 1; j < n; j ++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      if (obstacleGrid[i][j]) {
        dp[i][j] = 0;
      }
    }
  }
  return dp[m - 1][n - 1];
};
console.log(uniquePathsWithObstacles([
  [0,0,0],
  [0,1,0],
  [0,0,0]
]));