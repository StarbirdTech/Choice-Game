var sm; // scene manager
var lv1 = 'test';
var lv2 = 'test';
var lv3 = 'test';
var lv4 = 'test';
var R
var G
var B

function setup()
{
  createCanvas(600, 600);
  sm = new SceneManager();
  sm.addScene ( menu );
  sm.addScene ( level1 );
  sm.addScene ( level2 );
  sm.addScene ( level3 );
  sm.addScene ( level4 );
  sm.addScene ( endScreen );
  sm.showNextScene();
}

function draw()
{
  sm.draw();
}

function mousePressed() {sm.handleEvent("mousePressed")}
function mouseReleased(){sm.handleEvent("mouseReleased")}
function keyPressed(){sm.handleEvent("keyPressed")}

/////////////////
// Play Button //
/////////////////
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
          sendDiscordMessage("Play Button Pressed");
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

/////////////
// Utility //
/////////////

function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}

function sendDiscordMessage(message) {
  httpPost('https://discord.com/api/webhooks/971592413036568597/jG4ly6cLV2x0vLgmltugVaWURDKZg85c6rG-Rfrl_HJlKr-r2y-n0kEPjg7Z-LnEgFE6', 'json', {"content": message,"embeds": null,"attachments": []})
}
////////////
// Levels //
////////////
function menu() {
  let menuPlay

  this.enter = function() {
    menuPlay = new playButton(width/2, height*.75);
    textSize(75);
    textAlign(CENTER);
  }

  this.draw = function() {
    background(0);
    text("Randomness", width / 2, 120);

    menuPlay.display();
    menuPlay.hover();
  }
}

function level1() {
  var lvl1squareSize = 200;
  var lvl1squaresClicked = 0;

  this.enter = function() {
    background(0);
    lvl1squaresClicked = 0;
    stroke(0);
    strokeWeight(10);
    fill(color(255, 100, 76));
    for (let squareY = 0; squareY <= height-lvl1squareSize; squareY += lvl1squareSize) {
      for (let squareX = 0; squareX <= width-lvl1squareSize; squareX += lvl1squareSize) {
        rect(squareX, squareY, lvl1squareSize, lvl1squareSize, 10);
      }
    }
  }

  this.mousePressed = function() {
    setTimeout(function() {
      if (lvl1squaresClicked == 0) {
        lvl1squaresClicked++;
        lv1 = 'Square Clicked';
        sm.showNextScene();
      }
    }, 1000);
  }
}

function level2 () {
  let buttonHight = 50;
  let pressed = false;
  let difference = 0;
  let mouseDown = false;
  let clicked = false;
  let gui;
  let message = "Do Not Press the Button";

  this.enter = function() {
    rectMode(CENTER);
    background(100);
    strokeWeight(5);
    textSize(40);
    textAlign(CENTER);
    gui = createGui();
    b = createButton("Skip", 450, 550);
  }

  this.draw = function() {
    if (clicked) {
      b.label = "Next";
      message = "WHY DID YOU \n PRESS THE BUTTON?";
    }
    if(b.isPressed) {
      lv2 = '0';
      sm.showNextScene();
    }
    background(100)
    drawGui();
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
    }
    text(message, width/2, 100)
    if(mouseDown){
      if(difference <= 1){
        buttonHight = lerp(50, 30, difference)
        difference += 0.2
        if (clicked == false) {
          clicked = true;
          lv2 = '1';
        }
      }
    }
    else{
      if(difference >= 0){
        buttonHight = lerp(50, 30, difference)
        difference -= 0.2
      }
    }
  }

  this.mousePressed = function() {
    mouseDown = true;
    pressed = true;
  }

  this.mouseReleased = function() {
    mouseDown = false;
    pressed = false;
  }
}

function level3() {
  let gui

  this.enter = function() {
    background(100);
    gui = createGui();
    s = createSlider("Slider", width/8, height/2-20, width*.75, 60);
    b = createButton("Skip", 450, 550);
    text('Move the Slider', width/2, 150);
  }

  this.draw = function() {
    drawGui();

    if(b.isPressed && b.label == "Next") {
      lv3 = s.val;
      setTimeout(sm.showNextScene(),1000);
    }

    if (s.isChanged) {
      b.label = "Next";
    }
  }
}

function level4() {
  let gui;
  let r;
  let g;
  let b;
  let h;
  let w;
  let button;

  this.enter = function() {
    createCanvas(600, 600);
    background(100);
    strokeWeight(5);
    textSize(30);
    textAlign(CENTER);

    h = height/4;
    w = width/6;

    gui = createGui();
    button = createButton("Chose Color", 450, 550);
    r = createSliderV("red", width*.25-w/2, height*.75-h/2, w, h, 0, 255);
    r.min = 0;
    r.max = 255;
    g = createSliderV('green', width*.5-w/2, height*.75-h/2, w, h, 0, 255);
    g.min = 0;
    g.max = 255;
    b = createSliderV('blue', width*.75-w/2, height*.75-h/2, w, h, 0, 255);
    b.min = 0;
    b.max = 255;
  }

  this.draw = function() {
    r.setStyle({
      fillTrack: color(r.val, 0, 0),
      fillTrackHover: color(r.val, 0, 0),
      fillTrackActive: color(r.val, 0, 0),
    });
    g.setStyle({
      fillTrack: color(0, g.val, 0),
      fillTrackHover: color(0, g.val, 0),
      fillTrackActive: color(0, g.val, 0),
    });
    b.setStyle({
      fillTrack: color(0, 0, b.val),
      fillTrackHover: color(0, 0, b.val),
      fillTrackActive: color(0, 0, b.val),
    });
    drawGui();
    if(button.isPressed) {
      lv4 = r.val + ", " + g.val + ", " + b.val;
      R = r.val;
      G = g.val;
      B = b.val;
      sm.showNextScene();
    }
    noStroke();
    fill(10);
    text('R', width*.25, r.y-15);
    text('G', width*.5, g.y-15);
    text('B', width*.75, b.y-15);
    stroke(0);
    fill(r.val, g.val, b.val);
    circle(width/2, height*.25, height*.33);
  }
}

function endScreen() {
  this.enter = function() {
    background(0);
    textSize(75);
    textAlign(CENTER);
    fill(255);
    text("End Screen", width / 2, height/2);
    httpPost('https://sheet2api.com/v1/OL0isnynQyCu/test/Sheet1', 'json',
    {
      "Level 1": lv1,
      "Level 2": lv2,
      "Level 3": lv3,
      "Level 4": lv4
    });
  }
}