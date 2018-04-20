//work on going back to home
//combine paper and audio array, if bigger than 10, audio, if less paper
function main (){
  // num = Math.floor((Math.random() * 10) + 0);
}

var paper = [];
var flower;
function preload() {
  for (let i = 0; i < 10; i++) {
    paper[i] = loadImage(`tenderloin/paperstories/paper(${i}).jpg`);
  }
  //flower = loadImage('myImg.png');
  //paper = loadImage('button.png');
}

var button;
function setup() {
  createCanvas(1000, 1000);
  background(255);
  //button = createImg('button.png');
  button = createImg('button.png');
  button.size(300,300);
  button.position(100, 100);
  button.mousePressed(changeBG);
}

var num;
var homButton;
var check;
function changeBG() {
  check = 1;
  //image.size();
  num = Math.floor((Math.random() * 10) + 0);
  //var pic = 'myImg.png';
  image(paper[num], 0, 0, (378.8*1.2), (478*1.2));
  // homButton = createImg(paper[num]);
  // homButton.size((378.8*1.2), (478*1.2));
  // homButton.position(0, 0);
  // homButton.mousePressed(changehom);
  button.hide();
  check = 0;
  var touch = 'Touch the screen to return home';
  textSize(32);
  text(touch, 0, 615);
  fill(0, 102, 153);
  //image(paper[num], 0, 0, (378.8*1.2), (478*1.2));
}

function mousePressed(){
  if (check == 0){
    println("wassup my bois");
    check = 1;
    //button.show();
  }
}
// function changehom() {
//   println("wassup my bois");
// }
