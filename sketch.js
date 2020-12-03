var fixedRect,movingRect;
function setup(){
  createCanvas(500,500);
  fixedRect=createSprite(200,200,50,50);
  fixedRect.shapeColor='green';
  movingRect=createSprite(300,300,20,20);
  movingRect.shapeColor='green';
}
function draw(){
  background('white');
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  console.log(movingRect.y-fixedRect.y);
  drawSprites();
  if(movingRect.x-fixedRect.x<(movingRect.width/2+fixedRect.width/2)
    && fixedRect.x-movingRect.x<(movingRect.width/2+fixedRect.width/2)
    && fixedRect.y-movingRect.y<(movingRect.height/2+fixedRect.height/2)
    && movingRect.y-fixedRect.y<(movingRect.height/2+fixedRect.height/2)){
      movingRect.shapeColor='red';
      fixedRect.shapeColor='red';
    }
    else{
      movingRect.shapeColor='green';
      fixedRect.shapeColor='green';
    }
 
}