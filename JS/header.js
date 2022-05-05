"use strict";

function buildHeader() {
    let header = document.getElementById("headerDiv");
    let headerDiv = document.createElement("div");
    headerDiv.classList.add("header");

    header.append(headerDiv);


    let logga = document.createElement("img")
    logga.src = "../images/logga.svg";
    logga.classList.add("logga")
    headerDiv.append(logga);

    let hamburgerMenu = document.createElement("img")
    hamburgerMenu.src = "../images/Hamburger_icon.png";
    hamburgerMenu.classList.add("hamburger");
    headerDiv.append(hamburgerMenu);

    return headerDiv;
}

buildHeader();