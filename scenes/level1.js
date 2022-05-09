//Grid

class level {

}

class level1 extends level {
  constructor() {
    super(level);
    this.rectSize = 100;
    this.offsetX;
    this.offsetY;
    this.checkBox = [];
    this.gui = createGui();
    this.output = 0;
  }
  
    setup() {
      stroke(0);
      strokeWeight(5);
      fill(color('#EF2E72'));
      this.offsetX = this.rectSize*3/2;
      this.offsetY = this.rectSize*3/2;
      for (let squareY = 0; squareY <3; squareY++) {
        for (let squareX = 0; squareX <3; squareX++) {
          this.checkBox.push(createCheckbox("grid", squareX * this.rectSize+this.offsetX, squareY * this.rectSize + this.offsetY, this.rectSize, this.rectSize));
        }
      }
    }
  
    draw() {
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
      for (let boxClicked = 0; boxClicked < this.checkBox.length; boxClicked++) {
        if(this.checkBox[boxClicked].isChanged) {
          for (let i = 0; i < this.checkBox.length; i++) {
            if (i != boxClicked) {
              this.output = this.boxClicked;
              this.checkBox[i].val = false;
            }
          }
        }
      }
    }
  }