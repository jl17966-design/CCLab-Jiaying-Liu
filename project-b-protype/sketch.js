// Global variables
let f = [];
let f1 = [];
let f2 = [];
let notePlayer;
let mic;
let lastSoundLevel = 2;
let isMicReady = false;
let latestFlower = 0;

let soundCounter = 0;
let wasTriggered = false;
let threshold = 10;
let bgColor = 80;
let silentCounter = 0;
let silentThreshold = 120;
let isSpeaking = false;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  mic = new p5.AudioIn();
  mic.start();
  notePlayer = new note();
  colorMode(HSB, 360, 100, 100, 1);
}

function draw() {
  background(bgColor, bgColor, bgColor);

    //Audio Detection
    let level = mic.getLevel() * 100;
    let soundThreshold = 10;
    console.log("level: " + level);

    if (level > soundThreshold) {
      soundCounter++;
      isSpeaking = true;
      silentCounter = 0;
      lastSoundLevel = level;

      fill(0, 0, 100);
      textSize(14);
      text("soundCounter: " + soundCounter, 100, 60);

      fill(0, 0, 100);
      textSize(14);
      text(`🎤 speaking...`, 100, 30);
    } else {
      // Silence detection
      if (soundCounter > 0) {
        silentCounter++;

        fill(0, 0, 100);
        textSize(14);
        text(`⏳ silence...`, 100, 30);

        // Draw flowers after timeout
        if (silentCounter >= silentThreshold && soundCounter >= threshold) {
          let scaleFactor = map(lastSoundLevel, 2, 100, 0.5, 2);

          if (soundCounter >= threshold * 8) {
            f2.push(new flower2(random(width), random(height), scaleFactor,notePlayer));
            latestFlower = f2[f2.length - 1];
          } else if (soundCounter >= threshold * 4) {
            f1.push(new flower1(random(width), random(height), scaleFactor,notePlayer));
            latestFlower = f1[f1.length - 1];
          } else {
            f.push(new flower(random(width), random(height), scaleFactor,notePlayer));
            latestFlower = f[f.length - 1];
          }

          notePlayer.playKey();

          // Reset state
          soundCounter = 0;
          silentCounter = 0;
          isSpeaking = false;
        }
      }

      notePlayer.stopKey();
    }

    // Flower Animation
    for (let i = 0; i < f.length; i++) {
      if (f[i] === latestFlower) {
        f[i].mouse();
      }
      f[i].drawVines(f, i);
      f[i].update();
      f[i].display();

      if (f[i].alpha <= 0.01) {
        if (f[i].note) {
          f[i].note.stopKey();
        }
        f.splice(0, 1);
      }
    }

    for (let i = 0; i < f1.length; i++) {
      if (f1[i] === latestFlower) {
        f1[i].mouse();
      }
      f1[i].drawVines(f1, i);
      f1[i].update();
      f1[i].display();

      if (f1[i].alpha <= 0.01) {
        if (f1[i].note) {
          f1[i].note.stopKey();
        }
        f1.splice(0, 1);
      }
    }

    for (let i = 0; i < f2.length; i++) {
      if (f2[i] === latestFlower) {
        f2[i].mouse();
      }
      f2[i].drawVines(f2, i);
      f2[i].update();
      f2[i].display();

      if (f2[i].alpha <= 0.01) {
        if (f2[i].note) {
          f2[i].note.stopKey();
        }
        f2.splice(0, 1);
      }
    }
  }

