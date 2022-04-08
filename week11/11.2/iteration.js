function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
  }
  
function draw() {
    background(0);
    fill(random(255), 0, random(255));
    for (x = 0; x <= mouseX; x += 80) {
        for (y = 0; y <= mouseY; y += 80) {
        rotateX(frameCount * 0.009);
        rotateY(frameCount * 0.009);
        box(100);
        }
    }
}