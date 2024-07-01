/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;

var kidsWithCandies = function (candies, extraCandies) {
    // const maxNum = candies.reduce((max, cur) => (cur > max ? cur : max), candies[0]);
    const maxNum = Math.max(...candies);
    const AddedCandies = [];
    for (let i = 0; i < candies.length ; i++) {
        if (candies[i] + extraCandies >= maxNum) {
            AddedCandies.push(true);
        } else {
            AddedCandies.push(false);
        }
    }
    return AddedCandies;
};

console.log(kidsWithCandies(candies, extraCandies));