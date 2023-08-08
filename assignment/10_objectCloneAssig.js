let personalDetails = {
  Name: "Sneha",
  address: "Yavatmal",
  age: 23,
  degree: " B.E",
};

let collegeDetails = {
  collegeName: "SCET",
  branch: "computer Engineering",
  location: "Nagpur",
  university: "rtmnu",
};

let personalCollegeDetails = Object.assign({}, personalDetails, collegeDetails);
console.table(personalCollegeDetails);

friends = ["jenny", "stew", "bill", "harry", "jonh"];
Object.freeze(friends);

console.log(friends);
let concat = "";
for (const iterator of friends) {
  concat = concat + iterator + " ";
}
console.log(concat);
let company = "Codemind Technology";
let indexOfTechnology = company.indexOf("Technology");
console.log(`Index of "Technology" : ${indexOfTechnology}`);

let inOneLine = "";
for (let index = company.length - 1; index >= indexOfTechnology; index--) {
  const element = company[index];
  inOneLine = inOneLine + element;
}
console.log(inOneLine);
