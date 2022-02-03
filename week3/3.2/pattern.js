function setup() {
    createCanvas(600, 600);
}

function createTile(originX, originY, primaryColor, strokeColor, secondaryColor, topColor) {
    translate(originX, originY);
    fill(primaryColor);
    stroke(strokeColor);
    strokeWeight(3);
    rect(0, 0, 200, 200);
    fill(secondaryColor);
    quad(25, 100, 100, 25, 175, 100, 100, 175)
    fill(topColor);
    quad(60, 100, 100, 60, 140, 100, 100, 140)
    line(0, 100, 200, 100);
    line(100, 0, 100, 200);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    triangle(0, 0, 0, 80, 80, 0);
    triangle(0, 200, 0, 120, 80, 200);
    triangle(120, 200, 200, 200, 200, 120);
    triangle(120, 0, 200, 0, 200, 80);
}

function draw() {
    createTile(0, 0, 'darkslategray', 'white', 'lightblue', 'peru');
    createTile(0, 200, 'darkslategray', 'white', 'goldenrod', 'lightblue');
    createTile(0, 200, 'darkslategray', 'white', 'lightblue', 'peru');
    createTile(200, -400, 'darkslategray', 'white', 'goldenrod', 'lightblue');
    createTile(0, 200, 'darkslategray', 'white', 'lightblue', 'goldenrod');
    createTile(0, 200, 'darkslategray', 'white', 'goldenrod', 'lightblue');
    createTile(200, -400,  'darkslategray', 'white', 'lightblue', 'peru');
    createTile(0, 200, 'darkslategray', 'white', 'goldenrod', 'lightblue');
    createTile(0, 200, 'darkslategray', 'white', 'lightblue', 'peru');
}