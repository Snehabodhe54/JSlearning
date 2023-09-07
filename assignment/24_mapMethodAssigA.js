console.log(`Given Array------`);
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19]
console.log(arrayNumbers);

console.log(`Array after adding 10 in currentValue-----`);
const addTen = arrayNumbers.map((value)=>{
return value+10;
})
console.log(addTen);

console.log(`Array of Cube----`);
const cube = arrayNumbers.map((value)=>{
    return value*value*value;
})
console.log(cube);

console.log(`Array after adding index and currentValue----`);
const addIndex =arrayNumbers.map((currentValue, index)=>{
    return currentValue+index;
})
console.log(addIndex);