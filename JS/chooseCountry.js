'use strict'

// this code (5-33) finds the countries and adds them to the chooseCountry-selector

let chooseCountry = document.getElementById('chooseCountry')

// this part removes the earlier choosen value in the selector

window.onload = function () {
  chooseCountry.value = ''
}

// this part creates the options in the select-element

COUNTRIES.forEach(country => {
  let option = document.createElement('option')
  option.text = country.name

  chooseCountry.append(option)
})

// event-listener to change between the countries and build the choosen countrys "information"-div

chooseCountry.addEventListener('change', function (event) {
  const country = COUNTRIES.find(function (c) {
    if (c.name === chooseCountry.value) {
      return true
    } else {
      return false
    }
  })
  let countryResult = document.getElementById('countryWrapper')

  countryResult.innerHTML = ''
  buildCountry(country)
})
