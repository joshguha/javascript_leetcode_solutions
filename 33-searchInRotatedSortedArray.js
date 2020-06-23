/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (middle === target) {
        return Math.floor(nums.length / 2);
    }
    let firstHalf = nums.slice(0, Math.ceil(nums.length / 2));
    let secondHalf = nums.slice(Math.ceil(nums.length / 2), nums.length);

    console.log(middle);
    console.log(firstHalf);
    console.log(secondHalf);
};

let findPivot = (nums) => {
    let findPivotRecursively = (nums, toAdd) => {
        let middleIndex = Math.floor(nums.length / 2);
        let middle = nums[middleIndex];
        let firstHalf = nums.slice(0, middleIndex);
        let secondHalf = nums.slice(middleIndex + 1, nums.length);
        console.log("firstHalf", firstHalf);
        console.log("secondHalf", secondHalf);

        if (firstHalf[firstHalf.length - 1] < firstHalf[0]) {
            return findPivotRecursively(firstHalf, 0);
        } else if (secondHalf[secondHalf.length - 1] < secondHalf[0]) {
            return findPivotRecursively(secondHalf, middleIndex + 1);
        } else {
            if (middle > nums[middleIndex + 1]) {
                let value = middleIndex + 1 + toAdd;
                return value;
            } else {
                let value = middleIndex + toAdd;
                return value;
            }
        }
    };

    return findPivotRecursively(nums, 0);
};
console.log(findPivot([7, 0, 1, 2, 4, 5, 6]));
