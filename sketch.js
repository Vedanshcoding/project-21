
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball
var MainGround
var dustbinLeft
var dustbinRight
var edges 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ellipseMode(RADIUS)

	


	engine = Engine.create();
	world = engine.world;


	MainGround = new Ground(400,680,800,20)
	dustbinLeft = new Ground(600,600,20,140)
	dustbinRight = new Ground(750,600,20,140)

	var ball_options={
		isStatic:false
		,restitution:0.3
		,friction:0
		,density:1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(340,300,20,ball_options)
	World.add(world,ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine)

  ellipse(ball.position.x, ball.position.y,20,20)
  MainGround.show()
  dustbinLeft.show()
  dustbinRight.show()

  

  edges= createEdgeSprites()
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position, {x:85,y:-85})
	}
}



