/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
  let min = Infinity
  special = special.filter((value) => {
    let i, len = value.length, nPrice = 0
    for (i = 0; i < len - 1; i ++) {
      nPrice +=  (value[i] * price[i])
    }
    if (nPrice < value[len - 1]) {
      return false
    }
    return true
  })
  let dfs = (needs, cost) => {
    let i , len = needs.length
    special.forEach((value) => {
      for (i = 0; i < len; i ++) {
        if (value[i] > needs[i]) {
          break;
        }
      }
      if (i === len) {
        for (i = 0; i < len; i ++) {
          needs[i] -= value[i]
        }
        dfs(needs, cost + value[len])
        for (i = 0; i < len; i ++) {
          needs[i] += value[i]
        }
      }
    })
    for (i = 0; i < len; i ++) {
      cost += needs[i] * price[i]
    }
    if (cost < min) {
      min = cost
    }
  }
  dfs(needs, 0)
  return min
};
console.log(shoppingOffers([2,5], [[3,0,5],[1,2,10]], [3,2]))