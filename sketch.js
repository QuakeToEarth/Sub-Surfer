
var mc
var sub
var road
function preload(){
  mc = loadAnimation  ("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png",)
  road = loadImage ("path.png")
}

function setup(){
  createCanvas(400,400);
path = createSprite (200,200,400,400)
path.addImage(road)
sub = createSprite (20,250,20,20)
sub.addAnimation("mc", mc)
}

function draw() {
  path.velocityY = 2;
  sub.x = mouseX
  background(0);
  if (path.y>450)
  {
    path.y = 200
  }
drawSprites()

}
