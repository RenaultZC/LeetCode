var nthUglyNumber = function(n) {
  let res = [1], p2 = 0, p3 = 0, p5 = 0, temp
  n --
  while (n > 0) {
    temp = Math.min(res[p2] * 2, res[p3] * 3, res[p5] * 5)
    res.push(temp)
    if (res[p2] * 2 === temp) {
      p2 ++
    }
    if (res[p3] * 3 === temp) {
      p3 ++
    }
    if (res[p5] * 5 === temp) {
      p5 ++
    }
    n --
  }
  return res.pop()
};