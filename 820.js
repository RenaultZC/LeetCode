/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  words = words.sort((a, b) => b.length - a.length);
  let res = '';
  words.forEach(val => {
    if (res.indexOf(`${val}#`) === -1) {
      res += `${val}#`;
    }
  })
  return res;
};
console.log(minimumLengthEncoding(["time", "me", "bell"]));