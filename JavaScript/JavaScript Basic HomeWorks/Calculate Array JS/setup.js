function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

function checkArray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      console.log(numbers[i] + " is not a number");
    }
  }
}

let numbers = [3, 2, 3, 4, 5];
checkArray(numbers);
let result = sum(numbers);
console.log(result);
