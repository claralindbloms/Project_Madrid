"use strict";
let chooseCity = document.getElementsByClassName(".chooseCity");

CITIES.forEach((city) => {
    let option = document.createElement("option");
    option.text = city.name;
    
    chooseCity.append(option);
}
)
chooseCity.addEventListener("change", function (event){
    const city = CITIES.find(function(c){
        if(c.name === chooseCity.value){
            return true;
        } else {
            return false; 
        }
    })
    let countryResult = document.getElementById("countryWrapper");

    countryResult.innerHTML = "";
    buildCity(city);
})