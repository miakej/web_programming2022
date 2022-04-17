var sound, amplitude;
var button;
var img;

//preload song and image
function preload(){
  sound = loadSound('assets/everywhere.mp3');
  img = loadImage('assets/everywhere.jpg');
}

//create setup
function setup() {
  var cnv = createCanvas(1000,1000);
  cnv.mouseClicked(togglePlay);
  amp = new p5.Amplitude();
  image(img);
}

function draw() {
  //image and text background
  background(img);
  noStroke();
  fill('chocolate');
  textSize(30);
  text('click to create new star', 350, 950);
  // use sound level to create star size
  var level = amp.getLevel();
  var diam = map(level, 0, 1, 0, 200);
  //draw star
  stroke('#6b4423');
  fill('lightyellow');
  star(width/2, height/2.5, diam/2, diam, 5);
}
  // star shape 
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// togglePlay
function togglePlay() {
  if (sound.isPlaying() ){
    sound.pause();
  } else {
    sound.loop(); // loop song
		amp = new p5.Amplitude();
		amp.setInput(sound);
  }
}