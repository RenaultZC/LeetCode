/**
* @param {number[]} cost
* @return {number}
*/
var minCostClimbingStairs = function(cost) {
  if (cost.length < 2) {
    return 0
  }
  let p = cost[0], q = cost[1], t
  for (let i = 2, len = cost.length; i < len; i ++) {
    t = cost[i] + Math.min(p, q)
    p = q
    q = t
  }
  return Math.min(p, q)
};