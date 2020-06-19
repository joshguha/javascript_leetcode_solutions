/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = [];

    generateResults = (toAdd, lefts, rights) => {
        if (lefts === n && lefts === rights) {
            result.push(toAdd);
        } else if (lefts === n) {
            generateResults(toAdd + ")", lefts, rights + 1);
        } else if (lefts === rights) {
            generateResults(toAdd + "(", lefts + 1, rights);
        } else {
            generateResults(toAdd + "(", lefts + 1, rights);
            generateResults(toAdd + ")", lefts, rights + 1);
        }
    };

    generateResults("", 0, 0);
    return result;
};

console.log(generateParenthesis(10));
