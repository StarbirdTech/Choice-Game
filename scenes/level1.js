function level1() {
    var rectSize = 100;
    var clicked = 0;
    var offsetX;
    var offsetY;
    var checkBox = [];
    var gui;
  
    this.enter = function() {
      gui = createGui();
      clicked = 0;
      stroke(0);
      strokeWeight(5);
      fill(color('#EF2E72'));
      push()
      rectMode(CENTER)
      translate(rectSize,rectSize)
      scale(.5)
      b = createButton("Skip", 450, 550);
      offsetX = rectSize*3/2;
      offsetY = rectSize*3/2;
      for (let squareY = 0; squareY <3; squareY++) {
        for (let squareX = 0; squareX <3; squareX++) {
          checkBox.push(createCheckbox("grid", squareX * rectSize+offsetX, squareY * rectSize + offsetY, rectSize, rectSize));
        }
      }
      pop()
    }
  
    this.draw = function() {
      background('#424549');
      rectMode(CENTER);
      fill(0);
      rect(width/2, height/2, 200, 200);
      drawGui();
      strokeWeight(5);
      textSize(48);
      textAlign(CENTER);
      fill(color('#EF2E72'));
      text("Chose a square", width/2, 100)
      for (let boxClicked = 0; boxClicked < checkBox.length; boxClicked++) {
        if(checkBox[boxClicked].isChanged) {
          for (let i = 0; i < checkBox.length; i++) {
            if (i != boxClicked) {
              checkBox[i].val = false;
            }
          }
        }
      }
    }
  
    this.mousePressed = function() {
      if (b.isPressed) {
        for (let i = 0; i < checkBox.length; i++) {
          if (checkBox[i].val == true) {
            lv1 = i;
            print(lv1);
            break;
          }
        }
        sm.showNextScene();
      }
    }
  }