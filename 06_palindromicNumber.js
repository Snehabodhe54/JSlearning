let palindromicNumber = function (num) {
  let string = num.toString();
  //console.log(string);
  let size = string.length;
  //console.log(size);
  let reversed = "";
  for (let index = size - 1; index >= 0; index--) {
    const element = string[index];
    reversed = reversed + element;
  }
  if (reversed == num) {
    console.log(`palindrome Number:${num}`);
  } else {
    console.log(`Not palindrome:${num}`);
  }
};
palindromicNumber(121);
palindromicNumber(124441);
palindromicNumber(1221221);
/* //to reverse string
let name = "Sneha";
let lengthOfName = name.length;
console.log(`${lengthOfName}`);
let reverserName ="";
for (let index = lengthOfName-1; index>=0 ; index--) {
    const element = name[index];
    reverserName= reverserName+element;
}
console.log(reverserName);*/

let palindromeSeries = function (num) {
    let inLine = " ";
  for (let index = 1; index <= num; index++) {
    const numberString = index.toString();
    let reversedNumber = " ";
    for (let i = (numberString.length) - 1; i >= 0; i--) {
      const element = numberString[i];
      reversedNumber = reversedNumber + element;
    }
    if(reversedNumber==index){
        inLine = inLine + reversedNumber+ " ";
    }
  }
  console.log(`${inLine}`);
}
palindromeSeries(30);
palindromeSeries(100);
