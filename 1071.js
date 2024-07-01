/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const str1 = "ABABAB";
const str2 = "AB";

var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";

    let i = str1.length;
    let j = str2.length;

    const divider = (x, y) => y === 0 ? x : divider(y, x % y);
    let divLength = divider(i, j);
    
    return str1.slice(0, divLength);
};

console.log(gcdOfStrings(str1, str2));