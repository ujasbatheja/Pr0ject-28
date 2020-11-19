
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boyImage;
var treeImage;
var stone;
var mango1,mango2,mango3,mango4,mango5;
var slingShot;

function preload(){
  boyImage = loadImage("boy.png");
  treeImage = loadImage("tree.png");
  stone = loadImage("stone.png");
  mango1 = loadImage("mango.png");
  mango2 = loadImage("mango.png");
  mango3 = loadImage("mango.png");
  mango4 = loadImage("mango.png");
  mango5 = loadImage("mango.png");
}

function setup() {
	var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,650,1200,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  //slingShot = new SlingShot(stone.body,{x:100,y:500});

  Engine.run(engine);
  mango1=new Mango(900,800);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  image(boyImage,100,500,200,200);
  image(treeImage,700,150,500,500);
  image(stone,100,510,50,50);
  image(mango1,200,200,20,20);

  ground.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
//slingShot.fly();    
}

