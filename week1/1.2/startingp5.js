function setup() {
    createCanvas(1000,1000);
    background(189, 224, 254);
}

function draw() {
    let c = color(94, 116, 127);


    if (mouseIsPressed) {
        fill(c);
        noStroke();
    } else {
        noFill();
        stroke(c);
    }
    square(mouseX, mouseY, 30, 5);
}

