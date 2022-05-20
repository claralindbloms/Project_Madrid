'use strict'

function buildContinents () {
  for (let i = 0; i < CONTINENTS.length; i++) {
    let continent = document.createElement('div')
    continent.innerHTML = `
            <img class="continent_images" src="./images/${CONTINENTS[i].image}"</img>
            <h2> ${CONTINENTS[i].name}</h2>
        `
    if (CONTINENTS[i].countries == 0) {
      continent.style.opacity = '0.4'
    }

    let globesContainer = document.getElementById('globes')
    globesContainer.append(continent)

    continent.addEventListener('click', function (event) {
      let foundC = getCountryByContinentId(CONTINENTS[i].id)
      let popupHTML = document.querySelector('.continent_images')
      if (document.querySelector('.menuactive')) {
        let overlay = document.querySelector('.overlay')
        popupHTML.classList.remove('menuactive')
        overlay.remove()
      } else {
        let burgerHTML = document.querySelector('.hamburger')
        burgerHTML.style.display = 'none'
        let overlay = document.createElement('div')
        overlay.classList.add('overlay')
        popupHTML.classList.add('menuactive')
        let close = document.createElement('a')
        close.classList.add('close')
        close.href = '#'
        overlay.append(close)

        close.addEventListener('click', function (event) {
          window.location.href = './index.html'
        })

        let wrap = document.querySelector('#wrapper')
        wrap.append(overlay)

        foundC.forEach(country => {
          popupCountries(country, overlay)
        })
      }
    })
  }
}

function getCountryByContinentId (id) {
  let foundCountry = []

  for (let f = 0; f < COUNTRIES.length; f++) {
    if (id == COUNTRIES[f].contitentId) {
      foundCountry.push(COUNTRIES[f])
    }
  }
  return foundCountry
}

function popupCountries (country, overlay) {
  let countries = document.createElement('div')
  countries.classList.add('country')

  countries.innerHTML = `
            <img class="country_images" src="./images/${country.imagesNormal[0]}"</img>
            <h2>${country.name}</h2>
        `

  countries.addEventListener('click', function () {
    sessionStorage.setItem('country', JSON.stringify(country))
    window.location.href = './destinationer.html'
  })

  overlay.append(countries)
}

buildContinents()

document.getElementById('bookicon').onclick = function () {
  location.href = 'utbildningar.html'
}
