const BASE_URL = "https://swapi.dev/api/people/1";
let btn = document.querySelector("#BTN");
let h1 = document.querySelector("#h1");
let unordered_list = document.querySelector("#unorderedlist");

async function getPersonName(){
    const response = await fetch(BASE_URL);
    const data = await response.json();
    if (data.hasOwnProperty('name')) {
        h1.innerHTML = data.name;
    }
    getPersonInfo(data)
}

async function getPersonInfo(data){
    if (data.hasOwnProperty('height') && data.hasOwnProperty('mass') && data.hasOwnProperty('hair_color') && data.hasOwnProperty('eye_color')) {
        unordered_list.innerHTML += "<li>Height: " + data.height + "</li>";
        unordered_list.innerHTML += "<li>Mass: " + data.mass + "</li>";
        unordered_list.innerHTML += "<li>Hair color: " + data.hair_color + "</li>";
        unordered_list.innerHTML += "<li>Eye color: " + data.eye_color + "</li>";
    }
}



btn.addEventListener("click", function(){
    getPersonName()
})
