"use strict";

let buttons = document.querySelectorAll(".showMoreLess");
let div = document.querySelectorAll("#moreInformation");

function showMoreLessToButtons() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      if (div[i].classList.contains("hidden")) {
        div[i].classList.remove("hidden");
      } else {
        div[i].classList.add("hidden");
      }
    });
  }
}

showMoreLessToButtons();

// Fungerar endast när man inte har gjort något val.
// Hur gör man så det alltid fungerar? :)

