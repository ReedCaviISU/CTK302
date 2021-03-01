let myState = 0 ;
let myTimer = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch(myState) {
    case 0:
    background('silver') ;
    text("MY NAME IS REED", 100, 100);
    myTimer++
    if (myTimer > 2*60) {
      myTimer = 0 ;
      myState = 1 ;
    }
    break ;

    case 1:
    background('red') ;
    text("Let me tell you a little about myself", 100, 100);
    myTimer++
    if (myTimer > 3*60) {
      myTimer = 0 ;
      myState = 2 ;
    }
    break ;

    case 2:
    background('teal') ;
    text("I love streaming on Twitch, photography, video games, music, and of course...FOOD!!", 10, 100) ;
    myTimer++
    if (myTimer > 4*60) {
      myTimer = 0 ;
      myState = 0 ;
    }
    break ;

  }

}
