
console.log("------------STEP 1-----------");
function function1(){
    console.log("Hello");
}
function function2(){
    console.log("Welcome");
}
function1();
function2();

console.log("------------STEP 2-----------");
function personalDetails(firstName, lastName, collegeName){
   
    console.log("firstName:",firstName, "lastName:",lastName, "collegeName:",collegeName);
}

personalDetails("sneha","bodhe","suryodaya college of engineering");

console.log("------------STEP 3-----------");
function swapValues(arg1,arg2){
    console.log("Before swapping", "num1:",arg1, "num2:",arg2);
var temp = arg1;
arg1 = arg2;
arg2 = temp;
console.log("After swapping", "num1:",arg1, "num2:",arg2);
}
swapValues(1000,2000);
swapValues("Virat","Anushka");

console.log("------------STEP 4-----------");
function addThreeValues(arg1, arg2, arg3){
   var add = arg1 + arg2 + arg3;
    return add;

}
var add1 = addThreeValues(10.23, 600, 40);
console.log("Addition of 10.23,600,40 =",add1 );
var add2 = addThreeValues("Hello","Good","morning");
console.log("Addition of Hello, Good, morning=",add2 );

console.log("------------NORMAL FUNCTION-----------");
function bankDetails(bankName,accountNum,location,pinCode){
    console.log( "bankName:",bankName, "accountNum:",accountNum, "location:",location,"pinCode:",pinCode);
}
bankDetails("CITI Bank",3456782345,'Pune',431202);
bankDetails("Axis Bank",7856782345,'Pune',441202);
bankDetails("HDFC Bank",8956782345,'Pune',631202,"Open");