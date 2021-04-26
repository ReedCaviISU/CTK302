/* For mobile phones - accesses accelerometer and gyroscope.
Make sure you turn on orientation lock on your iPhone or Android device. */

var beta, gamma; // gyroscope variablers
var dinoImage;
var xPosition = 0;
var yPosition = 0;
var x = 0;
var y = 0;
var z = 0;
 // accelerometer data

 var cars = [];
 var frogPos;


function setup() {

  createCanvas(windowWidth, windowHeight);

  alpha = 0;
  beta = 0;
  gamma = 0;

  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width /2, height - 80);

  dinoImage = loadImage("assets/dino.jpg");
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();

}

function draw() {

  background('#98EB6E'); // light blue

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -18, 18, 0, width);
  yPosition = map(beta, 25, 45, 0, height);

  push(); // before you use translate, rotate, or scale commands, push and then pop after

  translate(xPosition, yPosition); // move everything over by x, y

  // rotate(radians(alpha)); // rotate the bunny depending on the alpha intake

  image(dinoImage, 0, 0, 500, 500);
  // rect(0, 0, 100, 100) ;
  pop();





frogPos.x = xPosition;
frogPos.y = yPosition;



for (var i = 0; i < cars.length; i++) {
  cars[i].display();
  cars[i].drive();
  if (cars[i].pos.dist(frogPos) < 50) {
    cars.splice(i, 1);
  }
}



  fill('orange');
  noStroke();
  textSize(60);
  textAlign(CENTER);
  text("Move your phone up, down, left, and right!", width / 2, height / 2);


  // // Text commands that display debugging data
  // textAlign(LEFT);
  // textSize(20);
  // fill('black');
  // text("orientation data:", 25, 25);
  // textSize(15);
  // text("alpha: " + alpha, 25, 50);
  // text("beta: " + beta, 25, 70);
  // text("gamma: " + gamma, 25, 90);
  // textSize(20);
  // text("acceleration data:", 25, 125);
  // textSize(15);
  // text("x = " + x.toFixed(2), 25, 150); // .toFixed means just show (x) decimal places
  // text("y = " + y.toFixed(2), 25, 170);
  // text("z = " + z.toFixed(4), 25, 190);

  // Text that makes CTK type in the background
  // fill('white');
  // noStroke();
  // textSize(300);
  // textAlign(CENTER);
  // text("Look at this dino", width / 2, height / 2);

}

function deviceShaken() {
  // re-spwn cars
  cars = [];
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
}







// Read in gyroscope data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});

// Read in accelerometer data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});





function Car() {


// attributes
this.pos = createVector(100, 100);
this.vet = createVector(random(-5, 5), random(-5, 5));
this.r = random(255);
this.g = random(255);
this.b = random(255);
this.a = random(255);


this.display = function() {
  fill(this.r, this.g, this.b, this.a);
  ellipse(this.pos.x, this.pos.y, 50, 50);
    ellipse(this.pos.x + 35, this.pos.y, 50, 50);
}

this.drive = function() {
  this.pos.add(this.vel);

  if (this.pos.x > width) this.pos.x = 0;
  if (this.pos.x < 0) this.pos.x = 0;
  if (this.pos.y > height) this.pos.y = 0;
  if (this.pos.y < 0) this.pos.y = 0;

  }

}
