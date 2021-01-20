const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var bckimg;

function preload() {
//preload the images here
bckimg=loadImage("sprites/GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
    world = engine.world;
  // create sprites here
  Ground=new ground(0,600,width/2,20)
  Hero=new hero(200,400,40,10)
  Rope=new fly(Hero.body,{x:200,y:50})
}

function draw() {
  background(0);
  background(bckimg)
  Engine.update(engine);
  Ground.display();
Hero.display();
Rope.display();
}
function mouseDragged(){
  // if (gameState!=="launched"){
       Matter.Body.setPosition(Hero.body, {x: mouseX , y: mouseY});
   //}
}
