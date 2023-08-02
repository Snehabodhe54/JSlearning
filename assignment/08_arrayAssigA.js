
let arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`${arrayFruits}`);

console.log(
    `---------------------------------------------------------------1------------------------------------------------------------`
  );
let firstElement = arrayFruits[0];
let arrayLength = arrayFruits.length;
let SecondElement = arrayFruits[arrayLength - 1];
console.log(`First and Last elements are: ${firstElement}, ${SecondElement}`);

console.log(
  `---------------------------------------------------------------2------------------------------------------------------------`
);
arrayFruits.unshift("Papaya");
console.log(`Insert element 'Papaya' before 'Banana': ${arrayFruits}`);

console.log(
  `---------------------------------------------------------------3-------------------------------------------------------------`
);
arrayFruits.splice(4, 1);
console.log(`Remove element having index 4 i.e(Mango): ${arrayFruits}`);

console.log(
  `--------------------------------------------------------------- 4-------------------------------------------------------------`
);
arrayFruits.push("Pineapple");
console.log(`Insert 'Pineapple' at the last of array: ${arrayFruits}`);

console.log(
  `--------------------------------------------------------------- 5-------------------------------------------------------------`
);
arrayFruits.splice(4, 0, "Dragon Fruit");
console.log(`Insert 'Dragon Fruit' before 'Water Melon': ${arrayFruits}`);

console.log(
  `---------------------------------------------------------------6-------------------------------------------------------------`
);
arrayFruits.splice(2, 1, "Kiwi");
console.log(`Replace 'Orange' with 'Kiwi': ${arrayFruits}`);

console.log(
  `--------------------------------------------------------------- 7-------------------------------------------------------------`
);
function elements1To4() {
  let elementSpace = " ";
  for (let index = 1; index <= 4; index++) {
    const element = arrayFruits[index];
    elementSpace = elementSpace + element + " ";
  }
  console.log(`Elements in array having index from 1 to 4: ${elementSpace}`);
}
elements1To4();

console.log(
    `--------------------------------------------------------------- 8-------------------------------------------------------------`
  );
  
  console.log(`Last 3 element from array: ${arrayFruits.slice(arrayFruits.length-3, arrayFruits.length)}`);
  