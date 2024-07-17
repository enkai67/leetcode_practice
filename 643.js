/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const nums = [1,12,-5,-6,50,3];
const k = 4;

var findMaxAverage = function (nums, k) {
    let averageNum = -Infinity;
    let left = 0;
    let sum = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        if (right - left + 1 === k) {
            averageNum = Math.max(averageNum, sum / k);

            sum -= nums[left];
            left++;
        }
    }

    return averageNum;
};

console.log(findMaxAverage(nums, k));
