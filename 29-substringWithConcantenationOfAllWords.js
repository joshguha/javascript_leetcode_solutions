/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    if (s === "" || words.length === 0) {
        return [];
    }

    let lengths = words.map((el) => el.length);

    const unique = (val, index, self) => {
        return index === self.indexOf(val);
    };

    lengths = lengths.filter(unique);

    let 

    // let result = [];

    // testWindow = (index, allWordCombinations) => {
    //     let window = s.slice(index, index + allWordCombinations[0].length);
    //     for (let i = 0; i < allWordCombinations.length; i++) {
    //         if (window === allWordCombinations[i]) {
    //             result.push(index);
    //         }
    //     }
    // };

    // for (let i = 0; i <= s.length + allWordCombinations[0].length; i++) {
    //     testWindow(i, allWordCombinations);
    // }

    // return result;
};

console.log(
    findSubstring("wordgoodgoodgoodbestword", ["wordg", "godh", "bestdgr", "good"])
);
