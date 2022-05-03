

const countryTest = {
    name: "Spanien",
    bild: "./images/spanien01.jpg"
}

function buildCountryElement (country = countryTest){
    const countryHTML = document.createElement("div");

    countryHTML.innerHTML = `
        <h2>${country.name}</h2>
        <div class="bild"></div>
    `
}