// TO Printa Number is prime no. or not
function primeNo(num) {
    if(num<1){
        return false
    }
    for(let i=2;i<=num-1;i++){
        if(num%i===0){
            return false
        }
        return true
    }
}
console.log(primeNo(5))