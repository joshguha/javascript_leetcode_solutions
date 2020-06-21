/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let num = dividend / divisor;
    if (num > 2147483647 || num < -2147483648) {
        return 2147483647;
    }
    if (num >= 0) {
        return Math.floor(num);
    } else {
        return Math.ceil(num);
    }
};

console.log(divide(-50, 6));
