// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             let num1 = nums[i];
//             let num2 = nums[j];
//             if (num1 !== num2) {
//                 let sum = num1 + num2;
//                 if (sum === target) {
//                     return [i, j];
//                 }
//             }
//         }
//     }
// };

// Faster Algorithm (O(n))

let twoSum = function (nums, target) {
    let mergeSort = function (array) {
        let merge = function (firstArray, secondArray) {
            let i = 0;
            let j = 0;
            let result = [];
            while (true) {
                if (firstArray[i] < secondArray[j]) {
                    result.push(firstArray[i]);
                    i++;
                } else {
                    result.push(secondArray[j]);
                    j++;
                }

                if (i === firstArray.length) {
                    return result.concat(
                        secondArray.slice(j, secondArray.length)
                    );
                } else if (j === secondArray.length) {
                    return result.concat(
                        firstArray.slice(i, firstArray.length)
                    );
                }
            }
        };

        if (array.length === 1) {
            return array;
        }
        const middleIndex = Math.floor(array.length / 2);
        const firstArray = mergeSort(array.slice(0, middleIndex));
        const secondArray = mergeSort(array.slice(middleIndex, array.length));
        const merged = merge(firstArray, secondArray);
        return merged;
    };

    sortedArray = mergeSort(nums);
    let i = 0;
    let j = sortedArray.length - 1;

    while (true) {
        let sum = sortedArray[i] + sortedArray[j];
        if (sum > target) {
            j--;
        } else if (sum < target) {
            i++;
        } else {
            let index1 = nums.indexOf(sortedArray[i]);
            nums[index1] = undefined;
            let index2 = nums.indexOf(sortedArray[j]);

            return [index1, index2];
        }

        if (i > j) {
            return "No solution";
        }
    }
};

console.log(twoSum([3, 2, 4], 6));
