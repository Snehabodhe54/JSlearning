var leapYear = function(year){
  var TypeOf = typeof year;
  console.log(TypeOf);
    if(TypeOf=="number"){
    if (year%4==0) {
        console.log(`year ${year}, is leap year`);
    }else{
        console.log(`year ${year}, is Not leap year`);
        }
    }
else{
    console.log(`${year}, is invalid year`);
}
}
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);