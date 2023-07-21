/*function swap(n1, n2){ // n1, n2 arguments or parameters n1=100   n2=200
    console.log('Inside swap function');
    console.log('Before Swap=> n1', n1, " n2", n2 );
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log('After Swap=> n1', n1, " n2", n2 );
}
var num1 = 100;
var num2 = 200;
swap(num1, num2);// Function call or invocation

var sweety = "Sweety";
var cutie = "Cutey";
swap(sweety, cutie);

var name1 = "Virat";
var name2 = "Anushka";
swap(name1, name2);
console.log('End of program');*/



function swap(n1,n2){
console.log("Before swapping: ","n1=",n1,"n2=",n2);
var temp=n1;
n1=n2;
n2=temp;
console.log("After swapping: ","n1=",n1,"n2=",n2);
}

swap(200,500);
swap("sweety","cutie");
swap("virat","Anushka");
swap();

function addition(arg1, arg2, arg3){
   console.log('Values are:', arg1, arg2, arg3);
   var result= arg1+  arg2 + arg3;
   return result;
}
var res = addition(10, 23, 456);
console.log('Result is',res);

addition(-56, 239, 677);
 addition("gk, 66, 'pune");