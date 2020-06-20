var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var rope1;
var roof;
var world,engine;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof();

	bobObj1 = new Bob(300,350,1.2,0);
	bobObj2 = new Bob(350,350,0.3,0.2);
	bobObj3 = new Bob(400,350,0.3,0.2);
	bobObj4 = new Bob(450,350,0.3,0.2);
	bobObj5 = new Bob(500,350,1.2,0.2);

	rope1 = new Rope(bobObj1.body,{x:width/2-200,y:150});
	rope2 = new Rope(bobObj2.body,{x:width/2-100,y:150});
	rope3 = new Rope(bobObj3.body,{x:width/2,y:150});
	rope4 = new Rope(bobObj4.body,{x:width/2+100,y:150});
	rope5 = new Rope(bobObj5.body,{x:width/2+200,y:150});

	Engine.run(engine);
}


function draw(){
	rectMode(CENTER);
	background(255);

	roof.display();

	bobObj1.display();
	bobObj2.display();
	bobObj3.display();
	bobObj4.display();
	bobObj5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
  
	drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-50,y:45});
	}
}