let x = [0,0]
output = [0,0]
choice = 1


function setup() {
  createCanvas(600, 600);
  rectMode(CENTER)
  background(100)
  textSize(60)
  fill(0)
  text('chose a door', 120, 100)
  for(let i = 0; i<3; i++){
    x[0] = i*width/3 + 100
    x[1] = i*width/3 + 130
    fill(139,69,19)
    rect(x[0], 300, 100, 250, 5)
    fill(218,165,32)
    circle(x[1], 300, 20)
  }

}

function mousePressed() {
  setup()
  fill(0);
  text(output[0], 200, 500) 
  text(output[1], 200, 550) 
  
  if(choice == 1){
    if(mouseX<200){
      output[0] = 1
    }
    else if(mouseX>200 && mouseX<400){
      output[0] = 2
    }
    else if(mouseX>400){
      output[0] = 3
    }
    
    if(output[0]>0){
      choice = 2
    }
  }
  
  if(choice == 2){
    if(mouseX<200){
      output[1] = 1
    }
    else if(mouseX>200 && mouseX<400){
      output[1] = 2
    }
    else if(mouseX>400){
      output[1] = 3
    }
    
    if(output[1]>0){
      choice = 2
    }
}
}



