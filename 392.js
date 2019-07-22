/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let i = 0, j = 0, len1 = s.length, len2 = t.length;
  while (i < len1 && j < len2) {
    if (s[i] === t[j]) {
      i++ 
      j++
    } else {
      j ++
    }
  }
  return i === len1
};