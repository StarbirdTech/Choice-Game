let x = [0, 0];
let output = [0, 0];
let choice = 1;
let message = 'Choose A Door'
let clickcounter = 0;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  background('#424549');
  textSize(60);
  fill(0);
  textAlign(CENTER)
  text(message, width/2, 100);
  for (let i = 0; i < 3; i++) {
    x[0] = (i * width) / 3 + 100;
    x[1] = (i * width) / 3 + 130;
    fill(139, 69, 19);
    rect(x[0], 300, 100, 250, 5);
    fill(218, 165, 32);
    circle(x[1], 300, 20);
  }
}

function cover() {
  noStroke();
  fill(100);
  rect(300, 500, 600, 100);
  rect(300, 100, 600, 100)
}

function mousePressed() {
  clickcounter++;
  fill(0);
  cover();
  if (choice == 1) {
    if (mouseX < 200) {
      output[0] = 1;
    } else if (mouseX > 200 && mouseX < 400) {
      output[0] = 2;
    } else if (mouseX > 400) {
      output[0] = 3;
    }

    if (output[0] > 0) {
      choice = 2;
    }
  }

  if (choice == 2) {
    message = 'Are You Sure?'
    if (mouseX < 200) {
      output[1] = 1;
    } else if (mouseX > 200 && mouseX < 400) {
      output[1] = 2;
    } else if (mouseX > 400) {
      output[1] = 3;
    }

    if (output[1] > 0) {
      choice = 2;
    }
  }
  fill(0);
  //text(output[0], 300, 500);
  //text(output[1], 300, 550);
  
  // The data that you need to collect is stored as
  // output[0] (initial) and output[1] (final) 
  if (clickcounter == 2) {
    //print("Initial choice = "+output[0]);
    //print("Final choice = "+output[1]);
    // You could add a command here to send the player
    // to the next level.
    
  }
  //text(choice, 100, 500)
  text(message, width/2, 100);
}