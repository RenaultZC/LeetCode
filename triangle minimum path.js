/**
 *   三角形最小路径和
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 * 例如，给定三角形：
 * 
 * [
 *      [2],
 *     [3,4],
 *    [6,5,7],
 *   [4,1,8,3]
 * ]
 * 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
 * 说明：
 * 如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。
 */
var minimumTotal = function(triangle) {
  let m = triangle.length, i, j, result = Number.MAX_SAFE_INTEGER
  for (i = 1; i < m; i++) {
    for (j = 0; j <= i; j ++) {
      if (j === 0) {
        triangle[i][j] = triangle[i - 1][j] + triangle[i][j]
      } else if (j === i) {
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i][j]
      } else {
        triangle[i][j] = Math.min(triangle[i-1][j] + triangle[i][j], triangle[i-1][j - 1] + triangle[i][j]);
      }
    }
  }
  i --
  for (j = 0; j < m; j ++) {
    if (result > triangle[i][j]) {
      result = triangle[i][j]
    }
  }
  return result
};