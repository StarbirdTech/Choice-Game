var x = 120;
var sliderNumber = 0

function setup() {
  createCanvas(600, 600);
  ellipseMode(CENTER);
}

function draw() {
  background('#424549');
  fill(200)
  textSize(200)
  strokeWeight(30);
  line(120, 300, 470, 300);
  fill(100);
  circle(x, 300, 50);

  if (mouseIsPressed) {
    x = clamp(mouseX, 120, 470);
  }
  sliderNumber = Math.round(map(x-120, 0, 350, 0, 100))
}

function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}
