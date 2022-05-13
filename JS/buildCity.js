"use strict";

 let countryResult = document.getElementById("countryWrapper");
 countryResult.innerHTML = "";

function buildCity (city) {

    let countryResult = document.getElementById("countryWrapper");
    let cityContainer = document.createElement("div");
    cityContainer.classList.add("cityContainer");


    // let foundGrade = averageGradeProgramme();

    let foodGrade = averageGradeCity(city, "food");
    let accomodationGrade = averageGradeCity(city, "accomodation");
    let outGrade = averageGradeCity(city, "out");

    cityContainer.innerHTML = `
    <h2>${city.name}</h2>
    <img class="cityImage" src="./images/${city.imagesNormal[0]}">
    <p>${city.text}</p>
    <div id="grades">
            <div class="grade">
                <p>Mat</p>
                <p>${foodGrade}/5</p>
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
    </div>
    <button>Till utbildningar</button>
    `;



    // div för kommentarer, två nyaste visar, sen visa mer - Clara



    countryResult.append(cityContainer);
}

// för att städerna inte ska visas direkt när destinations-sidan öppnas

let countryResult = document.getElementById("countryWrapper");
countryResult.innerHTML = "";

for (let i = 0; i < CITIES.length; i++){
    buildCity (CITIES[i]);
}

function getCitiesByCountryId (city) {
    let foundCities = [];

    for (let i = 0; i < COUNTRIES.length; i++) {
        for (let i = 0; i < CITIES.length; i++) {
            if (city.id == CITIES[i].countryID) {
                foundCities.push(CITIES[i].name);
            }
        }
    }
    return foundCities;
}

function averageGradeCity (city, type) {
    let grade = [];
  
    COMMENTS_CITY.filter((comment) => {
      if (comment.cityID == city.id) {
        grade.push(comment.stars[type]);
      }
    });
  
    return averageCalc(grade);
  }

function averageCalc(array) {
    let sum = 0;
  
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  
    let average = sum / array.length;
  
    let averageGrade = Math.round(average * 10) / 10;
  
    return averageGrade;
  }