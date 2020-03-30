let img;
let cnvs;
function preload(){
    img=loadImage('about2.png');
}



function setup(){
    cnvs=createCanvas(innerWidth,innerHeight);
    cnvs.position(0,0);
}

function windowResized() {
    resizeCanvas(innerWidth,innerHeight);
  }

function draw(){
    clear();
// imageMode(CENTER);
    if(innerWidth<900){
        scale(0.25);
        console.log(innerWidth)
        image(img,innerWidth+600,innerHeight+700);

    }else{
        scale(0.4);
        image(img,innerWidth+500,innerHeight+100);
    }
   
}