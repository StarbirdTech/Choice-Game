function level3() {
  let gui

  this.enter = function() {
    background('#424549');
    gui = createGui();
    s = createSlider("Slider", width/8, height/2-20, width*.75, 60);
    b = createButton("Skip", 450, 550);
    fill('#EF2E72')
    text('Move the Slider', width/2, 150);
  }

  this.draw = function() {
    drawGui();

    if(b.isPressed && b.label == "Next") {
      lv3 = s.val;
      setTimeout(sm.showNextScene(),1000);
    }

    if (s.isChanged) {
      b.label = "Next";
    }
  }
}