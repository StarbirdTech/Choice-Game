var currentLevel = 0;
var maxLevel = 1;

/*
let lvl1SquareX = [150, 300, 450]
let lvl1SquareY = [150, 300, 450]
*/

var lvl1squareSize = 200;
var lvl1squaresClicked = 0;
var lvl1squares = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

class menuButton {
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
      } else {
        if (this.diameter > 150) {
          this.diameter -= 5;
        }
      }
    };
  }
}
/*
class square {
    constructor(x, y, w) {
        this.x = x;
        this.y = y;
        this.w = w;

        this.display = function () {
            noStroke();
            rectMode(CORNER);
            rect(x,y,w)
        }

        this.clicked = function () {
            if (mouseX > x && mouseX < x+w && mouseY > y && mouseY < y+w) {
                this.w+=100
            }
        }
    }
}
*/
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
      menuPlay = new menuButton(width / 2, height * 0.75);
      //testSquare = new square(300,300,100);
      break;
    case 1:
      //background(0);
      //rectMode(CENTER);
      background(0);
      lvl1squaresClicked = 0;
      stroke(0);
      strokeWeight(10);
      fill(100);
      for (
        let squareY = 0;
        squareY <= height - lvl1squareSize;
        squareY += lvl1squareSize
      ) {
        for (
          let squareX = 0;
          squareX <= width - lvl1squareSize;
          squareX += lvl1squareSize
        ) {
          rect(squareX, squareY, lvl1squareSize, lvl1squareSize, 10);
        }
      }
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
      //testSquare.display();
      break;
    case 1:
      /*
            background(100);
            for(let i = 0; i < 3; i++) {
                for(let j = 0; j < 3; j++) {
                    rect(lvl1SquareX[i], lvl1SquareY[j], 120)
                }
            }
            */
      break;
  }
}

function mousePressed() {
  switch (currentLevel) {
    case 0:
      if (menuPlay.clicked()) {
        nextLevel();
      }
      //testSquare.clicked();
      break;
    case 1:
      /*
            let squareIndex = floor(mouseX/lvl1squareSize) + floor(mouseY/lvl1squareSize)*3;
            column = floor(mouseX/lvl1squareSize)
            row = floor(mouseY/lvl1squareSize)
            rect(column*lvl1squareSize, row*lvl1squareSize, lvl1squareSize, lvl1squareSize, 10)
            if (lvl1squares[squareIndex] == false) {
                lvl1squares[squareIndex] = true;
                lvl1squaresClicked++;
            }
            if (lvl1squaresClicked >= 9) {
                nextLevel();
            }
            */
      nextLevel();
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
