let employee_Info = `{
    "name" :"Aleix Melon",
    "id": "E00245",
    "role" : ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address":{
        "street":"32, Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
}`;

let jsonToObject = JSON.parse(employee_Info);
console.log(jsonToObject);
let lastName = jsonToObject.name;
let indexOfMelon = lastName.indexOf("Melon");
//console.log(`${indexOfMelon}`);
console.log(`${lastName.slice(6)}`);
let DateOfJoin = jsonToObject.doj;
//console.log(DateOfJoin);
let IndexOfDoj = DateOfJoin.indexOf("2019");
//console.log(IndexOfDoj);
console.log(DateOfJoin.slice(6));
