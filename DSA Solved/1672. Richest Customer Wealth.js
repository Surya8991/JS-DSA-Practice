// 1672. Richest Customer Wealth https://leetcode.com/problems/richest-customer-wealth
var maximumWealth = function(accounts) {
//     let max=0 Method 1
//     for (let i = 0; i < accounts.length; i++) {
//         var temp=0
//        for (let j = 0; j < accounts[i].length; j++) {
//         temp+=accounts[i][j]
//     }
//     max=Math.max(max,temp)
// }
// return max


// Method 2
let max=0
for(let i=0;i<accounts.length;i++){
    let sum=0
    for (let j = 0; j < accounts[i].length; j++) {
       sum+=accounts[i][j]
    }
    if(sum>max){
        max=sum
    }
}
return max
};
console.log(maximumWealth([[1,2,3],[3,2,1]]))