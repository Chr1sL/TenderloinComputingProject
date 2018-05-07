// https://www.youtube.com/watch?v=YcezEwOXun4
var song;
var button;

function setup() {
  createCanvas (200,200);
  song = loadSound("audio/recording.m4a", loaded);
  button = createButton("play");
  button.mousePressed(togglePlaying);
  background(51);
}

function loaded() {
 console.log("loaded");
}

function togglePlaying() {
  if (!song.isPlaying()) {
  song.play();
  song.setVolume(0.3);
  button.html("pause");
} else {
  song.pause();
  button.html("play");
  }
}
