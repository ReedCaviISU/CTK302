function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {

  background('blue');
  ellipse(500, 200, 55, 55);



  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
    background('grey');

    fill('black')
    ellipse(500, 200, 55, 55);
}



  // this shows mouse location - comment it out when you're done!

  fill(0);
  text(mouseX + ", " + mouseY, 40, 40);

}






// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
