/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length < 1) {
    return 0
  }
  if (nums.length < 2) {
    return nums[0]
  }
  let  p, q, t
  p = nums[0]
  q = Math.max(nums[0], nums[1])
  for (let i = 2, len = nums.length; i < len; i ++) {
    t = Math.max(p + nums[i], q)
    p = q
    q = t
  }
  return q
};