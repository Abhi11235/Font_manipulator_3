wristY=0;
wristX=0;

function preload(){

}

function setup() 
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas= createCanvas(550,500)
    canvas.position(560,150);
    
    poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("poseNet is initialized")
}
function draw()
{
  image(video,0, 0, 300, 300);
  classifier.classify(video, gotResult);
  background(white)
  textSize(30)
  fill(Red)
  text(Abhi,"x")
}

function gotResult(error,results) {
    if(error) {
      console.error(error);
    } else {
      if((results[0].confidence > 0.5) && (previous_result !=results[0].
  label)){
      }}}
function gotPoses(results) 
{
    if(results.length > 0 )
{
console.log(results);

leftWristX =results[0].pose.leftWrist.x;
rightWristX =results[0].pose.rightWrist.x;
difference = floor(leftWristX-rightWristX);

console.log("leftWristX = "+ leftWristX +"rightWristX" + rightWristX + "difference" + difference);
}
}

function draw()
{}