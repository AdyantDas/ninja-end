var sword,swordImage,swordG,swordW,fruit,fruit1,fruit2,fruit3,fruit4,alien,alienim,alienim2,fruitG,alienG;
var PLAY=1;
var END=0;
var MID=2
var r;
var gameState=1;
var alien_running;
var swordSound,swordAlien;
var position;

function preload(){
  swordImage=loadImage("sword.png");
  swordG=loadImage("gameover.png");
  swordW=loadImage("win.png");
  swordW.scale=0.1
  
 fruit1=loadImage("fruit1.png");
fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  alienim=loadImage("alien1.png");
  alienim2=loadImage("alien2.png");

  alien_running = loadImage("alien1.png");
 swordSound = loadSound("Sword-Slice-Quick-Transition-www.fesliyanstudios.com.mp3");
  swordAlien=loadSound("Explosion+1.mp3")
  
}
function setup(){
  createCanvas(400,400);

  sword=createSprite(40,200,20,20)
  
  score=0
 
   fruitG= new Group();
  alienG= new Group();
}
function draw(){
background("lightblue");
  
     
    
  if(gameState===PLAY){
   
     
    sword.addImage(swordImage); 
  sword.scale = 0.7;
    sword.y=World.mouseY;
   sword.x=World.mouseX;
    fruits();
  aliens();
    if(fruitG.isTouching(sword)){
      fruitG.destroyEach();
    score=score+2;
     
      swordSound.play();
  }
    
 if(score===20){
   gameState=MID;
 }
    
  if(alienG.isTouching(sword)){
    alienG.destroyEach();
    swordAlien.play();
      sword.x=200;
      sword.y=200;
      gameState=END;
     
  }
  
  }
  else if (gameState===END){
    sword.addImage(swordG);
    score=0;
    text("SPACE to restart",200,170)
    if(keyDown("space")){
      gameState=PLAY;
    }
  }

  if(gameState===MID){
sword.addImage(swordW);
text("space to restart",200,170)
if(keyDown("space")){
  gameState=PLAY;
  }
}
    
  
  
drawSprites();
  text("Score: "+ score, 200,10);
}

function fruits(){
  
  if(World.frameCount%80===0){
  fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
    r=Math.round(random(1,4));
    if(r==1){
      fruit.addImage(fruit1);
    }else if (r==2){
    fruit.addImage(fruit2); 
    }else if (r==3){
      fruit.addImage(fruit3);
    }else if (r==4){
      fruit.addImage(fruit4);
    }
    fruit.y=Math.round(random(50,340));
    
    fruit.velocityX=-7
    fruit.setLifetime=100;
    
       var position=Math.round(random(1,2));
  if(position==1)
  {
    fruit.x=400;
    fruit.velocityX=-(7+(score/4));
    
  }else if(position==2){
    
        fruit.x=0;
    fruit.velocityX=(7+(score/4));
        
      }
    fruitG.add(fruit);
   
  }
  
}
function aliens(){
  
  if(World.frameCount%200===0){
    alien=createSprite(400,200,20,20);
    alien.addImage(alien_running);
    alien.y=Math.round(random(100,300));
    alien.velocityX=-8;
   alien.setLifetime=50;
    alien.velocityX=-(8+(score/4));
    alienG.add(alien);
   
  }
}
