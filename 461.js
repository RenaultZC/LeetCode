var hammingDistance = function(x, y) {
  x ^= y
  let res = 0
  while (x) {
    x &= (x - 1)
    res ++
  }
  return res
};