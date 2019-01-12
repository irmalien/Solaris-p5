// let img;
const windowWidth = document.documentElement.clientWidth;
const windowHeight = document.documentElement.clientHeight;

function preload(){
  // img - loadImage('kitten.jpg')
}
let d =8
let n =5
let c =0.1;
let k = 5/8;
let sliderD;
let sliderN;
let sliderC;
let sliderSize;

function setup() {
  createCanvas(windowWidth, windowHeight*0.9);
  // angleMode(DEGREES)
  w1=width
  h1=height
  sliderD=createSlider(1, 30, 14, 1)
  sliderN=createSlider(1, 30, 15, 1)
  sliderC=createSlider(1, 100, 4, 0.01)
  sliderSize=createSlider(10, 1000, 500, 1)
  frameRate(30)
  // z = TWO_PI-0.1

}

function draw() {
  background(0)
  d=sliderD.value();
  n=sliderN.value();
  step=0.001;
  c=c+step;
  // c=sliderC.value();

  size=sliderSize.value();
  console.log(d,n,c)
  k= n/d;
  // w1++
  // h1++
  // z = z-0.1
  // r=r+0.1;
  let newC = c
  let alfa = 255;
  translate(w1/2, h1/2);
  noFill()
  for(let i=1; i<100; i++){
    let newStep = i*(step/100);
    newC = newC+newStep;
    alfa = alfa-4
    beginShape();
    for (let a=0; a<TWO_PI*d; a+=TWO_PI/newC){
      const r= size*cos(k*a)
      const x = r*cos(a);
      const y = r*sin(a);
      stroke(40,240,250, alfa);
      strokeWeight(0.5);
      vertex(x,y);
    }
    endShape();
  }


  
  // image(img, 0, 0, mouseX, mouseY)
  // ellipse(0, 0, 100, 100)
}