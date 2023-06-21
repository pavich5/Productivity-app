let table = document.getElementById("planet-table");
let tableBody = table.getElementsByTagName("tbody")[0];
let next10BTN = document.querySelector("#next10BTN");
let previous10BTN = document.querySelector("#previous10BTN");
let showPlanetsBtn = document.querySelector("#showPlanetsBTN");

previous10BTN.style.display = "none"
next10BTN.style.display = "none"
table.style.display = "none"

let currentPage = 1;

async function loadPlanets(pageNumber) {
    const response = await fetch(`https://swapi.dev/api/planets/?page=${pageNumber}`);
    const data = await response.json();
    let planets = data.results;

    tableBody.innerHTML = '';
    for(let i = 0; i < 10; i++) {
        let row = tableBody.insertRow();
        let nameCell = row.insertCell();
        let climateCell = row.insertCell();
        let terrainCell = row.insertCell();
        let populationCell = row.insertCell();

        nameCell.innerHTML = planets[i].name;
        climateCell.innerHTML = planets[i].climate;
        terrainCell.innerHTML = planets[i].terrain;
        populationCell.innerHTML = planets[i].population;
    }

    if (currentPage === 1) {
        previous10BTN.style.display = "none";
    } else {
        previous10BTN.style.display = "";
    }
    next10BTN.style.display = "";
}

showPlanetsBtn.addEventListener("click", function(){
    table.style.display = ""
    loadPlanets(1);
});

next10BTN.addEventListener("click", function(){
    currentPage++;
    loadPlanets(currentPage);
});

previous10BTN.addEventListener("click", function(){
    currentPage--;
    loadPlanets(currentPage);
});
