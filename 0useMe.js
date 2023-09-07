const array = ["Pooja", "Sneha", "Puja", "Asmita", "Kshitija"];
let count = 0;
for (const string of array) {
  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    if (element == "a") {
      count = count + 1;
    }
  }
}
console.log(count);

let count1 = 0;
for (const name of array) {
    for (const char of name) {
        if(char == "a"){
            count1 = count1 + 1;
        }
    }
}
console.log(count1);
