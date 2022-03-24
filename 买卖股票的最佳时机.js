/**
 * @param {number[]} prices
 * @return {number}
 * @link https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 */
const maxProfit = function(prices) {
  let maxProfit = 0
  let minPrice = Math.max(...prices)

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice
    }
  }

  return maxProfit
};
