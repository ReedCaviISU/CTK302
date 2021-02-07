let food ;
let logic ;
let pc ;

function setup() {
  createCanvas(800, 800);
  food = loadImage("assets/food.jpg") ;
  logic = loadImage("assets/logicconcert.jpg") ;
  pc = loadImage("assets/pcbuild.jpg") ;

imageMode(CENTER) ;
rectMode(CENTER) ;

}

function draw() {
background('white');
image(food, width/2, height/2, 200, 200)
image(logic, width/2, height/2 - 220, 200, 200)
image(pc, width/2, height/2 + 220, 200, 200)

}
