"use strict";

// funktion som ska skapa en informationsruta om vardera land

function buildCountry (country){

 
    let countryResult = document.getElementById("countryWrapper");
    let countryContainer = document.createElement("div");
    countryContainer.classList.add("countryContainer");
 
    
    let flagCountryDiv = document.createElement("div");
    flagCountryDiv.classList.add("flagCountryDiv");
    countryContainer.append(flagCountryDiv);

    let countryFlag = document.createElement("img");
    countryFlag.src = `./images/${country.flag}`;
    countryFlag.classList.add("countryFlag");
    flagCountryDiv.append(countryFlag);

    let countryName = document.createElement("h2");
    countryName.innerText = country.name;
    flagCountryDiv.append(countryName);

    let countryImage = document.createElement("img");
    countryImage.classList.add("countryImage");
    countryImage.src = `./images/${country.imagesNormal[0]}`;
    countryContainer.append(countryImage);

     
    let aboutCountry = document.createElement("p");
    aboutCountry.innerText = country.text; 
    countryContainer.append(aboutCountry);
        
    let visaCountry = document.createElement("p");
    if (country.visa === false) {
        visaCountry.innerText = "Visum: " + "Nej";
    } else {
        visaCountry.innerText = "Visum: " + "Ja";
    }
    countryContainer.append(visaCountry);

    let foundLanguages = getLanguageById(country);
    let languageCountry = document.createElement("p");
    languageCountry.innerText = "Språk: " + foundLanguages[0];
    countryContainer.append(languageCountry);
        

    let toEduButton = document.createElement("button");
    toEduButton.innerText = "Till utbildningar";
    countryContainer.append(toEduButton);

    let selectCity = document.createElement("select")
    
    let optionOne = document.createElement("option");
    optionOne.disabled = true;
    optionOne.hidden = true;
    optionOne.textContent = "Välj stad";
    optionOne.selected = true; 
    selectCity.append(optionOne);
    
    let foundCities = getCitiesById(country);
 
    for (let i = 0; i < foundCities.length; i++) {
        let option = document.createElement("option");
        option.text = foundCities[i]; 
        
        selectCity.append(option);
    }

    countryContainer.append(selectCity)

    countryResult.append(countryContainer);
    
    return countryContainer;
   
}

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

// Måste ha något sånt här för när användaren väljer ett land i select
// citySelector.addEventListener('keyup', function () {
//    let 
//     }
//   })