const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Boy,boyImg
var tree,treeImg
var surface
var object
var dont,dont1,dont2,dont3,dont4,dont5,dont6,dont7,dont8,dont9,dont10,dont11
var string

function preload(){

boyImg = loadImage ("sprites/boy.png")
treeImg = loadImage ("sprites/tree.png")
}

function setup() {
	createCanvas(1200, 700);

  engine = Engine.create();
	world = engine.world;
 
  surface = new ground (400,620,2000,20)

  Boy = createSprite (300,493,40,70)
  Boy.addImage (boyImg)
  Boy.scale = 0.2

  tree = createSprite (950,320,40,200)
  tree.addImage (treeImg)
  tree.scale = 0.5
 
  object = new stone (200,385,70)

  dont = new mango (830,98,60)

  dont1 = new mango (1120,158,90)

  dont2 = new mango (990,98,50)

  dont3 = new mango (830,178,70)

  dont4 = new mango (970,168,80)
  
  dont5 = new mango (910,198,50)

  dont6 = new mango (910,78,60)

  dont7 = new mango (830,258,60)

  dont8 = new mango (950,258,50)

  dont9 = new mango (750,178,70)

  dont10 = new mango (1100,258,60)

  dont11 = new mango (1050,158,40)

  string = new launcher (object.body,{x:200,y:385})

  
	Engine.run(engine);
  
}

function draw() {
  
  background(220);
  text(mouseX + "," + mouseY, mouseX, mouseY)
  Engine.update(engine);
  
 detectcollision(object,dont)
 detectcollision(object,dont1)
 detectcollision(object,dont2)
 detectcollision(object,dont3)
 detectcollision(object,dont4)
 detectcollision(object,dont5)
 detectcollision(object,dont6)
 detectcollision(object,dont7)
 detectcollision(object,dont8)
 detectcollision(object,dont9)
 detectcollision(object,dont10)
 detectcollision(object,dont11)


   
  surface.display();
  
 
  drawSprites();
  object.display();
  dont.display();
  dont1.display();
  dont2.display();
  dont3.display();
  dont4.display();
  dont5.display();
  dont6.display();
  dont7.display();
  dont8.display();
  dont9.display();
  dont10.display();
  dont11.display();
  string.display();
}


function mouseDragged (){
  Matter.Body.setPosition(object.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  string.fly()
}

function detectcollision(stone,mango){
 mangoBodyPosition=mango.body.position
 stoneBodyPosition=stone.body.position

 var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 if(distance<=mango.r+stone.r)
 {
   Matter.Body.setStatic(mango.body,false)
 }
}


