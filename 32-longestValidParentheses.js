/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let longestValidParenthesesFromIndex = (index) => {
        let result = 0;
        let count = 0;
        let stack = [];
        restOfString = s.slice(index);

        for (let i = 0; i < restOfString.length; i++) {
            let current = restOfString[i];
            if (current === "(") {
                count++;
                stack.push(current);
            } else if (current === ")") {
                if (stack.length === 0) {
                    break;
                }
                count++;
                stack.pop();
                if (stack.length === 0) {
                    result = count;
                }
            }
        }

        return result;
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let indexResult = longestValidParenthesesFromIndex(i);

        if (indexResult > result) {
            result = indexResult;
        }
    }

    return result;
};

console.log(longestValidParentheses(")()())"));
