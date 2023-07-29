var voteEligible = function(age){
    if (age<=0 || age>=130) {
        console.log(`age= ${age}, Invalid Data`);
    }
    else{
if (age>=18) {
    console.log(`Your age is ${age}, you are eligible for vote`);
} else {
    console.log(`Your age is ${age}, you are NOt eligible for vote`);
}
}
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);