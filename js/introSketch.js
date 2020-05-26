let symmetry =6;
let angle = 360 / symmetry;
let saveButton;
let clearButton;
let num=0; 


document.addEventListener("click",cleartitle);

function cleartitle(){
  document.getElementById("title").style.display="none";

}

function setup() {
  createCanvas(windowWidth*0.98,windowHeight*0.98);

  angleMode(DEGREES);
  background(63, 179, 221);

  // saveButton = createButton("save");
  // saveButton.mousePressed(saveSnowFlake);
  // clearButton = createButton("clear");
  // clearButton.mousePressed(clearCanvas);
//     translate(width/2,height/2);
//     stroke(255,0,0);
    
//     for(let i = 0; i < symmetry; i ++){
//         rotate(angle);
//         line(0,0,width,0);
//       }
  
}
function saveSnowFlake() {
  save("snowflake"+num);
  num++;
}

function clearCanvas() {
  background(0);
}

function draw() {  
  

    translate(width/2,height/2);
    
    let mx = mouseX - width/2;
    let my = mouseY - height/2;
    let pmx = pmouseX - width/2;
    let pmy = pmouseY - height/2;

    if(mouseIsPressed){
      stroke(200,230,255,100);
      let angle = 360 / symmetry;
      for(let i = 0; i < symmetry; i++){
        
        let distance = dist(mx,my,pmx,pmy);
        let sw = map(distance, 0, 8, 5, 3);
        
        strokeWeight(sw);
        rotate(angle);
        
        push();
          line(mx,my,pmx,pmy);
        pop();
        push();
          scale(1,-1);
          line(mx,my,pmx,pmy);
        pop();
      }
      
    }
    if (keyIsPressed){
        if(key ==  " "){
            background(0);
        }
    }
}
