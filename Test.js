let x = [150, 300, 450]
let y = [150, 300, 450]

let squares = []

function setup(){
  createCanvas(600,600);
  rectMode(CENTER)
  squares.push(new square(150, 150, 120))
}

function draw(){
    background(100);
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            rect(x[i], y[j], 120)
        }
    }
}

class square{
  constructor(i, j){
    this.i = i
    this.j = j
    
    this.draw = function(){
      rect(x[this.i], y[j], 120)
    }
  }
}