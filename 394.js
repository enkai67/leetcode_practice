/**
 * @param {string} s
 * @return {string}
 */

const s = "3[ab]a2[f]";

var decodeString = function (s) {
    const stack = [];

    for (const char of s) {
        if (char !== "]") {
            stack.push(char)
        } else {
            let cur = stack.pop();
            let str = "";

            while (cur !== "[") {
                str = cur + str;
                cur = stack.pop();
            }

            let num = "";
            cur = stack.pop();

            while (!Number.isNaN(Number(cur))) {
                num = cur + num;
                cur = stack.pop();
            }

            stack.push(cur);
            stack.push(str.repeat(Number(num)));
        }
    }

    return stack.join("");
};

console.log(decodeString(s));