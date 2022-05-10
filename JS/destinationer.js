"use strict";

// länka länderna till select

let chooseCountry = document.getElementById("chooseCountry");

COUNTRIES.forEach((country) => {
    let option = document.createElement("option");
    option.text = country.name;
    
    chooseCountry.append(option);
}
)
