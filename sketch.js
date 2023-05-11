
var gameState= PLAY;

var sea, seaImg, invisibleSea;

var ship_navegar,ship;     







function preload(){

  ship_navegar = LoadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

  seaImg = LoadImage("sea.png");


}

function setup(){
  createCanvas(400,400);

  ship = createSprite(50, 160, 20, 50);
  ship = addAnimation("navegar",ship_navegar );
  ship.scale = 0.5;
 
  sea = createSprite(200,180,400,20);
  sea.addImage("sea", seaImg);
  sea.x = sea.width /2;

  invisibleSea = createSprite(200,190,400,10);
  invisibleSea.visible = false;

  
  
}

function draw() {
  
if(gameState === PLAY){

  sea.velocityX= -(4+3* score/100)
  if (sea.x < 0){
      sea.x = sea.width/2;
    }
    
    ship.velocityx = ship.velocityx + 0.8



}
}
