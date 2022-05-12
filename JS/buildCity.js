"use strict";

// för att städerna inte ska visas direkt när destinations-sidan öppnas

let countryResult = document.getElementById("countryWrapper");
countryResult.innerHTML = "";

function buildCity (city) {

    let countryResult = document.getElementById("countryWrapper");
    let cityContainer = document.createElement("div");
    cityContainer.classList.add("cityContainer");



    let cityImage = document.createElement("img");
    cityImage.src = `./images/${city.imagesNormal[0]}`;
    cityContainer.append(cityImage);

    let aboutCity = document.createElement("p");
    aboutCity.innerText = city.text; 
    cityContainer.append(aboutCity);

    cityContainer.innerHTML = `
    <h2>${city.name}</h2>
    <img class="cityImage" src="./images/${city.imagesNormal[0]}">
    <p>${city.text}</p>
    <button>Till utbildningar</button>
    `;


    // div för grades, random - Hedvig

    // div för kommentarer, två nyaste visar, sen visa mer - Clara

    // let cityComments = document.createElement("div");
    // cityContainer.append(cityComments);

    countryResult.append(cityContainer);
}

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
