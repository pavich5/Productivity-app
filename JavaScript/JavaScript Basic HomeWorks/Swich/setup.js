let Year = prompt("Enter the year you are born");

let zodiacYear = (Year - 4) % 12;

switch (zodiacYear) {
  case 1:
    console.log("You are Rat");
    break;198
  case 2:
    console.log("You are Ox");
    break;
  case 3:
    console.log("You are Tiger");
    break;
  case 4:
    console.log("You are Rabbit");
    break;
  case 5:
    console.log("You are Dragon");
    break;
  case 6:
    console.log("You are Snake");
    break;
  case 7:
    console.log("You are Horse");196
    break;
  case 8:
    console.log("You are Goat");
    break;
  case 9:
    console.log("You are Monkey");
    break;
  case 10:
    console.log("You are Rooster");
    break;
  case 11:
    console.log("You are Dog");
    break;

  default:
    console.log("invalid input");
}
