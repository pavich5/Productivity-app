let planetTable = document.getElementById("planet-table");
let planetTableBody = planetTable.getElementsByTagName("tbody")[0];
let planetNext10BTN = document.querySelector("#next10BTN");
let planetPrevious10BTN = document.querySelector("#previous10BTN");
let showPlanetsBtn = document.querySelector("#showPlanetsBTN");
let showStarshipsBTN = document.querySelector("#showStarshipsBTN");
let starshiptable = document.querySelector("#starship-table");
planetPrevious10BTN.style.display = "none";
planetNext10BTN.style.display = "none";
planetTable.style.display = "none";

let currentPage = 1;

async function loadPlanets(pageNumber) {
  const response = await fetch(
    `https://swapi.dev/api/planets/?page=${pageNumber}`
  );
  const data = await response.json();
  let planets = data.results;

  planetTableBody.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    let row = planetTableBody.insertRow();
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
    planetPrevious10BTN.style.display = "none";
  } else {
    planetPrevious10BTN.style.display = "";
  }
  planetNext10BTN.style.display = "";
}

showPlanetsBtn.addEventListener("click", function () {
  planetTable.style.display = "";
  loadPlanets(1);
});
next10BTN.addEventListener("click", function () {
  currentPage++;
  loadPlanets(currentPage);
});

previous10BTN.addEventListener("click", function () {
  currentPage--;
  loadPlanets(currentPage);
});

starshiptable.innerHTML = "";
showStarshipsBTN.addEventListener("click", async function loadStarShips() {
  const response = await fetch(`https://swapi.dev/api/starships/`);
  const data = await response.json();
  let starShips = data.results;

  starshiptable.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    let row = starshiptable.insertRow();
    let nameCell = row.insertCell();
    let manufacturerCell = row.insertCell();
    let lengthCell = row.insertCell();
    let crewCell = row.insertCell();

    nameCell.innerHTML = starShips[i].name;
    manufacturerCell.innerHTML = starShips[i].manufacturer;
    lengthCell.innerHTML = starShips[i].length;
    crewCell.innerHTML = starShips[i].crew;
  }
});
