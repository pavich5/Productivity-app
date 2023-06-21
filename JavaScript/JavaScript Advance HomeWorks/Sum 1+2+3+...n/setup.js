let btn = document.querySelector("#btn");
let result = document.querySelector("#result");
let n = document.querySelector("#numInput");


function calculateResult(n) {
    let number = parseInt(n);
    let sum = 1 + 2 + 3 + number;
    return sum;
}


btn.addEventListener("click", function() {
    let input = numInput.value;
    if (!isNaN(input)) {
        let number = parseInt(input);
        if (number > 0) {
            let sum = 1 + 2 + 3 + number;
            result.innerHTML = `The sum of 1 + 2 + 3 + ${number} is ${sum}`;
        } else {
            result.innerHTML = "The input number should be positive";
        }
    } else {
        result.innerHTML = "Please enter a valid number";
    }
});
