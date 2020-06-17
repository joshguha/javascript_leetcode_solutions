/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxSubstring = [];
    for (let i = 0; i < s.length; i++) {
        let substring = [s[i]];
        for (j = i + 1; j < s.length; j++) {
            if (!substring.includes(s[j])) {
                substring.push(s[j]);
            } else {
                break;
            }
        }
        if (substring.length > maxSubstring.length) {
            maxSubstring = substring;
        }
    }
    return maxSubstring.length;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
