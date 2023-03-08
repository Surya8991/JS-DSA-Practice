// 1662. Check If Two String Arrays are Equivalent https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent

var arrayStringsAreEqual = function(word1, word2) {
    // Method 1
    // let wordSum=word1.reduce((a,b)=>a+b) 
    // let wordSum2=word2.reduce((a,b)=>a+b)
    // return wordSum === wordSum2
    // Method 2
    return word1.join('') === word2.join('');
};
console.log(arrayStringsAreEqual(["ab", "c"],["a", "bc"]))
console.log(arrayStringsAreEqual(["a", "cb"],["ab", "c"]))
console.log(arrayStringsAreEqual(["abc", "d", "defg"],["abcddefg"]))