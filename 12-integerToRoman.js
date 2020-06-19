var intToRoman = function (num) {
    let result = "";

    let decrementByLetter = (value, letter) => {
        while (num - value >= 0) {
            num -= value;
            result += letter;
        }
    };
    decrementByLetter(1000, "M");
    decrementByLetter(500, "D");
    decrementByLetter(100, "C");
    decrementByLetter(50, "L");
    decrementByLetter(10, "X");
    decrementByLetter(5, "V");
    decrementByLetter(1, "I");

    if (result.includes("IIII")) {
        result = result.slice(0, result.length - 4) + "IV";
    }
    if (result.includes("VIV")) {
        result = result.slice(0, result.length - 3) + "IX";
    }
    if ((result.includes("XXXX"))) {
        result =
            result.slice(0, result.indexOf("X")) +
            "XL" +
            result.slice(result.indexOf("X") + 4, result.length);
    }
    if ((result.includes("XXXX"))) {
        result =
            result.slice(0, result.indexOf("XXXX")) +
            "XL" +
            result.slice(result.indexOf("XXXX") + 4, result.length);
    }
    if ((result.includes("LXL"))) {
        result =
            result.slice(0, result.indexOf("LXL")) +
            "XC" +
            result.slice(result.indexOf("LXL") + 3, result.length);
    }
    if ((result.includes("CCCC"))) {
        result =
            result.slice(0, result.indexOf("CCCC")) +
            "CD" +
            result.slice(result.indexOf("CCCC") + 4, result.length);
    }
    if ((result.includes("DCD"))) {
        result =
            result.slice(0, result.indexOf("DCD")) +
            "CM" +
            result.slice(result.indexOf("DCD") + 3, result.length);
    }

    return result;
};

console.log(intToRoman(1994));





