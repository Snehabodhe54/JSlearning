function add(num1, num2, ...num ){
    // console.log(`num1 ${num1},  num2 ${num2}`);
    // console.log(num);
    let addition = num1+ num2;
   for (const value of num) {
    addition= addition+value;
   
   }
   console.log(`Addition of ${num1}, ${num2 } and rest of numbers (${num}) is : ${addition}`);
}
add(5, 6);
add(9, 5, 6);
add(78, 90, 51, 68);
add(89, 90, 45,78, 90, 51, 68);