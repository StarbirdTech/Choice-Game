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
    background('#424549');
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
    background('#424549')
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