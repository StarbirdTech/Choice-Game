let x = 300;

function setup() {
  createCanvas(600, 600);
  ellipseMode(CENTER);
}

function draw() {
  background(100);
  strokeWeight(30);
  line(120, 300, 470, 300);
  fill(100)
  circle(x, 300, 50);

  if (mouseIsPressed) {
    x = clamp(mouseX, 120, 470)
  }
}

function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}
