
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;

function preload(){
	BG = loadImage("ok.gif")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,640);
	paper1=new Paper(500,500);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(BG);
 

  groundObject.display();
  dustbinObj.display();
  paper1.display();
 
  textSize(30);
  strokeWeight(5);
  stroke("orange");
  fill("red")
  text("PRESS UP_AROW",30,100);

  textSize(30);
  strokeWeight(5);
  stroke("orange");
  fill("red")
  text("TO....",30,140);

  textSize(50);
  strokeWeight(5);
  stroke("orange");
  fill("red")
  text("START",120,150);

}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-100})
	}
}