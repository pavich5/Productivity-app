function calculate()
 {
  let firstNumber = Number(prompt("Vnesi gi kuceskite godini"));
  let humanYear = Number(firstNumber);
  const dogYear = 7;
  if (
    Number.isNaN(firstNumber) ||
    Number.isNaN(dogYear) 
  ) {
    console.log("Invalid input") ;
    return
  }

let result = dogYear * humanYear;
let result2 = humanYear / dogYear;
console.log(`${dogYear} Dog years in human years is ${result}`);
console.log(`${humanYear} Human years in dog years is ${result2}`);
return;
}

calculate();