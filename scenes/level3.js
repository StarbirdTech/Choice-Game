function level3() {
  let gui = createGui();
  let button = new nextLevelButton(false);

  this.enter = function() {
    button.create();
    button.isAnswered = false;
    background('#424549');
    s = createSlider("Slider", width/8, height/2-20, width*.75, 60);
    s.isChanged = false;
    fill('#EF2E72')
    text('Move the Slider', width/2, 150);
    fill(100);
    rect(550,550,100,100);
  }

  this.draw = function() {
    drawGui();
    if (s.isChanged) {
      button.isAnswered();
      print("slider moved");
    }
  }

  this.mousePressed = function() {
    button.clicked(s.val);
  }
}