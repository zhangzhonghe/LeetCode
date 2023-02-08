/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrices = prices[0];
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i++) {
        minPrices = Math.min(minPrices, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrices);
    }
    return maxProfit;
};