var lv1 = 'test';
var lv2 = 0;
var lv3 = 'test';
var lv4 = 'test';
var R
var G
var B

function setup()
{
  createCanvas(600, 600);
  sm = new SceneManager();
  sm.addScene ( level4 );
  sm.addScene ( level1 );
  sm.addScene ( level2 );
  sm.addScene ( level3 );
  //sm.addScene ( level4 );
  sm.addScene ( endScreen );
  sm.showNextScene();
}

var output = [];

let currentlevel = 1;

let l1

function setup() {
  createCanvas(600, 600);
  l1 = new level1();
  l1.setup();
}

function draw() {
  switch(currentlevel) {
    case 1:
      l1.draw();
      break;
    case 2:
      l2.draw();
      break;
    case 3:
      l3.draw();
      break;
  }
}

function mousePressed() {
  l1.mousePressed();
}