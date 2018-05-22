//work on going back to home
//combine paper and audio array, if bigger than 10, audio, if less paper
function draw (){
  // num = Math.floor((Math.random() * 10) + 0);
}

var paper = [];
var flower;
var all = [];
var audiomp3 = [];
var picture = [];
function preload() {
  for (let i = 1; i < 209; i++) {
    paper[i-1] = loadImage(`paperstories/paper(${i}).jpg`);
  }
  //94
  for (let i = 1; i < 94; i++) {
    audiomp3[i-1] = loadSound(`audiostories/Audio(${i}).mp3`);
  }
  for (let i = 1; i < 64; i++) {
    picture[i-1] = loadImage(`Tenderloinpictures/picture(${i}).jpg`);
  }
  //flower = loadImage('myImg.png');
  //paper = loadImage('button.png');
  all = paper.concat(audiomp3);
}

var button1;
var button2;
var button3;
var backButton;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  //button = createImg('button.png');
  button1 = createImg('button.png');
  button1.size(300,300);
  button1.position(windowWidth/2 - 150, windowHeight/2 - 150);
  button1.mousePressed(changeBG);

  button2 = createButton("play");
  button2.size(80, 60);
  button2.position(windowWidth/2 - 1440/4 + 10, windowHeight/2 - 260);
  button2.hide();
  button2.mousePressed(togglePlaying);

  button3 = createImg('button.png');
  button3.size(110,110);
  button3.position(windowWidth/2 - 1440/4 + 315, windowHeight/2 - 380);
  button3.mousePressed(changeBG);
  button3.hide();
  
  backButton = createButton("back");
  backButton.size(110,110);
  backButton.position(windowWidth/2 - 1440/4 + 315, windowHeight/2 - 400);
  backButton.mousePressed(back);
  backButton.hide();
}

function back() {
  
}

function togglePlaying() {
  //SOMETIMES DOESNT WORK
  if (song.isPlaying()) {
    song.pause();
    button2.html("play");
  } else {
  song.play();
  song.setVolume(0.3);
  button2.html("pause");
  }
}

var num;
var touch;
var song;
var num1;
var present;
// image(paper[num], 0, 0, (378.8*1.2), (478*1.2));
function changeBG() {
  song = all[270];
  song.pause();
  
  noStroke();
  color(255);
  rect(0, 0, windowWidth, windowHeight);
  button1.hide();
  button3.show();
  backButton.show();
  //304
  num = Math.floor((Math.random() * 216) + 0);
  //image(all[num], 0, 0, (378.8*1.2), (478*1.2));
  if (num >= 0 && num <= 208){
    //if num is between or equal to 0-9, it is a paper story
    button2.hide();
    present = image(all[num], windowWidth/2 - (378.8*1.2)/2, windowHeight/2 - 270, (378.8*1.2), (478*1.2));
  } else if (num >= 209 && num <= 303){
    button2.show();
    song = all[num];
    //song.play();
    num1 = Math.floor((Math.random() * 10) + 0);
    present = image(picture[num1], windowWidth/2 - 1440/4, windowHeight/2 - 270, 1440/2, 960/2);
  }
}
