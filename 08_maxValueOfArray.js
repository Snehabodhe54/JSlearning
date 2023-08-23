const array = [44, 55, 33, 89, 56, 72, 17, 85, 45];

const maxValue = [0];
for (const value of array) {
  if (value > maxValue[0]) {
    maxValue.splice(0, 1, value);
  }
}
console.log(`Maximum value of array is ${maxValue}`);

const minValue = [maxValue];
for (const value of array) {
  if (value < minValue[0]) {
    maxValue.splice(0, 1, value);
  }
}
console.log(`Minimum value of array is ${minValue}`);
