/**
 * @param {number[][]} books
 * @param {number} shelf_width
 * @return {number}
 */
var minHeightShelves = function(books, shelf_width) {
  
  let width = [0]
  let height = [0]
  let n = books.length
  let dp = Array(n + 1).fill(-1)
  dp[0] = 0

  for (let i = 0; i < n; i++) {
    height[i + 1] = books[i][1]
    width[i + 1] = books[i][0]
  }

  for (let i = 1; i <= n; i++) {
    let mx = 0;
    let cur = 0;

    for (let j = i; j > 0; j--) {
      mx = Math.max(mx, height[j])
      cur += width[j]
      if (cur > shelf_width) break
      if (dp[i] === -1 || dp[i] > dp[j - 1] + mx) dp[i] = dp[j - 1] + mx
    }
  }
  return dp[n]
};
console.log(minHeightShelves([[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], 4))