/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	const result = [];

	const findAllPermutations = (current, remaining) => {
		if (remaining.length === 0) {
			console.log(current);
			result.push(current);
		}

		for (let i = 0; i < remaining.length; i++) {
			console.log("i", i);
			console.log(remaining);
			const newCurrent = current.concat(remaining[i]);
			console.log("newCurrent", newCurrent);
			const newRemaining = [...remaining];
			newRemaining.splice(i, 1);
			console.log("newRemaining", newRemaining);

			findAllPermutations(newCurrent, newRemaining);
		}
	};

	findAllPermutations([], nums);

	return result;
};

console.log(permute([1, 2, 3]));
