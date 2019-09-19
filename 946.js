/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  let len = pushed.length, stack = [], i;
  for (i = 0; i < len || (pushed.length || popped[0] === stack[0] && stack.length); i ++){
    if (!stack.length) {
      stack.unshift(pushed.shift());
    }
    if (popped[0] === stack[0]) {
      stack.shift();
      popped.shift();
    } else {
      stack.unshift(pushed.shift());
    }
  }
  if (!popped.length) {
    return true;
  }
  return false;
};
console.log(validateStackSequences([1,2,3,4,5],[4,3,5,1,2]));