let gui;

function setup() {
  createCanvas(600, 600);
  background(100);
  strokeWeight(5);
  textSize(40);
  textAlign(CENTER)
  rectMode(CENTER);

    gui = createGui();
//label,x,y,w,h,min,max
    r = createSlider('red',85, 460, 100, 32.5, 0, 255);
    g = createSlider('green',250, 460, 100, 32.5, 0, 255);
    b = createSlider('blue',415, 460, 100, 32.5, 0, 255);

    /*
  inputr = createSlider(0, 255, 130);
  inputr.position(20, 400,);

  inputg = createSlider(0, 255, 130);
  inputg.position(215, 400);
  inputb = createSlider(0, 255, 130);
  inputb.position(410, 400);
    */
}

function draw(){
    drawGui();
    fill(0)
    text('R', 135, 455);
    text('G', 300, 455);
    text('B', 465, 455);

    fill(r.value, g.value, b.value);
    circle(width/2, height/2-100, 200);

}