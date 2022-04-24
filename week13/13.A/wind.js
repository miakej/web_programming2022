let particles = [];
const num = 10000; // more particles
const noiseScale = 0.001; // less noise
let r, b, g; // random colors

function setup() {
    createCanvas(windowWidth, windowHeight);
    for(let i = 0; i < num; i++) {
        particles.push(createVector(random(width), random(height)));
    }
    r = random(100,255);
    g = random(100,255);
    b = random(100,225);
    stroke(r, g, b); // random color
    strokeWeight(2);
}

function draw() {
    background(0, 10); // less tail
    for(let i = 0; i < num; i++) {
        let p = particles[i];
        point(p.x, p.y);
        let n = noise(p.x * noiseScale, p.y * noiseScale); // multiple by noiseScale to smooth particle movement 
        let a = TAU * n; // TAU = 2*pi
        p.x += cos(a);
        p.y += sin(a);

        // repopulate endlessly
        if(!onScreen(p)) {
          p.x = random(width); // new particles from anywhere
          p.y = random(height);
        } 
    }
}

// change direction on click
function mousePressed() {
    noiseSeed(millis());
} 

// check to repopulate particles once off screen
function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height; 
}