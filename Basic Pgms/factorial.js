function fact(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return n * fact(n - 1)
    }
}
console.log("The factorial of number is "+ fact(5))