console.log(
  `----------------------------------------step 1------------------------------------`
);
function totalNumVowels(str) {
  let totalVowels = 0;
  let index = 0;

  while (index <= str.length) {
    let char = str.charAt(index);
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u" ||
      char == "A" ||
      char == "E" ||
      char == "I" ||
      char == "O" ||
      char == "U"
    ) {
      totalVowels = totalVowels + 1;
    }
    index++;
  }
  console.log(
    `given string "${str}" has total number of vowels are ${totalVowels}`
  );
}
totalNumVowels("I am very good IT Developer");

console.log(
  `----------------------------------------step 2------------------------------------`
);
function sumOfCube() {
  let sumOfCube = 0;
  let index = 1;
  while (index <= 5) {
    let cube = index * index * index;
    sumOfCube += cube;

    index++;
  }
  console.log(`sum of cube of numbers from 1 to 5 is :${sumOfCube}`);
}
sumOfCube();

console.log(
  `----------------------------------------step 3.1------------------------------------`
);
function oddPositionedChars(str) {
  let index = 1;

  let resultConcat = " ";
  while (index <= str.length) {
    let char = str.charAt(index);
    if (index % 2 != 0 && char != " ") {
      resultConcat = resultConcat + char + " ";
    }
    index++;
  }
  console.log(`odd positioned chars are : ${resultConcat}`);
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT Champ");
