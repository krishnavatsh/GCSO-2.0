var car;
var wall;


function setup(){
  createCanvas(1365,625);
  
  // creating car
  car = createSprite(100,312,80,50);
  car.shapeColor = "green"
  car.debug = true;
  
  // craeting wall

  wall = createSprite(1300,312,10,400)
  wall.shapeColor = "cyan"
  wall.debug = true;
}

function draw(){
  //set background color 
  background("pink");
  
  car.velocityX = 5;
  
  if(car.isTouching(wall)){
    car.bounceOff(wall);
    car.shapeColor = "red"
    wall.shapeColor = "red"
    text("DANGER", 20 ,20)
  }
  

  drawSprites();
}