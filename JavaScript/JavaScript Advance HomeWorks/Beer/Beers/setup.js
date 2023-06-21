let beer_details = document.querySelector(".beer_details");
let show5 = document.querySelector("#show5");
let show10 = document.querySelector("#show10");
let show20 = document.querySelector("#show20");
let moreDetailsContainer = document.querySelector(".moreDetailsContainer");
let dataSort = document.querySelector("#dataSort");
let sortBitternes = document.querySelector("#sortBitternes");
const alcAbvElement = document.querySelector("#alc-abv");
let nameSort = document.querySelector("#nameSort");
let randomBtn = document.querySelector("#randomBtn");
const searchBar = document.getElementById("searchBar");

let beers = [];

async function getData() {
  const response = await fetch("https://api.punkapi.com/v2/beers");
  const data = await response.json();
  beers = data;
  displayBeers(beers);
  sortByName(beers);
  sortByIBU(beers);
  sortyByAlc(beers);
  sortByDate(beers);
}

searchBar.addEventListener("input", () => {
  const searchText = searchBar.value;
  displayBeers(beers, searchText);
});

function displayBeers(beers) {
  const filteredBeers = beers.filter((beer) => {
    return beer.name.toLowerCase().includes(searchBar.value.toLowerCase());
  });
  let html = "";
  for (const beer_data of filteredBeers) {
    let beer = beers.find((b) => b.id === beer_data.id);
    let description = beer.description.substring(0, 30) + `...<br>`;

    html += `
    <div class="bear_Info">
        <div class="bear_Info" id="${beer.id}" >
          <img src="${beer.image_url}">
          <h3 id = "beerName">${beer.name.substring(0, 20)}</h3>
          <h3 class ="descriptionText">${description}</h3>
          <button class="moreDetails" data-id="${beer.id}">More details</button>
        </div>
      </div>
    `;
  }
  beer_details.innerHTML = html;
}

beer_details.addEventListener("click", function (event) {
  if (event.target.className === "moreDetails") {
    fetchById(event.target.getAttribute("data-id"));
  }
});

async function fetchById(id) {
  let response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
  let data = await response.json();
  let randomBeer = getRandomBeer();
  displayMoreDetails(data[0], randomBeer);
}

function displayMoreDetails(data) {
  beer_details.style.display = "none";
  moreDetailsContainer.innerHTML = `
    <img src="${data.image_url}" alt="" class="singleBearImage">
    <div class="all">
      <p class="name" style="font-weight: bold;">${data.name}</p>
      <hr>
      <p class="description">${data.description}</p>
      <br>
      <p>Brewed: ${data.first_brewed}<p>
      <p>Alcohol: ${data.abv}%<p>
      <p>Bitterness: ${data.ibu} IBU<p>
      <br>
      <div class="foodPairing" style="font-weight: bold;">Food Pairing</div>
      <br>
      <div style="border: 0.1px solid grey; padding: 10px;" border-radius = 6%>
        <p class="FoodParing">${data.food_pairing
          .map((fp) => `"${fp}"`)
          .join("<hr>")}</p>
      </div>
    </div>
  `;
}

show5.addEventListener("click", function (e) {
  displayBeers(beers.slice(0, 5));
});

show10.addEventListener("click", function (e) {
  displayBeers(beers.slice(0, 10));
});

show20.addEventListener("click", function (e) {
  displayBeers(beers.slice(0, 20));
});

function sortByName(beers) {
  beers.sort(function (a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;

    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  });
}

nameSort.addEventListener("click", function (e) {
  sortByName(beers);
  displayBeers(beers);
});

function sortByIBU(beers) {
  beers.sort(function (a, b) {
    return a.ibu - b.ibu;
  });
}

sortBitternes.addEventListener("click", function (e) {
  sortByIBU(beers);
  displayBeers(beers);
});

function sortyByAlc(beers) {
  beers.sort(function (a, b) {
    return a.abv - b.abv;
  });
}

alcAbvElement.addEventListener("click", function (e) {
  sortyByAlc(beers);
  displayBeers(beers);
});

function sortByDate(beers) {
  beers.sort((a, b) => {
    let aDate = a.first_brewed.split("/");
    let bDate = b.first_brewed.split("/");
    return (
      new Date(`${aDate[1]}-${aDate[0]}-01`) -
      new Date(`${bDate[1]}-${bDate[0]}-01`)
    );
  });
}

dataSort.addEventListener("click", function (e) {
  sortByDate(beers);
  displayBeers(beers);
  console.log(beers);
});

function getRandomBeer() {
  let randomIndex = Math.floor(Math.random() * beers.length);
  let randomBeer = beers[randomIndex];

  return randomBeer;
}
randomBtn.addEventListener("click", function (e) {
  let selectedBeer = getRandomBeer();
  fetchById(selectedBeer.id);
});

getData();
