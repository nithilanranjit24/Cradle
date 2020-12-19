const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var engine, world
function setup() {
 
  engine = Engine.create();
    world = engine.world;
  createCanvas(3000,800);
  pendulum1 = new Pendulum(280, 300, red);
  pendulum2 = new Pendulum(340, 300, red);
  pendulum3 = new Pendulum(400, 300, red);
  pendulum4 = new Pendulum(460, 300, red);
  pendulum5 = new Pendulum(520, 300, red);
}

function draw() {
  background(0);  
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  drawSprites();

}