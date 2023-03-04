var findTheDifference = function(s, t) {
    if(s.length === t.length){
        return false
    }
    let sSplit=s.split('').sort()
    let tSplit=t.split('').sort()
    for (let i = 0; i < tSplit.length; i++) {
       if(sSplit[i]!=tSplit[i]){
        return tSplit[i]
       } 
    }
    return ""
    };
console.log(findTheDifference('d','de'))