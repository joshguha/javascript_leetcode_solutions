/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === "") {
        return 0;
    }

    let arr = haystack.split("");
    let target = needle.split("");

    for (let i = 0; i <= arr.length - target.length; i++) {
        if (arr[i] === target[0] && arr[i + target.length - 1]) {
            let window = arr.slice(i, i + target.length);
            if (
                window.every((el, i) => {
                    return el === target[i];
                })
            ) {
                return i;
            }
        }
    }

    return -1;
};

console.log(strStr("billthegiantman", "lt"));
