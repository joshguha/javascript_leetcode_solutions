var isPalindrome = function (x) {
    if (x < 0) return false;

    let num = x;
    let reverse = 0;
    while (num > 0) {
        let remainder = num % 10;
        reverse *= 10;
        reverse += remainder;
        num = Math.floor(num / 10);
    }

    return reverse === x;
};
console.log(isPalindrome(109));
