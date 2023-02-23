// Program Vowel Or Consonant
function voWCons(str) {
    let strLower=str.toLowerCase()
    let strSplit=strLower.split("")
    let vowels=['a','i','o','e','u']
    let vowel = 0
    let consonant = 0
    for(let i of strSplit){
        if(vowels.includes(i))
        {
            vowel++
        }
        else{
            consonant++
        }
    }
    console.log("Vowels = ",vowel)
    console.log("Consonant = ",consonant)
}
voWCons("Apple")