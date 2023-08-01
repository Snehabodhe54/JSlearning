for (let index = 5; index <= 15; index++) {
  console.log(index);
}

console.log(`------------------------------------------------`);
for (let index = 50; index >= 40; index--) {
  console.log(index);
}

console.log(`------------------------------------------------`);
for (let index = 1; index <= 30; index = index + 2) {
  console.log(index);
}

console.log(`------------------------------------------------`);
for (let index = 0; index <= 20; index = index + 2) {
  console.log(index);
}

console.log(`------------------------------------------------`);
for (let index = 5; index <= 50; index = index + 5) {
  console.log(index);
}

console.log(`------------------------------------------------`);
for (let index = 10; index <= 100; index = index + 10) {
  console.log(index);
}

console.log(`------------------------------------------------`);

var concatenatedResult = " ";
for (let index = 100; index >= 10; index -= 10) {
  var result = index;
  concatenatedResult += result + " ";
}
console.log(` ${concatenatedResult}`);
