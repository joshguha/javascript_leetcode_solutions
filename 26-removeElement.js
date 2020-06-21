/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
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
        if (nums[i] === val) {
            if (noBanished > nums.length) {
                break;
            }
            banishToTheEndOfTheArray(i);
            noBanished++;
            i--;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            return i;
        }
    }

    return nums.length;
};

const arr = [2, 2, 3];

console.log(removeElement(arr, 3));
console.log(arr);
