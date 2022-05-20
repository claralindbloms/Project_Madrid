'use strict'

// Array of different ad-images.

var adArray = new Array(
  './ads/1.jpeg',
  './ads/2.jpeg',
  './ads/3.png',
  './ads/4.jpeg',
  './ads/5.png',
  './ads/6.jpeg',
  './ads/7.jpeg',
  './ads/8.jpeg',
  './ads/9.jpeg',
  './ads/10.png'
)

// Functions to generate random ads on the page.
function randomNumber(adArray) {
  return Math.floor(Math.random() * adArray.length)
}

function choosePic () {
  let adImage = document.getElementsByClassName('adImage')
  let one = document.getElementById('one')
  let two = document.getElementById('two')

  for (let i = 0; i < adImage.length; i++) {
    one.src = adArray[randomNumber(adArray)]
    two.src = adArray[randomNumber(adArray)]
  }
}

// When page is loaded, run the function to generate ads. 

window.onload = choosePic(randomNumber(adArray))
