const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers);

console.log(
  `-----------------------------------------------------------1--------------------------------------------------`
);
console.log(`Total elements available in array: ${arrayNumbers.length}`);

console.log(
  `-----------------------------------------------------------2--------------------------------------------------`
);
console.log(
  `First and Last elements in array: ${arrayNumbers[0]} and ${
    arrayNumbers[arrayNumbers.length - 1]
  }`
);

console.log(
  `-----------------------------------------------------------3--------------------------------------------------`
);
console.log(
  `Third Last elements in array: ${arrayNumbers[arrayNumbers.length - 3]}`
);

console.log(
  `-----------------------------------------------------------4--------------------------------------------------`
);
function evenNum() {
  let elementConcat = "";
  for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element % 2 == 0) {
      elementConcat = elementConcat + element + " ";
    }
  }
  console.log(`all Even numbers in array are: ${elementConcat}`);
}
evenNum();

console.log(
  `-----------------------------------------------------------5-------------------------------------------------`
);
function oddNum() {
  let elementConcat = "";
  for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element % 2 != 0) {
      elementConcat = elementConcat + element + " ";
    }
  }
  console.log(`all Odd numbers in array are: ${elementConcat}`);
}
oddNum();

console.log(
    `-----------------------------------------------------------6--------------------------------------------------`
  );
  function evenPositionedNum() {
    let elementConcat = "";
    let sum = 0;
    for (let index = 0; index < arrayNumbers.length; index+=2) {
      const element = arrayNumbers[index];
      elementConcat=elementConcat+element+" ";
      sum=sum+element;
    }
    console.log(` Even positioned numbers in array are: ${elementConcat}`);
    console.log(`sum of Even positioned numbers in array are: ${sum}`);
  }
  evenPositionedNum();

console.log(
    `-----------------------------------------------------------7--------------------------------------------------`
  );
  function oddPositionedNum() {
    let elementConcat = "";
    let sum = 0;
    for (let index = 1; index < arrayNumbers.length; index+=2) {
      const element = arrayNumbers[index];
      elementConcat=elementConcat+element+" ";
      sum=sum+element;
    }
    console.log(` Odd positioned numbers in array are: ${elementConcat}`);
    console.log(`sum of odd positioned numbers in array are: ${sum}`);
  }
  oddPositionedNum();

console.log(
    `-----------------------------------------------------------8--------------------------------------------------`
  );
  function sumOfNum() {
    let sum = 0;
    for (let index = 0; index < arrayNumbers.length; index++) {
      const element = arrayNumbers[index];
      sum=sum+element;
    }
    console.log(`sum of all elements in array is: ${sum}`);
  }
 sumOfNum();

console.log(
    `-----------------------------------------------------------9--------------------------------------------------`
  );
  function numMulOf5() {
    let elementConcat = "";
    for (let index = 0; index < arrayNumbers.length; index++) {
      const element = arrayNumbers[index];
      if (element%5==0) {
        elementConcat=elementConcat+element+" ";
      }
    }
    console.log(`Numbers which are multiple by 5: ${elementConcat}`);
  }
  numMulOf5();

  console.log(
    `-----------------------------------------------------------10--------------------------------------------------`
  );
  let isNum115 = arrayNumbers.includes(115);
  console.log(`Is number 115 is available in array: ${isNum115}`);

  console.log(
    `-----------------------------------------------------------11--------------------------------------------------`
  );
  let isNum23 = arrayNumbers.includes(23);
  console.log(`Is number 23 is available in array: ${isNum23}`);

  console.log(
    `-----------------------------------------------------------12--------------------------------------------------`
  );
  arrayNumbers.splice(3,0,55,66);
  console.log(`Inserted 55 & 66 before index 3: ${arrayNumbers}`);

  console.log(
    `-----------------------------------------------------------13--------------------------------------------------`
  );
  arrayNumbers.splice(4,3);
  console.log(`Removed 3 numbers from index 4: ${arrayNumbers}`);


