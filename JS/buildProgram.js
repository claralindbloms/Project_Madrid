"use strict";

let chooseCountry = document.getElementById ("chooseCountry");

COUNTRIES.forEach ((country)=>{
    let option = document.createElement ("option");
    option.text = country.name;

    chooseCountry.append(option);

}
)

let chooseSubject = document.getElementById ("chooseSubject");

FIELDS.forEach ((subject)=>{
    let option = document.createElement ("option");
    option.text = subject.name;

    chooseSubject.append(option);

}
)

function buildProgram(program) {

    let programResult = document.getElementById("programWrapper");
    let programContainer = document.createElement("div");
    programContainer.classList.add("programContainer");

    let programName = document.createElement("h2");

    programName.innerText = program.name;
    programContainer.append(programName);

    // console.log(averageGrade(program, "courses"));

    let foundUniversity = getUniversityById(program);
    let universityProgram = document.createElement("p");
    universityProgram.innerText = foundUniversity[0];
    programContainer.append(universityProgram);

    let foundCity = getCityById(program);
    let foundCountry = getCountryById(program);
    let cityProgram = document.createElement("p");
    cityProgram.innerText = foundCity[0] + "," + " " + foundCountry[0];
    programContainer.append(cityProgram);
    
    let button = document.createElement("button");
    button.innerText= "Visa mer";
    programContainer.append(button)

    let button2 = document.createElement("button");
    button2.innerText= "Mer om landet";
    programContainer.append(button2)

    programResult.append(programContainer);



}
// Kör denna loopen för att få alla och skriv i istället för 0
// for (let i = 0; i < PROGRAMMES.length; i++) {
    for (let i = 0; i < 20; i++) {
buildProgram(PROGRAMMES[i]);
 }

// Hitta rätt universitet baserat på dess id
function getUniversityById(program) {
    let foundUniversity = []

    for (let i = 0; i < PROGRAMMES.length; i++) {
        for (let j = 0; j < UNIVERSITIES.length; j++) {
            if (program.universityID == UNIVERSITIES[j].id) {
                foundUniversity.push(UNIVERSITIES[j].name);
            }
        }
    }

    return foundUniversity;
}

// Hitta rätt stad baserat på dess id
function getCityById(program) {
    let foundCity = []


    for (let i = 0; i < PROGRAMMES.length; i++) {
        for (let j = 0; j < UNIVERSITIES.length; j++) {
            for (let f = 0; f < CITIES.length; f++) {
                if (program.universityID == UNIVERSITIES[j].id && UNIVERSITIES[j].cityID == CITIES[f].id) {
                    foundCity.push(CITIES[f].name);


                }

            }
        }
        }

    return foundCity;
}

// Hitta rätt land baserat på dess id
function getCountryById(program) {
    let foundCountry = []
    for (let i = 0; i < PROGRAMMES.length; i++) {
        for (let j = 0; j < UNIVERSITIES.length; j++) {
            for (let f = 0; f < CITIES.length; f++) {
                for (let r = 0; r < COUNTRIES.length; r++) {
                    if (program.universityID == UNIVERSITIES[j].id && UNIVERSITIES[j].cityID == CITIES[f].id && CITIES[f].countryID == COUNTRIES[r].id) {
                        foundCountry.push(COUNTRIES[r].name);
                    }
                }
            }
        }
    }

    return foundCountry;
}


// denna ska köras i eventlyssnaren för select-funktionen

// function createHTML(programs) {
//     for (let program of programs) {
//         buildCountry(program)
//     }
// }

// test

