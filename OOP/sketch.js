// let x;
// let y;
// let cloud
function setup() {
  createCanvas(400, 400);
cloud=new Cloud(width/1.2,height/2,0.8)
cloud2=new Cloud(width/4,height/4,1.5)
  // x = width / 2;
  // y = height / 2;
}

function draw() {
  background(220);
  cloud.update()
  cloud2.update()
  cloud.display()
  cloud2.display()
  //y=height*noise(frameCount*0.01)
  //drawCloud(x, y, 1);
}

class Cloud{
  //constructor
  constructor(x, y, sc){
this.x=x;
this.y=y;
this.xc=this.x
this.yc=this.y
this.sc=sc
//this.s=s1

  }
  display(){
  push();
  translate(this.x, this.y);
  scale(this.sc);
  this.drawRightArm()
  this.drawLeftArm()
  noStroke();
  //body
  circle(0, 0, 100);
  //circles around
  for(let a = 0; a < 2*PI; a+=PI/6 ){
    push();
    rotate(a);
    circle(50,30, 50);
    pop();
  }
  //eyes
  fill(0);
  circle(-30, 0, 5);
  circle(30, 0, 5);
  arc(0, 0, 30, 30, 0, PI);
  pop();
  }
  update(){
    this.y=this.yc+30*sin(frameCount*0.1)
    this.x=this.xc+100*cos(frameCount*0.1)
    this.s =map(sin(frameCount * 0.05), -1, 1, 0.5, 1);
  }
  drawRightArm() {
    //arms
    push();
    beginShape();
    let lineLength = 100;
    noFill();
    for (let i =0; i <= lineLength; i += lineLength / 20) {
    strokeWeight(15);
    let v =  15*sin(frameCount * 0.1 - i/(20));
      vertex(i, v);
    }
    endShape();
    pop();
  }
  drawLeftArm() {
    //arms
    push();
    scale(-1,1)
    beginShape();
    let lineLength = 100;
    noFill();
    for (let i = 0; i <= lineLength; i += lineLength / 20) {
    strokeWeight(15);
    let v =  15*sin(frameCount * 0.1 - i/(20));
      vertex(i, v);
    }
    endShape();
    pop();
  }

}

// function drawCloud(u, v, s) {
//   push();
//   translate(u, v);
//   scale(s);
//   noStroke();
//   //body
//   circle(0, 0, 100);
//   //circles around
//   for(let a = 0; a < 2*PI; a+=PI/6 ){
//     push();
//     rotate(a);
//     circle(50,30, 50);
//     pop();
//   }
//   //eyes
//   fill(0);
//   circle(-30, 0, 5);
//   circle(30, 0, 5);
//   arc(0, 0, 30, 30, 0, PI);
//   pop();
// }
 
// function setup() {
//   createCanvas(800, 500);
//   colorMode(HSB);
//   c = color(0);
// }

// function draw() {
//   background(0);
//   //drawCreature(width / 2, height / 2); 
//   Creature.update()
//   Creature.display()
// }

// function mousePressed() {
//   if (targetH !== 200) {
//     targetH = 200; 
//   } else {
//     targetH = random(0, 360);
//   }
// }
// //   targetH = random(0, 360);
// // }

// class Creature{



// display(){
//   constructor(){
// this.currentH = 200;      
// this.targetH = 200;       
// this.currentFade = 255;  
//   }

// Creature() {
//   let d = dist(mouseX, mouseY, x, y);
//   let offsetX = 0;
//   let offsetY = 0;
//   let h = 200;
//   let sat = 0;
//   let b = 100;
//   let speed = 0.05;

//   let curX = x + offsetX;
//   let curY = y + offsetY;
  
//    currentH = lerp(currentH, targetH, 0.05);
  
//   let targetFade;
// if (d < 50 && mouseIsPressed) {
//     targetFade = 0;
// } else {
//     targetFade = 255;
// }
//   currentFade = lerp(currentFade, targetFade, 0.1);

//   push();
//   if (d < 800) {
//     let strength = map(d, 0, 200, 1, 0);
//     offsetX = (x - mouseX) * strength;
//     offsetY = (y - mouseY) * strength;
//   }
//   if (d < 50) {
//     sat = 255;
//     speed = 0.3;
//   }

//   if (d < 20) {
//     sat = 255;
//     speed = 0.5;
//     if (mouseIsPressed) {
//       speed = 1.5;
//       // let fade = lerp(200, 0, 1);
//       // h = fade;
//       // b = fade;
//       // sat = fade;
//     }
//   }
//   translate(x + offsetX, y + offsetY);
//   let dx = map(abs(mouseX - curX), 0, width, -2, 2);
//   let rotx = dx * PI;
  

//   if (mouseY <= curY) {
//     if (mouseX >= curX) rotate(PI + rotx);
//     else rotate(PI - rotx); 
//   } else {
//     if (mouseX >= curX) rotate(-rotx);
//     else rotate(rotx); 
//   }
//   let lookX = map(mouseX, 0, width, 8, -8);
//   let lookY = map(mouseY, 0, height, -8, 4);
//   fill(h, sat, b);
//   noStroke();
//   for (let i = 0; i < 30; i++) {
//     fill(currentH, sat, currentFade);
//     let s = map(i, 0, 40, 0, 40);
//     let py = map(i, 0, 40, 0, 35);
//     let px = 7 * sin(frameCount * speed + i * 0.1); //   if (mouseIsPressed){ // speed=1.5 // //let fade=map(frameCount*0.000005,0,1000,200,0) // // let fade=map(frameCount*0.001,0,100,200,0) // let fade=lerp(200,0,0.05) // fill(0,fade,0)
//     // let targetFade;
//     //   if (mouseIsPressed) {
//     //     speed = 1.5;
//     //     targetFade = 0; 
//     //   } else {
//     //     speed = 0.05;
//     //     targetFade = 200; 
//     //   }

//     //   let currentFade
//     //     currentFade = lerp(currentFade, targetFade, 0.05);
//     //   fill(h, sat, currentFade);
//     // }

//     circle(px, py, s);
//     fill(0);
//     circle(px - 5 + lookX, py + 5 + lookY, 0.2 * s);
//     circle(px + 5 + lookX, py + 5 + lookY, 0.2 * s);
//   }
// }
// }
// }






