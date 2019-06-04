var countNumbersWithUniqueDigits = function(n) {
  if (!n) {
    return 1
  }
  let res = 10, muls = 9, i
  for (i = 1; i < n; i ++) {
    muls *= ((10 - i) > -1 ? (10 - i) : 0)
    res += muls
  }
  return res
};