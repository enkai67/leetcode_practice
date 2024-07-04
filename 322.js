/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

const coins = [1, 2, 5];
const amount = 7;

var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;

    for (let i = 1; i < dp.length; i++) {
        for (let coin of coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
    }

    return dp[amount] === amount + 1 ? -1 : dp[amount];
};

console.log(coinChange(coins, amount));