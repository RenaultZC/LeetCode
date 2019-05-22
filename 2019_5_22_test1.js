/**
 * 给定一个非空且只包含非负数的整数数组 nums, 数组的度的定义是指数组里任一元素出现频数的最大值。
 * 你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
 * 示例 1:
 * 输入: [1, 2, 2, 3, 1]
 * 输出: 2
 * 解释: 
 * 输入数组的度是2，因为元素1和2的出现频数最大，均为2.
 * 连续子数组里面拥有相同度的有如下所示:
 * [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 * 最短连续子数组[2, 2]的长度为2，所以返回2.
 * 示例 2:
 * 输入: [1,2,2,3,1,4,2]
 * 输出: 6
 * 注意:
 *  nums.length 在1到50,000区间范围内。
 */
var findShortestSubArray = function(nums) {
  let item = [nums[0]], obj = {}, result = Number.MAX_SAFE_INTEGER, flag = 1
  for (let i = 0, len = nums.length; i < len; i ++) {
    if (obj[nums[i]]) {
      obj[nums[i]] ++
    } else {
      obj[nums[i]] = 1
    }
    if (obj[nums[i]] > flag) {
      item = [nums[i]]
      flag = obj[nums[i]]
    } else if (obj[nums[i]] === flag && item.indexOf(nums[i])) {
      item.push(nums[i]) 
    }
  }
  for(let i = 0, len = item.length; i < len; i ++) {
    let start = nums.indexOf(item[i]), end = nums.lastIndexOf(item[i])
    if (end - start + 1 < result) {
      result = end - start + 1
    }
  }
  return result
};