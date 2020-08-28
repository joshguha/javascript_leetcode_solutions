/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	const binarySearchInsert = (arr, target, startingIndex) => {
		const middleIndex = Math.floor(arr.length / 2);
		if (arr[middleIndex] === target) {
			return startingIndex + middleIndex;
		}
		if (arr.length === 1) {
			if (target < arr[middleIndex]) return startingIndex;
			return startingIndex + 1;
		}

		if (target < arr[middleIndex]) {
			return binarySearchInsert(
				arr.splice(0, middleIndex),
				target,
				startingIndex
			);
		} else {
			return binarySearchInsert(
				arr.splice(middleIndex),
				target,
				startingIndex + middleIndex
			);
		}
	};

	return binarySearchInsert(nums, target, 0);
};


