function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}


function draw() {

  background('#7FDADB');
  noStroke();
  stroke('black');

  // grass
  fill('#4ACC01')
  rect(-10, 250, 900, 900);

  // rain man body head when not pressed
  fill('black')
  ellipse(410, 170, 80, 80);

  fill('white');
  arc(410, 180, 40, 40, 0, PI + QUARTER_PI, CHORD);


  // clouds
  fill('white');
  ellipse(148, 46, 90, 55);
  ellipse(185, 64, 90, 55);
  ellipse(204, 30, 90, 55);
  ellipse(238, 59, 90, 55);

  ellipse(495, 46, 90, 55);
  ellipse(520, 64, 90, 55);
  ellipse(431, 30, 90, 55);
  ellipse(566, 29, 90, 55);


  // rain man body
  fill('black');
  rect(390, 200, 40, 140);
  rect(395, 230, 10, 140);
  rect(413, 230, 10, 140);

  // rain man arms
  fill('black');
  line(500, 200, 400, 225);
  fill('black');
  line(300, 200, 400, 225);

  fill('white')
  ellipse(395, 150, 10, 10);

  fill('white')
  ellipse(425, 150, 10, 10);

  fill('#690700')
  circle(245, 280, 30);
  fill('#355C09')
  circle(255, 295, 30);
  fill('#02355C')
  circle(225, 295, 30);
  fill('#873F00')
  circle(245, 305, 30);
  fill('#690700')
  circle(206, 280, 30);
  fill('#355C09')
  circle(210, 295, 30);
  fill('#02355C')
  circle(219, 320, 30);
  fill('#873F00')
  circle(245, 320, 30);

  fill('#916220')
  rect(90, 230, 40, 100);

  fill('green')
  circle(109, 230, 80);



  fill('black')
  text("This is Rain Man! Rain man loves growing fruits and vegetables in his garden, but sometimes the plants dry out because there's not enough water raining down on them. Well, one ... two ... CLICK! Rain Man has the ability to make the rain fall so that all of his fruits and vegetables have enough to drink so that they can grow nice and healthy!", 450, 260, 250);





  fill('yellow')
  arc(20, 20, 200, 200, 5, PI + QUARTER_PI, CHORD);

  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
    background('grey');
    fill('#416602')
    rect(-10, 250, 900, 900);

    // rain man head
    fill('black')
    ellipse(410, 170, 80, 80);

    fill('white')
    ellipse(395, 150, 10, 10);

    fill('white')
    ellipse(425, 150, 10, 10);

    fill('white');
    arc(410, 180, 40, 40, 0, PI + QUARTER_PI, CHORD);

    fill('#E60238')
    circle(245, 280, 30);
    fill('#02C913')
    circle(255, 295, 30);
    fill('#001FFF')
    circle(225, 295, 30);
    fill('#FFA200')
    circle(245, 305, 30);
    fill('#E60238')
    circle(206, 280, 30);
    fill('#02C913')
    circle(210, 295, 30);
    fill('#001FFF')
    circle(219, 320, 30);
    fill('#FFA200')
    circle(245, 320, 30);


    // rain man body
    fill('black');
    rect(390, 200, 40, 140);
    rect(395, 230, 10, 140);
    rect(413, 230, 10, 140);

    // rain man arms
    fill('black');
    line(500, 170, 400, 225);
    fill('black');
    line(300, 170, 400, 225);


    // rain
    stroke('black');
    line(145, 140, 50, -100);
    line(110, 180, 50, -100);
    line(190, 140, 50, -100);
    line(167, 140, 50, -100);
    line(162, 160, 50, -100);
    line(200, 140, 50, -100);
    line(250, 180, 50, -100);
    line(280, 180, 50, -100);
    line(310, 150, 50, -100);

    // clouds
    fill('#A19D9C');
    ellipse(90, 16, 90, 55);
    ellipse(153, 20, 90, 55);
    ellipse(154, 59, 90, 55);
    ellipse(77, 56, 90, 55);

    ellipse(216, 46, 90, 55);
    ellipse(271, 64, 90, 55);
    ellipse(298, 30, 90, 55);
    ellipse(341, 47, 90, 55);

    fill('#916220')
    rect(90, 230, 40, 100);

    fill('green')
    circle(109, 230, 80, 0);


    fill('black')
    text("This is Rain Man! Rain man loves growing fruits and vegetables in his garden, but sometimes the plants dry out because there's not enough water raining down on them. Well, one ... two ... CLICK! Rain Man has the ability to make the rain fall so that all of his fruits and vegetables have enough to drink so that they can grow nice and healthy!", 450, 260, 250);




  }






}


function mouseReleased() {
  print(mouseX + " , " + mouseY);
}
