let movies = ["Joker", "Harry Potter", "Lord of the Rings", "Transformers"];

let searchInput = document.querySelector("#searchInput");
let resultHeader = document.querySelector("#results");
let searchBtn = document.querySelector("#searchBtn");

function searchMovie(){
    for(let movie of movies){
        if(movie.toLowerCase().includes(searchInput.value.toLowerCase())){
            return movie
        }
    }
}

function showResult(){
    resultHeader.innerHTML = "";
    resultHeader.style.color = "black";
    if(!searchInput.value){
        resultHeader.innerHTML = "PLEASE ENTER SOMTHING"
    } else {
        let searchResult = searchMovie();
        if(!searchResult){
            resultHeader.innerHTML = "The movie is not found"
            resultHeader.style.color = "red";
        } else {
            resultHeader.innerHTML = "The movie is  found"
            resultHeader.style.color = "green";
        }
    }
}

searchBtn.addEventListener("click", showResult);

