function vowels(string) {
  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    
    if (
      element == "a" ||
      element == "e" ||
      element == "i" ||
      element =="o" ||
      element =="u" ||
      element =="A" ||
      element =="E" ||
      element =="I" ||
      element =="O" ||
      element =="U" 
    ) {
      console.log(`${index}, ${element} prime`);
    }
  }
}
vowels("i love you");
