console.log(`-----------To remove duplicates from array using loop-----------`);

let array = [4, 5, 4, 5, 8, 5, 7, 8, 9, 7, 8];
console.log(`Given array = `, array);
let uniqueArray = [];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (uniqueArray.indexOf(element) === -1) {
    uniqueArray.push(element);
  }
}

console.log(`After removing duplicates = `, uniqueArray); // Output: [4, 5, 8, 7, 9]

console.log(`-----------------------using two loops-------------------------`);

let uniqueArray1 = [];
for (let index = 0; index < array.length; index++) {
  let isDuplicate = false;
  for (let j = 0; j < uniqueArray1.length; j++) {
    if (array[index] === uniqueArray1[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    uniqueArray1.push(array[index]);
  }
}
console.log(uniqueArray1);

console.log(`----------------------(using set and ... spread operator)--------------------------`);

let uniqueArray2= [...new Set(array)]
console.log(uniqueArray2);


