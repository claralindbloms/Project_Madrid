"use strict";

function buildCity (city) {

    let cityContainer = document.createElement("div");
    cityContainer.classList.add("cityContainer");

    let cityName = document.createElement("h2");
    cityName.innerText = 

}


function getCitiesByCountryId (city) {
    let foundCities = [];

    for (let i = 0; i < COUNTRIES.length; i++) {
        for (let i = 0; i < getCitiesByCountryId.length; i++) {
            if (city.id == CITIES[i].countryID) {
                foundCities.push(CITIES[i].name);
            }
        }
    }
    return foundCities;
}