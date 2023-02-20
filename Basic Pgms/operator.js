// Take in two numbers and an operator (+, -, *, /) and calculate the value. (Use if conditions)
function mathOp(num1,num2,op) {
    if(op==="+"){
        console.log(num1+num2)
    }
    if(op==="-"){
        console.log(num1-num2)
    }
    if(op==="*"){
        console.log(num1*num2)
    }
    if(op==="/"){
        console.log(num1/num2)
    }
}
mathOp(59,97,'+')
mathOp(59,7,'-')
mathOp(59,97,'*')
mathOp(59,9,'/')
// 156
// 52
// 5723
// 6.555555555555555