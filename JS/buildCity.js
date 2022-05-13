"use strict";



function buildCity (city) {

    let countryResult = document.getElementById("countryWrapper");
    let cityContainer = document.createElement("div");
    cityContainer.classList.add("cityContainer");


    // let foundGrade = averageGradeProgramme();

    cityContainer.innerHTML = `
    <h2>${city.name}</h2>
    <img class="cityImage" src="./images/${city.imagesNormal[0]}">
    <p>${city.text}</p>
    <button>Till utbildningar</button>
    `;

    
    // div för grades, random - Hedvig

    // div för kommentarer, två nyaste visar, sen visa mer - Clara



    countryResult.append(cityContainer);
}

// för att städerna inte ska visas direkt när destinations-sidan öppnas

let countryResult = document.getElementById("countryWrapper");
countryResult.innerHTML = "";

for (let i = 0; i < CITIES.length; i++){
    buildCity (CITIES[i]);
}

function getCitiesByCountryId (city) {
    let foundCities = [];

    for (let i = 0; i < COUNTRIES.length; i++) {
        for (let i = 0; i < CITIES.length; i++) {
            if (city.id == CITIES[i].countryID) {
                foundCities.push(CITIES[i].name);
            }
        }
    }
    return foundCities;
}
