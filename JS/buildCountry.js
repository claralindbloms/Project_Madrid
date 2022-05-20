'use strict'

// function that creates each box with information of a country

function buildCountry (country) {
  let countryResult = document.getElementById('countryWrapper')
  let countryContainer = document.createElement('div')
  countryContainer.className = 'countryContainer container'
  countryContainer.id = country.id

  let foundLanguages = getLanguageById(country)

  // to get the correct visa-status
  let visaCountry = document.createElement('p')
  if (country.visa === false) {
    visaCountry.innerText = 'Visum: Nej'
  } else {
    visaCountry.innerText = 'Visum: Ja'
  }

  // the information of the countries
  countryContainer.innerHTML = `
        <div class="flagCountryDiv">
            <img class="countryFlag" src="./images/${country.flag}">
            <h2>${country.name}</h2>
        </div>
        <img class="countryImage" src="./images/${country.imagesNormal[0]}">
        <p>${country.text}</p>

        <div id="languageVisaDiv">
            <div class="langVisastyle">
                <p>Språk: ${foundLanguages[0]} </P>
            </div>
            <div class="langVisastyle">
                <p>${country.visa === false ? 'Visum: Nej' : 'Visum: Ja'}</p>
            </div>
        </div>
        <div id="optionsContainer">
            <div class="optionsDiv">
                <select class="chooseCity" id="${country.name}">
                    <option selected disabled hidden>Välj stad</option>
                </select>
            </div>
        </div>

    `

  let optionsDiv = countryContainer.querySelector('.optionsDiv')

  let button = document.createElement('button')
  button.innerText = 'Till utbildningar'

  let programmes = getProgramByCountryId(country.id)
  optionsDiv.append(button)

  // event-listener to send the user to the right programme via the city
  button.addEventListener("click", function () {
    sessionStorage.setItem("programmes", JSON.stringify(programmes))
    window.location.href = "./utbildningar.html"
  })

  // to get the correct cities that belong to the choosen country
  let foundCities = getCitiesById(country)
  countryResult.append(countryContainer)
  let selectCity = document.querySelector(`#${country.name}`)


  // event-listener for the city-selector and what happens when choosing a city
  selectCity.addEventListener("change", function (event) {
    const city = CITIES.find(function (c) {
      if (c.name === event.target.value) {
        return true
      } else {
        return false
      }
    })

    selectCity.scrollIntoView()

    // removing the countries that are not relevant to the choosen city
    document.querySelectorAll(".container").forEach((element) => {
      if (city.countryID !== parseInt(element.id)) {
        element.remove()
      }
    })

    buildCity(city)

    // code to show comments and event-listener to show more comments

    let mooreComments = document.querySelector(".mooreComments")
    
    mooreComments.addEventListener('click', function () {
      getComments(orderedComments.length)
      if (showComments >= orderedComments.length) {
        mooreComments.style.display = 'none'
      }
    })

    initComments(city)
    getComments(2)
  })

  // connects the correct city to the options in the city selector
  for (let i = 0; i < foundCities.length; i++) {
    let option = document.createElement('option')
    option.text = foundCities[i]

    selectCity.append(option)
  }

  return countryContainer
}

// code that makes the select-bars empty when refreashing the page
let countryResult = document.getElementById('countryWrapper')
countryResult.innerHTML = ''

// go through the country database and create each country

if (sessionStorage.getItem('country') !== null) {
  const country = JSON.parse(sessionStorage.getItem('country'))
  buildCountry(country)
  sessionStorage.removeItem('country')
} else {
  for (let i = 0; i < COUNTRIES.length; i++) {
    buildCountry(COUNTRIES[i])
  }
}

// find the correct language based on the country id

function getLanguageById (country) {
  let foundLanguages = []

  for (let i = 0; i < COUNTRIES.length; i++) {
    for (let i = 0; i < LANGUAGES.length; i++) {
      if (country.languageID == LANGUAGES[i].id) {
        foundLanguages.push(LANGUAGES[i].name)
      }
    }
  }

  return foundLanguages
}

// find the correct cities based on country id

function getCitiesById (country) {
  let foundCities = []

  for (let i = 0; i < CITIES.length; i++) {
    if (country.id == CITIES[i].countryID) {
      foundCities.push(CITIES[i].name)
    }
  }
  return foundCities
}

// find the correct program based on country id

function getProgramByCountryId(id) {
  let foundCountry = []

  for (let j = 0; j < CITIES.length; j++) {
    if (id == CITIES[j].countryID) {
      for (let f = 0; f < UNIVERSITIES.length; f++) {
        if (UNIVERSITIES[f].cityID == CITIES[j].id) {
          for (let r = 0; r < PROGRAMMES.length; r++) {
            if (PROGRAMMES[r].universityID == UNIVERSITIES[f].id) {
              foundCountry.push(PROGRAMMES[r])
            }
          }
        }
      }
    }
  }

  return foundCountry
}
