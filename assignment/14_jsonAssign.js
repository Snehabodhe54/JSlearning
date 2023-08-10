let jsonEmployee_Info = `{
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

let jsonToObject = JSON.parse(jsonEmployee_Info); //converted json into object
console.log(jsonToObject);


    const arrayRole = jsonToObject.role;//object's key role is array
    for (const role of arrayRole) {
      if (role == "Dev") {
        console.log(`${role}`);
      }
    }

let lastName = jsonToObject.name; //
let indexOfMelon = lastName.indexOf("Melon");
//console.log(`${indexOfMelon}`);
console.log(`${lastName.slice(6)}`);

let DateOfJoin = jsonToObject.doj;
//console.log(DateOfJoin);
let IndexOfDoj = DateOfJoin.indexOf("2019");
//console.log(IndexOfDoj);
console.log(DateOfJoin.slice(6));
//console.log(`${DateOfJoin.slice(6)}`);


