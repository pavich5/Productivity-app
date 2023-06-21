window.onload = function() {
    let btn = document.querySelector("#btn");
    let planet_list = document.querySelector("#planet_list");
    let currentPage = 1;
    btn.addEventListener("click", async function fetchData(){
        const response = await fetch("https://swapi.dev/api/planets/");
        const data = await response.json();
        let planets = data.results;
        let html = "";
        for(planet of planets){
            html += `<li class="planet" data-id="${currentPage}"> ${planet.name} </li>`;
            currentPage++;
        }
        planet_list.innerHTML = html;
    });

    planet_list.addEventListener("click", async function(e){
        if(e.target.matches("li")){
            let id = e.target.getAttribute("data-id");
            let response = await fetch(`https://swapi.dev/api/planets/${id}`);
            let data = await response.json();
            let html = `<h2> ${data.name} </h2>`;
            for(let key in data){
                if(key !== 'name'){
                    html += `<p> ${key} : ${data[key]} </p>`;
                }
            }
            planet_list.innerHTML = html;
        }
    });
}