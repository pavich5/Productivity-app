let table_all_expenses = document.querySelector("#all-expenses");
let tableBody = table_all_expenses.querySelector("tbody");
let btnAdd = document.querySelector("#btnAdd");
let inputPlace = document.querySelector("#inputPlace");
let inputDate = document.querySelector("#date");
let inputAmount = document.querySelector("#Amount");

btnAdd.addEventListener("click", function(e) {
  if (!inputPlace.value) {
    alert("Enter Place");
    return;
  }
  if (!inputDate.value) {
    alert("Enter Date");
    return;
  }
  if (!inputAmount.value) {
    alert("Input Amount");
    return;
  }

  let row = tableBody.insertRow();
  let nameCell = row.insertCell();
  let dateCell = row.insertCell();
  let amountCell = row.insertCell();
  let totalCell = row.insertCell();

  nameCell.innerHTML = inputPlace.value;
  dateCell.innerHTML = inputDate.value;
  amountCell.innerHTML = `${inputAmount.value}$`;

  let total = 0;
  for (let i = 0; i < tableBody.rows.length; i++) {
    total += parseInt(tableBody.rows[i].cells[2].innerHTML.replace("$", ""));
  }
  totalCell.innerHTML = `${total}$ &nbsp &nbsp &nbsp <button class="deleteBtn">❌</button>`;
  let deleteBtn = totalCell.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", function() {
    row.remove();
  });
});
