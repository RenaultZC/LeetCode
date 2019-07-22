/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  let arr = [], dp = [0], cur = 1
  nums.forEach(value => {
    arr[value] = arr[value] ? arr[value] + value : value
  })
  for (let i = 1, len = arr.length; i < len; i ++) {
    if (arr[i]) {
      dp[cur] = arr[i - 1] ? Math.max(dp[cur - 2] + arr[i],dp[cur - 1]): dp[cur - 1] + arr[i]
      cur ++
    }
  }
  return dp[dp.length - 1]
};