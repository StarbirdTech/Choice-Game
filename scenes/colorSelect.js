let r = [255,255,255,0,0,75]
let g = [0,127, 255,255,0,0]
let b = [0  , 0  , 0  , 0  ,255,130]

let shape;

function setup() {
  createCanvas(600, 600);
  background('#424549');
  strokeWeight(5);
}

function draw(){
  let index = -1;
  for(let i = 0; i < 2; i++){
    for(let j = 0; j < 3; j++){
      index ++;
      x = (i * width) / 2 + 100;
      y = (j * height) / 3 + 50;
      fill(r[index], g[index], b[index]);
      shape = new color();
      shape.x = x;
      shape.y = y;
      rect(shape.x, shape.y, 100, 100, 5);
    }
  }
}

class color{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}