function level4() {
  let r4 = [255, 255, 255, 0, 0, 75]
  let g4 = [0, 127, 255, 255, 0, 0]
  let b4 = [0, 0, 0, 0, 255, 130]
  
  let gui;
  let button = createButton(" ", 450, 550);

  this.enter = function() {
    background('#424549');
    gui = createGui();
    button.create();
    createCanvas(600, 600);
    background('#424549');
    strokeWeight(5);
  }

  this.draw = function() {
    drawGui();

    let index = -1;
    for(let i = 0; i < 2; i++){
      for(let j = 0; j < 3; j++){
        index ++;
        x = (i * width) / 2 + 150;
        y = (j * (height-100)) / 3 + 125;
        fill(r4[index], g4[index], b4[index]);
        rectMode(CENTER);
        rect(x, y, 100, 100, 5);
      }
    }
  }
}