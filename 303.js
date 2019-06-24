/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  let len = nums.length, i, j, sumArr = [nums[0]] 
  for (i = 1; i < len; i ++) {
    sumArr[i] = sumArr[i - 1] + nums[i]
  }
  this.nums = nums
  this.sumArr = sumArr
};
/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.sumArr[j] - this.sumArr[i] + this.nums[i]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */