// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;
let score = 0;
let bestScore = 0;

// Global Variables
let heliImg = document.createElement("img");
heliImg.src = "img/heliBlueTransparent.png";
let explosion = document.createElement("audio");
explosion.src = "sound/explosion.wav";
let propeller = document.createElement("audio");
propeller.src = "sound/propeller.wav";
let mouseIsPressed = false;
let state = "start";
// Global Variable (reset)
let heli;
let wall1;
let wall2;
let wall3;

reset();

// Draw Function
window.addEventListener("load", draw);

function draw() {
  if (state === "start") {
    drawStart();
  } else if (state === "gameon") {
    runGame();
  } else if (state === "gameover") {
    drawGameOver();
  }

  // Request Animation Frame
  requestAnimationFrame(draw);
}

//Event Stuff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);

function mousedownHandler() {
  mouseIsPressed = true;
  //propperl
  propeller.currentTime = 0;
  propeller.play();
  // Start Game Mousedown
  if (state === "start") {
    state = "gameon";
  }
}

function mouseupHandler() {
  mouseIsPressed = false;
  propeller.pause();
}
