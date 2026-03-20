let scanned = [];
let sun = [];
let sun1 = [];
let sun2 = [];
let scanned1=[]
let scanned2=[]
let state=0
let balloon=[]
let curBalloon=0
let fox=[]
let fox1=[]
let fox2=[]


function preload() {
  scanned1.push(loadImage("Page6.png"))
  scanned2.push(loadImage("Page7.png"))
  for (let i = 2; i <= 5; i++) {
    scanned.push(loadImage("Page" + i + ".png"));
  }
}

function setup() {
  createCanvas(800, 500);
  imageMode(CENTER);
  eraseBg(scanned, 10);
  sun = crop(scanned, 1000, 0, 800, 800);
  sun1 = crop(scanned1, 1000, 0, 800, 800);
  sun2 = crop(scanned2, 1000, 0, 800, 800);
  balloon=crop(scanned, 1395,1700,400,600)
  fox=crop(scanned,100,1100,1400,1200)
  fox1=crop(scanned1,100,1100,1400,1200)
  fox2=crop(scanned2,100,1100,1400,1200)
}

function draw() {
  background(255);

  let i = floor(frameCount / 15) % scanned.length;

  
  // let scale = min(width / img.width, height / img.height);
  // let w = img.width * scale;
  // let h = img.height * scale;

  // let offsetX = (width - w) / 2;
  // let offsetY = (height - h) / 2;
 
 
  //image(currentImg, width/2 - 200, height/2, w, h);
    // let x = 1485 * scale + offsetX - 200;
    // let y = 410 * scale + offsetY;
    // let x1 = 1200 * scale + offsetX - 200;
    // let y1 = 600 * scale + offsetY;
    //circle(x1,y1,50)
    drawSun(width-150,60);
    drawFox(width/2-100, height/2+100)
    drawBalloon(mouseX,mouseY)
  }
  
  function drawBalloon(x,y){
    push()
  image(
    balloon[curBalloon],
    mouseX,
    mouseY,
    balloon[0].width * 0.25,
    balloon[0].height * 0.25
  );

  curBalloon = floor((frameCount / 20) % balloon.length);
  pop()
  }
  
function drawSun(x, y) {
  push();

  let i = floor(frameCount / 10) % sun.length;
  let IMG = sun[i];      
  let IMG1 = sun1[0];   
  let IMG2 = sun2[0];
  let currentSun=0;

  if (state === 0 || state === 2) {
    currentSun = IMG;
  } else if (state === 1) {
    currentSun = IMG1;
  } else if (state === 3) {
    currentSun = IMG2;
  }

//let s = 100 + sin(frameCount * 0.1) * 30;
  image(currentSun, x, y, 250, 250);
  //image(sun[i], 0, 0, s, s);

  pop();
}

function drawFox(x,y){
  push()
  let i = floor(frameCount / 10) % fox.length;
  let img = fox[i];      
  let img1 = fox1[0];   
  let img2 = fox2[0];
  let currentFox=0;

  if (state === 0 || state === 2) {
    currentFox = img;
  } else if (state === 1) {
    currentFox = img1;
  } else if (state === 3) {
    currentFox = img2;
  }
  image(currentFox,width/2, height/2+100,fox[0].width * 0.25,fox[0].height * 0.25)

  // image(
  //   fox[curFox],
  //   x,
  //   y,
  //   fox[0].width * 0.25,
  //   fox[0].height * 0.25
  // );
// if (state === 0 || state === 2) {
//     currentFox = img;
//   } else if (state === 1) {
//     currentFox = img1;
//   } else if (state === 3) {
//     currentFox = img2;
//   }
//   image(currentFox,width/2-100, height/2+100)
  //curFox = floor((frameCount / 20) % fox.length);
  pop()
}
function mousePressed(){
state = (state + 1) % 4;

}


function crop(imgs, x, y, w, h) {
  let cropped = [];
  for (let i = 0; i < imgs.length; i++) {
    cropped.push(imgs[i].get(x, y, w, h));
  }
  return cropped;
}

function eraseBg(imgs, threshold = 10) {
  for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i];
    img.loadPixels();
    for (let j = 0; j < img.pixels.length; j += 4) {
      let d = 255 - img.pixels[j];
      d += 255 - img.pixels[j + 1];
      d += 255 - img.pixels[j + 2];
      if (d < threshold) {
        img.pixels[j + 3] = 0;
      }
    }
    img.updatePixels();
  }
  // this function uses the pixels array
  // we will cover this later in the semester - stay tuned
}
// let scanned = [];
// // let eyes;
// // let rockets;
// // let doodles1;
// // let doodles2;

// // let curEye = 0;
// // let curRocket = 0;
// // let rocketY = 500;
// // let rocketSpeedY = 0;
// // let curDoodle1 = 0;
// // let curDoodle2 = 0;
// imageMode(CENTER)

// function preload() {
//   for (let i = 1; i <= 7; i++) {
//     scanned.push(loadImage("Page" + i + ".jpg"));
//   }
// }

// function setup() {
//   createCanvas(800, 500);
//   eraseBg(scanned, 10);
//   sun=crop(scanned,1495,2000,1995,2500)
//   // eyes = crop(scanned, 0, 0, 585, 356);
//   // rockets = crop(scanned, 1600, 90, 650, 420);
//   // doodles1 = crop(scanned, 1514, 1300, 830, 300);
//   // doodles2 = crop(scanned, 100, 1300, 366, 311);
// }

// function draw() {
//   background(255);
//   image(scanned,width/2,height/2)
// }

// function drawFox(a,b){

// }
// function drawSun(u,v){
//   push()
//   translate(width / 2, height / 2);
//   rotate(frameCount * 0.05)
//   pop()
// }
  // examples: eye

//   image(
//     eyes[curEye],
//     mouseX,
//     mouseY,
//     eyes[0].width * 0.25,
//     eyes[0].height * 0.25
//   );

//   curEye = floor((frameCount / 20) % eyes.length);

//   // rocket

//   push();
//   translate(width / 2, rocketY);
//   rotate(radians(-90));
//   imageMode(CENTER);
//   image(
//     rockets[curRocket],
//     0,
//     0,
//     rockets[0].width * 0.25,
//     rockets[0].height * 0.25
//   );
//   pop();

//   // rocket animation only has 4 frames
//   curRocket = floor((frameCount / 10) % 4);

//   rocketY += rocketSpeedY;
//   rocketSpeedY += -0.1;
//   if (rocketY < -100) {
//     rocketY = 500;
//     rocketSpeedY = 0;
//   }

//   // doodles, using sin()

//   image(
//     doodles1[curDoodle1],
//     0,
//     0,
//     doodles1[0].width * 0.5,
//     doodles1[0].height * 0.5
//   );

//   curDoodle1 = floor(map(sin(frameCount / 10), -1, 1, 0, doodles1.length));

//   image(
//     doodles2[curDoodle2],
//     400,
//     300,
//     doodles2[0].width * 0.5,
//     doodles2[0].height * 0.5
//   );

//   let d = dist(mouseX, mouseY, 485, 355);
//   if (d < 100) {
//     curDoodle2 = floor(map(sin(frameCount / 10), -1, 1, 0, doodles2.length));
//   }
// }

// // You shouldn't need to modify these helper functions:

// function crop(imgs, x, y, w, h) {
//   let cropped = [];
//   for (let i = 0; i < imgs.length; i++) {
//     cropped.push(imgs[i].get(x, y, w, h));
//   }
//   return cropped;
// }

// function eraseBg(imgs, threshold = 10) {
//   for (let i = 0; i < imgs.length; i++) {
//     let img = imgs[i];
//     img.loadPixels();
//     for (let j = 0; j < img.pixels.length; j += 4) {
//       let d = 255 - img.pixels[j];
//       d += 255 - img.pixels[j + 1];
//       d += 255 - img.pixels[j + 2];
//       if (d < threshold) {
//         img.pixels[j + 3] = 0;
//       }
//     }
//     img.updatePixels();
//   }
//   // this function uses the pixels array
//   // we will cover this later in the semester - stay tuned
// }
// let scanned = [];
// imageMode(CENTER)

// function preload() {
//   for (let i = 1; i <= 7; i++) {
//     scanned.push(loadImage("Page" + i + ".jpg"));
//   }
// }

// function setup() {
//   createCanvas(800, 500);
//   eraseBg(scanned, 10);
//   sun=crop(scanned,1495,2000,500,500)
// }

// function draw() {
//   background(255);
//   let i = frameCount % scanned.length;
//   image(scanned[i],width/2,height/2)
//   drawSun(1745,2250)
// }

// function drawFox(a,b){

// }
// function drawSun(u,v){
//   push()
//   translate(1745,2250);
//   rotate(frameCount * 0.05)
//   let i = frameCount % sun.length;
//   image(sun[i], 0, 0);
//   pop()
// }

// function crop(imgs, x, y, w, h) {
//   let cropped = [];
//   for (let i = 0; i < imgs.length; i++) {
//     cropped.push(imgs[i].get(x, y, w, h));
//   }
//   return cropped;
// }

// function eraseBg(imgs, threshold = 10) {
//   for (let i = 0; i < imgs.length; i++) {
//     let img = imgs[i];
//     img.loadPixels();
//     for (let j = 0; j < img.pixels.length; j += 4) {
//       let d = 255 - img.pixels[j];
//       d += 255 - img.pixels[j + 1];
//       d += 255 - img.pixels[j + 2];
//       if (d < threshold) {
//         img.pixels[j + 3] = 0;
//       }
//     }
//     img.updatePixels();
//   }
// }

// let scanned = [];
// let sun = [];

// let scaleX, scaleY;

// function preload() {
//   for (let i = 1; i <= 7; i++) {
//     scanned.push(loadImage("Page" + i + ".jpg"));
//   }
// }

