var findMedianSortedArrays = function (nums1, nums2) {
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
                    return result.concat(secondArray.slice(j, secondArray.length));
                } else if (j === secondArray.length) {
                    return result.concat(firstArray.slice(i, firstArray.length));
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

    
    const concatArray = nums1.concat(nums2);
    const sortedArray = mergeSort(concatArray);

    if (sortedArray.length % 2 == 1) {
        return sortedArray[Math.floor(sortedArray.length / 2)];
    } else {
    
        const sum =
            sortedArray[Math.floor(sortedArray.length / 2)] +
            sortedArray[Math.floor(sortedArray.length / 2 - 1)];
        return sum / 2;
    }
};

console.log(findMedianSortedArrays([1, 3, 4], [5, 2, 6]));
