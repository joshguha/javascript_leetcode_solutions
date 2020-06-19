// Brute force - O(n^2)

// var maxArea = function (height) {
//     let result = 0;
//     for (let i = 0; i < height.length; i++) {
//         let intermediate = 0;
//         for (let j = i + 1; j < height.length; j++) {
//             let width = j - i;
//             let length = Math.min(height[i], height[j]);
//             let area = width * length;

//             if (area > intermediate) {
//                 intermediate = area;
//             }
//         }
//         if (intermediate > result) {
//             result = intermediate;
//         }
//     }
//     return result;
// };

// Two Pointer - O(n)

var maxArea = function (height) {
    let maxArea = 0;
    let i = 0;
    let j = height.length - 1;

    while (i !== j) {
        let area = (j - i) * Math.min(height[i], height[j]);

        if (area > maxArea) maxArea = area;

        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

