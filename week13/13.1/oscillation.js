let a = 0.0; 
let s = 0.0; 
var slider;

function setup() {
    createCanvas(windowWidth, 1000, WEBGL);
    rectMode(CENTER);
    slider = createSlider(0, 10, 5);
}

function draw() {

    background('pink');
    
    a = a + (slider.value()/100);
    s = sin(a) * 2; 

    rotateY(frameCount * 0.01);
    for (let j = 0; j < 8; j++) {
        push();
        for (let i = 0; i < 80; i++) {
          translate(
            sin(frameCount * 0.01 + j) * 100,
            sin(frameCount * 0.01 + j) * 100,
            i * 0.1
          );
          rotateZ(frameCount * 0.002);
          push();
          stroke('purple');
          ellipsoid(slider.value()*5);
          pop();
        }
        pop();
}
}