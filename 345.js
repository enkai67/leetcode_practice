/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let start = 0;
    let end = s.length - 1;

    const vowels = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"];
    const ans = [...s];

    while (start < end) {
        if (!vowels.includes(ans[start])) {
            start++;
        }
        if (!vowels.includes(ans[end])) {
            end--;
        }

        if (vowels.includes(ans[start]) && vowels.includes(ans[end])) {
            const tmp = ans[end];
            ans[end] = ans[start];
            ans[start] = tmp;
            start++;
            end--;
        }
    }

    return ans.join("");
};
