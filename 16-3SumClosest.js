var threeSumClosest = function (nums, target) {
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

    const twoSumClosest = function (sorted, target) {
        if (sorted.length < 2) {
            return [];
        }
    
        let i = 0;
        let j = sorted.length - 1;
        let minSum = sorted[i] + sorted[j];
        let distance = Math.abs(sorted[i] + sorted[j] - target);
    
        while (true) {
            sum = sorted[i] + sorted[j];
            if (Math.abs(sum - target) < distance) {
                distance = Math.abs(sum - target);
                minSum = sum;
            }
            // console.log(sorted[i], sorted[j]);
            // console.log("sum", sum);
            // console.log("distance", distance);
            // console.log("minSum", sum);
    
            if (sum > target) {
                if (j - 1 <= i) {
                    return minSum;
                }
                j--;
            } else if (sum < target) {
                // console.log("sum < target");
                if (i + 1 >= j) {
                    return minSum;
                }
                i++;
            } else {
                // console.log("sum = target");
                return minSum;
            }
        }
    };
    

    const sorted = mergeSort(nums);
    console.log("sorted", sorted);

    let minDistance = undefined;
    let closestSum = undefined;

    for (let i = 0; i < sorted.length; i++) {
        let first = sorted[i];
        let arr = sorted.slice(i + 1);
        if (arr.length >= 2) {
            console.log("first", first);
            console.log("arr", arr);
            console.log("target", target - first);

            let sum = first + twoSumClosest(arr, target - first);
            console.log("twoSumClosest", twoSumClosest(arr, target - first));
            console.log("sum", sum);

            if (!closestSum && closestSum !== 0) {
                closestSum = sum;
            }
            if (!minDistance && minDistance !== 0) {
                minDistance = Math.abs(sum - target);
            }

            console.log("distance", Math.abs(sum - target));

            if (Math.abs(sum - target) < minDistance) {
                minDistance = Math.abs(sum - target);
                closestSum = sum;
            }
            console.log("minDistance", minDistance);
            console.log("closestSum", closestSum);
        }
    }

    return closestSum;
};

console.log(threeSumClosest([1,2,5,10,11], 12));
