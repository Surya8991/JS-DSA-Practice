// To calculate Fibonacci Series up to n numbers.
function fib(num) {
    if (num <= 1) {
        return num
    }
    else{
       return fib(num-1)+fib(num-2)
    }
}
console.log(fib(5))
console.log(fib(10))
console.log(fib(15))