let ants = [];
const num = 1000; // number of ants
const noiseScale = 0.02; // more noise

function setup() {
    createCanvas(windowWidth, windowHeight);
    img = loadImage('picnic.jpeg')
    for(let i = 0; i < num; i++) {
        ants.push(createVector(random(width), random(height)));
    }
    stroke(0);
    strokeWeight(3);
}

function draw() {
    background(img);
    for(let i = 0; i < num; i++) {
        let a = ants[i];
        point(a.x, a.y);
        let n = noise(a.x * noiseScale, a.y * noiseScale); // multiple by noiseScale to smooth particle movement 
        let p = TAU * n; // TAU = 2*pi
        a.x += cos(p);
        a.y += sin(p);
        if(!onScreen(a)) {
            a.x = width; // begin from right edge
            a.y = random(height);
          }
      }
  }
  
  function onScreen(v) {
    return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height; // keep particles on screen
  }