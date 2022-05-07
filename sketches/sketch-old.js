var currentLevel = 0;
var maxLevel = 2;

/*
let lvl1SquareX = [150, 300, 450]
let lvl1SquareY = [150, 300, 450]
*/

var lvl1squareSize = 200;
var lvl1squaresClicked = 0;
var lvl1squares = [false, false, false, false, false, false, false, false, false];
var lvl1gridSquares = [];

let lvl2x = 120;
let lvl2sliderNumber = 0

class playButton {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.col = color(255, 100, 76);
    this.diameter = 150;
    this.triSmall = this.diameter / 6.66;
    this.triLarge = this.diameter / 3.33;

    this.display = function () {
      noStroke();
      strokeWeight(10);
      fill(this.col);
      ellipse(this.x, this.y, this.diameter, this.diameter);
      fill(0);
      triangle(
        this.x + this.diameter / 3.33,
        this.y,
        this.x - this.diameter / 6.66,
        this.y - this.diameter / 3.33,
        this.x - this.diameter / 6.66,
        this.y + this.diameter / 3.33
      );
      fill(this.col);
    };

    this.clicked = function () {
      var d = dist(mouseX, mouseY, this.x, this.y);
      if (d < this.diameter / 2) {
        return true;
      }
    };

    this.hover = function () {
      var d = dist(mouseX, mouseY, this.x, this.y);
      if (d < this.diameter / 2) {
        if (this.diameter < 200) {
          this.diameter += 5;
        }
      } 
      else if (this.diameter > 150) {
        this.diameter -= 5;
      } 
    }
  }
}

class square {
    constructor(x, y, w) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.fill = 100;

        this.display = function () {
          stroke(0);
          strokeWeight(10);
          fill(this.fill);
          rectMode(CORNER);
          rect(x,y,w,w,10);
        }
        this.clicked = function () {
          var d = dist(mouseX, mouseY, this.x, this.y);
          if (d < this.w / 2) {
            this.fill = 200;
            return true;
          }
        }
    }
}

function nextLevel() {
  currentLevel++;
  if (currentLevel > maxLevel) {
    currentLevel = 0;
  }
  setupLevel();
}

function setup() {
  createCanvas(600, 600);
  setupLevel();
}

function draw() {
  drawLevel();
}

function setupLevel() {
  switch (currentLevel) {
    case 0:
      background(0);
      menuPlay = new playButton(width / 2, height * 0.75);
      break;
    case 1:
      //reset variables
      lvl1squaresClicked = 0;
      for (var i = 0; i < lvl1squares.length; i++) {
        lvl1squares[i] = false;
      }

      //create grid
      for (let squareY = 0; squareY <= height - lvl1squareSize; squareY += lvl1squareSize) {
        for (let squareX = 0; squareX <= width - lvl1squareSize; squareX += lvl1squareSize) {
          lvl1gridSquares.push(new square(squareX, squareY, lvl1squareSize)) // will not work if setup is called multiple times
        }
      }
      break;
    case 2:
        ellipseMode(CENTER);
        break;
  }
}

function drawLevel() {
  switch (currentLevel) {
    case 0:
      background(0);
      textSize(75);
      textAlign(CENTER);
      text("𝘾𝙝𝙤𝙤𝙨𝙚 𝙒𝙞𝙨𝙚𝙡𝙮", width / 2, height * 0.33);
      menuPlay.display();
      menuPlay.hover();
      break;
    case 1:
      background(0);
      //draw grid
      for (let i = 0; i < lvl1gridSquares.length; i++) {
        lvl1gridSquares[i].display();
      }
      break;
    case 2:
        background(100);
        fill(200);
        strokeWeight(30);
        line(120, 300, 470, 300);
        fill(100);
        circle(lvl2x, 300, 50);

        if (mouseIsPressed) {
            lvl2x = clamp(mouseX, 120, 470);
        }
        sliderNumber = Math.round(map(lvl2x-120, 0, 350, 0, 100))
      break;
  }
}

function mousePressed() {
  switch (currentLevel) {
    case 0:
      if (menuPlay.clicked()) {
        nextLevel();
      }
      break;
    case 1:
      for (let i = 0; i < lvl1gridSquares.length; i++) {
        if (lvl1gridSquares[i].clicked()) {
          nextLevel();
        }
      }
      break;
  }
}

function mouseReleased() {
  switch (currentLevel) {
    case 1:
      if (lvl1squaresClicked > 0) {
        nextLevel();
      }
      break;
  }
}


function keyPressed() {
  if (keyCode === ENTER) {
    currentLevel++;
    if (currentLevel > maxLevel) {
      currentLevel = 0;
    }
    setupLevel();
  }
}

function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
  }