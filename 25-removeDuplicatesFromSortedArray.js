/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return [];
    }

    let banishToTheEndOfTheArray = (index) => {
        let temp = nums[index];
        let bubbleIndex = index + 1;

        while (bubbleIndex < nums.length) {
            nums[bubbleIndex - 1] = nums[bubbleIndex];
            bubbleIndex++;
        }

        nums[nums.length - 1] = temp;
    };

    let noBanished = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i === nums.length - 1) {
            return nums.length;
        }

        if (nums[i + 1] < nums[i]) {
            return i + 1;
        }

        if (nums[i + 1] === nums[i]) {
            banishToTheEndOfTheArray(i + 1);
            noBanished++;
            if (i + 1 + noBanished === nums.length) {
                return i + 1;
            }
            i--;
        }
    }
};

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(arr));

console.log(arr);
