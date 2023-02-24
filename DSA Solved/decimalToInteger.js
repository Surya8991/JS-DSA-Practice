function decToInteger(binary) {
    // return parseInt(binary,2) Easy Method
    let flag=binary
    let pow=0
    let ans=0
    while(flag>0){
        let rem=flag%10
        ans += rem *Math.pow(2,pow)
        pow++
        flag=parseInt(flag/10)
    }
    return ans
}
console.log(decToInteger(101))