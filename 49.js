/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let len = strs.length, i, obj = {}, res = [];
  for (i = 0; i < len; i ++) {
    let arr = new Array(26).fill(0);
    for (let val of strs[i]) {
      let char = val.charCodeAt(0) - 97;
      arr[char] ++;
    }
    arr = arr.join('');
    if (obj[arr]) {
      obj[arr].push(strs[i]);
    } else {
      obj[arr] = [strs[i]];
    }
  }
  for(i in obj) {
    res.push([...obj[i]]);
  }
  return res;
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));