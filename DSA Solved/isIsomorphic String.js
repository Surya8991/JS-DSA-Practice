// 205. Isomorphic Strings https://leetcode.com/problems/isomorphic-strings/?envType=study-plan&id=level-1
var isIsomorphic = function(s, t) {
    if(s.length!=t.length) {
        return false
        }
    let map1=[]
    let map2=[]
    for(let i=0;i<s.length;i++)
    {
        if(map1[s.charAt(i)]!= map2[t.charAt(i)]) {
         return false
        }   
        map1[s.charAt(i)]=i+1
        map2[t.charAt(i)]=i+1
    }
    return true
};
console.log(isIsomorphic("egg","add"))