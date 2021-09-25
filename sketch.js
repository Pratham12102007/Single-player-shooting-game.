  var bow , arrow,  scene,pinkB,blueB,greenB,redB , arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){
  
  backgroundImage = loadImage("bg2.png");
  arrowImage = loadImage("bullet.png");
  bowImage = loadImage("player.png");
  red_balloonImage = loadImage("Enemy.png");
  green_balloonImage = loadImage("Enemy.png");
  pink_balloonImage = loadImage("Enemy.png");
  blue_balloonImage = loadImage("Enemy.png");
  
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //creating background
  scene = createSprite(windowWidth,windowHeight,100,200);
  scene.addImage(backgroundImage);
  scene.scale = 5
  
  // creating bow to shoot arrow
  bow = createSprite(20,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 0.3;
  
   
  
  redB=new Group()
  greenB=new Group()
  pinkB=new Group()
  blueB=  new Group()
 arrowGroup=new Group()
  
  score = 0 
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyWentUp("space")) {
    createArrow();
    
  }
   
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  
    
  
 if(arrowGroup.isTouching(redB)){
  redB.destroyEach();
  arrowGroup.destroyEach();
  score=score+4
  }
  
  if(arrowGroup.isTouching(greenB)){
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score=score+4
  }
  
  if(arrowGroup.isTouching(blueB)){
  blueB.destroyEach();
  arrowGroup.destroyEach();
  score=score+4
  }
  
  if(arrowGroup.isTouching(pinkB)){
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score=score+4
  }
 
  
  
  
  
  drawSprites();
  text("Score: "+ score, 300,50);
  
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 20;
  arrow.y=bow.y;
  arrow.velocityX = 6;
  arrow.lifetime = 1000;
  arrow.scale = 0.1;
   arrowGroup.add(arrow)
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3.5;
  red.lifetime = 1000;
  red.scale = 0.1;
  redB.add(red)
  return red
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3.5;
  blue.lifetime = 1000;
  blue.scale = 0.1;
  blueB.add(blue)
  return blue
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3.5;
  green.lifetime = 1000;
  green.scale = 0.1;
  greenB.add(green)
return green
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3.5;
  pink.lifetime = 1000;
  pink.scale = 0.1
  pinkB.add(pink)
  return pink
}
