var currentLevel = 0;
var maxLevel = 2;

var level = [];

var sm; // scene manager

function setup()
{
    createCanvas(600, 600);

    sm = new SceneManager();

    sm.addScene ( menu );
    sm.addScene ( level1 );
    sm.addScene ( level2 );

    sm.showNextScene();
}

function draw()
{
    sm.draw();
}

function mousePressed()
{
    sm.handleEvent("mousePressed");
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            sm.showScene( menu );
            break;
        case '2':
            sm.showScene( level1 );
            break;
        case '3':
            sm.showScene( level2 );
            break;
    }
    
    // ... then dispatch via the SceneManager.
    sm.handleEvent("keyPressed");
}

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
        if (mouseIsPressed) {
          sm.showNextScene();
        }
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

////////////////////////////////////////////////////////////////////////////////
/////////////////////           Levels           ///////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// level 0
function menu () {
  this.enter = function () {
    background(0);
    menuPlay = new playButton(width / 2, height * 0.75);
  }
  this.draw = function () {
    background(0);
    textSize(75);
    textAlign(CENTER);
    text("𝘾𝙝𝙤𝙤𝙨𝙚 𝙒𝙞𝙨𝙚𝙡𝙮", width / 2, height * 0.33);
    menuPlay.display();
    menuPlay.hover();
  }
}

class square {
  constructor() {
    var x = 0;
    var y = 0;
    var w = 100;
    var color = 100;
    var square;
    this.setup = function () {
      square = uxRect(x, y, w, w, 10);
      square.uxFill = color;
      square.uxEvent('click', background(200));
    };
  }
}

class squareGrid {
  constructor(x, y, w, h, col) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.col = col;
    this.grid = [];
    this.setup = function () {
      for (var i = 0; i < this.w; i++) {
        this.grid[i] = [];
        for (var j = 0; j < this.h; j++) {
          this.grid[i][j] = new square(i, j);
        }
      }
    };
  }
}

// level 1
function level1 () {
  var grid

  this.enter  = function () {
    grid = new square;
    background(200,0,0);
    grid.setup();
  }

  this.draw = function () {
  }
}

let test

// level 2
function level2 () {
  let buttonHight = 50;
  let pressed = false;

  this.enter = function () {
    rectMode(CENTER);
    background(100);
    strokeWeight(5);
    textSize(40);
    textAlign(CENTER)
  }

  this.draw = function () {
    background(100)
    fill(100)
    stroke(150)
    for (let i = 0; i < 50; i++) {
        if(i>=49 | i<=4){stroke(0)} else {stroke(150)}
        ellipse(300, 400-i, 400, 100)
    }
    fill(255, 0, 0)
    for (let j = 0; j < buttonHight; j++) {
      if(j>=buttonHight-1 | j<=4){stroke(0)} else {stroke(230, 0, 0)}
      ellipse(300, 340-j, 300, 75)
    text('Do Not Press This button', width/2, 100)
    if(mouseDown){
      if(difference <= 1){
        buttonHight = lerp(50, 30, difference)
        difference += 0.2
        print('hehehehehe')
      }
    }
    else{
      if(difference >= 0){
        buttonHight = lerp(50, 30, difference)
        difference -= 0.2
        print('hehehehehe')
      }
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
/////////////////////          Utility           ///////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}

function nextScene(delay = 0) {
  setTimeout(sm.showNextScene(), delay);
}