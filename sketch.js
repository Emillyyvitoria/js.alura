function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background("white");
   
   stoke("blue");
    fill("yellow");
    
    //console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
    rect(mouseX,mouseY,20,35);
    }
    
  }