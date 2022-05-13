"use strict";

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
    cityProgram.innerText = foundCity[0] + "," + " " + foundCountry[0].name;
    programContainer.append(cityProgram);

    let button = document.createElement("button");
    button.innerText = "Visa mer";
    programContainer.append(button)

    let button2 = document.createElement("button");
    button2.innerText = "Mer om landet";
    programContainer.append(button2)

    programResult.append(programContainer);



}

let programResult = document.getElementById("programWrapper");
programResult.innerHTML = "";

// Kör denna loopen för att få alla och skriv i istället för 0
//  for (let i = 0; i < PROGRAMMES.length; i++) {
for (let i = 0; i < 20; i++) {
    buildProgram(PROGRAMMES[i]);
}

// Hitta rätt universitet baserat på dess id
function getUniversityById(program) {
    let foundUniversity = []

    for (let j = 0; j < UNIVERSITIES.length; j++) {
        if (program.universityID == UNIVERSITIES[j].id) {
            foundUniversity.push(UNIVERSITIES[j].name);
        }
    }


    return foundUniversity;
}

// Hitta rätt stad baserat på dess id
function getCityById(program) {
    let foundCity = []

    for (let j = 0; j < UNIVERSITIES.length; j++) {
        if (program.universityID == UNIVERSITIES[j].id) {
            for (let f = 0; f < CITIES.length; f++) {
                if (UNIVERSITIES[j].cityID == CITIES[f].id) {
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

    for (let j = 0; j < UNIVERSITIES.length; j++) {
        if (program.universityID == UNIVERSITIES[j].id) {

            for (let f = 0; f < CITIES.length; f++) {
                if (UNIVERSITIES[j].cityID == CITIES[f].id) {

                    for (let r = 0; r < COUNTRIES.length; r++) {
                        if (CITIES[f].countryID == COUNTRIES[r].id) {
                            foundCountry.push(COUNTRIES[r]);
                        }

                    }
                }
            }
        }
    }


    return foundCountry;

}

function getProgramByCountryId(id) {
    let foundCountry = []
    for (let j = 0; j < CITIES.length; j++) {
        if (id == CITIES[j].countryID) {


            for (let f = 0; f < UNIVERSITIES.length; f++) {
                if (UNIVERSITIES[f].cityID == CITIES[j].id) {

                    for (let r = 0; r < PROGRAMMES.length; r++) {
                        if (PROGRAMMES[r].universityID == UNIVERSITIES[f].id) {
                            foundCountry.push(PROGRAMMES[r]);
                        }

                    }
                }
            }
        }
    }

    return foundCountry
}

function getProgramBySubjectId(id) {
    let foundSubject = []
    for (let j = 0; j < PROGRAMMES.length; j++) {
        if (id == PROGRAMMES[j].subjectID) {
            foundSubject.push(PROGRAMMES[j]);

        }
    }

    return foundSubject
}


let chooseCountry = document.getElementById("chooseCountry");

COUNTRIES.forEach((country) => {
    let option = document.createElement("option");
    option.text = country.name;
    option.value = country.id;
    chooseCountry.append(option);

}
)

chooseCountry.addEventListener("change", function (event) {
    let programResult = document.getElementById("programWrapper");
    programResult.innerHTML = "";

    let foundPrograms = getProgramByCountryId(chooseCountry.value);
    foundPrograms.forEach((program) => {
        buildProgram(program)
    })


})


let chooseSubject = document.getElementById("chooseSubject");

FIELDS.forEach((subject) => {
    let option = document.createElement("option");
    option.text = subject.name;
    option.value = subject.id;
    chooseSubject.append(option);

}
)

chooseSubject.addEventListener("change", function (event) {
    let programResult = document.getElementById("programWrapper");
    programResult.innerHTML = "";

    let foundSubject = getProgramBySubjectId(chooseSubject.value);
    foundSubject.forEach((program) => {
        buildProgram(program)
    })


})