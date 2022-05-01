let x = 300;
let number = 0

function setup() {
  createCanvas(600, 600);
  ellipseMode(CENTER);
}

function draw() {
  background(100);
  text(number, 20, 20)
  strokeWeight(30);
  line(120, 300, 470, 300);
  fill(100)
  circle(x, 300, 50);

  if (mouseIsPressed) {
    x = clamp(mouseX, 120, 470)
  }
  
  number = x-120
}

function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}
