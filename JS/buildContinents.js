"use strict";

// Function to create the continents on the homepage.

function buildContinents() {
  for (let i = 0; i < CONTINENTS.length; i++) {
    let continent = document.createElement("div");
    continent.innerHTML = `
            <img class="continent_images" src="./images/${CONTINENTS[i].image}"</img>
            <h2> ${CONTINENTS[i].name}</h2>
        `;
    if (CONTINENTS[i].countries == 0) {
      continent.style.opacity = "0.4";
    }

    let globesContainer = document.getElementById("globes");
    globesContainer.append(continent);

    // Event-listener to add a pop-up that contains the countries on the continent.

    continent.addEventListener("click", function (event) {
      let foundC = getCountryByContinentId(CONTINENTS[i].id);

      let popupHTML = document.querySelector(".continent_images");
      if (document.querySelector(".active")) {
        let overlay = document.querySelector(".overlay");
        popupHTML.classList.remove("active");
        overlay.remove();
      } else {
        let popHTML = document.querySelector(".hamburger");
        popHTML.style.display = "none";
        let overlay = document.createElement("div");
        overlay.classList.add("overlay");
        popupHTML.classList.add("active");

        // creates and appends a close-icon on the country pop-up

        let close = document.createElement("a");
        close.classList.add("close");
        close.href = "#";
        overlay.append(close);

        // if-statement to deliver message about no current educations in choosen continent

        if (foundC.length === 0) {
          let sorry = document.createElement("p");
          sorry.classList.add("sorry");
          sorry.innerText =
            "Tyvärr finns inga utbildningar tillgängliga i" +
            ` ${CONTINENTS[i].name}`;
          overlay.append(sorry);
        }

        // event-listener that redirects the user to the index.html page

        close.addEventListener("click", function (event) {
          window.location.href = "./index.html";
        });

        let wrap = document.querySelector("#wrapper");
        wrap.append(overlay);

        foundC.forEach((country) => {
          popupCountries(country, overlay);
        });
      }
    });
  }
}

// Function to find the country by its continent-ID.

function getCountryByContinentId(id) {
  let foundCountry = [];

  for (let f = 0; f < COUNTRIES.length; f++) {
    if (id == COUNTRIES[f].contitentId) {
      foundCountry.push(COUNTRIES[f]);
    }
  }
  return foundCountry;
}

// Function to create the countries (image and name),

function popupCountries(country, overlay) {
  let countries = document.createElement("div");
  countries.classList.add("country");

  countries.innerHTML = `

  <img class="country_images" src="./images/${country.imagesNormal[0]}"</img>
  <h2>${country.name}</h2>
  `;

  // Event-listener that redirect to destinationer.html and sends the country-information using session storage.

  countries.addEventListener("click", function () {
    sessionStorage.setItem("country", JSON.stringify(country));
    window.location.href = "./destinationer.html#one";
  });

  overlay.append(countries);
}

// Running the function.

buildContinents();

// Redirect to utbildningar.html when clicking the book icon.

document.getElementById("bookicon").onclick = function () {
  location.href = "utbildningar.html";
};
