/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  s = s.split('');
  let reverse = (s, start, end) => {
    while(start < end) {
      let tmp = s[start];
      s[start] = s[end];
      s[end] = tmp;
      start ++;
      end --;
    }
  }, len = s.length;
  reverse(s, 0, n - 1);
  reverse(s, n, len - 1);
  reverse(s, 0, len - 1);
  return s.join('');
};

console.log(reverseLeftWords('lrloseumgh', 6))