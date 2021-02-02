function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}


function draw() {

  background('blue');
  noStroke();
  stroke('black');
  // strokeWeight(5);

  fill('green')
  rect(-10, 250, 900, 900);

  fill('#A39780')
  rect(250, 150, 70, 180);

  fill('#A39780')
  rect(350, 150, 70, 180);

  fill('#705000');
  rect(100, 170, 50, 200);

  fill('#705000');
  rect(500, 170, 50, 200);

  fill('green');
  ellipse(125, 185, 100, 100);

  fill('green');
  ellipse(523, 185, 100, 100);

  fill('white');
  rect(260, 170, 20, 20);

  fill('white');
  rect(360, 170, 20, 20);

  fill('white');
  rect(290, 220, 20, 20);

  fill('white');
  rect(390, 220, 20, 20);

  fill('#705000');
  rect(265, 290, 20, 40);

  fill('#705000');
  rect(365, 290, 20, 40);



  fill('yellow')
  arc(20, 20, 200, 200, 5, PI + QUARTER_PI, CHORD);



  text(mouseX + " , " + mouseY, 30, 30);

}


function mouseReleased() {
  print(mouseX + " , " + mouseY);
}
