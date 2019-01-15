let d = 3
let n = 47
let c = 3.14;
let k = d/n;

let size = windowHeight;
let rotation = 0.005;

let trailSizeA = 250;
let trailSizeB = trailSizeA;
let trailDistance=0.0001;
let trailAlfa= 150; //less is less, 255 is ok, more is more

let lineWeight =0.25;


let count = 0;
let trueCount = 0;

//
let d_play=0.1;
let n_play=0.1;
let intro = true;
let introAlfa;

class Rose {
  constructor() { 

  }

  intro(_frames){

    if (intro == true){
      introAlfa = trailAlfa;
      trailAlfa = 0;
      intro = false;
      console.log(trailAlfa)
    };
  
    let divider = introAlfa/_frames;

    if(trueCount <= _frames){
        trailAlfa = trailAlfa + divider;
        console.log("new" + introAlfa,divider)
      }
  }


  trail(){
   
  }

  sliders(){
    d=sliderD.value();
    n=sliderN.value();
    c=sliderC.value();
    size=sliderSize.value();
    trailSizeB=sliderTrail.value();
    lineWeight = sliderLineWeight.value();
  }

  playD(_dplay, _nplay){
    d=d+_dplay;
    n=n+_nplay;
  }

  move(){
    count++;
    trueCount++;

    k=n/d;
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
  

  drawTrail(){
    let alfa = trailAlfa;
    let alfaStep = alfa/trailSizeB;
    for(let i=trailSizeA-trailSizeB; i<=trailSizeA; i++){

      let newC = c+(i*(trailDistance));
      alfa = alfa-alfaStep;
      noFill()
      if(i<trailSizeA/1.5){
        blendMode(SCREEN);
      }
      else {
        blendMode(NORMAL);  
      }

      rotate(rotation);
      beginShape();
        for (let a=0; a<TWO_PI*d; a+=TWO_PI/newC){ //+TWO_PI/newC
          const r= size*cos(k*a)
          const x = r*cos(a);
          const y = r*sin(a);

          stroke(165,96,125, alfa); //          stroke(40,240,250, alfa); (220,0,60, alfa)
          strokeWeight(lineWeight);
          vertex(x,y);
        }
      endShape();
    }
  }

  consoleLog(){
    console.log(trueCount)
    console.log(d, n, c)
    // console.log(frameRate())
  }


}