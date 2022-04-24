let particles = [];
const num = 5000; // number of particles
const noiseScale = 0.01;
let r, b, g;

function setup() {
    createCanvas(windowWidth, windowHeight);
    for(let i = 0; i < num; i++) {
        particles.push(createVector(random(width), random(height)));
    }
    stroke('blue');
    strokeWeight(2);
}

function draw() {
    background(255, 1); // create trail with alpha
    for(let i = 0; i < num; i++) {
        let p = particles[i];
        point(p.x, p.y);
        let n = noise(p.x * noiseScale, p.y * noiseScale); // multiple by noiseScale to smooth particle movement 
        let a = TAU * n; // TAU = 2*pi
        p.x += cos(a);
        p.y += sin(a);
        if(!onScreen(p)) {
          p.x = width; // begin from right edge 
          p.y = random(height);
        }
    }
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height; // keep particles on screen
}