const windowWidth = document.documentElement.clientWidth;
const windowHeight = document.documentElement.clientHeight;

let sliderD;
let sliderN;
let sliderC;
let sliderSize;
let sliderTrail;
let sliderLineWeight;
let blueRose;
let blueRose2;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(1280, 720);
  // createCanvas(4400, 2616);
  frameRate(30)

  // sliderD=createSlider(1, 30, d, 0.01) //6 //14
  // sliderN=createSlider(1, 30, n, 0.01) //17 //15
  // sliderC=createSlider(1, 100, c, 0.01)
  // sliderSize=createSlider(10, windowHeight*1.5, size, 1)
  // sliderTrail=createSlider(0, trailSizeA, trailSizeB, 1)
  // sliderLineWeight=createSlider(0, 5, lineWeight, 0.025)
  blueRose = new Rose();
}

function draw() {
  translate(width/2, height/2);
  background(0);

  // blueRose.sliders();
  blueRose.intro(500);
  blueRose.playD(0.001, -0.001);
  blueRose.move();
  blueRose.drawTrail();
  // blueRose.consoleLog()
}

