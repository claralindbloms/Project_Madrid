"use strict";

// function that creates each box with information of a country

function buildCountry (country){

    let countryResult = document.getElementById("countryWrapper");
    let countryContainer = document.createElement("div");
    countryContainer.classList.add("countryContainer");

    let foundLanguages = getLanguageById(country);

    // to get the correct visa-status
    let visaCountry = document.createElement("p");
    if (country.visa === false) {
        visaCountry.innerText = "Visum: Nej";
    } else {
        visaCountry.innerText = "Visum: Ja";
    }

    // the information of the countries
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
    
    // to get the correct cities that belong to the choosen country
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

// code that makes the select-bars empty when refreashing the page
let countryResult = document.getElementById("countryWrapper");
countryResult.innerHTML = "";

// go through the country database and create each country
for (let i = 0; i < COUNTRIES.length; i++){
    buildCountry (COUNTRIES[i]);

}

// find the correct language based on the country id

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

// find the correct cities based on country id

function getCitiesById (country) {
    let foundCities = [];

    for (let i = 0; i < CITIES.length; i++) {
        if (country.id == CITIES[i].countryID) {
            foundCities.push(CITIES[i].name);
        }
    }
    return foundCities;
}
