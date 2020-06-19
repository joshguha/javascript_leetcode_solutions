var threeSum = function (nums) {
    if (nums.length < 3) {
        return [];
    }
    let mergeSort = function (array) {
        if (array.length === 0) {
            return [];
        }
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

    const twoSum = function (sorted, target) {
        if (sorted.length === 0) {
            return [];
        }
        let result = [];
        let i = 0;
        let j = sorted.length - 1;

        while (true) {
            let sum = sorted[i] + sorted[j];
            if (sum > target) {
                j--;
            } else if (sum < target) {
                i++;
            } else {
                let add = true;
                result.forEach((el) => {
                    if (el[0] === sorted[i] && el[1] === sorted[j]) {
                        add = false;
                    }
                });

                if (add) {
                    result.push([sorted[i], sorted[j]]);
                }
                i++;
            }

            if (i >= j) {
                return result;
            }
        }
    };

    const sorted = mergeSort(nums);
    let result = [];

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] !== sorted[i - 1]) {
            let first = sorted[i];
            // console.log(first);
            let arr = sorted.slice(i + 1);
            // console.log(arr);
            if (arr.length >= 2) {
                answers = twoSum(arr, 0 - first).map((el) => {
                    return [first].concat(el);
                });
                // console.log(answers);
                result = result.concat(answers);
            }
        }
    }

    return result;
};

console.log(threeSum([-2, -3, 0, 0, -2]));
