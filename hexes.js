var boardRadius = 4;
var size;
var originHex;
var hexes = [];
var hex_color = [];
var mainLayout;
var count = 0;

function setup()
{
  input = createInput();
  input.position(20, 20);

  button = createButton('Red');
  button.position(input.x + input.width + 7, 20);
  button.mousePressed(change_color(255, 0, 0));

  createCanvas(windowWidth, windowHeight);
  background(25);
  angleMode(degrees);
  size = Point(30,30);
  originPixel = Point(width/2, height/2);
  mainLayout = hexLayout(pointyOrient, size, originPixel)
  hexGenerateBoard(boardRadius, hexes, Hex(0,0,0), hex_color);
  originHex = Hex(0,0,0);
  stroke(255);
}

function draw()
{
  noStroke()
  background(50);
  push();
  translate(width/2, height/2);
  hexDrawArray(mainLayout, hexes, hex_color);
  pop();
  fill(200);
  text(hexes[0].q, 20, 60); // x
  text(hexes[0].s, 40, 60); // y
  text(hexes[0].r, 60, 60); // z
  text(hexGetCoord(hexes[0]), 80, 60); // color
}

function change_color(hexColor) {
  hexNumTotal = hexes.length-1;
  hexNum = input.value();
  if (hexNum > hexNumTotal) {
    hexNum = hexNumTotal;
  }
  else if (hexNum < 0) {
    hexNum = 0;
  }
  hex_color[hexNum] = hexColor;
  count++
  if (count > hexNumTotal)
  {
    count = 0;
  }
}