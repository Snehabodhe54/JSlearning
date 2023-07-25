
console.log(`-------------------------------------------------STEP 1----------------------------------------------------`);
function squareOfWordLength(str){
var strLength = str.length;
console.log(`Length of word ${str} is :${str.length}`);
var squareOfWordLength = strLength*strLength;
return squareOfWordLength;
}
console.log(`Square of word javaScript Length is:${squareOfWordLength("javaScript")} `);
console.log(`Square of word Google Chrome Length is:${squareOfWordLength("Google Chrome")} `);
console.log(`Square of word Developer Smart Length is:${squareOfWordLength("Developer Smart")} `);

console.log(`-------------------------------------------------STEP 2----------------------------------------------------`);
var string = function(){
var str = "I am Angular Developer";
var strLength = str.length;
console.log(`length of string is: ${strLength}`);
var strSplit = str.split(" ");
var strSplitLength = strSplit.length;
console.log(`Total number of words present in string : ${strSplitLength}`);
var div = strLength/ strSplitLength;
console.log(`Result after dividing string length by total number of words available in string: ${div}`);
var mul = strLength*strSplitLength;
console.log(`Result after multiplication of string length and total number of words available in string: ${mul}`);

}
string();

