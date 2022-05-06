"use strict";

function buildContinents () {
    for (let i = 0; i < CONTINENTS.length; i++) {
        
        let continent = document.createElement("div");
        continent.innerHTML = `
            <img class="continent_images" src="../images/${CONTINENTS[i].image}"</img>
            <h2>${CONTINENTS[i].name}</h2>
        `
        let testDiv = document.getElementById("testDiv")
        testDiv.append(continent);
    }
}
