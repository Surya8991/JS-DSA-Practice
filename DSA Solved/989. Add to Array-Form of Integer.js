// 989. Add to Array-Form of Integer https://leetcode.com/problems/add-to-array-form-of-integer/description
var addToArrayForm = function(num, k) {
    let nums = BigInt(num.join(''))+BigInt(k)
    return nums.toString().split('')
};
console.log(addToArrayForm([1,2,0,0],34))