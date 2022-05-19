"use strict";

function buildHeader() {
	let header = document.getElementById("headerDiv");
	let headerDiv = document.createElement("div");
	headerDiv.classList.add("header");

	header.append(headerDiv);


	let logga = document.createElement("img");
	logga.src = "./images/logga.svg";
	logga.classList.add("logga")
	logga.setAttribute('id', 'logga');
	headerDiv.append(logga);

	// Redirecting to homepage when icon is clicked/tapped.

	document.getElementById("logga").onclick = function () {
		location.href = "index.html"; // Change later depending on how the url works.
	}

	let hamburgerMenu = document.createElement("img")
	hamburgerMenu.src = "./images/Hamburger_icon.png";
	hamburgerMenu.classList.add("hamburger");
	headerDiv.append(hamburgerMenu);
	hamburgerMenu.addEventListener('click', function () {
		BurgerMenu();
	})


	return headerDiv;
}

const MENU_LINKS = [
	{
		name: "Hitta din utbildning",
		url: './utbildningar.html'
	},
	{
		name: "Destinationer",
		url: './destinationer.html'
	},
	{
		name: "Om oss",
		url: './index.html#around'
	},
]


function BurgerMenu() {

	let burgerHTML = document.querySelector(".hamburger");
	if (document.querySelector(".menuactive")) {
		let overlay = document.querySelector(".meny");
		burgerHTML.classList.remove("menuactive");
		overlay.remove();
	} else {
		let overlay = document.createElement("div");
		overlay.classList.add("meny");
		burgerHTML.classList.add("menuactive");
		let wrap = document.querySelector("#headerDiv");
		wrap.append(overlay);
		for (let link of MENU_LINKS) {
			const linkElem = document.createElement('a');
			linkElem.href = link.url;
			linkElem.innerHTML = link.name;
			linkElem.addEventListener("click", function(){
				burgerHTML.classList.remove("menuactive");
				overlay.remove();
			})
			overlay.append(linkElem);
		}
	}
}



buildHeader();