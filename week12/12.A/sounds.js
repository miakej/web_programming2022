function setup() {
    let cnv= createCanvas(windowWidth, windowHeight);
    background('aliceblue');
    colorMode(HSL);
    noLoop();

    // shortcuts for sounds
    A = loadSound('assets/doubleChirp.wav');
    B = loadSound('assets/eaglet.wav');
    C = loadSound('assets/flutter.wav');
    D = loadSound('assets/forestBirds2.wav');
    E = loadSound('assets/hawk.wav');
    F = loadSound('assets/forestBirds2.wav');
    G = loadSound('assets/raven.wav');
    H = loadSound('assets/geese.wav');
    I = loadSound('assets/owl.wav');
    J = loadSound('assets/doubleChirp2.wav')

    textSize(20);
    text('Use your number keys to create your own bird song. Hold to loop, release to stop', 50, 50)

    recorder = new p5.SoundRecorder();
}

function draw() {
    // circles

    var i = 200; // x
    var j = 200; // y
    var d = 200; // size
    var c = 300; // col 2
    var r = 200; // row 2

    fill(random(1, 100),100,70);
    noStroke();
    textSize(20);
    textAlign(CENTER);

    var soundA = ellipse(i, j, d); 
    var soundB = ellipse(i + c, j, d); 
    var soundC = ellipse(i + (c * 2), j, d);
    var soundD = ellipse(i + (c / 2), j + r, d); 
    var soundE = ellipse(i + (c * 1.5), j + r, d); 
    var soundF = ellipse(i, j + (r * 2), d); 
    var soundG = ellipse(i + c, j + (r * 2), d); 
    var soundH = ellipse(i + (c * 2), j + (r * 2), d); 
    
       
    fill(0);
        text('1: chirp', i, j); // A 
        text('2: eaglet', i + c, j); // B
        text('3: flutter', i + (c * 2), j); // C
        text('4: melody', i + (c / 2), j + r); // D
        text('5: hawk', i + (c * 1.5), j + r);  // E
        text('6: forest birds', i, j + (r * 2)); // A 
        text('7: raven', i + c, j + (r * 2)); // B
        text('8: geese', i + (c * 2), j + (r * 2)); // C
}

function keyPressed() {
    if (key ==='1') {
        A.loop();
    }
    if (key ==='2') {
        B.loop();
    }
    if (key ==='3') {
        C.loop();
    }
    if (key ==='4') {
        D.loop();
    }
    if (key==='5') {
        E.loop();
    }
    if (key==='6') {
        F.loop();
    }
    if (key==='7') {
        G.loop();
    }
    if (key==='8') {
        H.loop();
    }
    if (key==='9') {
        I.loop();
    }
    if (key==='0') {
        J.loop();
    }
}

function keyReleased() {
    if (key ==='1') {
        A.pause();
    }
    if (key ==='2') {
        B.pause();
    }
    if (key ==='3') {
        C.pause();
    }
    if (key ==='4') {
        D.pause();
    }
    if (key==='5') {
        E.pause();
    }
    if (key==='6') {
        F.pause();
    }
    if (key==='7') {
        G.pause();
    }
    if (key==='8') {
        H.pause();
    }
    if (key==='9') {
        I.pause();
    }
    if (key==='0') {
        J.pause();
    }
}
