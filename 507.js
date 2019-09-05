/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  if (num < 2) return false; 
  let i = 2, result = num - 1;
  for (; i * i <= num; i++) {
    if (num % i === 0) {
      result -= i;
      if (i * i !== num) {
        result -= num / i;
      }
    }
  }
  if (!result) {
    return true;
  }
  return false;
};
console.log(checkPerfectNumber(28));