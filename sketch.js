var starImg, fairyImg, bgImg,starBody,fairyBody;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);
	engine = Engine.create();
	world = engine.world;
	 fairyVoice.play();
	var fairy_options={ isStatic: true } 
	fairy = createSprite(330, 520,300,300,fairy_options);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	World.add(world, fairy);

	var star_options ={ restitution: 0.0} 
	star = createSprite(350,30,300,300,star_options);
	star.addImage(starImg);
	star.scale = 0.2;
	World.add(world, star);

}


function draw() {
  background(bgImg);
  Engine.update(engine)
  console.log(star.position.y)
  console.log(fairy.position.y)
  ellipseMode(CENTER);
  ellipse(fairy.position.x,fairy.position.y,4,2);
  ellipseMode(RADIUS);
  ellipse(star.position.x, star.position.y, 2, 2 );
  
  if(keyCode===LEFT_ARROW)
	{
	  fairy.x=fairy.x-5
	 }
 if(keyCode===RIGHT_ARROW)
	 {
	   fairy.x=fairy.x+5
	  }

	  if(keyCode===DOWN_ARROW)
	  {
		star.velocityY=3
	   }
	   
	   if(star.position.y>470
		){
		star.velocityY=0
	}

  drawSprites();

}
