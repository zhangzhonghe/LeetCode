/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let minPrices = prices[0];
    let maxProfit = 0;
    for (const element of prices) {
        minPrices = Math.min(minPrices, element);
        maxProfit = Math.max(maxProfit, element - minPrices);
    }
    return maxProfit;
}
