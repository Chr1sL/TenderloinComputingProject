var num;
function main (){
  num = Math.floor((Math.random() * 209) + 1);
}

var paper;
function preload() {
  for (let i = 1; i < 208; i++) {
    paper[i] = loadImage(`tenderloin/paper stories/paper (${i}).jpg`);
  // flower = loadImage('myImg.png');
  }
}

var button;
function setup() {
  createCanvas(1000, 1000);
  background(0);
  button = createImg('button.png');
  button.size(300,300);
  button.position(500, 500);
  button.mousePressed(changeBG);
}

function changeBG() {
  image(paper[num], 10, 10, 50, 50);
}
