function level4() {
  let r4 = [255, 255, 255, 0, 0, 75]
  let g4 = [0, 127, 255, 255, 0, 0]
  let b4 = [0, 0, 0, 0, 255, 130]

  let shape;
  
  let gui;

  let colorButton = [];

  this.enter = function() {
    background(100);
    gui = createGui();
    b = createButton("Skip", 450, 550);
    createCanvas(600, 600);
    background(100);
    strokeWeight(5);
    let index = 0;
    for(let i = 0; i < 2; i++){
      for(let j = 0; j < 3; j++){
        index ++;
        x = (i * width) / 2 + 150;
        y = (j * (height-100)) / 3 + 125;
        colorButton.push(createButton('test', x, y, 100, 100));
        
        colorButton[].setStyle({
          fillBg: "#FF0000"
        });
        
        //colorButton.setStyle(fillbg, color(r4[index], g4[index], b4[index]));
      }
    }
  }

  this.draw = function() {
    drawGui();
  }

  class color{
    constructor(x, y){
      this.x = x;
      this.y = y;
    }
  }
}