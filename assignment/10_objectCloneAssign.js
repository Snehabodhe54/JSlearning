console.log(`----------------------------------Shallow Clone using assignment(=) operator---------------------------------`);

const arrayNums =[20, 3, 4, 56, 90, 400, 49];

const arrayNumsClone= arrayNums;
arrayNums.push(55, 66);

console.log(`Original array:${arrayNums}`);
console.log(`Clones array:${arrayNumsClone}`);

console.log(`----------------------------------Deep Clone using Spread operator---------------------------------`);

const arrayNumsClone2 = [...arrayNums];
arrayNums.push(10, 25);

console.log(`Original array:${arrayNums}`);
console.log(`Clones array:${arrayNumsClone2}`);

console.log(`----------------------------------Merge using Spread operator---------------------------------`);

const arrayEven=[2, 30, 14, 8];
const mergeArray=[...arrayNums, ...arrayEven];

//const mergeArray2= arrayNums+ arrayEven;  //"concat using + operator"
//const mergeArray3= arrayNums.concat(arrayEven); // using concat(string template)

console.log(`merge array: ${mergeArray}`);
//console.log(`merge array: ${mergeArray2}`);
//console.log(`merge array: ${mergeArray3}`);

console.log(`----------------------------------Object---------------------------------`);

const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR"
    },
    address: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 431202"
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: [" +91 8600 3456 88", " 1800-4567 32", " +91-9096 5678 77"]
}

console.log(`Address:( ${employee_info.address.locality.colony},  ${employee_info.address.locality.street}, ),  ${employee_info.address.city},  ${employee_info.address.state},  ${employee_info.address.country} `);

console.log(`mobiles: ${employee_info.mobiles}`);

console.log(`----------------------------------Object Clone---------------------------------`);

const employee_info_Clone = JSON.parse(JSON.stringify(employee_info));
employee_info_Clone.salary.july_month = "80K";
employee_info.address.country ='United Kingdom';


console.table(employee_info);
console.log(`Original Object Values: ${employee_info.emp_id},  ${employee_info.emp_name}, (${employee_info.salary.aug_month}, ${employee_info.salary.july_month}, ${employee_info.salary.jun_month} ), ( (${employee_info.address.locality.colony}, ${employee_info.address.locality.street}), ${employee_info.address.city}, ${employee_info.address.state}, ${employee_info.address.country}),  ${employee_info.mobiles} `);
console.table(employee_info_Clone);
console.log(`Clone Object Values: ${JSON.stringify(employee_info_Clone)}`);
