const object1 = {
name: "sneha",
rollnumber: 111,
city: 'Pune'
}
//let name= object1.name;
//console.log(name);

let {name, rollnumber, city} = object1;
console.log({name, rollnumber, city});

//array destructuring

const array =[4, 6, 7, 7, 8];
let [num1, num2, num3, num4, num5 ]= array;
console.log([num1, num2, num3, num4, num5 ]);