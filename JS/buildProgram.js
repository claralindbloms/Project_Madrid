"use strict";
// a function that builds all programs
function buildProgram(program) {
  let programResult = document.getElementById("programWrapper")
  let programContainer = document.createElement("div")
  programContainer.classList.add("programContainer")

  let programName = document.createElement('h2')

  programName.innerText = program.name
  programContainer.append(programName)

  let foundUniversity = getUniversityById(program)
  let universityProgram = document.createElement("p")
  universityProgram.innerText = foundUniversity[0]
  programContainer.append(universityProgram)

  let foundCity = getCityById(program)
  let foundCountry = getCountryById(program)
  let cityProgram = document.createElement('p')
  cityProgram.innerText = foundCity[0] + ',' + ' ' + foundCountry[0].name
  programContainer.append(cityProgram)

  let courseGrade = averageGradeProgramme(program, 'courses')
  let teachersGrade = averageGradeProgramme(program, 'teachers')
  let studentsGrade = averageGradeProgramme(program, 'students')

  let foundLanguage = getLanguageById(program)
  let foundLevel = getLevelById(program)

  let moreInformation = document.createElement('div')
  moreInformation.id = 'moreInformation'
  moreInformation.classList.add('informationItem')
  moreInformation.classList.add('hidden')
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
    `

  programContainer.append(moreInformation)

  let button = document.createElement('button')
  button.innerText = 'Visa mer'
  button.classList.add('showMoreLess')
  programContainer.append(button)

  //button to show more information about program
  button.addEventListener("click", function () {
    if (moreInformation.classList.contains("hidden")) {
      moreInformation.classList.remove("hidden")
      button.innerText = "Visa mindre"
    } else {
      moreInformation.classList.add('hidden')
      button.innerText = 'Visa mer'
    }
  })

  let button2 = document.createElement('button')
  button2.innerText = 'Mer om landet'
  programContainer.append(button2)

  //TO DO, se över funktionen
  button2.addEventListener('click', function () {
    sessionStorage.setItem('country', JSON.stringify(foundCountry[0]))
    window.location.href = './destinationer.html'
  })

  programResult.append(programContainer)
}

let programResult = document.getElementById('programWrapper')
programResult.innerHTML = ''



if (sessionStorage.getItem('programmes') !== null) {
  const programmes = JSON.parse(sessionStorage.getItem('programmes'))
  for (let i = 0; i < programmes.length; i++) {
    buildProgram(programmes[i])
    sessionStorage.removeItem("programmes")
    let showMoreProgrammes = document.getElementById("showMoreProgrammes")
    showMoreProgrammes.style.display = "none"
  }
} else if (sessionStorage.getItem('programmesCity') !== null) {
  const programmesCity = JSON.parse(sessionStorage.getItem('programmesCity'))
  for (let i = 0; i < programmesCity.length; i++) {
    buildProgram(programmesCity[i])
    sessionStorage.removeItem("programmesCity")
    let showMoreProgrammes = document.getElementById("showMoreProgrammes")
    showMoreProgrammes.style.display = "none"
  }
} else {
  for (let i = 0; i < 20; i++) {
    buildProgram(PROGRAMMES[i])
  }
}


let showMoreProgrammes = document.getElementById("showMoreProgrammes")

showMoreProgrammes.addEventListener('click', function (event) {
  for (let i = 20; i < PROGRAMMES.length; i++) {
    buildProgram(PROGRAMMES[i])

  }
  showMoreProgrammes.style.display = "none";

})

// Find right university based on ID
function getUniversityById(program) {
  let foundUniversity = [];
  // go through all universities
  for (let j = 0; j < UNIVERSITIES.length; j++) {
    // compare program universityId with university id
    if (program.universityID == UNIVERSITIES[j].id) {

      // if its the same push the universities name to the empty array
      foundUniversity.push(UNIVERSITIES[j].name)
    }
  }

  return foundUniversity
}

// Find right university based on ID
function getCityById(program) {
  let foundCity = []
 // go through all universities

  for (let j = 0; j < UNIVERSITIES.length; j++) {
        // compare program universityId with university id
    if (program.universityID == UNIVERSITIES[j].id) {
       // go through all cities 
      for (let f = 0; f < CITIES.length; f++) {
         // compare university cityId with city id
        if (UNIVERSITIES[j].cityID == CITIES[f].id) {

          // if its the same push the city name to the empty array
          foundCity.push(CITIES[f].name)
        }
      }
    }
  }

  return foundCity
}


// Finde right country based on ID
function getCountryById(program) {
  let foundCountry = []
  
// go through all universities

  for (let j = 0; j < UNIVERSITIES.length; j++) {
     // compare program universityId with university id
    if (program.universityID == UNIVERSITIES[j].id) {
       // go through all cities 
      for (let f = 0; f < CITIES.length; f++) {
          // compare university cityId with city id
        if (UNIVERSITIES[j].cityID == CITIES[f].id) {
          // go through all countries
          for (let r = 0; r < COUNTRIES.length; r++) {
            // compare city countryId with coutry id
            if (CITIES[f].countryID == COUNTRIES[r].id) {

              // if its the same push the country name to the empty array
              foundCountry.push(COUNTRIES[r])
            }
          }
        }
      }
    }
  }

  return foundCountry
}

// Finde right program based on CountryID
function getProgramByCountryId(id) {
  let foundProgram = []
      // go through all cities 

  for (let j = 0; j < CITIES.length; j++) {
     // compare city countryId with id (value/id of chosen option in country selector)
    if (id == CITIES[j].countryID) {
      // go through all universities
      for (let f = 0; f < UNIVERSITIES.length; f++) {
             // compare university cityId with city id
        if (UNIVERSITIES[f].cityID == CITIES[j].id) {
               // go through all programmes
          for (let r = 0; r < PROGRAMMES.length; r++) {
                 // compare programe universityId with university id
            if (PROGRAMMES[r].universityID == UNIVERSITIES[f].id) {

              // if its the same push the program to the empty array
              foundProgram.push(PROGRAMMES[r])
            }
          }
        }
      }
    }
  }

  return foundProgram
}


// Finde right program based on SubjectID
function getProgramBySubjectId(id) {
  let foundSubject = []
  // go through all programmes
  for (let j = 0; j < PROGRAMMES.length; j++) {
     // compare programe subjectId with id (value/id of chosen option in subject selector)
    if (id == PROGRAMMES[j].subjectID) {
      // if its the same push the program to the empty array
      foundSubject.push(PROGRAMMES[j])
    }
  }

  return foundSubject
}

// Funktion för att hitta rätt utbildningsnivå baserat på id.
function getLevelById (program) {
  let foundLevel = []

  if (program.level == 0) {
    foundLevel.push(LEVELS[0])
  } else if (program.level == 1) {
    foundLevel.push(LEVELS[1])
  } else if (program.level == 2) {
    foundLevel.push(LEVELS[2])
  }

  return foundLevel
}

// Funktion för att hitta rätt språk baserat på id.
function getLanguageById (program) {
  let foundLanguages = []

  for (let i = 0; i < LANGUAGES.length; i++) {
    if (program.language == LANGUAGES[i].id) {
      foundLanguages.push(LANGUAGES[i].name)
    }
  }

  return foundLanguages
}

// Funktion för att hitta betygen för ett program.
function averageGradeProgramme (programme, type) {
  let grade = []

  COMMENTS_PROGRAMME.filter(comment => {
    if (comment.programmeID == programme.id) {
      grade.push(comment.stars[type])
    }
  })

  return averageCalc(grade)
}

// Funktion för att räkna ut det genomsnittliga betyget baserat på de hittade betygen.
function averageCalc (array) {
  let sum = 0

  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }

  let average = sum / array.length

  let averageGrade = Math.round(average * 10) / 10

  return averageGrade
}

// get selector from html
let chooseCountry = document.getElementById("chooseCountry")

// on every reload empty selector country value
window.onload = function () {
  chooseCountry.value = ""
}

// go through all countries an for all country create option with name 
// and option and append to selector
COUNTRIES.forEach((country) => {
  let option = document.createElement("option")
  option.text = country.name
  option.value = country.id
  chooseCountry.append(option)
});

// eventlistener on selecter
chooseCountry.addEventListener("change", function (event) {
  // empty subject selector if you choose a country
  chooseSubject.value = ""
  // empty the programwrapper if you choose a country
  let programResult = document.getElementById("programWrapper")
  programResult.innerHTML = ""

  // get the value/id from the country you choose in selector
  let foundPrograms = getProgramByCountryId(chooseCountry.value)
  // for each country you choose it call "builprogram" contected to right country
  foundPrograms.forEach((program) => {
    buildProgram(program)
    let showMoreProgrammes = document.getElementById("showMoreProgrammes")
    showMoreProgrammes.style.display = "none"
  })
})

// get selector from html
let chooseSubject = document.getElementById("chooseSubject")

// on every reload empty selector subject value
window.onload = function () {
  chooseSubject.value = ""
}

// go through all subjects an for all subject create option with name 
// and option and append to selector
FIELDS.forEach((subject) => {
  let option = document.createElement("option")
  option.text = subject.name
  option.value = subject.id
  chooseSubject.append(option)
})

// eventlistener on selecter
chooseSubject.addEventListener("change", function (event) {
    // empty country selector if you choose a country
  chooseCountry.value = ""

  // empty the programwrapper if you choose a subject
  let programResult = document.getElementById("programWrapper")
  programResult.innerHTML = ""

    // get the value/id from the subject you choose in selector
  let foundSubject = getProgramBySubjectId(chooseSubject.value)
    // for each subject you choose it call "builprogram" contected to right subject
  foundSubject.forEach((program) => {
    buildProgram(program)
    let showMoreProgrammes = document.getElementById("showMoreProgrammes")
    showMoreProgrammes.style.display = "none"
  })
})
