const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
arrayNumbers.forEach((element, index) => {
  console.log(`Element: ${element}, index: ${index}`);
});

console.log(`---------------------------------------------------------`);

console.log(`Positive numbers in Array`);
arrayNumbers.forEach((element) => {
  if (element > 0) {
    console.log(element);
  }
});

console.log(`---------------------------------------------------------`);
console.log(`array of negative numbers from Array`);
const newArray = [];
arrayNumbers.forEach((element) => {
  if (element < 0) {
    newArray.push(element);
  }
});
console.log(newArray);

console.log(`---------------------------------------------------------`);

console.log(`Even numbers from Array`);
arrayNumbers.forEach((element) => {
  if (element % 2 == 0) {
    console.log(element);
  }
});

console.log(`---------------------------------------------------------`);

let sum = 0;
arrayNumbers.forEach((element) => {
  sum = sum + element;
});
console.log(`Sum of all element in Array: ${sum}`);

console.log(`---------------------------------------------------------`);

arrayNumbers.forEach((element, index)=>{
    if(index%2==0)
    {
        console.log(`index: ${index} element: ${element}`);
    }
})