/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/

let currentH = 200;      
let targetH = 200;       
let currentFade = 255;   
function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container")
  colorMode(HSB);
  c = color(0);
}

function draw() {
  background(0);
  drawCreature(width / 2, height / 2); 
}

function mousePressed() {
  if (targetH !== 200) {
    targetH = 200; 
  } else {
    targetH = random(0, 360);
  }
}
//   targetH = random(0, 360);
// }

function drawCreature(x, y) {
  let d = dist(mouseX, mouseY, x, y);
  let offsetX = 0;
  let offsetY = 0;
  let h = 200;
  let sat = 0;
  let b = 100;
  let speed = 0.05;

  let curX = x + offsetX;
  let curY = y + offsetY;
  
   currentH = lerp(currentH, targetH, 0.05);
  
  let targetFade;
if (d < 50 && mouseIsPressed) {
    targetFade = 0;
} else {
    targetFade = 255;
}
  currentFade = lerp(currentFade, targetFade, 0.1);

  push();
  if (d < 800) {
    let strength = map(d, 0, 200, 1, 0);
    offsetX = (x - mouseX) * strength;
    offsetY = (y - mouseY) * strength;
  }
  if (d < 50) {
    sat = 255;
    speed = 0.3;
  }

  if (d < 20) {
    sat = 255;
    speed = 0.5;
    if (mouseIsPressed) {
      speed = 1.5;
      // let fade = lerp(200, 0, 1);
      // h = fade;
      // b = fade;
      // sat = fade;
    }
  }
  translate(x + offsetX, y + offsetY);
  let dx = map(abs(mouseX - curX), 0, width, -2, 2);
  let rotx = dx * PI;
  // if (d < 300) {
  //     let strength = map(d, 0, 200, 1, 0);
  //     offsetX = (x - mouseX) * strength;
  //     offsetY = (y - mouseY) * strength;
  //   }
  //   if (d < 50) {
  //     sat = 255;
  //     speed = 0.3;
  //   }

  //   if (d < 20) {
  //     sat = 255;
  //     speed = 0.5;
  //     if (mouseIsPressed){
  //   speed=1.5
  //       let fade=lerp(200,0,1)
  //       h=fade
  //       b=fade
  //       //sat=fade

  // }
  //   }

  if (mouseY <= curY) {
    if (mouseX >= curX) rotate(PI + rotx);
    else rotate(PI - rotx); 
  } else {
    if (mouseX >= curX) rotate(-rotx);
    else rotate(rotx); 
  }
  let lookX = map(mouseX, 0, width, 8, -8);
  let lookY = map(mouseY, 0, height, -8, 4);
  //   let dx = map(mouseX, 0, width, 0,1);
  //    let dy = map(mouseY, 0, height, 0,1);
  //     let rotx= dx*2*PI
  //     let roty=dy*2*PI
  //     if (x + offsetX<width/2 && y+ offsetY<=height/2){

  //       rotate(rotx + roty * 0.2)
  //     }
  //   else if(x + offsetX==width/2 && y+ offsetY<=height/2){
  //       rotate(PI)
  //     }
  //   else if(x + offsetX>width/2 && y+ offsetY<=height/2){
  //       rotate(PI + rotx)
  //     }
  //   else if(x + offsetX<width/2 && y+ offsetY>height/2){
  //       rotate(-rotx - roty * 0.1)
  //     }
  //   else if(x + offsetX>width/2 && y+ offsetY>height/2){
  //       rotate(PI - rotx)
  //     }

  //   let rotX = map(mouseX, 0, width, PI/6, -PI/6);
  //   let rotY = map(mouseY, 0, height, PI, -PI);
  //   rotate(rotX+rotY);

  //   let rotY = map(mouseY, 0, height, -10, 10);
  //   if (mouseY < y + offsetY) {
  //     rotate(-rotX);
  //   } else {
  //     rotate(rotX );
  //   }
  fill(h, sat, b);
  noStroke();
  for (let i = 0; i < 30; i++) {
    fill(currentH, sat, currentFade);
    let s = map(i, 0, 40, 0, 40);
    let py = map(i, 0, 40, 0, 35);
    let px = 7 * sin(frameCount * speed + i * 0.1); //   if (mouseIsPressed){ // speed=1.5 // //let fade=map(frameCount*0.000005,0,1000,200,0) // // let fade=map(frameCount*0.001,0,100,200,0) // let fade=lerp(200,0,0.05) // fill(0,fade,0)
    // let targetFade;
    //   if (mouseIsPressed) {
    //     speed = 1.5;
    //     targetFade = 0; 
    //   } else {
    //     speed = 0.05;
    //     targetFade = 200; 
    //   }

    //   let currentFade
    //     currentFade = lerp(currentFade, targetFade, 0.05);
    //   fill(h, sat, currentFade);
    // }

    circle(px, py, s);
    fill(0);
    circle(px - 5 + lookX, py + 5 + lookY, 0.2 * s);
    circle(px + 5 + lookX, py + 5 + lookY, 0.2 * s);
  }
}
