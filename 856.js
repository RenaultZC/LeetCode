var scoreOfParentheses = function(S) {
  let res = 0, deep = 0
  for(let i = 0, len = S.length; i < len; i ++){
    if (S[i] === "(") {
      deep ++
    } else {
      deep --
    }
    if (S[i] === ")" && S[i - 1] === '(') {
      res += 2 ** deep
    }
  }
  return res
};