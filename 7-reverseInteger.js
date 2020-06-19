var reverse = function (x) {
    let num = x > 0 ? x : -1 * x;
    let arr = [];
    while (num !== 0) {
        arr.push(num % 10);
        num = Math.floor(num / 10);
    }
    let result = 0;
    while (arr.length > 0) {
        result *= 10;
        result += arr[0];
        arr.shift();
    }
    if (result > 2147483647 || result < -2147483648) {
        result = 0;
    }

    return x > 0 ? result : -1 * result;
};

console.log(reverse(1534236469));
