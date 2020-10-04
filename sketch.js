var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 

var plinkos = [];
var divisions=[];
var Particles;
var turn=0;
var score=0;
var yellowline;
var divisionHeight=300;
gameState="play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }
     for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }
     for (var j = 50; j <=width-10; j=j+50) 
    {
      plinkos.push(new Plinko(j,375));
    } 
    
}
 


function draw() {
  background("black");
 
  Engine.update(engine);
  fill(255);
  textSize(30)
  text("Score : "+score,20,30);
  textSize(30)
for (var i=15;i<300; i=i+80){
  text("500" ,i,540);
} 
for (var i=330;i<500; i=i+80){
  text("100" ,i,540);
}  
for (var i=575;i<900; i=i+80){
  text("200" ,i,540);
} 
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display(); 
   }
 ground.display();
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

   if(Particles!=null){
Particles.display();
     if(Particles.body.position.y>760){
       if(Particles.body.position.x<300){
         score=score+500;
         Particles=null;
          if(turn>=5){
            gameState="end";
          }
       }
     }
   }
   if(Particles!=null){
    Particles.display();
         if(Particles.body.position.y>760){
           if(Particles.body.position.x>310 && Particles.body.position.x<550){
             score=score+100;
             Particles=null;
              if(turn>=5){
                gameState="end";
              }
           }
         }
       }
       if(Particles!=null){
        Particles.display();
             if(Particles.body.position.y>760){
               if(Particles.body.position.x>550 && Particles.body.position.x<800){
                 score=score+200;
                 Particles=null;
                  if(turn>=5){
                    gameState="end";
           
                }
               }
             }
           }
           if(turn===5){
            textSize(80)
            text("GameOver",250,350);
          
          }  
          if (turn===4){
            textSize(30);
            text("Next ball  is your last ball",250,450)
          }

  }
  function mousePressed(){
    if(gameState!=="end"){
     turn++;
     Particles=new Particle(mouseX,10,10,10);

    }
}
