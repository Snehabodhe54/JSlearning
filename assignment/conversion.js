console.log(`-------------------------------------------------------IMPLICIT CONVERSION--------------------------------------------------`);
console.log(`Implicit boolean conversion to Number`); // in boolean, true is 1 & false is 0.
var result;
result = "4" - true;
console.log(`Result of '4' - true: ${result}, Datatype : ${typeof result}`);

result = 4 + true;
console.log(`Result of 4 + true: ${result}, Datatype : ${typeof result}`);

result = 4 + false;
console.log(`Result of 4 - false: ${result}, Datatype : ${typeof result}`);

console.log(`When we perform operation using number and boolean values, boolean values takes their numeric equivalent i.e true=1 & false=0 `);

console.log(
  `------------------------------------------------------------------------------------------------------------------------------------`
);

console.log(`Implicit string conversion is Number`);

result = "4" - "2";
console.log(`Result of '4' - '2' : ${result}, Datatype : ${typeof result}`);

result = "4" - 2;
console.log(`Result of '4' - 2 : ${result}, Datatype : ${typeof result}`);

result = "4" * 2;
console.log(`Result of '4' * 2 : ${result}, Datatype : ${typeof result}`);

result = "4" / 2;
console.log(`Result of '4' / 2 : ${result}, Datatype : ${typeof result}`);

console.log(
  ` When we performed an operation using the "-" OR "*"  OR "/" operator with a string and a number, the string is automatically converted into a number.`
);

console.log(
  `------------------------------------------------------------------------------------------------------------------------------------`
);

console.log(`Undefined used with number, boolean or null gives NaN`); //Arithmetic operation of undefine with number, boolean or null given NaN

result = 4 + undefined;
console.log(
  `Result of '4 + undefined' : ${result}, Datatype : ${typeof result}`
);

result = 4 - undefined;
console.log(
  `Result of '4 - undefined' : ${result}, Datatype : ${typeof result}`
);

result = true * undefined;
console.log(
  `Result of '4 * undefined' : ${result}, Datatype : ${typeof result}`
);

result = null / undefined;
console.log(
  `Result of '4 / undefined' : ${result}, Datatype : ${typeof result}`
);

console.log(
  ` When we performed an operation using the "undefined" OR "null"  OR "boolean"  with a number. Undefined, null or boolean cannot be directly converted into a number, so the result of this operation becomes NaN,.`
);
