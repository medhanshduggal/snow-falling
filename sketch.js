var bgimg
var snowimg
function preload() {
  bgimg=loadImage("snow3.jpg")
   snowimg=loadImage("snow4.webp")
 }



function setup() {
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  background(bgimg);  
  drawSprites();
  snowfall();
}

function snowfall() {
  if(frameCount%70==0){
    snow=createSprite(100,-20,50,50)
snow.addImage(snowimg)
snow.velocityY=2
snow.x=random(100,width-100)

snow.scale=0.3
  }

}


