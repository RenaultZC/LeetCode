/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  let sell = 0, buy = 0, len = prices.length
  if (len < 2) {
    return 0
  } 
  buy = -prices[0]
  for (i = 1; i < len; i ++) {
    sell = Math.max(sell, buy + prices[i] - fee)
    buy = Math.max(buy, sell - prices[i])
  }
  return sell
};
console.log(maxProfit([1, 3, 2, 8, 4, 9], 2))