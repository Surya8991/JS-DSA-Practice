// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.You must write an algorithm with O(log n) runtime complexity.

// Link https://leetcode.com/problems/search-insert-position/description/


var searchInsert = function(nums, target) {
    if(nums.includes(target)){
        return nums.indexOf(target)
    }
    else{
        return [...nums,target].sort((a,b)=>a-b).indexOf(target)
    }
};