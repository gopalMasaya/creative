var linksAi = new Array(50);

var links = new Array(20);
var page = 3;
var menue= new Array(10);
var names = ["vision ","embded"," אב טפוס","AI & webApp","צור קשר "]
var on = new Array(10);
var r=0;
var b= 0;
var g= 0;
var step=1;
var content1;
var title ;
var visiontxt;

function preload(){
visiontxt = loadStrings("vision.txt")

}


function setup() {
var c =	createCanvas(windowWidth, windowHeight*2);

for(let i = 0; i< on.length;i++){
	on[i]= false;
}

for (let i = 0; i< names.length;i++){
	menue[i]= new Button (names[i],width-180,180+(i*60),150,50,20);


}

}


function draw() {
	background(240,240,180)
noFill();stroke(40);rect(0,0,width,160);

r+=step;
b++;
g++;
if(r>255|| r<0){step= -step;}
if(g>255){g=0}
if(b>255){b=0}

for (let i = 0;i< width;i++){
	let colorR= map(i,0,width,0,205);
	stroke(50+colorR,0,25);line(0+(i),0,0+(i),160)
}
noStroke();
fill(200);rect(width-200,160,200,height-160)
textSize(60);
fill(217,179,15);text("Creative",width/2,100)
for(let i = 0; i< names.length;i++){
menue[i].Draw();
}

if(page == 0){
	textSize(18)
	fill(0);textAlign(RIGHT)
for(let i = 0;i< visiontxt.length;i++){
	text(visiontxt[i],width-230,200+(i*30));
}
// if(on[0]== false){
// var t = createP(join(visiontxt,'<br>'))
// t.position(-1550,200);
// t.style('font-size','18px')
// t.style('text-align','right')
// }on[0]=true
 }
if(page == 1 && on[0] == false){myProjects();}
if(page == 3 && on[3] == false){mli();
fill(0);
text("on",width/2,400)
}



}
function mousePressed(){
console.log(linksAi)
//if(menue[0].MouseIsOver()){page=0;console.log(0)}
if(menue[1].MouseIsOver()){page=1;console.log(1)}
if(menue[2].MouseIsOver()){page=2;}
if(menue[3].MouseIsOver()){page=3;console.log(3)}



if(page != 1){
	on[0]=false;
content1 = selectAll('.page1')
for(let i = 0;i< content1.length;i++){
	 content1[i].remove();}
}
if(page != 3 && on[3]==true){
		on[3]=false;
console.log(	on[3])
		 title.remove();
for(let i = 0;i< links.length;i++){
	 linksAi[i].remove();}

}
console.log(on[3])


}
