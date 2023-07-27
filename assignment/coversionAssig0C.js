console.log(`     `);
var result = 0==' ';
console.log(`Result of 0==' ': ${result}`);
console.log(`When we compare the number 0 with the string ' ', then string converts into number and here is space as string so it will convert into  0`);
 
console.log(`     `);

var result = 0=='0';
console.log(`Result of 0=='0': ${result}`);
console.log(`When we compare the number 0 with the string '0', then string converts into number and here is '0' as string so it will convert into number 0`);
  
console.log(`     `);

var result = 0==false;
console.log(`Result of 0==false: ${result}`);
console.log(`When we compare the number 0 with the boolean false, then boolean value converts into numeric equivalent i.e false=0 `);

console.log(`     `);

var result = null==undefined; 
console.log(`Result of null==undefined: ${result}`);
console.log(`Both null and Undefined considered falsy value , we are using == operator so they are equal but their datatype is different `);

console.log(`     `);

var result = 1==[1];
console.log(`Result of 1==[1]: ${result}`);
console.log(`When we compare the number  with Array , then convert the array into a primitive value. [1] has 1 primitive value `);
 
console.log(`     `);

var result = 1==true;
console.log(`Result of 1==true: ${result}`);
console.log(`When we compare the number 1 with the boolean true, then boolean value converts into numeric equivalent i.e True=1 `);
 
console.log(`     `);

var result = 1=='1';
console.log(`Result of 1=='1': ${result}`);
console.log(`When we compare the number 1 with the string '1', then string converts into number and here is '1' as string so it will convert into number 1`);
 