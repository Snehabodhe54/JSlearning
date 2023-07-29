function marriageEligibility(gender, age){
if(gender=="Male"){
    if(age>=21){
        console.log(`Your gender is ${gender} & age is ${age} , you are eligible for marriage`);
    }else{
        console.log(`Your  gender is ${gender} & age is ${age} , you are Not eligible for marriage`);  
    }
}

if(gender=="Female"){
    if(age>=18){
        console.log(`Your  gender is ${gender} & age is ${age} , you are eligible for marriage`);
    }else{
        console.log(`Your  gender is ${gender} & age is ${age} , you are Not eligible for marriage`);  
    }
}else{
    console.log(`You are in Other category & your age is ${age}`);
}
}
marriageEligibility("Male", 17);
marriageEligibility("Male", 25);
marriageEligibility("Female", 28);
marriageEligibility("Female", 16);
marriageEligibility("other", 35);
marriageEligibility("other",41);