/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let arr = [];

    let input = s.split("");
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            arr.push(s[i]);
        }

        if (s[i] === ")") {
            if (arr.pop() !== "(") {
                return false;
            }
        }

        if (s[i] === "}") {
            if (arr.pop() !== "{") {
                return false;
            }
        }

        if (s[i] === "]") {
            if (arr.pop() !== "[") {
                return false;
            }
        }
    }

    return arr.length === 0;
};

console.log(isValid("({[[]]]})"));
