/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let temp = {}, res = '', Ttemp = {}, flag = true;
  for (let i = 0, len = t.length; i< len; i ++) {
    Ttemp[t[i]] = Ttemp[t[i]] ?  Ttemp[t[i]] + 1 : 1;
  }
  const judge = (a, b) => {
    return Object.keys(b).every(v => a[v] >= b[v]);
  }
  let left = 0, right = 0, len = s.length;
  while(right < len) {
    temp[s[right]] = temp[s[right]] ?  temp[s[right]] + 1 : 1;
    right ++;
    if (judge(temp, Ttemp)) {
      let tmp = s.slice(left, right);
      if (tmp.length < res.length || flag) {
        res = tmp;
        flag = false;
      }
      while(left < right) {
        temp[s[left]] = temp[s[left]] - 1;
        left ++;
        if (!judge(temp, Ttemp)) break; 
        let tmp = s.slice(left, right);
        if (tmp.length < res.length || flag) {
          res = tmp;
          flag = false;
        }
      }
    }
  }
  return res;
};

console.log(minWindow('a', 'b'))