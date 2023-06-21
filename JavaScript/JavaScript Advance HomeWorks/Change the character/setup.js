let btn = document.querySelector("#btn");
let results = document.querySelector("#results");
let numbers = [4, -9, -98, -1, 444, 3, -555];
let valueToRemove = "-";

btn.addEventListener("click", function() {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i].toString().indexOf(valueToRemove) > -1) {
            numbers[i] = parseInt(numbers[i].toString().replace("-",""))
        }
    }
    results.innerHTML = `${numbers}`
});
