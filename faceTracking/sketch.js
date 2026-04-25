let faceMesh;
let video;
let options = { maxFaces: 1, refineLandmarks: false, flipped: true };
let faces = [];
let x,y;
function preload() {
  faceMesh = ml5.faceMesh(options);
}
function setup() {
  createCanvas(640, 480);
    // Create the video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  faceMesh.detectStart(video, gotFaces);
  x=random(width)
  y=random(height)
}
// Callback function for when faceMesh outputs data
function gotFaces(results) {
  // Save the output to the faces variable
  faces = results;
}
function draw() {
  background(220);
  push()
  translate(width,0)
  scale(-1, 1);
  image(video, 0, 0, width, height);
  pop()
  circle(x,y,50)
  // Draw all the tracked face points
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i];
    let p1=face.keypoints[0]
    let p2=face.keypoints[14]
    fill(0,255,0)
    //stroke(255, 0, 0);
    circle(p1.x, p1.y, 10);
    circle(p2.x, p2.y, 10);
    let d=dist(p1.x,p1.y,p2.x,p2.y)
    console.log(d)
    // let op=map(d,10,40,0,255)
    // background(0,op)
    if(d>30){
      x=lerp(x,p1.x,0.1)
      y=lerp(y,p1.y,0.1)
    }

    //if
    //line(p1.x,p1.y,p2.x,p2.y)
    // let myPoint=face.keypoints[168]
    // rectMode(CENTER)
    // fill(0)
    // rect(myPoint.x,myPoint.y,100,50)
    // for (let j = 0; j < face.keypoints.length; j++) {
    //   let keypoint = face.keypoints[j];
    //   let d = dist(mouseX, mouseY, keypoint.x, keypoint.y);
    //   if (d < 5) {
    //     textSize(24);
    //     text(j, keypoint.x, keypoint.y);
    //   }

    //   //     fill(255, 255, 0);
    //   // noStroke();
    //   // circle(keypoint.x, keypoint.y, 5);
   //}
  }
}