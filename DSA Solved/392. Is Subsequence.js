// 392. Is Subsequence https://leetcode.com/problems/is-subsequence/?envType=study-plan&id=level-1
var isSubsequence = function(s, t) {
  let p1=0
  let p2=0
  while (p1<s.length && p2<t.length) {
    if(s[p1]===t[p2]){
        p1++
        p2++
    }else p2++
  }
  return p1 === s.length
};
console.log(isSubsequence("abc","ahbgdc"))
console.log(isSubsequence("abcx","ahbgdc"))
// Another Method
// var isSubsequence = function(s, t) {
//     let count=0
//     for(let i=0;i<t.length;i++){
//         if(s[count]===t[i]){
//             count++
//         }
//     }
//     return count === s.length
// };