var song;
var songa;
var x = 0;
var y = 0;

function preload(){
  song = loadSound("ave.mp3");
  songa = loadSound("bebe.mp3");
}

function setup() {
  createCanvas(400, 400);
  }

function draw() {

  ellipse(x,y,100,100);
    //song.play();
 }

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() retorna una variable booleana
    song.stop();
    songa.play();
    background(255, 0, 0);
    x= x + 10;
    y = y + 10;
  } else {
    song.play();
    songa.stop();
    background(0, 255, 0);
  }
}