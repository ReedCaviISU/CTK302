let state = 0 ;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER)
  textSize(48) ;
}

function draw() {
  switch(state){
    case 0:
    background('red') ;
    text("What do you call a\nlazy baby kangaroo?", width/2, height/2) ;
    break;

    case 1:
    background('yellow') ;
    text("A POUCH POTATO", width/2, height/2) ;
    break;

  }
}

function mouseReleased() {
  state++
  if (state > 1) {
    state = 0 ;
  }
}
