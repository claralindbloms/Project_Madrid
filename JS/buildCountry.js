"use strict";

// funktion som ska skapa en informationsruta om vardera land

function buildCountry (country){

    let countryResult = document.getElementById("countryWrapper");

    let countryContainer = document.createElement("div");
    countryContainer.classList.add("countryContainer");


    let foundLanguages = getLanguageById(country);

    let visaCountry = document.createElement("p");
    if (country.visa === false) {
        visaCountry.innerText = "Visum: Nej";
    } else {
        visaCountry.innerText = "Visum: Ja";
    }

    countryContainer.innerHTML = `
        <div class="flagCountryDiv">
            <img class="countryFlag" src="./images/${country.flag}">
            <h2>${country.name}</h2>
        </div>
        <img class="countryImage" src="./images/${country.imagesNormal[0]}">
        <p>${country.text}</p>
        <p>Språk: ${foundLanguages[0]} <br/>
        ${(country.visa === false) ?  "Visum: Nej":"Visum: Ja"}
        </p>
    
        <button>Till utbildningar</button>
        <select class="chooseCity" id="${country.name}">
            <option selected disabled hidden>Välj stad</option>
        </select>
    `;
    
    let foundCities = getCitiesById(country);
    countryResult.append(countryContainer);
    let selectCity = document.querySelector(`#${country.name}`);

    for (let i = 0; i < foundCities.length; i++) {
        let option = document.createElement("option");
        option.text = foundCities[i]; 
        
        selectCity.append(option);
    }

    return countryContainer;
}

let countryResult = document.getElementById("countryWrapper");
countryResult.innerHTML = "";

for (let i = 0; i < COUNTRIES.length; i++){
    buildCountry (COUNTRIES[i]);

}

// Hitta rätt språk baserat på dess id

function getLanguageById (country) {
    let foundLanguages = []

    for (let i = 0; i < COUNTRIES.length; i++) {
        for (let i = 0; i < LANGUAGES.length ; i++) {
            if (country.languageID == LANGUAGES[i].id) {
                foundLanguages.push(LANGUAGES[i].name);
            }
        }
    }
    
    return foundLanguages;
}

// länka städerna via ID till rätt land

function getCitiesById (country) {
    let foundCities = [];

    for (let i = 0; i < CITIES.length; i++) {
        if (country.id == CITIES[i].countryID) {
            foundCities.push(CITIES[i].name);
        }
    }
    return foundCities;
}
