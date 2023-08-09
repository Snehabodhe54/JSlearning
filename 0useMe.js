let personalDetails = {
    Name: "Sneha",
    address: "Yavatmal",
    age: 23,
    degree:' B.E'
}
let collegeDetails = {
    collegeName:'SCET',
branch : "computer Engineering",
location: "Nagpur",
university: "rtmnu"
}

let personalCollegeDetails = Object.assign({} , personalDetails,collegeDetails);
console.table(personalCollegeDetails);