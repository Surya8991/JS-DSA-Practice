function inttToDec(n) {
    let flag=0
    let ans=0
    while(n>0){
        let rem = n % 2
        ans += rem * Math.pow(10,flag)
        n =n/2
        flag++
    }
    return ans
}
console.log(inttToDec(5))