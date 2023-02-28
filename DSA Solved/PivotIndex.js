// 724. Find Pivot Index https://leetcode.com/problems/find-pivot-index/?envType=study-plan&id=level-1
var pivotIndex = function(nums) {
    let leftSum=0
    let rightSum=nums.reduce((a,b)=>a+b)
    for(let i=0;i<nums.length;i++){
        if((rightSum-nums[i])/2 === leftSum){
            return i
        }
        leftSum+=nums[i]
    }
    return -1
};
console.log(pivotIndex([1,7,3,6,5,6]))