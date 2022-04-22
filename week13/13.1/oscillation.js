let a = 0.0; 
let s = 0.0; 
var slider;

function setup() {
    createCanvas(710, 400, WEBGL);
    rectMode(CENTER);
    slider = createSlider(0, 10, 5);
}

function draw() {

    background('pink');
    

    // set oscil speed with sin of a
    a = a + (slider.value()/100); // adjust faster/slower here
    s = sin(a) * 2; // dot 2 grows to twice size

    // translate dot 1 to center, scale with s

    // translate (width/2, height/2);
    // scale(s);
    // noFill();
    // stroke('aliceblue');
    // ellipse(0,0,50,50);

    // // translate dot 2 from left to right

    // translate(mouseY);
    // stroke('red');
    // scale(s);
    // ellipse(0,0,50,50);


    // // translate dot 3 relative to dot 2

    // translate(mouseX);
    // stroke(0);
    // scale(s);
    // ellipse(0,0,50,50);

    // // translate dot 4 relative to dot 3

    // translate(mouseY);
    // stroke('blue');
    // scale(s);
    // ellipse(0, 0, 50, 50);

    rotateY(frameCount * 0.01);
    for (let j = 0; j < 5; j++) {
        push();
        for (let i = 0; i < 80; i++) {
          translate(
            sin(frameCount * 0.001 + j) * 100,
            sin(frameCount * 0.001 + j) * 100,
            i * 0.1
          );
          rotateZ(frameCount * 0.002);
          push();
          sphere(8, 6, 4);
          pop();
        }
        pop();
}
}