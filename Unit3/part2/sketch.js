let cars = [];
let tree ;

function setup() {
  createCanvas(500, 500);
  tree = loadImage("assets/christmas.jpeg") ;
  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car());
  // }
  noStroke() ;
}

function draw() {
  background('grey');
  image(tree, 10, 0, 480, 500) ;
  cars.push(new Car());


  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0) {
      cars.splice(i, 1) ;
    }

  }
}



// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(10), random(10));
    this.r =  random(255) ;
    this.g =  random(255) ;
    this.b =  random(255) ;
    this.a = random(200, 255) ;
    this.s = random(5, 20) ;

  }

  // methods

  display() {
    fill(this.r, this.g, this.b, this.a);
    textSize(this.size);
    text("KAPOW!!!", this.pos.x, this.pos.y);

  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5 ;
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width
    // if (this.pos.x > height) this.pos.y = 0;
    // if (this.pos.x < 0) this.pos.y = height;
  }
}
