const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var obs1 , obs2 , obs3 , obs4, obs5, obs6, obs7 
var bgImg;

function preload(){

  obs1Img = loadImage("ASTEROID.jpeg");
  obs2Img = loadImage("METEOR 1.jpeg");
  obs3Img = loadImage("METEOR 2.jpeg");
  obs4Img = loadImage("METEOR 3.jpeg");
  obs5Img = loadImage("ASTEROID.jpeg");

  bgImg = loadImage("BG 4.jpeg");
}

function setup(){
  createCanvas(1400,580);
    engine = Engine.create()
    world = engine.world;

   
    obs1 = createSprite(200,50,30,30);
    obs1.addImage(obs1Img);
    obs1.scale = 0.2;

    obs2 = createSprite(400,80,20,40);
    obs2.addImage(obs2Img);
    obs2.scale = 0.2;

    obs3 = createSprite(700,200,40,50);
    obs3.addImage(obs3Img);
    obs3.scale = 0.2;

    obs4 = createSprite(50,280,50,60);
    obs4.addImage(obs4Img);
    obs4.scale = 0.2;

    obs5 = createSprite(300,160,60,70);
    obs5.addImage(obs5Img);
    obs5.scale = 0.2;

    obs6 = createSprite(800,100,70,80);
    obs6.addImage(obs5Img);
    obs6.scale = 0.2;

    pihu = new Astronaut(100,20,100,100);
   
}

function draw(){
    background("black");
    Engine.update(engine)

    pihu.display();

    obs1.display();
    obs2.display();
    obs3.display();
    obs4.display();
    obs5.display();
    obs6.display();
    
}


