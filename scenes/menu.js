function menu() {
  let menuPlay

  this.enter = function() {
    menuPlay = new playButton(width/2, height*.75);
    textSize(75);
    textAlign(CENTER);
    stroke(0);
  }

  this.draw = function() {
    background('#424549');
    fill('#EF2E72')
    strokeWeight(10);
    text("Randomness", width / 2, 120);

    menuPlay.display();
    menuPlay.hover();
  }
}

class playButton {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.col = color('#EF2E72');
    this.diameter = 150;
    this.triSmall = this.diameter / 6.66;
    this.triLarge = this.diameter / 3.33;

    this.display = function () {
      strokeWeight(5);
      fill(this.col);
      ellipse(this.x, this.y, this.diameter, this.diameter);
      fill(0);
      triangle(
        this.x + this.diameter / 3.33,
        this.y,
        this.x - this.diameter / 6.66,
        this.y - this.diameter / 3.33,
        this.x - this.diameter / 6.66,
        this.y + this.diameter / 3.33
      );
      fill(this.col);
    };

    this.clicked = function () {
      var d = dist(mouseX, mouseY, this.x, this.y);
      if (d < this.diameter / 2) {
        return true;
      }
    };

    this.hover = function () {
      var d = dist(mouseX, mouseY, this.x, this.y);
      if (d < this.diameter / 2) {
        if (mouseIsPressed) {
          //sendDiscordMessage("Play Button Pressed");
          sm.showNextScene();
        }
        if (this.diameter < 200) {
          this.diameter += 5;
        }
      } 
      else if (this.diameter > 150) {
        this.diameter -= 5;
      } 
    }
  }
}