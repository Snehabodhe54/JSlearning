console.log(`Given Array`);
const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(array_numbers);

console.log(`-------sum of all numbers in Array------`);
console.log(`Traditional way`);
let sum = 0;
for (const element of array_numbers) {
  sum = sum + element;
}
console.log(`sum : ${sum}`);

console.log(`reduce method`);
let totalSum = array_numbers.reduce((sum, element) => {
  return sum + element;
});
console.log(`totalSum : ${totalSum}`);

console.log(`-------Number multiple of 5 and sum of numbers------`);
let totalmul5 = array_numbers
  .filter((element) => element % 5 == 0)
  .reduce((sum, element) => {
    return sum + element;
  });
console.log(` ${totalmul5}`);
