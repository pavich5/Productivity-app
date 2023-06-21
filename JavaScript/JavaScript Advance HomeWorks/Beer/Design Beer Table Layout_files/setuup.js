let planetTable = document.getElementById("planet-table");
let planetTableBody = planetTable.getElementsByTagName("tbody")[0];
let planetNext10BTN = document.querySelector("#next10BTN");
let planetPrevious10BTN = document.querySelector("#previous10BTN");
let showPlanetsBtn = document.querySelector("#showPlanetsBTN");
let showStarshipsBTN = document.querySelector("#showStarshipsBTN");
let starshipTable = document.querySelector("#starship-table");
let starshipTableBody = starshipTable.getElementsByTagName("tbody")[0];
let next10StarshipsBTN = document.querySelector("#next10StarshipsBTN");
let previousStarshipsBTN = document.querySelector("#previousStarshipsBTN");

planetPrevious10BTN.style.display = "none";
planetNext10BTN.style.display = "none";
planetTable.style.display = "none";

let PlanetsCurrentPage = 1;

async function loadPlanets(PlanetsCurrentPage) {
  const response = await fetch(
    `https://swapi.dev/api/planets/?page=${PlanetsCurrentPage}`
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

  if (PlanetsCurrentPage === 1) {
    planetPrevious10BTN.style.display = "none";
  } else {
    planetPrevious10BTN.style.display = "";
  }
  if (!data.next) {
    planetNext10BTN.style.display = "none";
  } else {
    planetNext10BTN.style.display = "";
  }
}

showPlanetsBtn.addEventListener("click", function () {
  planetTable.style.display = "";
  loadPlanets(1);
});
planetNext10BTN.addEventListener("click", function () {
  PlanetsCurrentPage++;
  loadPlanets(PlanetsCurrentPage);
});

planetPrevious10BTN.addEventListener("click", function () {
  PlanetsCurrentPage--;
  loadPlanets(PlanetsCurrentPage);
});



let starShipsCurrentPage = 1;
starshipTable.style.display = "none";
previousStarshipsBTN.style.display = "none";
next10StarshipsBTN.style.display = "none";

async function loadStarShips(starShipsCurrentPage) {
  const response = await fetch(`https://swapi.dev/api/starships/?page=${starShipsCurrentPage}`);
  const data = await response.json();
  let starShips = data.results;

  starshipTableBody.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    let row = starshipTableBody.insertRow();
    let nameCell = row.insertCell();
    let manufacturerCell = row.insertCell();
    let lengthCell = row.insertCell();
    let crewCell = row.insertCell();

    nameCell.innerHTML = starShips[i].name;
    manufacturerCell.innerHTML = starShips[i].manufacturer;
    lengthCell.innerHTML = starShips[i].length;
    crewCell.innerHTML = starShips[i].crew;
  }

  if (starShipsCurrentPage === 1) {
    previousStarshipsBTN.style.display = "none";
  } else {
    previousStarshipsBTN.style.display = "";
  }

  if (!data.next) {
    next10StarshipsBTN.style.display = "none";
  } else {
    next10StarshipsBTN.style.display = "";
  }
}

showStarshipsBTN.addEventListener("click", function () {
  starshipTable.style.display = "";
  loadStarShips(1);
});

next10StarshipsBTN.addEventListener("click", function () {
  starShipsCurrentPage++;
  loadStarShips(starShipsCurrentPage);
});

previousStarshipsBTN.addEventListener("click", function () {
  starShipsCurrentPage--;
  loadStarShips(starShipsCurrentPage);
});
