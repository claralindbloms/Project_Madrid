"use strict";

// funktion som ska skapa en informationsruta om vardera land

function buildCountry (country){

    for (let i = 0; i < country.length; i++) {
        let countryResult = getElementById("countryWrapper");
        let countryContainer = document.createElement("div");
        let countryName = document.createElement("h2");
        countryContainer.classList.add("countryContainer");

        countryName.innerText = country[i].flag + " " + country[i].name;
        countryContainer.append(countryName);

        let countryImage = document.createElement("img");
        /* hur får jag så rätt bild väljs till rätt land? */ 

        let aboutCountry = document.createElement("p");
        aboutCountry.innerText = country[i].text; 
        countryContainer.append(aboutCountry);
        
        let visaCountry = document.createElement("p");
        if (country[i].visa === false) {
            visaCountry.innerText = "Visum: " + "Nej";
        } else {
            visaCountry.innerText = "Visum: " + "Ja";
        }
        countryContainer.append(visaCountry);

        let foundLanguages = getLanguageById(country);
        let languageCountry = document.createElement("p");
        languageCountry.innerText = "Språk: " + 
        // behövs en loop till för att få rätt språk mha id? // 
        
        countryResult.append(countryContainer);
    }
    

   
}

// Hitta rätt språk baserat på dess id
function getLanguageById (country) {
    let foundLanguages = []
  
    for (let i = 0; i < country.length; i++) {
      foundLanguages.push(
        DB.LANGUAGE.find(language => {
          return language.id == country.languageID
        })
      )
    }
    return foundLanguages;
}

//   const LANGUAGES = [
//     {
//         "id": 0,
//         "name": "Spanish",
//         "flag": "spain.png"
//     },
//     {
//         "id": 1,
//         "name": "English",
//         "flag": "uk.png"
//     },
//     {
//         "id": 2,
//         "name": "French",
//         "flag": "france.png"
//     },
//     {
//         "id": 3,
//         "name": "Swedish",
//         "flag": "sweden.png"
//     }
// denna ska köras i eventlyssnaren för select-funktionen

function createHTML (countries) {
    for (let country of countries) {
        buildCountry(country)
    }
}
  

// Måste ha något sånt här för när användaren väljer ett land i select
// inputStudent.addEventListener('keyup', function () {
//     let foundStudent = findStudent()
//     document.getElementById('results').innerHTML = ''
//     createHTML(foundStudent)
  
//     if (inputStudent.value == '') {
//       document.getElementById('results').innerHTML = ''
//     }
//   })