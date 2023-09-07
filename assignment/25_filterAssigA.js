console.log(`Given Array----`);
const arrayNumbers = [20, 11, , 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(arrayNumbers);

console.log(`Numbers greater than 50----`);
const numGreaterThan50 = arrayNumbers.filter((value) => {
  return value > 50;
});
console.log(numGreaterThan50);

console.log(`Even Numbers----`);
const evenNum = arrayNumbers.filter((value) => {
  return value % 2 == 0;
});
console.log(evenNum);

console.log(`Odd Numbers----`);
const oddNum = arrayNumbers.filter((value) => {
  return value % 2 == 1;
});
console.log(oddNum);

console.log(`Numbers multiple of 5----`);
const numMul5 = arrayNumbers.filter((value) => {
  return value % 5 == 0;
});
console.log(numMul5);

console.log(`Numbers between 20 & 50----`);
const numBt2050 = arrayNumbers.filter((value) => {
  return value > 20 && value < 50;
});
console.log(numBt2050);
