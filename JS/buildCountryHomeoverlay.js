// function buildCountryHomeOverlay () {
//     for (let i = 0; i < COUNTRIES.length; i++) {

//         let country = document.createElement("div");
//         country.innerHTML = `
//             <img class="country_images" src="./images/${COUNTRIES[i].imagesNormal[1]}"</img>
//             <h2>${COUNTRIES[i].name}</h2>
//         `
//         let globesContainer = document.getElementById("globes");
//         globesContainer.append(country);
//     }
// }

buildCountryHomeOverlay();


function on() {
    document.getElementById("overlay").style.display = "block";

    for (let i = 0; i < COUNTRIES.length; i++) {

        let country = document.createElement("div");
        country.innerHTML = `
            <h2 class="country_header">${COUNTRIES[i].name}</h2>
            <img class="country_images" src="./images/${COUNTRIES[i].imagesNormal[1]}"</img>
           
        `
        let globesContainer = document.getElementById("globes");
        globesContainer.append(country);
    }
}

function off() {
    document.getElementById("overlay").style.display = "none";
    let body = document.getElementById ("wrapper");
    body.innerHTML =""
}
