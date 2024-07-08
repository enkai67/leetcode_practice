/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const strArr = s.split(" ");
    const res = [];
    for (let i = strArr.length - 1; i >= 0; i--) {
        if (strArr[i] !== "") res.push(strArr[i]);
    }
    return res.join(" ");
};
