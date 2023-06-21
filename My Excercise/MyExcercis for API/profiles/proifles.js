const readMoreButtons = document.querySelectorAll("a");
let container = document.querySelector("#container");
let read1 = document.querySelector("#read1");
let read2 = document.querySelector("#read2");
let read3 = document.querySelector("#read3");



readMoreButtons.forEach(button => {
    button.addEventListener("click", function() {
        const card = this.parentNode.parentNode;
        const allCards = document.querySelectorAll(".card");
        allCards.forEach(cardElement => {
            if(card !== cardElement) {
                cardElement.remove();
            }
        });
        card.style.position = "relative";
        card.style.left = "0px";
        card.classList.add("selected");
        
    });
});

async function fetchData(userIndex){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    let unorderedList = document.createElement("ul");
    unorderedList.classList = "unorderedList";

    for (const key in data[userIndex]) {
        const li = document.createElement("li");
        li.textContent = `${key}: ${data[userIndex][key]}`;
        unorderedList.appendChild(li);
    }
    document.body.appendChild(unorderedList);
}

read1.addEventListener("click",function(){
    fetchData(0)
})

read2.addEventListener("click",function(){
    fetchData(1)
})

read3.addEventListener("click",function(){
    fetchData(2)
})

