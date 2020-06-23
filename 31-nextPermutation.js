/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var nextPermutation = function (nums) {
//     if (nums.)

//     let convertArrayToNum = (arr) => {
//         let result = 0;
//         for (let i = 0; i < arr.length; i++) {
//             result *= 10;
//             result += arr[i];
//         }
//         return result;
//     };

//     let findAllPermutations = (arr) => {
//         let allPermutations = [];

//         let findAllPermutationsRecursively = (arr, toAdd) => {
//             if (arr.length === 0) {
//                 allPermutations.push(toAdd);
//             }
//             for (let i = 0; i < arr.length; i++) {
//                 let num = toAdd * 10 + arr[i];
//                 let newArr = arr
//                     .slice(0, i)
//                     .concat(arr.slice(i + 1, arr.length));
//                 findAllPermutationsRecursively(newArr, num);
//             }
//         };

//         findAllPermutationsRecursively(arr, 0);

//         return allPermutations;
//     };

//     let mergeSort = function (array) {
//         let merge = function (firstArray, secondArray) {
//             let i = 0;
//             let j = 0;
//             let result = [];
//             while (true) {
//                 if (firstArray[i] < secondArray[j]) {
//                     result.push(firstArray[i]);
//                     i++;
//                 } else {
//                     result.push(secondArray[j]);
//                     j++;
//                 }

//                 if (i === firstArray.length) {
//                     return result.concat(
//                         secondArray.slice(j, secondArray.length)
//                     );
//                 } else if (j === secondArray.length) {
//                     return result.concat(
//                         firstArray.slice(i, firstArray.length)
//                     );
//                 }
//             }
//         };

//         if (array.length === 1) {
//             return array;
//         }
//         const middleIndex = Math.floor(array.length / 2);
//         const firstArray = mergeSort(array.slice(0, middleIndex));
//         const secondArray = mergeSort(array.slice(middleIndex, array.length));
//         const merged = merge(firstArray, secondArray);
//         return merged;
//     };

//     let convertNumToArray = (num) => {
//         let result = [];

//         while (num !== 0) {
//             let remainder = num % 10;
//             num = Math.floor(num / 10);
//             result = [remainder].concat(result);
//         }

//         return result;
//     };

//     let sortedPermutations = mergeSort(findAllPermutations(nums));
//     let num = convertArrayToNum(nums);
//     let index = sortedPermutations.indexOf(num);

//     if (index + 1 === sortedPermutations.length) {
//         index = 0;
//     } else {
//         index++;
//     }

//     let nextNum = sortedPermutations[index];

//     return convertNumToArray(nextNum);
// };

let nextPermutation = function (nums) {
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

    for (let i = nums.length - 1; i >= 0; i--) {
        let first = nums[i];
        let second = nums[i - 1];

        if (!second && second !== 0) {
            let sorted = mergeSort(nums);
            console.log("here");
            for (let i = 0; i < nums.length; i++) {
                nums[i] = sorted[i];
            }
            return nums;
        }

        if (first > second) {
            let secondHalf = mergeSort(nums.slice(i, nums.length));
            nums[i - 1] = secondHalf.find((el) => el > second);
            let firstHalf = nums.slice(0, i);
            let index = secondHalf.indexOf(nums[i - 1]);
            secondHalf[index] = second;
            for (let i = 0; i < nums.length; i++) {
                nums[i] = firstHalf.concat(mergeSort(secondHalf))[i];
            }
            return nums;
        }
    }
};

console.log(nextPermutation([2, 2, 0, 4, 3, 1]));
