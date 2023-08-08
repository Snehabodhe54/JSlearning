bankSbi={
    bankName: "SBI bank" ,
    location: "Pune" ,
    accountNumber:124566432 ,
    ifsc: 'SBIN034556'
}
bankLocation={
    street:"karwe",
    city: "pune",
    pinCode: 410011
}

console.log(`----------------------------------clone using Object.assign()---------------------------------`);

let SBI= Object.assign({}, bankSbi);
console.log(`Details of "SBI" () ${SBI.bankName}, ${SBI.location}, ${SBI.accountNumber}, ${SBI.ifsc}`);

let location= Object.assign({}, bankLocation);
console.log(`Details of "location" : ${location.street}, ${location.city}, ${location.pinCode}`);

console.log(`----------------------------------clone using Spread operator---------------------------------`);

let sbiSpread= {...bankSbi};
console.log(`Details of "sbiSpread" () ${sbiSpread.bankName}, ${sbiSpread.location}, ${sbiSpread.accountNumber}, ${sbiSpread.ifsc}`);

let locationSpread= {...bankLocation};
console.log(`Details of "locationSpread" : ${locationSpread.street}, ${locationSpread.city}, ${locationSpread.pinCode}`);

let rateOfInterest={
    homeLoanInterest:"7%",
    personalLoanInterest: '10%',
    duelInterest: "5%"
}

console.log(`----------------------------------merge of step 1, 2, 4---------------------------------`);

let sbiDetails= Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.log(`properties of "sbiDetails" : ${sbiDetails.bankName}, ${sbiDetails.location}, ${sbiDetails.accountNumber}, ${sbiDetails.ifsc}, ${sbiDetails.street}, ${sbiDetails.city}, ${sbiDetails.pinCode}, ${sbiDetails.homeLoanInterest}, ${sbiDetails.personalLoanInterest}, ${sbiDetails.duelInterest}`);

console.log(`----------------------------------Traverse of merge object(sbiDetails)---------------------------------`);

for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key}: ${element}`);
    }
}