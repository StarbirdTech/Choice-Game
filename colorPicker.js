let gui;
let r;
let g;
let b;
let h;
let w;

function setup() {
  createCanvas(600, 600);
  background(100);
  strokeWeight(5);
  textSize(30);
  textAlign(CENTER);

  h = height/4;
  w = width/6;

  gui = createGui();
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

function draw(){
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
  fill(10);
  text('R', width*.25, r.y-15);
  text('G', width*.5, g.y-15);
  text('B', width*.75, b.y-15);
  fill(r.val, g.val, b.val);
  circle(width/2, height*.25, height*.33);
}