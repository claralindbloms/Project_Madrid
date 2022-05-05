"use strict";

function on() {
    document.getElementById("overlay").style.display = "block";
  }

  function off() {
    document.getElementById("overlay").style.display = "none";

  }

// DETTA SKA VARA I HTML
//   <button id="overlay" onclick="off()">close</button>
//   <button onclick="on()">Europa</button>
//   <button onclick="on()">Asien</button>