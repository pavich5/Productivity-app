const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const appContainer = document.querySelector("#app");
let dataArray = [];
async function fetchPokemonData(){
  const response = await fetch(BASE_URL);
  const data = await response.json();
  const pokemonData = data.results;
  dataArray = pokemonData;
  renderPokemonData(pokemonData);
  sortByName(pokemonData);
  
}




function renderPokemonData(data) {
  
  const list = document.createElement("div");
  list.className = "pokemon-list";

  for (const pokemon of data) {
    const pokemonItem = document.createElement("div");
    pokemonItem.className = "pokemon-list__item";
    pokemonItem.id = `pokemon-${pokemon.name}`;
    const name = document.createElement("h2");
    name.className = "pokemon-list__name";
    name.textContent = pokemon.name.replace(/^\w/, c => c.toUpperCase());;
  
    const image = document.createElement("img");
    image.className = "pokemon-list__image";
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`;

    pokemonItem.appendChild(image);
    pokemonItem.appendChild(name);
    list.appendChild(pokemonItem);

    
    pokemonItem.addEventListener("click", () => {
      fetchSinglePokemon(pokemon.url.split('/')[6])

      
    });
  }

  appContainer.innerHTML = "";
  appContainer.appendChild(list);
}


async function fetchSinglePokemon(pokemonId){
  const response = await fetch(`${BASE_URL}/${pokemonId}/`);
  const data = await response.json();
  renderSinglePokemon(data);
  console.log(data)
} 

function renderSinglePokemon(data){
  const pokemonCard = document.createElement("div");
  pokemonCard.className = "pokemon-card";
  
  const name = document.createElement("h2");
  name.className = "pokemon-card__name";
  name.textContent = `Name: ${data.name.replace(/^\w/, c => c.toUpperCase())}`;

  const image = document.createElement("img");
  image.className = "pokemon-card__image";
  image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;

  const weight = document.createElement("h2");
  weight.className = 'pokemon-card__weight';
  weight.textContent = `Weight: ${data.weight}kg`;  



  const height = document.createElement("h2");
  height.className = 'pokemon-card__height';
  height.textContent = `Height : ${data.height}cm`

  const types = document.createElement("h2");
  types.className = 'pokemon-card__types';
  types.textContent = `${data.types.map(type => type.type.name).join(", ")}`;  

  pokemonCard.appendChild(image);
  pokemonCard.appendChild(name);
  pokemonCard.appendChild(weight);
  pokemonCard.appendChild(height);
  pokemonCard.appendChild(types);
 

  appContainer.innerHTML = "";
  appContainer.appendChild(pokemonCard);

  if (types.textContent.toLowerCase().includes('fire')) {
    const pokemonCardTypes = document.querySelector('.pokemon-card__types');
    pokemonCardTypes.style.backgroundColor = 'red';
  }

  if (types.textContent.toLowerCase().includes('grass') ) {
    const pokemonCardTypes = document.querySelector('.pokemon-card__types');
    pokemonCardTypes.style.backgroundColor = 'green';
  }

  if (types.textContent.toLowerCase() === 'fire') {
    const pokemonCardTypes = document.querySelector('.pokemon-card__types');
    pokemonCardTypes.style.backgroundColor = 'red';
  }

  if (types.textContent.toLowerCase() === 'normal') {
    const pokemonCardTypes = document.querySelector('.pokemon-card__types');
    pokemonCardTypes.style.backgroundColor = '#16a085';
  }

}
  
fetchPokemonData();



let dropdown = document.querySelector(".dropdown");
let dropdownContent = document.querySelector(".dropdown-content");


let option1 = document.querySelector(".dropdown-content a:nth-child(1)");
let option2 = document.querySelector(".dropdown-content a:nth-child(2)");
let option3 = document.querySelector(".dropdown-content a:nth-child(3)");

dropdown.addEventListener("click", function() {
  dropdownContent.classList.toggle("show");
});

option1.addEventListener("click", function() {
  const firstFive = dataArray.slice(0,5);
  console.log(firstFive);
  renderPokemonData(firstFive)

});

option2.addEventListener("click", function() {
  const firstTen = dataArray.slice(0,10);
  console.log(firstTen);
  renderPokemonData(firstTen)

});

option3.addEventListener("click", function() {
  const firstTwenty = dataArray.slice(0,20);
  console.log(firstTwenty);
  renderPokemonData(firstTwenty)
});

let sorting = document.querySelector(".sorting");
let sortBtncontent = document.querySelector(".sortBtn-content");

let option4 = document.querySelectorAll("#option4");

sorting.addEventListener("click", function() {
  sortBtncontent.classList.toggle("show");
});

function sortByName(dataArray) {
  return dataArray.sort(function (a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;

    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;

    return 0;
  });
}


for (let i = 0; i < option4.length; i++) {
  option4[i].addEventListener("click", function() {

    sortByName(dataArray);
    renderPokemonData(dataArray);
  });
}




