/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

const flowerbed = [1, 0, 0, 0, 1];
const n = 2;

var canPlaceFlowers = function (flowerbed, n) {
    if (n === 0) return true;

    for (let i = 0; i < flowerbed.length; i++) {
        if ((i === 0 || flowerbed[i - 1] === 0) && 
            (i === flowerbed.length - 1 || flowerbed[i + 1]=== 0) &&
            flowerbed[i] === 0
        ) {
            n -= 1
            flowerbed[i] = 1;
        }
    }
    return n === 0;
};

console.log(canPlaceFlowers(flowerbed, n));

