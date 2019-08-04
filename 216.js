/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let arr = []
  let deep = (n , k, nArr, num, index) => {
    if (k === 0) {
      if (num === n) {
        arr.push([...nArr])
      }
      return
    }
    for (let i = index; i < 10; i ++) {
      if (num + i <= n) {
        nArr.push(i)
        deep(n, k - 1, nArr, num + i, i + 1)
        nArr.pop()
      } else {
        return
      }
    }
  }
  deep(n, k, [], 0, 1)
  return arr
};
console.log(combinationSum3(3,9));