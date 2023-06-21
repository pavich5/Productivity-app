let btn = document.querySelector("#btn");
let h2Results = document.querySelector("#results");

btn.addEventListener("click",function(){
    let num = parseInt(prompt("Please enter a number:"));
    if (isNaN(num)) {
        alert("Invalid input. Please enter a valid number.");
        let num = parseInt(prompt("Please enter a number:"));
        let numArray = num.toString().split('');
        h2Results.innerHTML = `${numArray}`
    } else {
        let numArray = num.toString().split('');
        h2Results.innerHTML = `${numArray}`
    }
    
})
