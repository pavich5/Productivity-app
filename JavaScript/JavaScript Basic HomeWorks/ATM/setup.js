function atm(){
let allMoney = Number(prompt("How much do you have in your account"));
let moneyWithdrawn = Number(
  prompt("Enter how much monney you would like to withdrawn")
);

if (Number.isNaN(allMoney) || Number.isNaN(moneyWithdrawn)) {
  console.log("Invalid input");
}

if (allMoney >= moneyWithdrawn) {
  let moneyLeft = allMoney - moneyWithdrawn;
  console.log(
    `You withdrawed ${moneyWithdrawn}, and you have left ${moneyLeft} on your bank account `
  );
} else if (Number.isNaN(allMoney) || Number.isNaN(moneyWithdrawn)) {
} else {
  console.log("Not enought money");
}

}

atm()