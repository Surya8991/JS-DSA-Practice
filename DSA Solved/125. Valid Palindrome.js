// 125. Valid Palindrome https://leetcode.com/problems/valid-palindrome
var isPalindrome = function(s) {
    // Conevert the string to LowerCase and remove elements other then Alphanumeric characters
    s=s.toLowerCase().replace(/[^A-Za-z0-9]/gi,"")  
    let start=0
    let end=s.length-1
    // Compares the 1st and last elemenet
    while(start<end){
        if(s[start]!=s[end]) return false
        start++
        end--
    }
    return true
}
console.log(isPalindrome("A man, a plan, a canal: Panama"))