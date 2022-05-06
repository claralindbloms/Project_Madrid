"use strict";

function buildProgram(program) {


    let programResult = document.getElementById("programWrapper");
    let programContainer = document.createElement("div");
    programContainer.classList.add("programContainer");

    let programName = document.createElement("h2");

    programName.innerText = program.name;
    programContainer.append(programName);

    let foundUniversity = getUniversityById(program);
    let universityProgram = document.createElement("p");
    universityProgram.innerText = foundUniversity[0];
    programContainer.append(universityProgram);

    let foundCity = getCityById(program);
    let cityProgram = document.createElement("p");
    cityProgram.innerText = foundCity[0];
    programContainer.append(cityProgram);
       

    programResult.append(programContainer);

}
// Kör denna loopen för att få alla och skriv i istället för 0
// for (let i = 0; i < PROGRAMMES.length; i++) {
    buildProgram(PROGRAMMES[20]);
// }

// Hitta rätt universitet baserat på dess id
function getUniversityById(program) {
    let foundUniversity = []

    for (let i = 0; i < PROGRAMMES.length; i++) {
        for (let i = 0; i < UNIVERSITIES.length; i++) {
            if (program.universityID == UNIVERSITIES[i].id) {
                foundUniversity.push(UNIVERSITIES[i].name);
            }
        }
    }

    return foundUniversity;
}

// Hitta rätt stad baserat på dess id
function getCityById(program) {
    let foundCity = []

    for (let i = 0; i < PROGRAMMES.length; i++) {
        for (let i = 0; i < UNIVERSITIES.length; i++) {
            for (let i = 0; i < CITIES.length; i++) {
                if (program.universityID == UNIVERSITIES[i].id && UNIVERSITIES[i].cityID == CITIES[i].id) {
                    foundCity.push(CITIES[i].name);
                }
               
            }
           
        }
    
    }

    return foundCity;
}

// Hitta rätt land baserat på dess id
// function getCountryById(program) {
//     let foundCountry = []
//     for (let i = 0; i < PROGRAMMES.length; i++) {
//         for (let i = 0; i < CITIES.length; i++) {
//             for (let i = 0; i < COUNTRIES.length; i++) {
//                 if (program.language == LANGUAGES[i].id && UNIVERSITIES[i].cityID == CITIES[i].id) {
//                     foundCity.push(CITIES[i].name);
//                 }
               
//             }
           
//         }
    
//     }

//     return foundCity;
// }


// denna ska köras i eventlyssnaren för select-funktionen

// function createHTML(programs) {
//     for (let program of programs) {
//         buildCountry(program)
//     }
// }

// test

