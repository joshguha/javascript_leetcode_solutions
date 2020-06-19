var letterCombinations = function (digits) {
    if (digits.length === 0) {
        return [];
    }
    traverse = (arr, toAdd) => {
        if (arr.length === 0) {
            return result.push(toAdd);
        }

        const first = arr[0];

        for (let i = 0; i < first.length; i++) {
            traverse(arr.slice(1), toAdd + first[i]);
        }
    };
    phone = [
        ,
        ,
        ["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"],
        ["j", "k", "l"],
        ["m", "n", "o"],
        ["p", "q", "r", "s"],
        ["t", "u", "v"],
        ["w", "x", "y", "z"],
    ];

    nums = [];
    while (digits % 10 > 0) {
        let remainder = digits % 10;
        nums.push(remainder);
        digits = Math.floor(digits / 10);
    }
    reverse = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        reverse.push(nums[i]);
    }

    const letters = reverse.map((el) => {
        return phone[el];
    });

    let result = [];

    traverse(letters, "");

    return result;
};

console.log(letterCombinations(""));
