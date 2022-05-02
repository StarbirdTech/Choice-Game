var squareSize = 200;
var G = 600;

function setup() {
  createCanvas(G, G);
  background(100);
  
  strokeWeight(10)
  fill(100);
  for (let circleY = 0; circleY <= G-squareSize; circleY += squareSize) {
    for (let circleX = 0; circleX <= G-squareSize; circleX += squareSize) {
      rect(circleX, circleY, squareSize, squareSize);
    }
  }
}

function draw() {  
}

function mousePressed() {
  column = floor(mouseX/squareSize)
  row = floor(mouseY/squareSize)
  fill(200);
  rect(column*squareSize, row*squareSize, squareSize, squareSize)

}