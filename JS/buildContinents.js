"use strict";

function buildContinents() {
    for (let i = 0; i < CONTINENTS.length; i++) {

        let continent = document.createElement("div");
        continent.innerHTML = `
            <img class="continent_images" src="./images/${CONTINENTS[i].image}"</img>
            <h2>${CONTINENTS[i].name}</h2>
        `

        if (CONTINENTS[i].countries == 0) {
            continent.style.opacity = "0.4";
        }

        let globesContainer = document.getElementById("globes");
        globesContainer.append(continent);

        continent.addEventListener("click", function () {
            popupCountries();
        })
        console.log (CONTINENTS[i].name)
        
    }


}



function popupCountries() {
    let popupHTML = document.querySelector(".continent_images");
    if (document.querySelector(".menuactive")) {
        let overlay = document.querySelector(".overlay");
        popupHTML.classList.remove("menuactive");
        overlay.remove();
    } else {
        let overlay = document.createElement("div");
        overlay.classList.add("overlay");
        popupHTML.classList.add("menuactive");
        let wrap = document.querySelector("#wrapper"); //add wrapper on eachpage?
        wrap.append(overlay);
        for (let j = 0; j < COUNTRIES.length; j++) {
            let country = document.createElement("div");
            country.innerHTML = `
            <img class="country_images" src="./images/${COUNTRIES[j].imagesNormal[1]}"</img>
            <h2>${COUNTRIES[j].name}</h2>
        `
            overlay.append(country);
        }
    }
}

buildContinents();


document.getElementById("bookicon").onclick = function () {
    location.href = "utbildningar.html"; // Change later depending on how the url works.
}



// function getCountriesById (continent){
//     foundCountries = [];
//     for (let r = 0; r < COUNTRIES.length; r++){
//         if
//     }
    

// }