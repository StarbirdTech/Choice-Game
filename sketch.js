var lv1 = 'test';
var lv2 = 0;
var lv3 = 'test';
var lv4 = 'test';
var R
var G
var B

var output = [];

let l1

function setup()
{
  createCanvas(600, 600);
  l1 = new level1();
  l1.setup();
}

function draw() {
  l1.draw();
}