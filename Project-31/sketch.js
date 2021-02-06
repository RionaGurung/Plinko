const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var divisions = [];
var divisionHeight = 300;
var particles = [];
var plinkos = [];

function setup(){

  createCanvas(500,800);
  
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(width/2,height,width,20);
    
    for (var i = 10; i <= width; i = i + 80){

      divisions.push(new Divisions(i, height - divisionHeight/2, 10, divisionHeight));
    
    }

    for (var j = 35; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75,10));
    }

    for (var j = 10; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175,10));
    }

     for (var j = 35; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275,10));
    }

     for (var j = 10; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375,10));
    }
}

function draw(){

  background("black");

  Engine.update(engine);

  ground.display();

  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
         
}