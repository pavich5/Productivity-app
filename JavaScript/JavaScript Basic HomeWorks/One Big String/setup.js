function createString(arr) {
    let str = "";
    for (const element of arr) {
      str += element + " ";
    }
    return str;
  }
  
  const arr = ["Hello", "there", "students", "of", "SEDC", "!"];
  const str = createString(arr);
  
  console.log(str); 
  