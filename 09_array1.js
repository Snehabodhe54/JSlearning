console.log(`------ concat ----------`);
let array1 = [3, 4, 5, 6];
let array2 = [6, 7, 8, 9];
let array3 = array1.concat(array2);
console.log(array3);

console.log(`------ join ----------`);
let result = array1.join(" ");
console.log(result);

console.log(`------ for of loop ----------`);
for (const element of array3) {
    console.log(element);
}

console.log(`------ array resize ----------`);
let array4 = [4, 5, 6, 7, 8, 9];
array4.length = 3;
console.log(array4);