const windowWidth = document.documentElement.clientWidth;
const windowHeight = document.documentElement.clientHeight;

let sliderD;
let sliderN;
let sliderC;
let sliderSize;
let sliderTrail;
let sliderLineWeight;

let blueRose;



function setup() {
  // createCanvas(windowWidth, windowHeight);
  //createCanvas(1280, 720);
  createCanvas(4400, 2616);
  // frameRate(3)

  sliderD=createSlider(1, 30, 15, 0.01) //6 //14
  sliderN=createSlider(1, 30, 30, 0.01) //17 //15
  sliderC=createSlider(1, 100, 4, 0.01)
  sliderSize=createSlider(10, windowHeight*1.5, 500, 1)
  sliderTrail=createSlider(0, loopTrailA, 10, 1)
  sliderLineWeight=createSlider(0, 5, 0.1, 0.1)
  blueRose = new Rose();
}

function draw() {
  translate(width/2, height/2);
  background(0);

  blueRose.sliders();
  blueRose.move();
  // blueRose.draw();
  blueRose.drawTrail();
}