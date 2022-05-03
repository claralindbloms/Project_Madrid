"use strict";

function buildHeader() {
    let body = document.body;
    let headerDiv = document.createElement("div");
    headerDiv.classList.add("header");

    body.append(headerDiv);


    let logga = document.createElement("img")
    logga.src = "logga.svg";
    logga.classList.add("logga")
    headerDiv.append(logga);

    let hamburgerMenu = document.createElement("img")
    hamburgerMenu.src = "Hamburger_icon.png";
    hamburgerMenu.classList.add("hamburger");
    headerDiv.append(hamburgerMenu);

    return headerDiv;
}