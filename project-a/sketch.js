/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/

let r1=255
  let g1=255
  let b_val1=255
let t=0
 let a
    let b=0
    let a1
    let b1=0
function setup() {
  createCanvas(800, 500);
    colorMode(HSB);
  c = color(0);
  a=random(0,width)
}

function draw() {
  background(0);
  rainMountain()
  //mountain()
  lightening()
  drawCreature(width / 2, height / 2-80); 
}

// function mousePressed() {
//   if (r1 !== 190) {
//     r1 = 190; 
//   } else {
//     r1 = random(0, 255);
//   }
//     if (g1 !== 100) {
//     g1 = 100; 
//   } else {
//     g1 = random(0, 360);
//   }
//   if (b_val1 !== 255) {
//     b_val1 = 255; 
//   } else {
//     b_val1 = random(0, 360);
//   }
// }
//   targetH = random(0, 360);
// }

function drawCreature(x, y) {
   
  push()
  let d = dist(mouseX, mouseY, x, y);
  let offsetX = 0;
  let offsetY = 0;
  let h = 330;
  let sat = 100;
  let b = 78;
  let speed = 0.05;

  let curX = x + offsetX;
  let curY = y + offsetY;
  
   //currentH = lerp(currentH, targetH, 0.05);
  
  //let targetFade;
  let z = map(sin(frameCount * 0.005), -1, 1, 0, 1);
let r = lerp(255, 197, z);
let g = lerp(83, 31, z);
let b_val = lerp(24, 96, z); 
if (d < 50 && mouseIsPressed) {
  
   //targetFade = 0; 
  
} else {
//   //targetFade = 255;
  r1=190
  g1=100
  b_val1=255
}
  r1 = lerp(r1, r, 0.1);
  g1 = lerp(g1, g, 0.1);
  b_val1=lerp(b_val1, b_val, 0.1)
  //currentFade = lerp(currentFade, targetFade, 0.1);
  

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
      fill(r1,g1,b_val1);
      speed = 1.5;
    
    }
  }
  translate(x + offsetX, y + offsetY);
  let dx = map(abs(mouseX - curX), 0, width, -2, 2);
  let rotx = dx * PI;
  

  if (mouseY <= curY) {
    if (mouseX >= curX) rotate(PI + rotx);
    else rotate(PI - rotx); 
  } else {
    if (mouseX >= curX) rotate(-rotx);
    else rotate(rotx); 
  }
  let lookX = map(mouseX, 0, width, 8, -8);
  let lookY = map(mouseY, 0, height, -8, 4);
  
  //fill(r,g,b_val);
   
  noStroke();
  for (let i = 0; i < 30; i++) {
   fill(r1,g1,b_val1);
    let s = map(i, 0, 40, 0, 40);
    let py = map(i, 0, 40, 0, 35);
    let px = 7 * sin(frameCount * speed + i * 0.1); 

    circle(px, py, s);
    fill(0);
    // circle(px - 5 + lookX, py + 5 + lookY, 0.2 * s);
    // circle(px + 5 + lookX, py + 5 + lookY, 0.2 * s);
  }
  let headPx = 7 * sin(frameCount * speed + 29 * 0.1);
  let headPy = map(29, 0, 40, 0, 35);
  let headS = map(29, 0, 40, 0, 40);

  fill(0); 
  if (mouseIsPressed){
    fill(r1,g1,b_val1);
  }
  circle(headPx - 5 + lookX, headPy + 5 + lookY, 0.2 * headS);
  circle(headPx + 5 + lookX, headPy + 5 + lookY, 0.2 * headS);
  pop()
}




function rainMountain() {
  push()
background(10, 20, 60);
//let colorRain = color(228, 83, 24, 60);
//let colorMount = color(228, 83, 24, 50);
let z = map(sin(frameCount * 0.005), -1, 1, 0, 1);
let r1=255
r = lerp(228, 197, z);
let g1=255
g = lerp(83, 31, z);
let b_val1=255
b_val = lerp(24, 96, z); 

background(r, g, b_val);

if (z < 0.7) {

let s = random(30,50);  
let maxD = dist(0, 0, width, height);

for (let x = s/2; x < width; x += s) {
  for (let y = s/2; y < height; y += s) {
    let d = dist(mouseX, mouseY, x, y);
    let op = map(d, 0, 100, 200, 50);
    let a= map(d, 0, 200, 30, 0);
    let n = noise(x * 0.01, y * 0.01, t);
    let rainLength = map(n, 0, 1, 10, 25);

    stroke(200, 220, 255, op);
    strokeWeight(1);
    line(x,y,x,y+rainLength);
  }
}

t += 1;
}


   
 
//  mount 1
  for (let x = 0; x <= width; x += 1) {
  
  //1
  let ny1 = map(noise(x * 0.002, frameCount * 0.002), 0, 1, 200, 400);
  stroke(114, 90, 30, map(z, 0, 1, 50, 200)); 
  strokeWeight(20);
  line(x, height, x, ny1);

  //2
  let ny2 = map(noise(x * 0.005 + 100, frameCount * 0.002), 0, 1, 220, 550);
  stroke(114, 52, 67, map(z, 0, 1, 80, 220)); 
  strokeWeight(20);
  line(x, height, x, ny2);

  // 3
  let ny3 = map(noise(x * 0.004 + 200, frameCount * 0.002), 0, 1, 350, 500);
  stroke(105, 31, 96, map(z, 0, 1, 100, 255));  
  strokeWeight(20);
  line(x, height, x, ny3);
}
  pop()
  }

  function lightening(){
    push()
     if(keyIsPressed&& key === 'l'){
   noStroke()
    fill(255)
    strokeWeight(5)
    
    a=a-2
    b=b+5
    beginShape()
    vertex(a,b)
    vertex(a,b+200)
    vertex(a-30,b+100)
    vertex(a+30,b+95)
    
    vertex(a,b)
    endShape()
    if (b > height - 200||a<0) {
      a=random(0,width)
      b = 0;
}
     a1=a1-1
    b1=b1+6
    beginShape();
    vertex(a1,b1)
    vertex(a1,b1+200)
    vertex(a1-30,b1+100)
    vertex(a1+30,b1+95)
    
    vertex(a1,b1)
  
  endShape();
    if (b1 > height - 200||a1<0) {
      a1=random(0,width)
      b1 = 0;
}
    
  }   pop()
}
