//Create variables here
var dog,dogImage,dogImage1,database,foodS,foodStock
function preload()
{
	//load images here
  dogImage=loadImage("images/dogImg.png")
  dogImage1=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database()
  dog=createSprite(250,300,150,150)
  dog.addImage(dogImage)
  dog.scale=0.15
  foodStock=database.ref('food')
  foodStock.on("value",readStock)
  textSize(20)
}


function draw() {  
background("red")
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogImage1)
}
  drawSprites();
  //add styles here
fill("green")
stroke("yellow")
text("Food Remaining: "+foodS,170,200)
textSize(13)
text("Press Up arrow to feed the milk",130,10,300,20)

}

function readStock(data){
  foodS=data.val()
}


function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    foot:x
  })
}



