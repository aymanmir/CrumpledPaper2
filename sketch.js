
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObject,groundObject;	
var world;

var bgImg;
var dnl;
var pic;
function preload(){
bgImg=loadImage("sprites/park.jpg");
pic=loadImage("sprites/donotlitter.jpg");
}

function setup() {

	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	

	dnl=createSprite(1400,350,200,200);
	dnl.addImage(pic);
	dnl.scale=0.19;

	Engine.run(engine);
	
}


function draw() {

  rectMode(CENTER);
  background(bgImg);
  
  groundObject.display();

  dustbinObj.display();
  paperObject.display();
  
 drawSprites();
  
  textSize(35);
	fill("blue");
	stroke("white");
	text("Press Up arrow to throw the crumpled paper into green dustbin, Always keep the surrounding clean",50,200);

  fill ("yellow");
  textSize(50);
  stroke("black");
  strokeWeight(7);
	text ("Project 25: Crumpled Balls - 2",550,150);
  

 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
		
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:150,y:-155});
	
  	}
}





