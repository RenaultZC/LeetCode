/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  let i, len = nums.length, res = 0, temp;
  nums = nums.sort((a, b) => a - b);
  temp = nums[Math.ceil(nums.length/2) - 1]
  for (i = 0; i < len; i ++) {
    res += Math.abs(temp - nums[i])
  }
  return res;
};
console.log(minMoves2([1,0,0,8,6]));