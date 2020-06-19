var longestCommonPrefix = function (strs) {
    let test = strs[0];
    let index = 0;
    let result = "";
    console.log(!!test);
    if (strs.length > 0 && !!test) {
        while (true) {
            if (strs.every((word) => word[index] === test[index])) {
                if (test[index]) {
                    result += test[index];
                    index++;
                } else {
                    return result;
                }
            } else {
                return result;
            }
        }
    } else {
        return "";
    }
};

console.log(longestCommonPrefix(["a", "a"]));
