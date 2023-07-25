console.log(`-------------------------------------------------STEP 1----------------------------------------------------`);
var greaterNumber = function(num1, num2){
var greatestNumber = (num1>=num2)?num1:num2;
console.log(`Greatest number among ${ num1} and ${ num2} is: ${greatestNumber}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log(`-------------------------------------------------STEP 2----------------------------------------------------`);
var isEvenOrOddNum = function(num){
    var isEvenOrOdd = num%2==0? "True" : "False";
    return isEvenOrOdd;
}
console.log(`Given number  ${29} is Even: ${isEvenOrOddNum(29) }`);
console.log(`Given number ${44} is Even:  ${isEvenOrOddNum(44) }`);
console.log(`Given number ${0} is Even:  ${ isEvenOrOddNum(0)}`);
console.log(`Given number ${101} is Even: ${isEvenOrOddNum(101) }`);

console.log(`-------------------------------------------------STEP 3----------------------------------------------------`);
var wordLength = function(str){
var strLength = str.length;
var wordLengthIsEvenOrOdd = str.length%2==0? " EVEN":"ODD";
return wordLengthIsEvenOrOdd;
}
console.log(`  Length of given word JavaScript is: ${wordLength("JavaScript") }`);
console.log(` Length of given word developer is: ${wordLength("developer") }`);
console.log(` Length of given word Google, is: ${wordLength("Google") }`);

