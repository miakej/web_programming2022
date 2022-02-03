function setup() {
    createCanvas(200, 200);
}

function createTile() {
    translate(0, 0);
    fill('powderblue');
    stroke('aliceblue');
    strokeWeight(3);
    rect(0, 0, 200, 200);
    fill('darkcyan');
    quad(25, 100, 100, 25, 175, 100, 100, 175)
    fill('darkslategray');
    quad(60, 100, 100, 60, 140, 100, 100, 140)
    line(0, 100, 200, 100);
    line(100, 0, 100, 200);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    triangle(0, 0, 0, 60, 60, 0);
    triangle(0, 200, 0, 140, 60, 200);
    triangle(140, 200, 200, 200, 200, 140);
    triangle(140, 0, 200, 0, 200, 60);
}

function draw() {
    createTile();
}