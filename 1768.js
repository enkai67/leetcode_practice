/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

const word1 = "abcp";
const word2 = "qr";

var mergeAlternately = function(word1, word2) {
    let mergedStr= "";

    for (let i = 0; i < word1.length || i < word2.length; i++) {
        if (word1[i]){
            mergedStr += word1[i];
        }

        if (word2[i]) {
            mergedStr += word2[i];
        }
    }

    return mergedStr;
};

console.log(mergeAlternately(word1, word2));