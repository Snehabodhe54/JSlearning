function jennyHomework(callbackStew, callbackBill) {
    console.log(`Jenny started assignment`);
    console.log(`Jenny took some time`);
    console.log(`Jenny Completed All her home work`);
    console.log(`Jenny calling back to stew`);
    callbackStew();
    callbackBill();
  }
  
  let stewCopyHomework = function () {
    console.log(`----------------------STEW------------------`);
    console.log(`Thank you Jenny for giving me everything ready`);
    console.log(`Stew started copying`);
    console.log(`Stew copied all homework`);
  };

  let billCopyHomework = function () {
    console.log(`----------------------BILL------------------`);
    console.log(`Thank you Jenny for giving me everything ready`);
    console.log(`Stew started copying`);
    console.log(`Stew copied all homework`);
  };

  jennyHomework(stewCopyHomework,billCopyHomework);

  