let birthYear = prompt("Please enter the year you are born:");
let birthYearInput = parseFloat(birthYear);
let zodiac = (birthYearInput - 4) % 12;

if (zodiac == 0) {
  console.log("your zodiac sign is Rat");
} 
else if (zodiac == 1) {
  console.log("your zodiac sign is Ox");
}
if (zodiac == 2) {
  console.log("your zodiac sign is Tiger");
}
 else if (zodiac == 3) {
  console.log("your zodiac sign is Rabbit");
}
if (zodiac == 4) {
  console.log("your zodiac sign is Dragon");
} 
else if (zodiac == 5) {
  console.log("your zodiac sign is Snake");
}
if (zodiac == 6) {
  console.log("your zodiac sign is Horse");
} 
else if (zodiac == 7) {
  console.log("your zodiac sign is Goat");
}
if (zodiac == 8) {
  console.log("your zodiac sign is Monkey");
} 
else if (zodiac == 9) {
  console.log("your zodiac sign is Rooster");
}
if (zodiac == 10) {
  console.log("your zodiac sign is Dog");
} 
else if (zodiac == 11) {
  console.log("your zodiac sign is Pig");
}
