let mic, recorder, soundFile;
let state = 0; // mousePress will increment from Record, to Stop, to Play

function setup() {
    let cnv= createCanvas(windowWidth, windowHeight);
    background('aliceblue');
    colorMode(HSL);
    noLoop();

    // shortcuts for sounds
    A = loadSound('assets/doubleChirp.wav');
    B = loadSound('assets/eaglet.wav');
    C = loadSound('assets/flutter.wav');
    D = loadSound('assets/melodicSong.wav');
    E = loadSound('assets/hawk.wav');
    F = loadSound('assets/forestBirds2.wav');
    G = loadSound('assets/raven.wav');
    H = loadSound('assets/geese.wav');
    I = loadSound('assets/owl.wav');
    J = loadSound('assets/forestBirds.wav')

    // instructions
    textSize(20);
    text('Use your number keys to create your own bird song. Hold to loop, release to stop', 50, 50);
    text('Click to record your birdsong, click again to stop recording and save.', 50, 80);

    // create sound recorder
    recorder = new p5.SoundRecorder();
    // create an empty sound file that to playback the recording
    soundFile = new p5.SoundFile();
}

function draw() {
    // circles

    var i = 200; // x
    var j = 220; // y
    var d = 200; // size
    var c = 300; // col incr
    var r = 200; // row incr.

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
    var soundI = ellipse(i + (c / 2), j + (r * 3), d); 
    var soundJ = ellipse(i + (c * 1.5), j + (r * 3), d); 
    
       
    fill(0);
        text('1: chirp', i, j); // A 
        text('2: eaglet', i + c, j); // B
        text('3: flutter', i + (c * 2), j); // C
        text('4: meadow', i + (c / 2), j + r); // D
        text('5: hawk', i + (c * 1.5), j + r);  // E
        text('6: morning song', i, j + (r * 2)); // F
        text('7: raven', i + c, j + (r * 2)); // G
        text('8: geese', i + (c * 2), j + (r * 2)); // H
        text('9: owl', i + (c / 2), j + (r * 3)); // I
        text('0: forest birds', i + (c * 1.5), j + (r * 3));  // J
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

function mousePressed() {
    
    if (state === 0) {
      // click to record
      recorder.record(soundFile);
      fill('aliceblue');
      rect(50, 80, 500, 40);
      fill('red');
      textSize(20);
      textAlign(LEFT);
      text('Recording now! Double click to stop', 50, 110);
      state++;
    } else if (state === 1) {
      recorder.stop(); // click 2, stop recorder and send the result to soundFile
      soundFile.play(); // play the result!
      fill('aliceblue');
      rect(50, 80, 500, 40);
      fill('green');
      text('Birdsong recorded! Click again to repeat playback', 50, 110);
  }
}