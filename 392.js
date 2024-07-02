/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const s = "abc";
const t = "ahbgdc";

// refer: two pointer
var isSubsequence = function (s, t) {
    let i = 0;
    let j = 0;

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }

    return i === s.length;
};


// first attempt
/*
var isSubsequence = function (s, t) {
    const tLength = t.length;
    for (let i = 0; i < tLength; i++) {
        const wordChecking = s[0];

        if (wordChecking === t[0]) {
            s = s.slice(1, s.length);
        }
        t = t.slice(1, t.length);
    }

    return s === "";
};
*/
console.log(isSubsequence(s, t));
