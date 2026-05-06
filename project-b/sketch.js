// Global variables
let Text;
let handPose;
let video;
let hands = [];
let flowers = [];
let p1 = [];
let p2 = [];
let d = []
let notePlayer;
let mic;
let lastSoundLevel = 2;
//let isMicReady = false;
let latestFlower = 0;
let flowerAppear = [];
let grassBg;
let bgAudio;

let soundCounter = 0;
let wasTriggered = false;
let threshold = 10;
let bgColor = 70;
let silentCounter = 0;
let silentThreshold = 90;
let isSpeaking = false;
function preload() {
  handPose = ml5.handPose();
  bgAudio = loadSound('bird.wav');
}
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  textFont('Courier New');
  Text = new openText();
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);
  video.hide();

  handPose.detectStart(video, gotHands);
  mic = new p5.AudioIn();
  mic.start();
  notePlayer = new note(261.63);
  //notePlayer = new note(freq);
  colorMode(HSB, 360, 100, 100, 1);
  userStartAudio();
  grassBg = new SimpleGrassBackground();
  bgAudio.setVolume(0.25); 
  bgAudio.loop(); 
}
function gotHands(results) {
  // Save the output to the hands variable
  hands = results;
}
function mousePressed() {
  Text.handleInput();
}

function draw() {
  background(bgColor, bgColor, bgColor);
  grassBg.display();
  Text.update();
  Text.display();


  //Audio Detection
  if (Text.active == false) {
    let level = mic.getLevel() * 100;
    let soundThreshold = 10;
    console.log("level: " + level);

    fill(0, 0, 100);
    textSize(16);
    text("soundCounter: ", 100, 60)
    if (level > soundThreshold && hands.length == 0) {
      soundCounter++;
      isSpeaking = true;
      silentCounter = 0;
      lastSoundLevel = level;

      fill(0, 0, 100);
      textSize(16);
      text("soundCounter: " + soundCounter, 100, 60);

      fill(0, 0, 100);
      textSize(16);
      text(`🎤 speaking...`, 100, 30);
    } else {
      // Silence detection
      if (soundCounter > 0) {
        silentCounter++;

        fill(0, 0, 100);
        textSize(16);
        text(`⏳ silence...`, 100, 30);

        // Draw flowers after timeout
        if (silentCounter >= silentThreshold && soundCounter >= threshold) {
          let sf = map(lastSoundLevel, 2, 100, 0.5, 2);
          //let type;

          let layer = 1;
          let petalCount, petalLen, petalW, centerSize, h;
          if (soundCounter >= threshold * 8) {
            petalCount = 14;
            petalLen = 60;
            petalW = 30;
            centerSize = 35;
            h = random(180, 300);
            layer = 3;
          } else if (soundCounter >= threshold * 4) {
            petalCount = 10;
            petalLen = 45;
            petalW = 22;
            centerSize = 28;
            h = random(60, 180);
            layer = 2;
          } else {
            petalCount = 6;
            petalLen = 30;
            petalW = 15;
            centerSize = 20;
            h = random(0, 60);
            layer = 1;
          }
          let chosenFreq;
          let randomIdx = floor(random(notes.length));
          chosenFreq = notes[randomIdx];
          flowers.push(new Flower(random(width), random(height), petalCount, petalLen, petalW, centerSize, h, sf, chosenFreq, layer, layer));
          latestFlower = flowers[flowers.length - 1];
          soundCounter = 0;
          silentCounter = 0;
          isSpeaking = false;
        }
      }

      //notePlayer.stopKey();
    }

    // Flower Animation
    for (let i = flowers.length - 1; i >= 0; i--) {

      let fl = flowers[i];
      if (fl == latestFlower) {
        push();
    translate(width, 0)
    scale(-1, 1)
        fl.handControl();
        pop()
      }
      push();
    translate(width, 0)
    scale(-1, 1)
      fl.drawVines(flowers, i);
      fl.update();
      fl.display();
      pop()

      if (fl.dead) {
        if (fl.note) {
          fl.note.stopKey();
        }
        flowers.splice(i, 1);
      }
    }
    push();
  textAlign(LEFT, TOP);
  textSize(11);
  noStroke();

 
  fill(0, 0, 0, 0.75);
  rect(width - 310, height - 180, 300, 150, 8);

  fill(0, 0, 100);
  stroke(10)
  textSize(18);
  text("HOW TO INTERACT", width - 300, height - 160);

 
  textSize(15);
  stroke(5)
  fill(0, 0, 90);
  text("🎤   Speak to bloom flowers.", width - 300, height - 135);
  text("✋   Use hands to move flowers.", width - 300, height - 82-35);
  push()
  textWrap(WORD)
  text('👊🏻🖐🏻 Make a fist and open to change the size of the flower.', width - 300, height - 64-35,280);

  describe('The text "👊🏻🖐🏻 Make a fist and open to change the size of the flower" written across two lines.')
  //text("👊🏻 Make a fist and open to change the size of the flower", width - 300, height - 64);
  pop()
  text("🌸   Silence causes decay.", width - 300, height - 46-15);

  fill(0, 0, 0);
  stroke(30)
  textSize(20);
  textAlign(CENTER)
  text("Preserve this digital memory.", width/2, height - 20-20);
  pop();
  }

  
}