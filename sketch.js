var ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


	dustbinObj=new dustbin(1200,650); 
	paperObject=new paper(200,450,70); 
	groundObject=new Ground(width/2,670,width,20);

	groundSprite=createSprite(width/2, height-35, width,10);
	
	
	Engine.run(engine);

	;

  
}


function draw() {
	
  rectMode(CENTER);
  background(230);
  
 
  dustbinObj.display(); 
  paperObject.display(); 
  groundObject.display()
  drawSprites();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

}
}
