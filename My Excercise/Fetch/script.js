const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// Query Selectors
const appContainer = document.querySelector("#app");

function fetchPokemonData(){
    fetch(BASE_URL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        renderPokemonData(data.results)
    })
}

function renderPokemonData(dataArray){
    const list = document.createElement("ul");
    list.className = 'pokemon-list'

    for(pokemon of dataArray){
        list.innerHTML += `<li>${pokemon.name}</li>`
    }

    appContainer.appendChild(list)
}

fetchPokemonData()