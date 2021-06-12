// name spacing
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine , world;
var ground,ball;

function setup() {
  createCanvas(800,400);
  
 engine = Engine.create()
 world = engine.world

 var object = {
   isStatic: true
   }

 ground = Bodies.rectangle(400,380,800,40,object);
 World.add(world,ground)

 var object1 = {
   restitution: 1
 }
ball = Bodies.circle(400,0,20,object1);
World.add(world,ball)
}

function draw() {
  background("red");  
  Engine.update(engine)
  fill("yellow") 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,40);
  
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20);
}