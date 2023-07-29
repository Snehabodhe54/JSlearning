console.log(`-----------------------------------step 1--------------------------------`);
function evenOrOdd(arg1){
if(arg1%2==0){
   var result =' EVEN';   
}
else{
    var result = 'ODD';
}
return result;
}
console.log(`Number 45 is ${evenOrOdd(45)}` );
console.log(`Number 70 is ${evenOrOdd(70)}` );
console.log(`Number 67 is ${evenOrOdd(67)}` );
console.log(`Number 98 is ${evenOrOdd(98)}` );

console.log(`-----------------------------------step 2--------------------------------`);
function voteEligibility(age){
    if(age>=18){
        console.log(`Your age is ${age} so you are eligible for vote`);
    }else{
        console.log(`Your age is ${age} so you are not eligible for vote`);
    }
}
voteEligibility(18);
voteEligibility(20);
voteEligibility(17);
voteEligibility(40);

console.log(`-----------------------------------step 3--------------------------------`);
function stringLength(string){ 
    var strLength = string.length;
     if (strLength>=10) {
        console.log(`String ${string} length is equal to 10 or more than 10.`);
     } else {
        console.log(`String ${string} length is Not equal to 10`);
     }
}
stringLength('JavaScript-ES6');

console.log(`-----------------------------------step 4--------------------------------`);
function stringStartWith(string){ 
    var strStartWith = string.startsWith("Java");
     if (strStartWith==true) {
        console.log(`String ${string} starts with 'Java'.`);
     } else {
        console.log(`String ${string} Not starts with 'Java'`);
     }
}
stringStartWith('JavaScript Language');

