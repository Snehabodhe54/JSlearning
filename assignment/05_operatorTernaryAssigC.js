console.log(
  `-----------------------------------------------------step 1--------------------------------------------`
);

function maleMarriageEligibility(gender, age, boyName) {
  var result =
    (gender ==="Male" && age >= 21)
      ? `Hey ${boyName}, you are eligible for Marriage`
      : `${boyName}, You are Not eligible for Marriage`;
  return result;
}
console.log(maleMarriageEligibility("Male", 25, "Bill gates"));
console.log(maleMarriageEligibility("Male", 17, "Stew Jobs"));

console.log(
  `-----------------------------------------------------step 2--------------------------------------------`
);

function femaleMarriageEligibility(gender, age, girlName) {
  var result =
    (gender === "Female" && age >= 18)
      ? `Hey ${girlName}, you are eligible for Marriage`
      : `${girlName}, You are Not eligible for Marriage`;
  return result;
}
console.log(femaleMarriageEligibility("Female", 16, "Jenifer"));
console.log(femaleMarriageEligibility("Female", 27, "Malinda Gates"));
