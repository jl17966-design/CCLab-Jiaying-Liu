let backSound
//create arrays
let x=[]
let y=[]
let sounds=[]
let img
function setup() {
  createCanvas(400, 400);
  //backSound.loop()
  
}

function draw() {
  background(220);
  for (let i=0;i<x.length;i++){
    drawCircle(x[i],y[i])
  }
}
function preload(){
   img = loadImage("images/asterisk.png");

  backSound=loadSound("my-sounds/00.mp3")
  for(let i=1;i<9;i++){
  sounds=loadSound("my-sounds/0"+i+".mp3")
  }
}
function drawCircle(u,v){
  // if (mousePressed){
  // }
  fill(0)
  //circle(u,v,50)
  imageMode(CENTER)
  filter(INVERT)
  tint(0,0,255)
  let s=random(1,2)
  rotate(PI/2,2*PI)
  image(img,u,v,img.width,img.height)
}
function mousePressed(){
  x.push(mouseX)
  y.push(mouseY)
  //let index=(x.length-1)%sounds.length
  
  let index=floor(map(mouseY,0,height,0,sounds.length,50))
  sounds[index].play()
}