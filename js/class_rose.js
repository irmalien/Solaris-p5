let d = 8
let n = 5
let c =0.01;
let k = 5/8;
let cStep=0.002;

let angle = 0;
let angleStep = 0.000000

let step=0.002;

let loopTrailA = 255;
let loopTrailB = loopTrailA;

let lineWeight =0.1;

let count = 0;
let trueCount = 0;
let middle = false;

class Rose {
  constructor() { 

  }

  trail(){
    if (trueCount >= 1500){
      middle = true;
    };
  
    if(count >= 18){
      count=0;
      if (middle == false){
        trail++;
      }
      else{
        trail--
      }
    }
  }

  sliders(){
    d=sliderD.value();
    n=sliderN.value();
    c=sliderC.value();
    size=sliderSize.value();
    loopTrailB=sliderTrail.value();
    lineWeight = sliderLineWeight.value();
  }

  move(){
    count++;
    trueCount++;

    k=n/d;
    // c=c+step;

  }
  
  draw(){ 
    noFill()
    beginShape();
      for (let a=0+TWO_PI/c; a<TWO_PI*d; a+=TWO_PI/c){
        const r= size*cos(k*a)
        const x = r*cos(a);
        const y = r*sin(a);
        stroke(40,240,250);
        strokeWeight(0.25);
        vertex(x,y);
      }
    endShape();
  
  }
  
  drawRotate(){
    angleStep=angleStep-0.000000001;
    angle = angle+angleStep;
    rotate(angle);
  }

  drawTrail(){
    // let newC = c;
    let alfa = 255;
    let alfaStep = 255/loopTrailB;
    for(let i=loopTrailA-loopTrailB; i<=loopTrailA; i++){

      let newC = c+(i*(step/10));
      alfa = alfa-alfaStep;
      noFill()
      rotate(0.01);
      beginShape();
        for (let a=0; a<TWO_PI*d; a+=TWO_PI/newC){ //+TWO_PI/newC
          const r= size*cos(k*a)
          const x = r*cos(a);
          const y = r*sin(a);

          stroke(40,240,250, alfa);
          strokeWeight(lineWeight);
          vertex(x,y);
        }
      endShape();
    }
  }

  consoleLog(){
    console.log(count, trueCount, trail, middle)
    console.log(d, n, c)
    console.log(frameRate())
  }


}