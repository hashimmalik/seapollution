var x;
var imageFilea;
var imageFile;
var imageFile2;
var quotes;
var accom;
var causes;
var bio;
var currentQuote;
var boxShowing = null;

var w = 400,
    h = 620;
var showfeed = false
var maph=620,
    mapw=400;

function preload (){
  //imageFilea = loadImage('assets/scrool.jpg')
  imageFile = loadImage('assets/underwater.jpg')
  imageFile2 = loadImage('assets/arrow.png')
  quotes = loadStrings('effects.txt');
  bio = loadStrings('sources.txt')
  accom = loadStrings('solution.txt')
  causes = loadStrings('causes.txt')
}
function setup() { 
  createCanvas(400, 620);
	getNewWords();
}

function getNewWords() {
	currentQuote= quotes[floor(random(quotes.length))];
  currentAccom= accom[floor(random(accom.length))];
  currentCauses= causes[floor(random(causes.length))];
  } 
function draw() { 
  background(220);
	textStyle(NORMAL);
  image(imageFile, 0, 0, mapw, maph);
  fill(75,72,203, 240)
  noStroke()
  //rect((50/400)*mapw, (75/620)*maph, 300, 150)
	fill(255)
  textAlign(CENTER,CENTER)
  textSize(47);
  text("POLLUTION", 200, 199);
	textSize(140);
    text("SEA", 200, 135);
  textFont("TimesNewRoman");
	fill(155,120,103, 240)
  noStroke()
  rect((100/400)*width, (250/620)*height, 200, 50)
  rect((100/400)*width, (330/620)*height, 200, 50)
  rect((100/400)*width, (410/620)*height, 200, 50)
  rect((100/400)*width, (490/620)*height, 200, 50)
  fill(255)
  textAlign(CENTER)
  textSize(34);
  text("effects", 200, 354);
  text("sources", 200, 512);
  text("solutions", 200, 432);
  text("causes", 200, 272);
  
  if(boxShowing === "quotes"){
  	rect((50/400)*w, (70/620)*h, width*(3/4), 480);
    fill(121,22,13)
    ellipse( width*(3.75/4), height /2, 30 ,30);
    image(imageFile2, width*(3.65/4), height /2.074, 20, 20)
  //rectMode(CENTER);
 textSize(20)
  textAlign(CENTER,CENTER)
  text(currentQuote,100,100, width/2, height/1.5);
}
   if(boxShowing === "accom"){
  //textAlign(CENTER)
    // rectMode(CORNER);
     rect((50/400)*w, (70/620)*h, width*(3/4), 480);

      fill(25,202,193)
      ellipse( width*(3.75/4), height /2, 30, 30);
    image(imageFile2, width*(3.65/4), height /2.074, 20, 20)
     textSize(20)
  textAlign(CENTER,CENTER)
     text(currentAccom,100,100, width/2, height/1.5);

  }
 
  if(boxShowing === "about"){
  rect((50/400)*w, (70/620)*h, width*(3/4), 480);
       fill(255)
       //ellipse( width*(3.75/4), height /2, 25, 25);
textStyle(NORMAL);
       textSize(10)
			 fill(0)
       textAlign(LEFT, CENTER)
       text(bio, 65, 0, width/1.5, height/1);
  textAlign(CENTER, CENTER)
    textSize(20)
textStyle(BOLD);
    text("WORKS CITED", 200, 130);
  }
  if(boxShowing === "causes"){
textStyle(NORMAL);
    rect((50/400)*w, (70/620)*h, width*(3/4), 480);
    fill(121,22,13)
    ellipse( width*(3.75/4), height /2, 30 ,30);
    image(imageFile2, width*(3.65/4), height /2.074, 20, 20)
  //rectMode(CENTER);
  textSize(20)
  textAlign(CENTER,CENTER)
  text(currentCauses,100,100, width/2, height/1.5);

  }
}
function mousePressed() {
  if(mouseX>(100/400)*w&&
     mouseX<(300/400)*w&&
     mouseY>(410/620)*h&&
     mouseY<(460/620)*h){
  			boxShowing= "accom"
}
  else if(mouseX>(100/400)*w&&
     mouseX<300/400*w&&
     mouseY>330/620*h&&
     mouseY<380/620*h){
  			boxShowing= "quotes"
}
  else if(mouseX>(100/400)*w&&
     mouseX<300/400*w&&
     mouseY>490/620*h&&
     mouseY<540/620*h){
  			boxShowing= "about"
     }
  else if(mouseX>(100/400)*w&&
     mouseX<(300/400)*w&&
     mouseY>(250/620)*h&&
     mouseY<(300/620)*h){
  			boxShowing= "causes"
     }
  else if(mouseX>(width*(3.75/4))-12.5&&
     mouseX<(width*(3.75/4))+12.5&&
     mouseY>height /2 -12.5&&
     mouseY<height /2+12.5){
  			getNewWords();
  }
  else {
   	boxShowing = null
}
}