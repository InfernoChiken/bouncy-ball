const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;


var myEngine, myWorld;
var myGround;
var myBall;

function setup() {
  createCanvas(600,600);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var ground_options = {
    isStatic: true,
  }


  myGround = Bodies.rectangle(300, 550, 600, 70, ground_options);
  World.add(myWorld, myGround);

  var ball_options = {
    restitution: 1,
  }

  myBall = Bodies.circle(300, 100, 20, ball_options);
  World.add(myWorld, myBall);
  
}

function draw() {
  background(0);  

  Engine.update(myEngine);

  rectMode(CENTER);
  rect(myGround.position.x, myGround.position.y, 600, 70);

  ellipseMode(RADIUS);
  ellipse(myBall.position.x, myBall.position.y, 20, 20);
  
}