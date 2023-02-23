// Sam is allowed to go out with his friends only on the even days of a given month. Write a program to count the number of days he can go out in total Days

function countDays(days) {
    let count=0
    for(let i=1;i<=days;i++){
        if(i%2==0){
            count++
        }
    }
    return ("Sam can go out "+count+" days in total Days")
}
console.log(countDays(30))
// Sam is allowed to go out with his friends only on the even days of a given month. Write a program to count the number of days he can go out in total Days
function countDay(days) {
    let count=0
    for(let i=0;i<=days;i++){
        if(i%2!==0){
            count++
        }
    }
    return ("Sam can go out "+count+" days in total Days")
}
console.log(countDay(28))