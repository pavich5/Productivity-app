let inputTask = document.querySelector("#inputTask");
let btnSubmit = document.querySelector("#btnSubmit");
let ulTask = document.querySelector("#ulTask");

btnSubmit.addEventListener("click", function () {
  let li = document.createElement("li");
  li.className = "list-item";
  
  if(!inputTask.value){
    alert(`Please write something`);
    return
  }

  let text = document.createElement("span");
  text.textContent = inputTask.value;
  li.appendChild(text);

  ulTask.appendChild(li);
  inputTask.value = "";

  let deleteBTN = document.createElement("button");
  deleteBTN.innerHTML = "❌";
  deleteBTN.className = "deleteBtn";
  deleteBTN.addEventListener("click", function (e) {
    ulTask.removeChild(li);
  });

  let finishBTN = document.createElement("button");
  finishBTN.innerHTML = "✔️";
  finishBTN.className = "finishBtn";
  finishBTN.addEventListener("click", function (e) {
    li.style.textDecoration = "line-through";
    setTimeout(function () {
      ulTask.removeChild(li);
    }, 1000);
  });

  let editBTN = document.createElement("button");
  editBTN.innerHTML = "Edit";
  editBTN.className = "editBtn";
  editBTN.addEventListener("click", function (e) {
    let input = document.createElement("input");
    input.value = text.textContent;
    li.removeChild(text);
    li.insertBefore(input, deleteBTN);
    input.focus();
    input.addEventListener("blur", function () {
      text.textContent = input.value;
      li.removeChild(input);
      li.insertBefore(text, deleteBTN);
    });
  });

  li.appendChild(deleteBTN);
  li.appendChild(finishBTN);
  li.appendChild(editBTN);
});


