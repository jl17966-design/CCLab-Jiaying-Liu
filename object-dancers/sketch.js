/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new Nono(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class Nono {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    //constructor.head
    this.bArray = [];  
    this.aArray = [];  
    for (let i = 0; i < 50; i++) {
      this.bArray[i] = map(i, 0, 40, 0, 140);           
      this.aArray[i] = 0;  
      this.head=0 
    }
    //constructor.arms
    // this.dArray = [];  
    // this.eArray = [];  
    // this.sArray = []; 
    // for (let i = 0; i < 50; i++) {
    //   this.dArray[i] = map(i, 0, 40, 60, 100);  
    //   //this.tArray[i] = map(i, 0, 40, 5, 30);       
    //   this.eArray[i] = 0;  
    //   this.arm=0
    // }
    
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    let speed;
    
    if (mouseIsPressed) {
      speed = 0.3;
      this.bounceY = -30 * sin(frameCount * 0.15)
      //this.c = map(i, 0, 40, 5, 150);
    } else {
      speed = 0.1;
      this.bounceY=0
    }
    
    this.head=20 * sin(frameCount * speed)
   for (let i = 0; i < 50; i++) {
      this.aArray[i] = 20 * sin(frameCount * speed + i * 0.05);
    }
      // this.s = map(i, 0, 40, 5, 150);
    // }
      // this.b = cos(frameCount)*0.5; //how long
      // this.a = sin(frameCount)*10;
      //this.s = sin(frameCount)*100;
  // this.arm=10 * sin(frameCount * 0.05)
  //  for (let i = 0; i < 50; i++) {
  //     this.eArray[i] = 20 * sin(frameCount * 0.1 + i * 0.05);
  //     //this.dArray[i] = 30 * sin(frameCount * 0.05 + i * 0.05);
  //   }

    // update properties here to achieve
    // your dancer's desired moves and behaviour
  }
  display() {
    
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y + this.bounceY);
    // ******** //
    // ⬇️ draw your dancer from here ⬇️
//pedestal
  noStroke()
  fill(0)
  //rect(-50,100,100,60)
  rect(-60,90,120,70)
  
//body
    for (let i = 0; i < 50; i++) {
      this.a = this.bArray[i] - 50;    
      this.b = this.aArray[i];     
      this.c = 60       
      fill(35);
      noStroke();
      circle(this.b, this.a, this.c); 
     }

//arms
  //right arm
      //push();
    // for (let i = 0; i < 50; i++) {
    //   this.e = this.dArray[i] - 50;    
    //   this.d = this.eArray[i];     
    //   this.f = 30  
    //   fill(255);
    //   noStroke();
    //   circle(this.e, this.d, this.f);      
    //pop();
    //}
    push();
    let moveX = 20 * noise(frameCount * 0.1) 
    translate(moveX, 0);
    beginShape();
    let lineLength = 50;
    noFill();
    stroke(35)
    
    for (let armI = 0; armI <= lineLength; armI += lineLength / 200) {
      strokeWeight(25);
      let armV = 20 * sin(frameCount * 0.1 - armI / 20);
      vertex(armI, 20+armV);
    }
    endShape();
    pop();

  //leftarm
     push();
     moveX = 0 * noise(frameCount * 0.1)
     scale(-1,1)
    translate(moveX, 0);
    beginShape();
    //let lineLength = 70;
    noFill();
    stroke(35)
    
    for (let armI = 0; armI <= lineLength; armI += lineLength / 200) {
      strokeWeight(25);
      let armV = 20 * sin(frameCount * 0.1 - armI / 25);
      vertex(armI+10, 20+armV);
    }
    endShape();
    pop();


      
      
//face 1
      fill(35)
      strokeWeight(25)
      stroke(219, 138, 72)
      line(this.head+30,30-50,this.head+50,40-50)
      noStroke()
      circle(this.head,-50,105)

//face
      fill(100)
      circle(this.head,-50,80)
//nose
      fill(250, 182, 182)
      circle(this.head,-42,10)
//eyes
  //left eye
    for(let i = 0; i < 2*PI; i+=PI/3.5 ){
      push();
      fill(255)
      translate(this.head-20,-55)
      rotate(i);
      circle(7,7, 13);
      pop();
    }
    for(let i = 0; i < 2*PI; i+=PI/4 ){
      push();
      fill(255)
      translate(this.head-20,-55)
      rotate(i);
      circle(7,8, 13);
      pop();
    }
    fill(255)
    circle(this.head-20,-55,25)
    fill(247, 244, 52)
    circle(this.head-20,-55,15)

  //right eye
    for(let i = 0; i < 2*PI; i+=PI/3.5 ){
      push();
      fill(255)
      translate(this.head+20,-55)
      rotate(i);
      circle(7,7, 13);
      pop();
    }
    for(let i = 0; i < 2*PI; i+=PI/4 ){
      push();
      fill(255)
      translate(this.head+20,-55)
      rotate(i);
      circle(7,8, 13);
      pop();
    }
    fill(255)
    circle(this.head+20,-55,25)
    fill(247, 244, 52)
    circle(this.head+20,-55,15)

//mouth
      stroke(219, 2, 2)
      noFill()
      strokeWeight(8)
      arc(this.head,-36,40,30,0+0.3,PI-0.3)
      arc(this.head,-40,33,23,0+0.4,PI-0.4)
      stroke(0)
      strokeWeight(1)
      arc(this.head,-38,40,30,0+0.3,PI-0.3)
    
//eyebrow
    strokeWeight(5)
    stroke(0)
    line(this.head+10,-75,this.head+22,-80)
    line(this.head-10,-75,this.head-22,-80)

//pedestal
  noStroke()
  fill(27)
  rect(-50,100,100,60)
  //rect(-50,90,110,70)
   noStroke()
   fill(20)
  beginShape()
    vertex(-60,90)
    vertex(-50,100)
    vertex(-50,100+60)
    vertex(-60,160)
    vertex(-60,90)
  endShape() 
  noStroke()
   fill(20)
  beginShape()
    vertex(-60+120,90)
    vertex(-50+110,100)
    vertex(-50+110,100+60)
    vertex(-60+110,100+60)
    vertex(-60+110,100)
  endShape(-60+120,90)   
  push();
    textSize(30); 
    textFont('AkayaKanadaka')          
    fill(255, 200);  
    noStroke();
    textAlign(CENTER, CENTER);
    
    text("Nono🍳", 0, 140);
    
    pop();
  }   

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
  //   this.drawReferenceShapes()
    

  //   pop();
  // }
  // drawReferenceShapes() {
  //   noFill();
  //   stroke(255, 0, 0);
  //   line(-5, 0, 5, 0);
  //   line(0, -5, 0, 5);
  //   stroke(255);
  //   rect(-100, -100, 200, 200);
  //   fill(255);
  //   stroke(0);
  // }
  }






/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
  */