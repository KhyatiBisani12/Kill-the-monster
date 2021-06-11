const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hero;
var heroImg;
var thanos;
var thanosImg;
var obstacles;
var slingshot;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26;



function preload() {
//preload the images here
  heroImg = loadImage("Images/ironman.png");
  thanosImg = loadImage("Images/thanos.png");
}

function setup() {
  createCanvas(2000,1300);
  
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  hero = createSprite(500,700,20,20);
  hero.addImage(heroImg);
  hero.scale = 1.7;
  
  thanos = createSprite(700,700,20,20);
  thanos.addImage(thanosImg);
  thanos.scale = 0.7;
  
  ground = new Ground(200,100,100,20);
  box1 = new Box(180,100,50,50);
  box2 = new Box(180,100,50,50);
  box3 = new Box(180,100,50,50);
  box4 = new Box(180,100,50,50);
  box5 = new Box(180,100,50,50);
  box6 = new Box(180,100,50,50);
  box7 = new Box(180,100,50,50);
  box8 = new Box(180,100,50,50);
  box9 = new Box(180,100,50,50);
  box10 = new Box(180,100,50,50);
  box11 = new Box(180,100,50,50);
  box12 = new Box(180,100,50,50);
  box13 = new Box(180,100,50,50);
  box14 = new Box(180,100,50,50);
  box15 = new Box(180,100,50,50);
  box16 = new Box(180,100,50,50);
  box17 = new Box(180,100,50,50);
  box18 = new Box(180,100,50,50);
  box19 = new Box(180,100,50,50);
  box20 = new Box(180,100,50,50);
  box21 = new Box(180,100,50,50);
  box22 = new Box(180,100,50,50);
  box23 = new Box(180,100,50,50);
  box24 = new Box(180,100,50,50);
  box25 = new Box(180,100,50,50);
  box26 = new Box(180,100,50,50);
  sling = new SlingShot(box.body,{x:200 ,y: 210 });
  
}

function draw() {
  background(0);

 ground.groundDisplay();
 box1.Display();
 box2.Display();
 box3.Display();
 box4.Display();
 box5.Display();
 box6.Display();
 box7.Display();
 box8.Display();
 box10.Display();
 box11.Display();
 box12.Display();
 box13.Display();
 box14.Display();
 box15.Display();
 box16.Display();
 box17.Display();
 box18.Display();
 box19.Display();
 box20.Display();
 box21.Display();
 box22.Display();
 box23.Display();
 box24.Display();
 box25.Display();
 box26.Display();

  drawSprites(); 
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX , y:mouseY});
}

function mouseReleased(){
  sling.fly();
}

