/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  let i, len = days.length, map = {}, lastDay = days[len - 1], dp = new Array(lastDay+1).fill(0)
  for (i = 0; i < len; i ++) {
    map[days[i]] = true;
  }
  for (i = 1; i <= lastDay; i ++) {
    if (map[i]) {
      dp[i] = Math.min(
        dp[i - 1] + costs[0],
        dp[i - 7 > 0 ? i - 7 : 0] + costs[1],
        dp[i - 30 > 0 ? i - 30 : 0] + costs[2]
      )
    } else {
      dp[i] = dp[i - 1]
    }
  }
  return dp[lastDay]
};