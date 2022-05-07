var lvl1squareSize = 200;
var lvl1squaresClicked = 0;

function setup() {
  createCanvas(600, 600);
  background('#424549');
  lvl1squaresClicked = 0;
  strokeWeight(10);
  fill(100);
  for (let squareY = 0; squareY <= height-lvl1squareSize; squareY += lvl1squareSize) {
    for (let squareX = 0; squareX <= width-lvl1squareSize; squareX += lvl1squareSize) {
      rect(squareX, squareY, lvl1squareSize, lvl1squareSize, 10);
    }
  }
}

function draw() {  
}

function mousePressed() {
  column = floor(mouseX/lvl1squareSize)
  row = floor(mouseY/lvl1squareSize)
  fill(200);
  rect(column*lvl1squareSize, row*lvl1squareSize, lvl1squareSize, lvl1squareSize, 10)
  lvl1squaresClicked++; // FIXME: Check if new square is clicked
  fill(0);
  text(lvl1squaresClicked, mouseX, mouseY);
}