var hero;
var heroImg;
var thanos;
var thanosImg;
var obstacles;
var invisibleRope;


function preload() {
//preload the images here
  heroImg = loadImage("images/ironman.png");
  thanosImg = loadImage("images/thanos.jpg");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  hero = createSprite(500,700,20,20);
  hero.addImage(heroImg);
  
  thanos = createSprite(700,700,20,20);
  thanos.addImage(thanosImg);
  
}

function draw() {
  background(0);



  
}
drawSprites();
