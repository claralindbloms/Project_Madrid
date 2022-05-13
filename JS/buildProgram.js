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

  let courseGrade = averageGradeProgramme(program, "courses");
  let teachersGrade = averageGradeProgramme(program, "teachers");
  let studentsGrade = averageGradeProgramme(program, "students");

  let foundLanguage = getLanguageById(program);
  let foundLevel = getLevelById(program);

  let moreInformation = document.createElement("div");
  moreInformation.id = "moreInformation";
  // moreInformation.classList.add("hidden");
  moreInformation.innerHTML = `
        <h3>Information:</h3>
        <p>Utbildningsnivå: ${foundLevel}</p>
        <p>Intagningsbetyg: ${program.entryGrades[0]} (2021)</p>
        <p>Språk: ${foundLanguage}</p>

        <h3>Betyg:</h3>
        <div id="grades">
            <div class="grade">
                <p>Kurser</p>
                <p>${courseGrade}/5</p>
            </div>
            <div class="grade">
                <p>Lärare</p>
                <p>${teachersGrade}/5</p>
            </div>
            <div class="grade">
                <p>Studenter</p>
                <p>${studentsGrade}/5</p>
            </div>
        </div>
        <p id="disclaimer">Genomsnittligt betyg från tidigare studenter</p>
    `;

  programContainer.append(moreInformation);

  let button = document.createElement("button");
  button.innerText = "Visa mer";
  programContainer.append(button);

  let button2 = document.createElement("button");
  button2.innerText = "Mer om landet";
  programContainer.append(button2);

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
  let foundUniversity = [];

  for (let j = 0; j < UNIVERSITIES.length; j++) {
    if (program.universityID == UNIVERSITIES[j].id) {
      foundUniversity.push(UNIVERSITIES[j].name);
    }
  }

  return foundUniversity;
}

// Hitta rätt stad baserat på dess id
function getCityById(program) {
  let foundCity = [];

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
  console.log(program);
  let foundCountry = [];

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
  let foundCountry = [];
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

  return foundCountry;
}

function getProgramBySubjectId(id) {
  let foundSubject = [];
  for (let j = 0; j < PROGRAMMES.length; j++) {
    if (id == PROGRAMMES[j].subjectID) {
      foundSubject.push(PROGRAMMES[j]);
    }
  }

  return foundSubject;
}

// Funktion för att hitta rätt utbildningsnivå baserat på id.
function getLevelById(program) {
  let foundLevel = [];

  if (program.level == 0) {
    foundLevel.push(LEVELS[0]);
  } else if (program.level == 1) {
    foundLevel.push(LEVELS[1]);
  } else if (program.level == 2) {
    foundLevel.push(LEVELS[2]);
  }

  return foundLevel;
}

// Funktion för att hitta rätt språk baserat på id.
function getLanguageById(program) {
  let foundLanguages = [];

  for (let i = 0; i < LANGUAGES.length; i++) {
    if (program.language == LANGUAGES[i].id) {
      foundLanguages.push(LANGUAGES[i].name);
    }
  }

  return foundLanguages;
}

// Funktion för att hitta betygen för ett program.
function averageGradeProgramme(programme, type) {
  let grade = [];

  COMMENTS_PROGRAMME.filter((comment) => {
    if (comment.programmeID == programme.id) {
      grade.push(comment.stars[type]);
    }
  });

  return averageCalc(grade);
}

// Funktion för att räkna ut det genomsnittliga betyget baserat på de hittade betygen.
function averageCalc(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  let average = sum / array.length;

  let averageGrade = Math.round(average * 10) / 10;

  return averageGrade;
}

let chooseCountry = document.getElementById("chooseCountry");

COUNTRIES.forEach((country) => {
  let option = document.createElement("option");
  option.text = country.name;
  option.value = country.id;
  chooseCountry.append(option);
});

chooseCountry.addEventListener("change", function (event) {
  let programResult = document.getElementById("programWrapper");
  programResult.innerHTML = "";

  let foundPrograms = getProgramByCountryId(chooseCountry.value);
  foundPrograms.forEach((program) => {
    buildProgram(program);
  });
});

let chooseSubject = document.getElementById("chooseSubject");

FIELDS.forEach((subject) => {
  let option = document.createElement("option");
  option.text = subject.name;
  option.value = subject.id;
  chooseSubject.append(option);
});

chooseSubject.addEventListener("change", function (event) {
  let programResult = document.getElementById("programWrapper");
  programResult.innerHTML = "";

  let foundSubject = getProgramBySubjectId(chooseSubject.value);
  foundSubject.forEach((program) => {
    buildProgram(program);
  });
});
