// let img;

function preload(){
  // img - loadImage('kitten.jpg')
}
let d =8
let n =5
let k = 5/8;
let sliderD;
let sliderN;

function setup() {
  createCanvas(600, 600,);

  w1=width
  h1=height
  sliderD=createSlider(1, 30, 4, 1)
  sliderN=createSlider(1, 30, 4, 1)
  // z = TWO_PI-0.1

}

function draw() {
  background(0);
  d=sliderD.value();
  n=sliderN.value();
  k= n/d;
  // w1++
  // h1++
  // z = z-0.1
  // r=r+0.1;
  
  translate(w1/2, h1/2);
  noFill()
  beginShape();
  for (let a=0; a<TWO_PI*d; a+=0.001){
    const r= 200*cos(k*a)
    const x = r*cos(a);
    const y = r*sin(a);
    stroke(255);
    strokeWeight(1);
    vertex(x,y);
  }
  endShape();
  // image(img, 0, 0, mouseX, mouseY)
  // ellipse(0, 0, 100, 100)
}