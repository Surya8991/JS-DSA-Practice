// 1929. Concatenation of Array https://leetcode.com/problems/concatenation-of-array
var getConcatenation = function(nums) {
    return [...nums,...nums] //Method 1
    // return nums.concat(nums) Method 2

    // const result = []; Method 3
    // for(let i= 0;  i< nums.length; i++) {
    //     result[i] = nums[i];
    //     result [i + nums.length] = nums[i]
    // }
    // return result;
};
console.log(getConcatenation([1,2,1]))