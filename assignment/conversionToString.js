console.log(
  `***************************************************Implicit conversion to string ***************************************************`
);
console.log(
  `------------------------------------------------------------------------------------------------------------------------------------`
);
var result;
result = "3" + 2;
console.log(`Datatype of "3" is ${typeof "3"} and  2 is ${typeof 2}`);
console.log(`Result : ${result}, Datatype of ${result} is ${typeof result} `);
console.log(
  `we performed an operation using the values '3' and 2. The datatype of '3' is a string, while the datatype of 2 is a number. When we use the "+" operator with a string and a number, the number is automatically converted into a string, and then the two values are concatenated to produce the result i.e ${result}.`
);

console.log(
  `------------------------------------------------------------------------------------------------------------------------------------`
);

result = "3" + true;
console.log(`Datatype of "3" is ${typeof "3"} and  true is ${typeof true}`);
console.log(`Result : ${result}, Datatype of ${result} is ${typeof result}`);
console.log(
  `we performed an operation using the values '3' and true. The datatype of '3' is a string, while the datatype of true is a boolean. When we use the "+" operator with a string and a boolean, the boolean is automatically converted into a string, and then the two values are concatenated to produce the result i.e ${result}.`
);

console.log(
  `------------------------------------------------------------------------------------------------------------------------------------`
);

result = "3" + undefined;
console.log(
  `Datatype of "3" is ${typeof "3"} and  undefined is ${typeof undefined}`
);
console.log(`Result : ${result}, Datatype of ${result} is ${typeof result}`);
console.log(
  `we performed an operation using the values '3' and undefine. The datatype of '3' is a string, while the datatype of an undefined is an undefined. When we use the "+" operator with a string and an undefined, the undefined is automatically converted into a string, and then the two values are concatenated to produce the final result i.e ${result}.`
);

console.log(
  `------------------------------------------------------------------------------------------------------------------------------------`
);

result = "3" + null;
console.log(`Datatype of "3" is ${typeof "3"} and  null is ${typeof null}`);
console.log(`Result : ${result}, Datatype of ${result} is ${typeof result}`);
console.log(
  `we performed an operation using the values '3' and null. The datatype of '3' is a string, while the datatype of a null is an Object. When we use the "+" operator with a string and  an Object, the Object is automatically converted into a string, and then the two values are concatenated to produce the final result i.e ${result}.`
);
