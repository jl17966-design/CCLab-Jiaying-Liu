let c=[];
let r = [];
//let c2;
let thunder
function preload(){
  thunder = loadSound("thunder.mp3");
}
function setup() {
  createCanvas(400, 400);
  
  // for(let i=0;i<10;i++){
      
  //   c.push=(new Cloud(random(width),random(height),random(0.5,1)));

  //   }
  //c = new Cloud(width / 2, height / 2, 1);
  //c2 = new Cloud(width / 4, height / 4, 0.5);
}
function mousePressed(){
  c.push(new Cloud(mouseX,mouseY,random(0.5,1))); 
}
function draw() {
  background(220);
    
  for (let i = 0; i < r.length; i++) {
    r[i].updateRain();
    r[i].displayRain();
    if(r[i].isOut){
      r.splice(i, 1);
    }
  }
  console.log(r.length);

  
  for(let i=0;i<c.length;i++){
    for(let j=0;j<c.length;j++){
        if(i!=j){
      c[i].checkCollision(c[j]) 
        }
    }
     if(c[i].isRaining){
    r.push(new Rain(c[i].x, c[i].y,c[i].f));
  }
  
  c[i].update();
  c[i].display();
  if (c[i].isOut == true) {
    c.splice(i, 1);
    }
   
  }
}

