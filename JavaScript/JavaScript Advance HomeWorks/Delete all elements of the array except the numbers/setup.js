let btn = document.querySelector("#btn");
let results = document.querySelector("#results");
let givenArr = [12, 45, 88, 1, 567, 3, 91,"test","test1"]

btn.addEventListener("click", function() {
    results.innerHTML += `The results before ${givenArr} <br>`
    for (let i = 0; i < givenArr.length; i++) {
        if (isNaN(givenArr[i])) {
            givenArr.splice(i, 1);
            i--;
        }
    }
    results.innerHTML += `The Results after ${givenArr}`
});