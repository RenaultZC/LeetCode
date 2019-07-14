/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let i, len = s.length, count = 0
  for (i = 0; i < len; i ++) {
    let start = i, end = i
    while (start > -1 && end < len) {
      if (s[start] === s[end]) {
        count ++
        start --
        end ++
      } else {
        break
      }
    }
    start = i - 1
    end = i
    while (start > -1 && end < len) {
      if (s[start] === s[end]) {
        count ++
        start --
        end ++
      } else {
        break
      }
    }
  }
  return count
};