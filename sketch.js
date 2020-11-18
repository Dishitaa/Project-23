var helicopterIMG, helicopterSprite, packageSprite,packageIMG, wall1, wall2, wall3;
var packageBody,ground, wall1Body, wall2Body, wall3Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	wall1=createSprite(400, height-50, 100,20);
	wall1.shapeColor=color("red");
	wall2=createSprite(340, height-90, 20, 100);
	wall2.shapeColor=color("red");
	wall3=createSprite(460, height-90, 20, 100);;
	wall3.shapeColor=color("red")

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(0)


	engine = Engine.create();
	world = engine.world;

	wall1Body = Bodies.rectangle(width/2 , 200 , width, 10 , {isStatic:true});
	World.add(world, wall1Body);

	wall2Body = Bodies.rectangle(width/2 , 200 , width, 10 , {isStatic:true});
	World.add(world, wall2Body);

	wall3Body = Bodies.rectangle(width/2 , 200 , width, 10 , {isStatic:true});
	World.add(world, wall3Body);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Body.setStatic(packageBody,false);  

    
  }
}



