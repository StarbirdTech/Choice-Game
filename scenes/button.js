let buttonHight = 50;
let pressed = false;

function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
    background('#424549');
    strokeWeight(5);
    textSize(40);
    textAlign(CENTER)
}
  difference = 0;
  function draw(){
      background(100)
      fill(100)
      //text(pressed, width/2, 150)
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
      text('Do Not Press This button', width/2, 100)
      if(mouseDown){
        if(difference <= 1){
          buttonHight = lerp(50, 30, difference)
          difference += 0.25
        }
      }
      else{
        if(difference >= 0){
          buttonHight = lerp(50, 30, difference)
          difference -= 0.25
        }
      }
  }

  mouseDown = false;
  
  function mousePressed(){
    if(mouseY<=450){
      mouseDown = true;
      pressed = true;
    }
  }

  function mouseReleased(){
    mouseDown = false;
    //buttonHight += 20
  }