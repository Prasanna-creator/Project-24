
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground,bottom,side,side1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(width/2,680,800,10)
	
	paper1= new Paper(20,650,10,10)
	bottom= new Bin(600,660,200,20)
	side= new Bin(490,620,20,100)
	side1=new Bin(700,620,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  bottom.display()
  side1.display()
  side.display()
  paper1.display()
  keyPressed()
  drawSprites();
 
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:5,y:-5})

	}
}



