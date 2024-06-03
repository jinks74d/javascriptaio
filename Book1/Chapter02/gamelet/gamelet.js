/*
Gamelet: a starting point foe writing games
Author: Raymond Jenkins
Version: 1.0

Instructions: 
Include gamelet.js in an html element with an id of 'ball'.
The script will detect when the letf or right arrow key is pressed and will move the ball accordingly.
*/

const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let positionX = 0;
let positionY = 0;

/*
handleKeyPress
responds to certain key presses by updating the position
*/

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    positionX = positionX - 10;
  }
  if (e.code === "ArrowRight") {
    positionX = positionX + 10;
  }
  if (e.code === "ArrowDown") {
    positionY = positionY + 10;
  }
  if (e.code === "ArrowUp") {
    positionY = positionY - 10;
  }
  if (positionX < 10) {
    positionX = 0;
  }
  if (positionY < 10) {
    positionY = 0;
  }

  /*
  refresh
  changes the position of the ball
  */

  refresh();
}

function refresh() {
  ball.style.left = positionX + "px";
  ball.style.top = positionY + "px";
}
