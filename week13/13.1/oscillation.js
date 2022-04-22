let a = 0.0; 
let s = 0.0; 
var slider;

function setup() {
    createCanvas(windowWidth, 1000, WEBGL);
    rectMode(CENTER);
    slider = createSlider(1, 10, 3);
}

function draw() {

    background('pink');
    
    a = a + (slider.value()/100);
    s = sin(a) * 5; 

    rotateY(frameCount * 0.01);
    for (let j = 0; j < 100; j++) {
        push();
        for (let i = 0; i < 100; i++) {
          translate(
            sin(frameCount * a + j) * 100,
            sin(frameCount * a + j) * 100,
            i * 0.1
          );
          rotateZ(frameCount * 0.002);
          push();
          fill('pink');
          stroke('purple');
          ellipsoid(slider.value()*s);
          pop();
        }
        pop();
}
}