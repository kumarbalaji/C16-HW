var PLAY=1;
var END=0;
var gameState=1;

var sword,fruit1,fruit2,fruit3,fruit4,monster,monster2;
var swordImage,monsterImage,gameoverImage;
var fruitGroup,enemyGroup;
var gameover;
var score=0;

var knifeSound, gameOverSound;

function preload() {
  
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  monsterImage1 = loadImage("alien1.png");
  monsterImage2 = loadImage("alien2.png");
  swordImage = loadImage("sword.png");
  gameoverImage = loadImage("gameover.png")
  gameOverSound=loadSound("game-over-sound-effect.mp3");
  knifeSound=loadSound("Knife-Stab-A11-www.fesliyanstudios.com.mp3");
  
}


function setup() {
  
  createCanvas(600,600);
  
  sword = createSprite(100,200,20,20);  
  sword.scale=0.72;
  sword.addImage(swordImage);
  fruitGroup = new Group();
  enemyGroup = new Group();
  
}


function draw() {
  background("lightblue");
  
  if(gameState === PLAY){
 
  Enemys();
  fruits();
     
  sword.y=World.mouseY;
  sword.x=World.mouseX;   
    
   if(fruitGroup.isTouching(sword)) {
    fruitGroup.destroyEach();
    score=score+2;
    knifeSound.play();
   }
     
     else if(enemyGroup.isTouching(sword)) {
      
      gameState = END;
      gameOverSound.play();
      fruitGroup.destroyEach();
      enemyGroup.destroyEach();
      fruitGroup.velocityX=0;
      enemyGroup.velocityX=0;
      sword.addImage(gameoverImage);
      sword.scale=1.5;
      sword.x=300;
      sword.y=300;

    }
    
  }
  
  drawSprites();
  
  text("Score : " + score,500,50);
  
}


function fruits(){
  if(World.frameCount%80===0){
    position = Math.round(random(1,2));
    fruit=createSprite(400,200,20,20);
    console.log(position)
     //using random variable change the position of fruit, to make it more challenging
    
    if(position==1)
    {
    fruit.x=400;
    //Increasing the velocity of fruit after score 4 
    fruit.velocityX=-(7+(score/4));
    }
    else
    {
      if(position==2){
      fruit.x=0;
      
   //Increasing the velocity of fruit after score 4 
      fruit.velocityX= (7+(score/4));
      }
    }
    
    fruit.scale=0.2;
     //fruit.debug=true;
     r=Math.round(random(1,4));
    if (r == 1) {
      fruit.addImage(fruit1);
    } else if (r == 2) {
      fruit.addImage(fruit2);
    } else if (r == 3) {
      fruit.addImage(fruit3);
    } else {
      fruit.addImage(fruit4);
    }
    
    fruit.y=Math.round(random(50,340));
   
    
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);
  }
}

    
  

function Enemys() {
  
   if(World.frameCount%200 === 0) { 
     position=Math.round(random(1,2))
     monster=createSprite(600,200,20,20);
     console.log(position);
    if(position==1)
    {
    monster.x=600;
    //Increasing the velocity of monster after score 10
    monster.velocityX=-(10+(score/10));
    }
    else
    {
      if(position==2){
      monster.x=0;
      
    //Increasing the velocity of monster after score 10
      monster.velocityX= (10+(score/10));
      }
    }
     monster.addImage("moving", monsterImage1);
     monster.y=Math.round(random(25,275)); 
     //monster.velocityX=-(10+(score=10));
     monster.setlifetime=50;

     enemyGroup.add(monster);  

   }
  
   if(World.frameCount%200 === 0) {
     position=Math.round(random(1,2))
     monster2=createSprite(800,200,20,20);
     console.log(position);
     
    if(position==1)
    {
    monster2.x=800;
    //Increasing the velocity of monster after score 10
    monster2.velocityX=-(10+(score/10));
    }
    else
    {
      if(position==2){
      monster2.x=0;
      
    //Increasing the velocity of monster after score 10
      monster2.velocityX= (10+(score/10));
      }
    }
     monster2.addImage("moving2", monsterImage2);
     monster2.y=Math.round(random(325,575));
     monster2.setlifetime=50;
     //monster2.velocityX=-(10+(score=10));
     enemyGroup.add(monster2);
     
   }
   
}
