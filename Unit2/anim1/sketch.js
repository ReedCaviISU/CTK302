let x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
background(100);
textSize(40);
text("SUPERMAN FLYING", x, height/2);
// rect(x, 100, 100, 100);
x = x + 3;

if (x > width) {
  x = -200;
}



}
