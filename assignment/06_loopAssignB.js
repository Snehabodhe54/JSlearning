function reverseString(str) {
  let  concatResult="";
    for (let index =str.length-1; index >=0 ; index--) {
         let char = str.charAt(index);
         if( char!=" "){
            concatResult = concatResult + char +"";
         }
    }
    console.log(`Reversed string of "${str}" is: ${concatResult}`);
}
reverseString("Hard work always pays back");
reverseString("Soon I will be Angular IT Champ");