"use strict";

function buildCity (city) {

    let cityContainer = document.createElement("div");
    cityContainer.classList.add("cityContainer");

    let cityName = document.createElement("h2");
    cityName.innerText =`` ;

    let cityImage = document.createElement("img");
    cityImage.src = `./images/${city.imagesNormal[0]}`;
    cityContainer.append(cityImage);

    let aboutCity = document.createElement("p");
    aboutCity.innerText = city.text; 
    cityContainer.append(aboutCity);

    // div för grades, random - Hedvig

    // div för kommentarer, två nyaste visar, sen visa mer - Clara

    // let cityComments = document.createElement("div");
    // cityContainer.append(cityComments);

    let toEduButton = document.createElement("button");
    toEduButton.innerText = "Till utbildningar";
    cityContainer.append(toEduButton);
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
