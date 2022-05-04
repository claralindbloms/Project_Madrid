"use strict";

const CONTINENTS = [
    {
      name: "Afrika",
      countries: [],
    },
  
    {
      name: "Asien",
      countries: [],
    },
  
    {
      name: "Europa",
      countries: [0, 1, 3, 4],
    },
  
    {
      name: "Nordamerika",
      countries: [5, 6]
    },
  
    {
      name: "Oceanien",
      countries: [2],
    },
  
    {
      name: "Sydamerika",
      countries: [7, 8],
    },
  ];
  
function buildContinents () {
    
    for (let i = 0; i < CONTINENTS.length; i++) {
        
        let continent = document.createElement("div");
        continent.innerHTML = `
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

