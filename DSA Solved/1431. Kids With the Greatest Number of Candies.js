// 1431. Kids With the Greatest Number of Candies https://leetcode.com/problems/kids-with-the-greatest-number-of-candies
var kidsWithCandies = function(candies, extraCandies) {
    var max = candies[0]
    for(var i=0; i<candies.length; i++){
    if(candies[i]>max){
    max = candies[i];
    }
    }
    for(var i=0; i<candies.length; i++){
    candies[i]=candies[i]+extraCandies;
    if(candies[i]>=max){
    candies[i]= true;
    }
    else{
    candies[i]= false;
    }
    
    }
    return candies;
};
console.log(kidsWithCandies([2,3,5,1,3],3))
console.log(kidsWithCandies([4,2,1,1,2],1))
console.log(kidsWithCandies([12,1,12],10))