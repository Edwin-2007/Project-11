var boy,running_boy
var path, pathImage;
var leftboundary, rightboundary
var background, backgroundimage
function preload(){
  //pre-load images
  running_boy = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImage = loadImage("path.png");                                        
}

function setup(){
  createCanvas(600,695);
  //create sprites here
  path = createSprite(250,160,20,50);
  path.addImage("path",pathImage);
  path.scale = 1.3
  path.velocityY = 4;
  boy = createSprite(256,160,20,50);
  boy.addAnimation("running", running_boy);
  boy.scale = 0.1
  leftboundary = createSprite (50,348,50,695)
  leftboundary.visible = false
  rightboundary = createSprite (457,348,50,695)
  rightboundary.visible = false
}

function draw() {
  background(0);
  if (keyDown("right")) {
    boy.x = boy.x + 5;
 }
 if (keyDown("left")) {
   boy.x = boy.x - 5
 }
   if (keyDown("down")) {
    boy.y = boy.y + 5;
 }
 if (keyDown("up")) {
   boy.y = boy.y - 5
 }
  boy.bounceOff(leftboundary);
  boy.bounceOff(rightboundary);
  if (path.y > 698) {
    path.y = height/ -1;    
    }
  drawSprites() 
}
