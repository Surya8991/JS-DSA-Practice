// Circle
function circleArea(r){
    const PI=3.14
    let result =PI*(Math.pow(r,2).toFixed(3))
    return result
}
console.log("Circle Area",circleArea(5))
// Triangle
function triArea(height,base){

    let result =((height*base)/2)
    return result
}
console.log("Triangle Area",triArea(5,10))