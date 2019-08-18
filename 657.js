/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let arr = [0,0];
  moves = moves.split('');
  moves.forEach(value => {
    switch(value) {
      case 'U': arr[0]++;break;
      case 'D': arr[0]--;break;
      case 'L': arr[1]++;break;
      case 'R': arr[1]--;break;
    }
  })
  if (!arr[0] && !arr[1]) {
    return true;
  }
  return false;
};
console.log(judgeCircle( "UD"));