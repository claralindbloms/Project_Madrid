"use strict";

function buildContinents () {
    for (let i = 0; i < CONTINENTS.length; i++) {
        
        let continent = document.createElement("div");
        continent.innerHTML = `
            <img class="continent_images" src="../images/${CONTINENTS[i].image}"</img>
            <h2>${CONTINENTS[i].name}</h2>
        `
        let globesContainer = document.getElementById("globes");
        globesContainer.append(continent);
    }
}

buildContinents();


document.getElementById("bookicon").onclick = function () {
    location.href = "utbildningar.html"; // Change later depending on how the url works.
}