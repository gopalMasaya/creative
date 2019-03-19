class Button {


  constructor( labelB,  xpos,  ypos,  widthB,  heightB, ts,bg=null) {
    this.label = labelB;
    this.x = xpos;
    this.y = ypos;
    this.w = widthB;
    this.h = heightB;
    this.ts = ts;
    this.bg = bg;
  }

   Draw() {
    if(this.MouseIsOver()== true){  fill(0,38,71);strokeWeight(2);
    stroke(220,180,20);} else{fill(0,38,61);strokeWeight(1);stroke(217,179,16);}

    fill(55);
    rect(this.x-1,this.y-1,this.w+1,this.h+1,0,20);

    // image(b_img,this.x,this.y,this.w,this.h);
  //  rect(this.x,this.y,this.w,this.h,5);

    textAlign(CENTER, CENTER);
    if(this.MouseIsOver()== true){noStroke();fill(250,180,20);  textSize(this.ts+2);}
    else {noStroke();fill(217,179,16);  textSize(this.ts);}
    text(this.label, this.x + (this.w / 2), this.y + (this.h / 2));


   // println(MouseIsOver());
  }

   MouseIsOver() {
    if (mouseX > this.x && mouseX < (this.x + this.w) && mouseY > this.y && mouseY < (this.y + this.h)) {

      return true;
    }
    return false;
  }
}
