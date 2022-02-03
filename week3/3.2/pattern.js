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
    triangle(0, 0, 0, 60, 60, 0);
    triangle(0, 200, 0, 140, 60, 200);
    triangle(140, 200, 200, 200, 200, 140);
    triangle(140, 0, 200, 0, 200, 60);
}

function draw() {
    createTile(0, 0, 'darkolivegreen', 'antiquewhite', 'olive', 'goldenrod');
    createTile(0, 200, 'darkslategray', 'antiquewhite', 'peru', 'lightblue');
    createTile(0, 200, 'darkolivegreen', 'antiquewhite', 'olive', 'goldenrod');
    createTile(200, -400, 'darkslategray', 'antiquewhite', 'peru', 'lightblue');
    createTile(0, 200, 'darkslategray', 'antiquewhite', 'olive', 'goldenrod');
    createTile(0, 200, 'darkslategray', 'antiquewhite', 'peru', 'lightblue');
    createTile(200, -400,  'darkolivegreen', 'antiquewhite', 'olive', 'goldenrod');
    createTile(0, 200, 'darkslategray', 'antiquewhite', 'peru', 'lightblue');
    createTile(0, 200, 'darkolivegreen', 'antiquewhite', 'olive', 'goldenrod');
}