/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let pre = 1, next = 1, res = 1
  n--
  while (n --) {
    res = pre  + next
    next = pre + next
    pre = next - pre
  }
  return res
};