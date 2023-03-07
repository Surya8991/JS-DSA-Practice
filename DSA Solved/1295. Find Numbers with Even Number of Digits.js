// 1295. Find Numbers with Even Number of Digits https://leetcode.com/problems/find-numbers-with-even-number-of-digits
const findNumbers = nums => {
   return nums.map(String).filter((n)=>n.length%2==0).length
  };
console.log(findNumbers([12,345,2,6,7896]))

/*
Example
Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.
*/