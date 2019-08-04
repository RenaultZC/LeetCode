/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  let direction = [[-1, 0], [0, 1], [1, 0], [0, -1]], temp = 1, len = commands.length, i, x = 0, y = 0, res = 0, j;
  for (i = 0; i < len; i ++) {
    if (commands[i] === -1) {
      temp ++;
      if (temp === 4) {
        temp = 0;
      }
    }else if (commands[i] === -2) {
      temp --;
      if (temp === -1) {
        temp = 3;
      }
    }else {
      for (j = 0; j < obstacles.length; j ++) {
        if ((obstacles[j][0] >= x && obstacles[j][1] >= y
          && obstacles[j][0] <= x + commands[i] * direction[temp][0]
          && obstacles[j][1] <= y + commands[i] * direction[temp][1]) || 
          (obstacles[j][0] <= x && obstacles[j][1] <= y
          && obstacles[j][0] >= x + commands[i] * direction[temp][0]
          && obstacles[j][1] >= y + commands[i] * direction[temp][1])) {
          if (x === obstacles[j][0] && y === obstacles[j][1]) {
            continue;
          }
          x = obstacles[j][0] - direction[temp][0];
          y = obstacles[j][1] - direction[temp][1];
          break;
        }
      }
      if (j === obstacles.length) {
        x = x + commands[i] * direction[temp][0];
        y = y + commands[i] * direction[temp][1];
      }
      res = Math.max(res, x * x + y * y);
    }
  }
  return res;
};
console.log(robotSim( [-2,-1,-2,3,7],
  [[1,-3],[2,-3],[4,0],[-2,5],[-5,2],[0,0],[4,-4],[-2,-5],[-1,-2],[0,2]]));