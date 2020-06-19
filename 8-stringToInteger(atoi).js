var myAtoi = function (str) {
    let removeInitialWhiteSpace = function (str) {
        let string = str;
        while (string[0] === " ") {
            string = string.slice(1, string.length);
        }
        return string;
    };

    let stringToArray = function (string) {
        let arr = [];
        let first = true;
        let cont = true;
        while (cont) {
            switch (string[0]) {
                case "0":
                    arr.push(0);
                    string = string.slice(1, string.length);
                    first = false;
                    break;
                case "1":
                    arr.push(1);
                    string = string.slice(1, string.length);
                    first = false;
                    break;
                case "2":
                    arr.push(2);
                    string = string.slice(1, string.length);
                    first = false;
                    break;
                case "3":
                    arr.push(3);
                    string = string.slice(1, string.length);
                    first = false;
                    break;
                case "4":
                    arr.push(4);
                    string = string.slice(1, string.length);
                    first = false;
                    break;
                case "5":
                    arr.push(5);
                    string = string.slice(1, string.length);
                    first = false;
                    break;
                case "6":
                    arr.push(6);
                    string = string.slice(1, string.length);
                    first = false;
                    break;
                case "7":
                    arr.push(7);
                    string = string.slice(1, string.length);
                    first = false;
                    break;
                case "8":
                    arr.push(8);
                    string = string.slice(1, string.length);
                    first = false;
                    break;
                case "9":
                    arr.push(9);
                    string = string.slice(1, string.length);
                    first = false;
                    break;
                case "+":
                    if (first === true) {
                        string = string.slice(1, string.length);
                        first = false;
                        break;
                    } else {
                        cont = false;
                        break;
                    }

                case "-":
                    if (first === true) {
                        arr.push("-");
                        string = string.slice(1, string.length);
                        first = false;
                        break;
                    } else {
                        cont = false;
                        break;
                    }
                default:
                    cont = false;
                    break;
            }
        }
        return arr;
    };

    let arrayToInteger = function (arr) {
        let negative = false;
        if (arr[0] === "-") {
            negative = true;
            arr.shift();
        }
        let result = 0;
        while (arr.length > 0) {
            result *= 10;
            result += arr[0];
            arr.shift();
        }
        negative ? (result = -1 * result) : result;
        return result;
    };

    let result = arrayToInteger(stringToArray(removeInitialWhiteSpace(str)));

    if (result < -2147483648) {
        return -2147483648;
    } else if (result > 2147483647) {
        return 2147483647;
    } else {
        return result;
    }
};

let str = "  123";
console.log(myAtoi("91283472332"));
