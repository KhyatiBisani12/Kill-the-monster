const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hero;
var heroImg;
var thanos;
var thanosImg;
var obstacles;
var invisibleRope;



function preload() {
//preload the images here
  heroImg = loadImage("Images/ironman.png");
  thanosImg = loadImage("Images/thanos.png");
}

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  world = engine.world;
  // create sprites here
  hero = createSprite(500,700,20,20);
  hero.addImage(heroImg);
  
  thanos = createSprite(700,700,20,20);
  thanos.addImage(thanosImg);
  
}

function draw() {
  background(0);



  drawSprites(); 
}

