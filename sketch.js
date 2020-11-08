
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground

function preload()
{
	
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20)

	

	Engine.run(engine);

	
  
}


function draw() {
	display();
  rectMode(CENTER);
  background(255);
 
  ground.display();

  
  drawSprites();
 
}



