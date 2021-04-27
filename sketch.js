
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1800,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     
	 stone = new Stone(300,300,100,100);
	 rubber = new Rubber(250,250,50,50);

	 ground= new Ground(600,500,1500,30);

	 hammer = new Hammer(200,200);

	 iron = new Iron(200,200,50,80);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
 
  stone.display();
  rubber.display();
  ground.display();
  hammer.display();
  iron.display();
}



