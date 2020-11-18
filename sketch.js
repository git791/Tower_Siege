var ground, ground1, block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11;
var block12, block13, block14, block15, block16, polygon, slingshot;

var gameState = "onSling";

function setup() {
  createCanvas(800,400);

  ground = new Ground(400, 200, 50, 50);
  ground = new Ground(400, 200, 100, 20);

  //level 1
  block1 = new Block(300, 275, 30, 40);
  block2 = new Block(330, 275, 30, 40);
  block3 = new Block(360, 275, 30, 40);
  block4 = new Block(390, 275, 30, 40);
  block5 = new Block(420, 275, 30, 40);
  block6 = new Block(450, 275, 30, 40);
  block7 = new Block(480, 275, 30, 40);
 
  //level 2
  block8 = new Block(330, 235, 30, 40);
  block9 = new Block(360, 235, 30, 40);
  block10 = new Block(390, 235, 30, 40);
  block11 = new Block(420, 235, 30, 40);
  block12 = new Block(450, 235, 30, 40);

  //level3
  block13 = new Block(360, 195, 30, 40);
  block14 = new Block(390, 195, 30, 40);
  block15 = new Block(410, 195, 30, 40);

  //level4
  block16 = new Block(390, 155, 30, 40);

  polygon= new Polygon(200,100);
  slingshot = new SlingShot(this.polygon,{x: 100, y:200});
  slingshot.attach(polygon.body);
  
}

function draw() {
  background(255,255,255);  

  ground.display();
  ground1.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  polygon.display();
  slingshot.display();


  drawSprites();
}

function mouseDragged(){
  if (gameState!=="launched"){
   Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
   Matter.Body.applyForce(birds[birds.length-1].body,birds[birds.length-1].body.position ,{x: 5 , y: 5});
   bird.SelectSound.play();
   return false;
  }

  function mouseReleased(){
    slingshot.fly();
    birds.pop();
    gameState = "launched";
    return false;
}
}