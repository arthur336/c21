var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(200,200,30,30);
  wall=createSprite(1000,200,20,100);
  car.shapeColor="orange";
  wall.shapeColor="red";
  car.velocityX=5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

bounceoff(car,wall);

  drawSprites();
}

function isTouching(a,b){
  if (a.x - b.x < a.width/2 + b.width/2
    && b.x - a.x < b.width/2 + a.width/2
    && b.y - a.y < b.height/2 + a.height/2
    && a.y - b.y < a.height/2 + b.height/2) {
return true;
}
else {
return false;
}
}

function bounceoff(a,b){
if(a.x - b.x < a.width/2 + b.width/2
  && b.x - a.x < b.width/2 + a.width/2){
car.velocityX=(-1)*car.velocityX;
  }
else if(b.y - a.y < b.height/2 + a.height/2
  && a.y - b.y < a.height/2 + b.height/2) {
car.velocityY=(-1)*car.velocityY;
  }
}