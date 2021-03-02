let state = 0;
let view;
let lookout;
let mining;
let canyon;
let wow;
let flag;
let words;
let red;
let pretty;
let sunstate;
let gorgeous;
let myTimer = 0;


function setup() {
  createCanvas(2000, 1000);
  textSize(25);
  view = loadImage("assets/me.jpg");
  lookout = loadImage("assets/sedona.png");

  flag = loadImage("assets/flagstaff.jpg");
  words = loadImage("assets/sign.jpg");
  red = loadImage("assets/redsign.jpg");

  // case 3
  mining = loadImage("assets/jerome2.jpg");
  wow = loadImage("assets/anothercanyon.jpg");
  canyon = loadImage("assets/grandcanyon.jpg");

  pretty = loadImage("assets/arizona.jpg");
  sunstate = loadImage("assets/beautiful.jpg");
  gorgeous = loadImage("assets/ohmy.jpg");

}

function draw() {

  switch (state) {
    case 0:
      background('orange');
      text("Today I am going tell you about one of my favorite places on earth; Sedona, Arizona and show you some pictures from my past trip in 2017!", 100, 100);
      image(view, 300, 200, 500, 500);
      image(lookout, 1000, 200, 500, 500);
      myTimer++
      if (myTimer > 5 * 60) {
        myTimer = 0;
        state = 1;
      }
      break;

    case 1:
      background('silver');
      text("It was actually my first time EVER in Arizona and I had one of the best times of my life.", 500, 300);
      myTimer++
      if (myTimer > 5 * 60) {
        myTimer = 0;
        state = 2;
      }
      break;

    case 2:
      background('orange');
      text("One thing I loved more than Sedona itself was photographing different areas around there and around the state!", 100, 100);
      image(flag, 1000, 200, 300, 300);
      image(words, 300, 200, 300, 300);
      image(red, 650, 400, 300, 300);
      myTimer++
      if (myTimer > 10 * 60) {
        myTimer = 0;
        state = 3;
      }
      break;

    case 3:
      background('silver');
      text("We visited Jerome (a small mining town an hour or so away), Flagstaff, and my all time favorite the Grand Canyon!\nEach place was special in its own way and I am so glad we went and visited many different places.\nBelow are a few pictures I took. The left photo is a historic hotel in Jerome that was\non an episode of Ghost Adventures as well!\nThe next two photos are both my favorite shots from the Grand Canyon when we visited.", 100, 100);
      image(mining, 100, 300, 500, 500);
      image(canyon, 650, 300, 500, 500);
      image(wow, 1200, 300, 500, 500);
      myTimer++
      if (myTimer > 15 * 60) {
        myTimer = 0;
        state = 4;
      }
      break;

    case 4:
      background('orange');
      text("I told myself that if I move to a different state, I'd DEFINITLEY consider Sedona. I saw myself living there after the first day.\nIf you ever get the chance I highly recommend visiting Sedona and Arizona as a whole and\nall it has to offer!", 100, 100);
      image(pretty, 650, 300, 500, 500);
      image(sunstate, 1200, 300, 500, 500);
      image(gorgeous, 100, 300, 500, 500);
      myTimer++
      if (myTimer > 15 * 60) {
        myTimer = 0;
        state = 0;
      }
  }
}

function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
  }
}
