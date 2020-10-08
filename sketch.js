var g,gi;
var d,di,doorg;
var c,ci,cg;
var toweri,tower;
var ib,ibg;
var gs="play"
 
function preload(){
  gi=loadImage("ghost-standing.png")
  di=loadImage("door.png")
  ci=loadImage("climber.png")
  toweri=loadImage("tower.png") 
}
function setup(){
  createCanvas(600,600);
  
  tower=createSprite(300,300,50,50)
  tower.addImage("tower",toweri)
  tower.velocityY=2;
  
  g=createSprite(300,250,10,10)
  g.addImage("ghost",gi)
  g.scale=0.3
  
  
  doorg=new Group();
  cg=new Group();
  ibg=new Group()
  
}


function draw (){
  if (gs==="play"){
    
   
    
    
 if (tower.y>600) {
  tower.y=300  
 }
 if(keyDown("space")){
    g.velocityY=-10;
    }
  if(keyDown(LEFT_ARROW)){
    g.x=g.x-4; 
  }
  if(keyDown(RIGHT_ARROW)){
    g.x=g.x+4; 
  }
  if(g.isTouching(ibg)){
    g.destroy();
    gs="end"
    
  }
    
  
  g.velocityY=g.velocityY+0.8
  if (g.isTouching(cg)){
  g.velocityY=0;
      
  }
  
  climber();
 drawSprites(); 
  }
  if(gs==="end"){
   text("GAMEOVER",300,300)
    
    
    
    
  }
}

function climber(){
 if (frameCount%250===0) {
   d=createSprite(200,00,10,10)
   d.addImage("door",di)
   d.velocityY=2;
   
   c=createSprite(200,60,10,10)
   c.addImage("door",ci)
   c.velocityY=2;
   d.x=Math.round(random(100,400))
   c.x=d.x
 ib=createSprite(200,75,50,10)
   ib.velocityY=2;
   ib.x=d.x;
      ib.shapecolor="green"

doorg.add(d);
cg.add(c)
ibg.add(ib)
   d.depth = g.depth
    g.depth = g.depth+1
   
 }
  
  
  
  
  
  
  
}


