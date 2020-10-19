var yellowButton = document.getElementById("yellow-button");
var redButton = document.getElementById("red-button");
var blueButton = document.getElementById("blue-button");
var orangeButton = document.getElementById("orange-button");
var whiteButton = document.getElementById("white-button");
var greenButton = document.getElementById("green-button");

var box = document.getElementById("box");
var topButtons = document.getElementById("top_buttons");


function createYellow() {
    var newDiv = document.createElement("div");
    newDiv.className = "square yellow";
   
    box.appendChild(newDiv);
}

yellowButton.addEventListener("click", createYellow);



function createRed() {
    var newDiv = document.createElement("div");
    newDiv.className = "square red";

    box.appendChild(newDiv);
}

redButton.addEventListener("click", createRed);



function createGreen() {
    var newDiv = document.createElement("div");
    newDiv.className = "square green";

    box.appendChild(newDiv);
}

greenButton.addEventListener("click", createGreen);



function createBlue() {
    var newDiv = document.createElement("div");
    newDiv.className = "square blue";

    box.appendChild(newDiv);
}

blueButton.addEventListener("click", createBlue);



function createWhite() {
    var newDiv = document.createElement("div");
    newDiv.className = "square white";

    box.appendChild(newDiv);
}

whiteButton.addEventListener("click", createWhite);



function createOrange() {
    var newDiv = document.createElement("div");
    newDiv.className = "square orange";

    box.appendChild(newDiv);
}

orangeButton.addEventListener("click", createOrange);