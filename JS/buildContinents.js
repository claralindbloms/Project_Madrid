"use strict";

const CONTINENTS = [
    {
      name: "Afrika",
      countries: [],
      image: "africa.png"
    },
  
    {
      name: "Asien",
      countries: [],
      image: "asia.png"
    },
  
    {
      name: "Europa",
      countries: [0, 1, 3, 4],
      image:"europe.png"
    },
  
    {
      name: "Nordamerika",
      countries: [5, 6],
      image:"north_america.png"
    },
  
    {
      name: "Oceanien",
      countries: [2],
      image:"oceania.png"
    },
  
    {
      name: "Sydamerika",
      countries: [7, 8],
      image:"south_america.png"
    },
  ];
  
function buildContinents () {
    for (let i = 0; i < CONTINENTS.length; i++) {
        
        let continent = document.createElement("div");
        continent.innerHTML = `
            <img src="./images/${CONTINENTS[i].image}"</img>
            <h2>${CONTINENTS[i].name}</h2>
        `
        let testDiv = document.getElementById("testDiv")
        testDiv.append(continent);
    }
}

buildContinents();


// function buildContinents ()
//     array…
//     loop through array
//         build each continent

