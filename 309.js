/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buy = [], sell = [], cold = [],  i, len = prices.length;
  if (len < 2) {
    return 0
  }
  for (i = 0; i < len; i ++) {
    buy[i] = 0
    sell[i] = 0
    cold[i] = 0
  }
  buy[0] = -prices[0]
  for (i = 1; i < len; i ++) {
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i])
    buy[i] = Math.max(buy[i - 1], cold[i - 1] - prices[i])
    cold[i] = Math.max(cold[i - 1], Math.max(sell[i - 1], buy[i - 1]))
  }
  return sell[len - 1]
};