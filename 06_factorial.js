console.log(
  `-------------------------------factorial using RECURSION----------------------------`
);
function factorial(num) {
  // 5 * 4 * 3 * 2 * 1

  if (num == 1) {
    return 1;
  } else {
    return num * factorial(num - 1); //5 * 4 * 3 * 2 * 1
  }
}
var fact = factorial(5);
console.log(`Factorial using recursion is: ${fact}`);

console.log(
  `--------------------------------factorial using loop------------------------------`
);

function factorialLoop(num) {
let factorial = 1;
for (let index = num; index >= 1; index--) {
  factorial= factorial * index;
}
return factorial;
}
console.log(`factorial of 5 :${factorialLoop(5)}`);
console.log(`factorial of 9 :${factorialLoop(9)}`);
console.log(`factorial of 11 :${factorialLoop(11)}`);
console.log(`factorial of 7 :${factorialLoop(7)}`);
