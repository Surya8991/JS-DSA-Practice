// To find out whether the given String is Palindrome or not.
function pal(str) {
    let strRev=str.split("").reverse().join("")
    return str==strRev
}
console.log(pal("amma"))
console.log(pal("india"))
console.log(pal("apple"))
console.log(pal("sfgfg"))
console.log(pal("gsgwrtw"))
