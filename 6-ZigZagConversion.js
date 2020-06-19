var convert = function (s, numRows) {
    let convertTo2DArray = function (s, numRows) {
        let populateDown = function (arr, result) {
            for (let i = 0; i < numRows; i++) {
                if (!arr[0]) {
                    break;
                }
                result[i].push(arr[0]);
                arr.shift();
            }
        };

        let populateDiagonal = function (arr, result) {
            for (let i = numRows - 2; i > 0; i--) {
                if (!arr[0]) {
                    break;
                }
                result[i].push(arr[0]);
                arr.shift();
            }
        };

        let arr = s.split("");
        let result = [];
        for (i = 0; i < numRows; i++) {
            result.push([]);
        }

        while (arr.length > 0) {
            populateDown(arr, result);
            populateDiagonal(arr, result, numRows);
        }
        return result;
    };

    let convert2DArrayToAnswer = function (arr) {
        let concatArray = [];

        for (let i = 0; i < arr.length; i++) {
            concatArray = concatArray.concat(arr[i]);
        }

        let result = "";
        for (let i = 0; i < concatArray.length; i++) {
            result += concatArray[i];
        }
        return result;
    };

    return convert2DArrayToAnswer(convertTo2DArray(s, numRows));
};

console.log(convert("PAYPALISHIRING", 4));
