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


function BurgerMenu (){
    let burgerHTML = document.createElement("div");
    burgerHTML.innerHTML = `
	<h1>MENY</h1>
	`;
	//append darkMode
	//append close
}

const MENU_LINKS = [
	{
		name: "Hitta din utbildning",
		url: './utbildningar.html'
	},
	{
		name: "Destinationer",
		url: './utbildningar.html'
	},
	{
		name: "Om oss",
		href: './index.html#aboutus'
	},
]

let header

for (let link of MENU_LINKS){
	const linkElem = document.createElement('a');
	a.href = link.url;
	a.innerHTML = link.name;
	header.append(linkElem);
}