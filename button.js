let buttonHight = 50;
let pressed = false;

function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
    background(100);
    strokeWeight(5);
    textSize(40);
    textAlign(CENTER)
}

  function draw(){
      background(100)
      fill(100)
      stroke(150)
      for (let i = 0; i < 50; i++) {
          if(i>=49 | i<=4){stroke(0)} else {stroke(150)}
          ellipse(300, 400-i, 400, 100)
      }
      fill(250, 0, 0)
      noStroke()
      for (let j = 0; j < buttonHight; j++) {
        if(j>=buttonHight-1 | j<=4){stroke(0)} else {stroke(250, 0, 0)}
        ellipse(300, 340-j, 300, 75)
    }
    text('Do Not Press This button', width/2, 100)
    text(pressed, width/2, 200)
  }

  function mousePressed(){
    buttonHight -= 20
    pressed = true;
  }

  function mouseReleased(){
    buttonHight += 20
  }