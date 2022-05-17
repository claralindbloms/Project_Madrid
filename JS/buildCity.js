'use strict'

function buildCity (city) {
  let countryResult = document.getElementById('countryWrapper')
  let cityContainer = document.createElement('div')
  cityContainer.className = 'cityContainer container'

  let foodGrade = averageGradeCity(city, 'food')
  let accomodationGrade = averageGradeCity(city, 'accomodation')
  let outGrade = averageGradeCity(city, 'out')

 

  // let comments = getComments(city);
  cityContainer.innerHTML = `
    <h2 class="cityName">${city.name}</h2>
    <img class="cityImage" src="./images/${city.imagesNormal[0]}">
    <p>${city.text}</p>
    <div id="grades">
            <div class="grade">
                <p>Mat</p>
                <p class="betyg">${foodGrade}/5</p>
            </div>
            <div class="grade">
                <p>Boende</p>
                <p>${accomodationGrade}/5</p>
            </div>
            <div class="grade">
                <p>Uteliv</p>
                <p>${outGrade}/5</p>
            </div>
        </div>
        <p id="disclaimer">Genomsnittligt betyg från tidigare studenter</p>

    <div id="comments">
        <h3>Kommentarer</h3>
        
        <button class="mooreComments">Visa fler kommentarer</button>
    </div>
    <button>Till utbildningar</button>
    `
    // <div>${comments}</div> 
  
// let betyg = document.getElementsByClassName(".betyg");

// if (betyg === NaN){
//     return "saknas";
// }

  countryResult.append(cityContainer)
  console.log(city)
}

function getCitiesByCountryId (city) {
  let foundCities = []

  for (let i = 0; i < COUNTRIES.length; i++) {
    for (let i = 0; i < CITIES.length; i++) {
      if (city.id == CITIES[i].countryID) {
        foundCities.push(CITIES[i].name)
      }
    }
  }
  return foundCities
}

function averageGradeCity (city, type) {
  let grade = []

  COMMENTS_CITY.filter(comment => {
    if (comment.cityID == city.id) {
      grade.push(comment.stars[type])
    }
    // else if (comment.cityID == NaN){
    //     grade.push("saknas")
    // }
  })

  return averageCalc(grade)
}

function averageCalc (array) {
  let sum = 0

  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }

  let average = sum / array.length

  let averageGrade = Math.round(average * 10) / 10

  return averageGrade
}

let orderedComments
let showComments = 0

function init (city) {
  orderedComments = COMMENTS_CITY.filter(
    comment => comment.cityID === city.id
  ).sort((comment1, comment2) => compareByDate(comment2.date, comment1.date))
}

function compareByDate (date1, date2) {
  if (date1.year > date2.year) {
    return 1
  } else if (date1.year < date2.year) {
    return -1
  } else {
    if (date1.month > date2.month) {
      return 1
    } else if (date1.month < date2.month) {
      return -1
    } else {
      if (date1.day > date2.day) {
        return 1
      } else if (date1.day < date2.day) {
        return -1
      } else {
        return 0
      }
    }
  }
}

function getComments (numberOfComments) {
  for (let i = showComments; i < showComments + numberOfComments; i++) {
    if (i === orderedComments.length) {
      break
    }
    let comment = orderedComments[i]
    let div = document.createElement('div')
    div.classList.add('comment')
    div.innerHTML = `<p>${comment.alias}, ${comment.date.year}</p>
        <p>"${comment.text}"</p>`
    // let box = document.getElementById("box"); //TO DO, get correct element
    // box.append(div);
  }
  showComments += numberOfComments
}

//function //TO DO button, skapa en egen funtion för detta?
let mooreComments = document.getElementsByClassName('.mooreComments')

mooreComments.addEventListener('click', function () {
  getComments(2)
})

init(city) //TO DO, correct city ID, dont have a number in init
getComments(2)
