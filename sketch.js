const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone;
var iron;
var rubber,rubber1,rubber2,rubber3,rubber4,rubber5,rubber6,rubber7;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    stone = new Stone(600,300,50,50);
    iron = new Iron(1000,200);
    rubber = new Rubber(300,300,PI/7);
    rubber1 = new Rubber(300,300,PI/7);
    rubber2 = new Rubber(300,300,PI/7);
    rubber3 = new Rubber(300,300,PI/7);
    rubber4 = new Rubber(300,300,PI/7);
    rubber5 = new Rubber(300,300,PI/7);
    rubber6 = new Rubber(300,300,PI/7);
    rubber7 = new Rubber(300,300,PI/7);
   
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
   


    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    rubber.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();

   
}