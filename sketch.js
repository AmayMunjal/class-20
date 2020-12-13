var fixedRect, movingRect, rect1, rect2;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 50);
  rect1 = createSprite(300,20,50,50)
  rect2 = createSprite(300,350,50,50)
  fixedRect.shapeColor = "red"
  movingRect.shapeColor = "blue"
  rect1.shapeColor = "purple"
  rect2.shapeColor = "yellow"
  rect1.velocityY = 2
  rect2.velocityY = -2
}

function draw() {
  background(0);
  movingRect.x = World.mouseX  
  movingRect.y = World.mouseY 
  //console.log  (movingRect.x-fixedRect.x); 
 // console.log  (movingRect.width/2 + fixedRect.width/2);
if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
  fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
  movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
  fixedRect.y-movingRect.y < movingRect.height/2 + fixedRect.height/2){
  fixedRect.shapeColor = "green"
  movingRect.shapeColor = "green"

}
else {
  fixedRect.shapeColor = "red"
  movingRect.shapeColor = "blue"
}
if(rect1.y - rect2.y < rect1.height/2 +rect2.height/2 &&
  rect2.y - rect1.y < rect1.height/2 +rect2.height/2){
    rect1.velocityY = -1 * rect1.velocityY
    rect2.velocityY = -1 * rect2.velocityY
  }
  if(rect1.x - rect2.x < rect1.width/2 +rect2.width/2 &&
    rect2.y - rect2.y < rect1.width/2 +rect2.width/2){
      rect1.velocityY = -1 * rect1.velocityX
      rect2.velocityY = -1 * rect2.velocityX
    }
  drawSprites();
} 