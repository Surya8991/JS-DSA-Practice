// 1678. Goal Parser Interpretation https://leetcode.com/problems/goal-parser-interpretation
var interpret = function(command) {
    return command.replaceAll('()','o').replaceAll('(al)','al')
};
console.log(interpret("G()(al)"))
console.log(interpret("G()()()()(al)"))
console.log(interpret("(al)G(al)()()G"))
/* Goal
Gooooal
alGalooG */