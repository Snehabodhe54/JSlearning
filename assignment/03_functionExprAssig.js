console.log(`-----------------------------------------step 1----------------------------------`);

var square = function(num){
var square = num * num;
console.log(`Square of ${num} is: ${square}`);
}
square(5);
square(6);
square(25);
square(100);
square(67);
square(89);
square(59);

console.log(`-----------------------------------------step 2----------------------------------`);
console.log(`Type Of square variable: ${typeof square}`);

console.log(`-----------------------------------------step 3----------------------------------`);
var areaOfRectangle = function(length, width){
var areaOfRectangle = length * width;
console.log(`Area of Rectangle having length=${length} and width=${width} : ${areaOfRectangle}`)
}
areaOfRectangle(499, 917);

console.log(`-----------------------------------------step 4----------------------------------`);
var swapValues = function(num1,num2){
    console.log(`Before swapping values are ${num1 },${num2}`);
    var num3 = num1;
    num1 = num2;
    num2 = num3;
    console.log(`After swapping values are ${num1 },${num2}`);
}
swapValues(55, 77);
swapValues('Mahi', 'Raina');

console.log(`-----------------------------------------step 5----------------------------------`);
var string = function(str){
lengthOfStr = str.length;
console.log(`Total character available in string ${lengthOfStr}`);

var charAt6 = str.charAt(6);
console.log(`Character at index 6 is : ${charAt6}`);

var charAt11 = str.charAt(11);
console.log(`Character at index 11 is : ${charAt11} `);

var lastChar = str.charAt(lengthOfStr-1);
console.log(`Character at last of the string : ${lastChar} `);

var firstChar = str.charAt(0);
console.log(`Character at first of the string : ${firstChar} `);

var lastThird = str.charAt(lengthOfStr-3);
console.log(`Character at last third of the string : ${lastThird} `);

var splitBy = str.split(" ");
var TotalWords = splitBy.length;
console.log(`Total number of words in the given string: ${TotalWords}`);

var square = TotalWords * TotalWords;
console.log(`Square of number of words in the given string: ${square}`);

}
string("JS the most popular language of internet");