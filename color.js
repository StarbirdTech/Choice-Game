function setup() {
  createCanvas(600, 600);
  background(100);
  strokeWeight(5);
  textSize(40);
  textAlign(CENTER)
  inputr = createSlider(0, 255, 130);
  inputr.position(20, 400,);

  inputg = createSlider(0, 255, 130);
  inputg.position(215, 400);
  inputb = createSlider(0, 255, 130);
  inputb.position(410, 400);
}

function draw(){
    background(100)
    fill(0)
    text('R', 105, 455);
    text('G', 300, 455);
    text('B', 495, 455);

    fill(inputr.value(), inputg.value(), inputb.value());
    circle(width/2, height/2-100, 200);

}