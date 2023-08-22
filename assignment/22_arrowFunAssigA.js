console.log(
  `-----------------------------STEP 1-------------------------------`
);

const greet = () => {
  console.log("Good Morning, Today is Tuesday");
};
greet();

console.log(
  `-------------------------------STEP 2-----------------------------`
);

const multiplication = (arg1, arg2, arg3 = 1) => {
  const mul = arg1 * arg2 * arg3;
  console.log(`Multiplaction of ${arg1}, ${arg2} & ${arg3} is : ${mul}`);
};
multiplication(5, 5, 2);
multiplication(10, 4);

console.log(
  `-------------------------------STEP 3-----------------------------`
);

const addition = (num1, num2, num3, num4, num5) => {
  const add = num1 + num2 + num3 + num4 + num5;
  return add;
};

console.log(`Addition of given numbers is : ${addition(100, 100, 200, 349, 756)}`);
let addString = addition("I am", " learning", " ES6", " features", " in depth");
console.log(`Addition of string : ${addString}`);