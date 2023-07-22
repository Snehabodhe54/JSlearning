console.log(
  `********************************Assignment 01**************************`
);

function stringBasics() {
  console.log(
    `----------------------------------Step-1----------------------------`
  );
  var company = "Tata Consultancy Services";
  console.log(`My dream company is : ${company}`);

  console.log(
    `----------------------------------Step-2----------------------------`
  );
  var hobby1 = " painting";
  var hobby2 = " planting";
  var hobby3 = " music";
  console.log(`My hobbies are:${hobby1}, ${hobby2}, ${hobby3}`);
  var hobbies = hobby1 + hobby2 + hobby3;
  console.log(`Sum of hobbies are : ${hobbies}`);
  var hobbiesLength = hobbies.length;
  console.log(`Sum of total characters in hobbies:${hobbiesLength}`);
}
stringBasics();

console.log(
  `**********************************Assignment-02*****************************`
);

function stringHandsOn() {
  console.log(
    `----------------------------------Step-1----------------------------`
  );
  var str = "     Hey you are doing good, keep it up      ";
  console.log(`${str}`);

  console.log(
    `----------------------------------Step-2----------------------------`
  );
  var strLength = str.length;
  console.log(`Length of given string is : ${strLength}`);

  console.log(
    `----------------------------------Step-3----------------------------`
  );
  var strTrim = str.trim();
  console.log(`String Without extra spaces : ${strTrim}`);

  console.log(
    `----------------------------------Step-4----------------------------`
  );
  var strTrimLength = strTrim.length;
  var extraSpacesLength = strLength - strTrimLength;
  console.log(
    `Total number of extra spaces count that is removed in step 3 : ${extraSpacesLength}`
  );

  console.log(
    `----------------------------------Step-5----------------------------`
  );
  var strCharAtFirst = strTrim.charAt(0);
  var strCharAtLast = strTrim.charAt(strTrimLength - 1);
  console.log(`First character after Trim: ${strCharAtFirst}`);
  console.log(`Last character after Trim: ${strCharAtLast}`);

  console.log(
    `----------------------------------Step-6----------------------------`
  );
  console.log(`Length of string after trim: ${strTrimLength}`);

  console.log(
    `----------------------------------Step-7----------------------------`
  );
  var indexOfGood = str.indexOf("good");
  console.log(`Index of good from given String: ${indexOfGood}`);

  console.log(
    `----------------------------------Step-8----------------------------`
  );
  var subStringFrom22 = str.substring(22);
  console.log(`SubString Of string starting from 22: ${subStringFrom22}`);

  var sliceFrom22 = str.slice(22);
  console.log(`Slice Of string starting from 22: ${sliceFrom22}`);

  console.log(
    `----------------------------------Step-9----------------------------`
  );
  var endWithUp = strTrim.endsWith("up");
  console.log(`Is String ends with "up"?: ${endWithUp}`);

  console.log(
    `---------------------------------Step-10----------------------------`
  );
  var startsWithHey = strTrim.startsWith("Hey");
  console.log(`Is String starts with "Hey"?: ${startsWithHey}`);
}
stringHandsOn();

/* var strLength = str.length;
  console.log(`length of string is: ${strLength}`);

  var strChatAt = str.charAt(5);
  console.log(`${strChatAt}`);

 var strIndex = str.indexOf(M);
  console.log(`Index of string ${strIndex}`);

  var strLastIndex = str.lastIndexOf(str.length-1);
  console.log(`last index of string${strLastIndex}`);

  var firstName = "Sneha";
  var lastName = "Bodhe";
  var conCat = firstName.concat(lastName);
  console.log(`My full name ${conCat}`);
*/
