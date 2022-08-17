var car1, car1Img, car2, car2Img, car3, car3Img, car4, car4Img, car5, car5Img, car6, car6Img 
var bg, bgImg, ball, ballImg, goalpost, goalpostImg, goalpost1, goalpost1Img
var coin, coinImg


function preload(){
bg = loadImage("Images/bg1.jpg")
car1Img = loadImage("Images/car1.png")
car2Img = loadImage("Images/car2.png")
car3Img = loadImage("Images/car3.png")
car4Img = loadImage("Images/car4.png")
car5Img = loadImage("Images/car5.png")
car6Img = loadImage("Images/car6.png")
ballImg = loadImage("Images/ball.png") 
goalpostImg = loadImage("Images/Goalpost.png")
goalpost1Img = loadImage("Images/Goalpost1.png")
}
function setup() {
  createCanvas(1200,600);

car1 = createSprite(200,500)
car1.addImage("car 1", car1Img)
car1.scale = 0.7


car4 = createSprite(1000,500)
car4.addImage("car 4", car4Img)
car4.scale = 0.7


ball = createSprite(900,520)
ball.addImage("ball", ballImg)
ball.scale = 0.13

goalpost = createSprite(100,450)
goalpost.addImage("goalpost", goalpostImg)
goalpost.scale = 0.38

goalpost = createSprite(1100,450)
goalpost.addImage("goalpost1", goalpost1Img)
goalpost.scale = 0.38


}

function draw() {
  background(bg);
  
  if(keyDown("Right_ARROW")){
    car1.x=   car1.x + 11
  }
  if(keyDown("Left_ARROW")){
    car1.x = car1.x - 11
  }
  //ball.collide(car1)
  
  if(car1.x<112){
    car1.x = 112
  }
  if(car1.x>1102){
    car1.x = 1102
  }

  if(car4.x<112){
    car4.x = 112
  }
  if(car4.x>1102){
    car4.x = 1102
  }

  console.log(car1.x)



  drawSprites();
}