"use strict";

// funktion som ska skapa en informationsruta om vardera land

function buildCountry (country){

 
    let countryResult = document.getElementById("countryWrapper");
    let countryContainer = document.createElement("div");
    countryContainer.classList.add("countryContainer");
 
    let countryName = document.createElement("h2");
    
    // länka rätt flagga // 

    let countryFlag = document.createElement("img");
    countryFlag.src = `./images/${country.flag}`;
    countryFlag.classList.add("countryFlag");

    countryContainer.append(countryFlag);

    countryName.innerText = country.name;

    countryContainer.append(countryName);

    let countryImage = document.createElement("img");
    countryImage.src = `./images/${country.imagesNormal[0]}`;
    countryContainer.append(countryImage);
    /* hur får jag så rätt bild väljs till rätt land? */ 

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

    countryContainer.append(toEduButton);

    
    let selectCity = document.createElement("select"); 

    countryContainer.append(selectCity);

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

// hitta rätt bild till varje land
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


// denna ska köras i eventlyssnaren för select-funktionen

// function createHTML (countries) {
//     for (let country of countries) {
//         buildCountry(country)
//     }
// }
  

// Måste ha något sånt här för när användaren väljer ett land i select
// inputStudent.addEventListener('keyup', function () {
//     let foundStudent = findStudent()
//     document.getElementById('results').innerHTML = ''
//     createHTML(foundStudent)
  
//     if (inputStudent.value == '') {
//       document.getElementById('results').innerHTML = ''
//     }
//   })