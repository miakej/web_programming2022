var sound, amplitude;
var button;
var img;

function preload(){
  sound = loadSound('assets/everywhere.mp3');
  img = loadImage('assets/everywhere.jpg');
}

function setup() {
  var cnv = createCanvas(1000,1000);
  cnv.mouseClicked(togglePlay);
  amp = new p5.Amplitude();
  image(img);
}

function draw() {
  background(img);
  textSize(30);
  textStyle(ITALIC);
  text('click to create new star', 350, 130);

  var level = amp.getLevel();
  var diam = map(level, 0, 1, 0, 200);

  noStroke();
  fill('lightyellow');
  ellipse(width/2, height/2.5, diam, diam);
}

function togglePlay() {
  if (sound.isPlaying() ){
    sound.pause();
  } else {
    sound.loop();
		amp = new p5.Amplitude();
		amp.setInput(sound);
  }
}