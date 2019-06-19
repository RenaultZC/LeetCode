var reverseBits = function(n) {
  let str = '' + n.toString(2)
  for (let i = str.length; i < 32; i ++) {
    str = '0' + str 
  }
  str = str.split('').reverse().join('')
  return parseInt(str, 2)
};