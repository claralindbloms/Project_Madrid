"use strict";

function buildCity (city) {

    let cityContainer = document.createElement("div");
    cityContainer.classList.add("cityContainer");

    let cityName = document.createElement("h2");
    cityName.innerText = 


    let aboutCity = document.createElement("p");
    aboutCity.innerText = city.text; 
    cityContainer.append(aboutCity);

    let toEduButton = document.createElement("button");

    cityContainer.append(toEduButton);
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

for (let i = 0; i < CITIES.length; i++){
    buildCity (CITIES[i]);
}

// hitta rätt bild till varje stad - fråga
// function getCountryImage (country) {
//     let foundImages = [];

//     for (let i = 0; i < COUNTRIES.length; i++) {
//         for (let i = 0; .length; i++){
//             if () {
//                 foundImages.push();
//             }
//         }
//     }

//     return foundImages;
// }

// funktion för att få fram rätt betyg på de olika kategorierna
// function getCityGrades (){}

// funktion för att få fram kommentarer, först de två senaste sen "visa fler"
// function getCityComments (){}