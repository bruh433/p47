var Zombie1
var Guy1
var Guy2
var Guy3
var Girl1
var Girl2
var BackImage,background
var Guy1Group
var Guy2Group
var Guy3Group
var Girl1Group
var score = 0

function preload(){ 
  BackImageI = loadImage("AnimatedForest.jpg");
  Zombie1I = loadImage("GameCharacters/Zombie.png");
  Guy1I = loadImage("GameCharacters/Guy1.png");
  Guy2I = loadImage("GameCharacters/Guy2.png");
  Guy3I = loadImage("GameCharacters/Guy3.png");
  Girl1I = loadImage("GameCharacters/Girl1.png");
  Girl2I = loadImage("GameCharacters/Girl2.png");
}
function setup() {
 createCanvas(1800,1200)
 background = createSprite(0,0,1800,1200)
 background.addImage(BackImageI);
 background.scale = 4;
 background.velocityX = -4; 
 background.x = background.width/2;
 Zombie1 = createSprite(100,300,50,50)
 Zombie1.scale = 0.5
 Zombie1.addImage(Zombie1I)
Guy1Group = createGroup();
Guy2Group = createGroup();
Guy3Group = createGroup();
Girl1Group = createGroup();
Girl2Group = createGroup();
}

function draw() {
  if(background.x <0){ 
  background.x = background.width/2;
}
if(keyDown(LEFT_ARROW)){
    changePosition(-2.5,0);
}
else if(keyDown(RIGHT_ARROW)){
    changePosition(2.5,0);
}
else if(keyDown(UP_ARROW)){
    changePosition(0,-2.5);
}
else if(keyDown(DOWN_ARROW)){
    changePosition(0,+2.5);
}
Guy11();
Guy22();
Guy33();
Girl11();
Girl22();
  drawSprites(); 
 textSize(50)
 fill("red")
 stroke("black")
 text("Score :" +score,1525,100)
}
function changePosition(x,y){
  Zombie1.x = Zombie1.x + x;
  Zombie1.y = Zombie1.y + y;
}
function Guy11() {
  if (frameCount % 200 === 0) {
    Guy1 = createSprite(500,200,50,50)
    Guy1.scale = 0.45
    Guy1.addImage(Guy1I)
    Guy1.y = Math.round(random(150,500));
    Guy1.velocityX = 3;
    
     //assign lifetime to the variable
    Guy1.lifetime = 200;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //adding cloud to the group
Guy1Group.add(Guy1);
    }
}  
function Guy22() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    Guy2 = createSprite(500,200,50,50)
    Guy2.scale = 0.9;
    Guy2.addImage(Guy2I)
    Guy2.y = Math.round(random(50,500));
    Guy2.velocityX = 2;
    
     //assign lifetime to the variable
    Guy2.lifetime = 150;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //adding cloud to the group
Guy2Group.add(Guy2);
    }
}  
function Guy33() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    Guy3 = createSprite(900,200,50,50)
    Guy3.scale = 0.4
    Guy3.addImage(Guy3I)
    Guy3.y = Math.round(random(50,500));
    Guy3.velocityX = 2;
    
     //assign lifetime to the variable
    Guy3.lifetime = 150;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //adding cloud to the group
Guy3Group.add(Guy3);
    }
}  
function Girl11() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    Girl1 = createSprite(1200,200,50,50)
    Girl1.scale = 0.4
    Girl1.addImage(Girl1I)  
    Girl1.y = Math.round(random(50,500));
    Girl1.velocityX = 2;
    
     //assign lifetime to the variable
    Girl1.lifetime = 150;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //adding cloud to the group
Girl1Group.add(Girl1);
  }
}
function Girl22() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    Girl2 = createSprite(1400,200,50,50)
    Girl2.scale = 0.6
    Girl2.addImage(Girl2I)
    Girl2.y = Math.round(random(50,500));
    Girl2.velocityX = 3;
    
     //assign lifetime to the variable
    Girl2.lifetime = 200;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //adding cloud to the group
  }
Girl2Group.add(Girl2);

if(Zombie1.isTouching(Guy1)){
score = score+1  
}

if(Zombie1.isTouching(Guy2)){
score = score+1  
}

if(Zombie1.isTouching(Guy3)){
score = score+1  
}

if(Zombie1.isTouching(Girl1)){
score = score+1  
}

if(Zombie1.isTouching(Girl2)){
score = score+1  
}
if(Zombie1.isTouching(Guy2)){
Guy1.visible = false 
}

if(Zombie1.isTouching(Guy2)){
Guy2.visible = false 
}

if(Zombie1.isTouching(Guy2)){
Guy3.visible = false 
}

if(Zombie1.isTouching(Guy2)){
Girl1.visible = false 
 }

if(Zombie1.isTouching(Guy2)){
Girl2.visible = false 
}
if(Zombie1.isTouching(Guy1)){
text("Good Job",1000,600)  
}
if(Zombie1.isTouching(Guy2)){
text("Great Job",700,400)  
}
if(Zombie1.isTouching(Guy3)){
  text("Amazing",300,200)
}  
if(Zombie1.isTouching(Girl1)){
text("Good Job",100,700)  
}

if(Zombie1.isTouching(Girl2)){
  text("Cool",400,550)  
  }
}  
  




    
 
  


