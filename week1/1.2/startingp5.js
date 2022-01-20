function setup() {
    createCanvas(windowWidth, windowHeight);
    background(189, 224, 254);
}

function draw() {
    let c = color(94, 116, 127);
    if (mouseIsPressed) {
        fill(c);
        noStroke();
        blendMode(BURN);
        square(mouseX, mouseY, 30, 5);
    } else {
        noFill();
        stroke(c);
        blendMode(DODGE);
        circle(mouseX, mouseY, 5);
    }
    
}
