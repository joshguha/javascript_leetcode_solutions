var searchRange = function (nums, target) {
  let result = [-1, -1];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (result[0] === -1) {
        result = [i, i];
      } else {
        result = [result[0], i];
      }
    }
  }
  return result;
};

const arr = [5, 7, 7, 8, 8, 10];

console.log(searchRange(arr, 8));
