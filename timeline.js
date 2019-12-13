"use strict";

window.addEventListener("DOMContentLoaded", loadSVG);

function loadSVG() {
  fetch("http://ilvalamberte.eu/timeline1.svg")
    .then(response => response.text())
    .then(svg => document.body.insertAdjacentHTML("afterbegin", svg));
}
