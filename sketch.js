var sm; // scene manager

// Outputs sent to sheets
var lv1 = 'test';
var lv2 = 'test';
var lv3 = 'test';
var lv4 = 'test';
var R;
var G;
var B;

function setup()
{
  createCanvas(600, 600);
  sm = new SceneManager();
  sm.addScene ( menu );
  sm.addScene ( level1 );
  sm.addScene ( level2 );
  sm.addScene ( level3 );
  //sm.addScene ( level4 );
  sm.addScene ( endScreen );
  sm.showNextScene();
}

function draw() {sm.draw();}
function mousePressed() {sm.handleEvent("mousePressed")}
function mouseReleased() {sm.handleEvent("mouseReleased")}
function keyPressed() {sm.handleEvent("keyPressed")}

///////////////////////////
// Move stuff below here //
///////////////////////////

/////////////
// Utility //
/////////////

function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}

function sendDiscordMessage(message) {
  httpPost('https://discord.com/api/webhooks/971592413036568597/jG4ly6cLV2x0vLgmltugVaWURDKZg85c6rG-Rfrl_HJlKr-r2y-n0kEPjg7Z-LnEgFE6', 'json', {"content": message,"embeds": null,"attachments": []})
}

function level4old() {
  let gui;
  let r;
  let g;
  let b;
  let h;
  let w;
  let button;

  this.enter = function() {
    createCanvas(600, 600);
    background('#424549');
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

function level5() {
  let x = [0, 0];
  let output = [0, 0];
  let choice = 1;
  let message = 'Choose A Door'

  this.enter = function() {
    background(100);
    gui = createGui();
    b = createButton("Skip", 450, 550);
    createCanvas(600, 600);
    background(100);
    strokeWeight(5);
  }
  this.draw = function() {
    drawGui();
    if(b.isPressed) {
      lv5 = '1';
      setTimeout(sm.showNextScene(),1000);
    }
  }
}