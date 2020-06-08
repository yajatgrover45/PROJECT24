var log1,log2,log3;
var ball;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
	log1 = new Box(270,400,10,70);
	log2 = new Box(420,400,10,70);
	log3 = new Box(350,400,170,10);
	ground = new Ground(600,700,1200,20);
	ball = new Ball(25,500,20,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  log1.display();
  log2.display();
  log3.display();
  ground.display();
  ball.display();	
  if	(keyCode === UP_ARROW)	{
	Matter.Body.applyForce(ball.Body,ball.Body.position,{x:85,y:-85});
  }
  drawSprites();
 
}



