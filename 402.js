var removeKdigits = function(num, k) {
  let result = [num[0]], j = 0
  for (let i = 1, len = num.length; i < len; i ++) {
    if (result[j] > num[i] && k) {
      result.pop()
      j --
      i --
      k --
    } else {
      result.push(num[i])
      j ++ 
    }
  }
  for (let i = 0; i < k; i ++) {
    result.pop()
  }
  result = result.join('').replace(/^0*/, '')
  if (!result.length) {
    return '0'
  }
  return result
};