const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`Given Array------`);
console.log(arrayRollNumbers);

console.log(`Reversed Array------`);
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);

console.log(`Sorted Array without custom logic------`);
arrayRollNumbers.sort();
console.log(arrayRollNumbers);

console.log(`Sorted Array in ascending order------`);
arrayRollNumbers.sort((element1, element2) => {
  return element1 > element2 ? 1 : -1;
});
console.log(arrayRollNumbers);

console.log(`Greatest number from Array------`);
console.log(arrayRollNumbers[arrayRollNumbers.length - 1]);

console.log(`Smallest number from Array------`);
console.log(arrayRollNumbers[0]);

console.log(`Removed Duplicates-----`);
const removeduplicate = new Set();

for (const element of arrayRollNumbers) {
  removeduplicate.add(element);
}

console.log([...removeduplicate]);
