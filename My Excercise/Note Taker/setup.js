window.onload = function() {
    let print = document.querySelector(".print");
    let btnAdd = document.querySelector("#btnAdd");
    let noteTaker = document.querySelector("#noteTaker");
    let i = 1;
    btnAdd.addEventListener("click", function(e) {
        let noteValue = noteTaker.value;
        let textToShow = noteValue;
        let maxLimit = 100;
        if (noteValue.length > maxLimit) {
            textToShow = noteValue.substring(0, maxLimit) + "...";
        }
        
        print.innerHTML += `<div class="results"> 
                            <h2>Note ${i}</h2> 
                            <p id="textAddHere${i}" style="overflow:hidden; max-height:100px;">${textToShow}</p> 
                            <button id="ViewDetails${i}">Read More</button> 
                            <br> 
                        </div>`;
        let ViewDetails = document.querySelector(`#ViewDetails${i}`);
        ViewDetails.style.width = '90px';
        ViewDetails.style.height = '25px';
        ViewDetails.addEventListener("click", function(e) {
            let text = document.querySelector(`#textAddHere${i}`);
            if (text.style.overflow === "hidden") {
                text.innerHTML = noteValue;
                text.style.overflow = "visible";
                ViewDetails.innerHTML = "Read Less";
            } else {
                text.innerHTML = textToShow;
                text.style.overflow = "hidden";
                ViewDetails.innerHTML = "Read More";
            }
        });
        i++;
    });
}    