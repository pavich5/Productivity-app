const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const appContainer = document.querySelector("#app");

async function fetchPokemonData(){

  const response = await fetch(BASE_URL);
  const data = await response.json();
  renderPokemonData(data.results)
}

function renderPokemonData(data){
   let list = document.createElement("ul");
   list.className = "pokemon-list";
   for(pokemon of data){
    list.innerHTML += `<li class = "pokemon-list__item" id="poke-${pokemon.name}">
    ${pokemon.name}`
   }

   appContainer.appendChild(list)
   const listItems = document.querySelectorAll(".pokemon-list__item");
   for (const item of listItems) {
    item.addEventListener("click", function (event) {
      const elementId = event.target.id;
      const pokemonName = elementId.split("-")[1];
      console.log(pokemonName);
      fetchSinglePokemon(pokemonName);
    });
   }
}


async function fetchSinglePokemon(pokemonName){
  const response = await fetch(`${BASE_URL}/${pokemonName}`);
  if(!response.ok){
    console.log('Pokemon not found');
    return;
  }
  const result = await response.json();

  const name = result.species.name;
  const image = result.sprites.front_default;

  renderSinglePokemon(name, image);
}

function renderSinglePokemon(pokemonName, pokemonImage){
  let pokemonCard = document.createElement("div");
  pokemonCard.className = "pokemon-card";
  
  pokemonCard.innerHTML = `
    <img class="pokemon-card__img" src="${pokemonImage}" alt="${pokemonName}">
    <h2 class="pokemon-card__title">${pokemonName}</h2>
    `;
  
  appContainer.innerHTML = "";
  appContainer.appendChild(pokemonCard);
}


fetchPokemonData();
