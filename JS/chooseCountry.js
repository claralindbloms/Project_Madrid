'use strict'

// länka länderna till select

let chooseCountry = document.getElementById('chooseCountry')

window.onload = function () {
  chooseCountry.value = ''
}

COUNTRIES.forEach(country => {
  let option = document.createElement('option')
  option.text = country.name

  chooseCountry.append(option)
})

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
