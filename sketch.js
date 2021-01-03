const World= Matter.World;
const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const Body= Matter.Body;
const Constraint= Matter.Constraint;

var rope1;
var hexa1;
var support1, support2;
var ground1;
var wall1,wall2;
var box1, box2, box3, box4, box5, box6, box7, box8,
box9, box10, box11, box12, box13, box14, box15, box16, box17,
box18, box19, box20, box21, box22, box23, box24, box25,
box26, box27, box28, box29, box30, box31, box32, box33, box34
box38,box39,box40,box41,box42,box43,box44,box45,box46,box47,box48,
box49,box50,box51,box52,box53,box54,box55,box56,box57,box58,box59,
box60,box61,box62,box63,box64,box65,box66,box67,box68,box69,box70,
box71,box72,box73,box74,box75,box76,box77,box78,box79,box80;



function preload() {



}



function setup() {
	 createCanvas(1280, 610)


    engine = Engine.create();
	world = engine.world;
	

	hexa1= new hexa(50, 320);

	rope1= new link(hexa1.bodyhexa, {x:100, y:300})
	
	support1= new ground(300, 400, 250, 15);

	support2= new ground(510, 200, 170, 15);
	ground1= new ground(640, 590,1280, 20);
	support3= new ground(1000,500,230,20)

	wall1= new ground(1010,330,200,20);
	wall2= new ground(1105,300,20,400);
	wall3= new ground(640,530,300,20);
	

	box1= new square(300, 390);
	box2= new square(270, 390);
	box3= new square(240, 390);
	box4= new square(210, 390);
	box5= new square(330, 390);
	box6= new square(360, 390);
	box7= new square(390, 390);
	box8= new square(225, 360);
	box9= new square(255, 360);
	box10= new square(285, 360);
	box11= new square(315, 360);
	box12= new square(345, 360);
	box13= new square(375, 360);
	box14= new square(240, 330);
	box15= new square(270, 330);
	box16= new square(300, 330);
	box17= new square(330, 330);
	box18= new square(360, 330);
	box19= new square(255, 300);
	box20= new square(285, 300);
	box21= new square(315, 300);
	box22= new square(345, 300);
	box23= new square(270, 270);
	box24= new square(300, 270);
	box25= new square(330, 270);
	box26= new square(310, 243);
	box27= new square(285, 243);
	box28= new square(300, 223);
	box29= new square(450, 177);
	box30= new square(480, 177);
	box31= new square(510, 177);
    box32= new square(540, 177);
	box33= new square(570, 177);
	box34= new square(480, 147);
	box35= new square(510, 147);
	box36= new square(540, 147);
	box37= new square(510, 117);
	box38= new square(940,490);
	box39= new square(970,490);
	box40= new square(1000,490);
	box41= new square(1030,490);
	box42= new square(1060,490);
	box43= new square(955,445);
	box44= new square(985,445);
	box45= new square(1015,445);
	box46= new square(1045,445);
	box47= new square(970,415);
	box48= new square(1000,415);
	box49= new square(1030,415);
	box50= new square(985,385);
    box51= new square(1015,385);
	box52= new square(1000,355);
	box53= new square(1010,320);
	box54= new square(980,320);
	box55= new square(950,320);
	box56= new square(1040,320);
	box57= new square(995,275);
	box58= new square(965,275);
	box59= new square(1025,275);
	box60= new square(980,245);
	box61= new square(1010,245);
	box62= new square(995,215);
	box63= new square(505,295);
	box64= new square(505,325);
	box65= new square(505,355);
	box66= new square(505,385);
	box67= new square(505,415);
	box68= new square(505,445);
	box69= new square(505,475);
	box70= new square(505,505);
	box71= new square(775,295);
	box72= new square(775,325);
	box73= new square(775,355);
	box74= new square(775,385);
	box75= new square(775,415);
	box76= new square(775,445);
	box77= new square(775,475);
    box78= new square(775,505);
    

}


function draw() {

	background(255, 0, 0);
    Engine.update(engine);
	hexa1.display();

	support1.display();
	support2.display();
	support3.display();
	ground1.display();
	
	wall1.display();
	wall2.display();
	wall3.display();
	

	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();
    box8.display();
    box9.display();
	box10.display();
	box11.display();
	box12.display();
	box13.display();
	box14.display();
	box15.display();
	box16.display();
	box17.display();
    box18.display();
	box19.display();
	box20.display();
	box21.display();
	box22.display();
	box23.display();
	box24.display();
	box25.display();
	box26.display();
	box27.display();
	box28.display();
	box29.display();
	box30.display();
	box31.display();
	box32.display();
	box33.display();
	box34.display();
	box35.display();
	box36.display();
	box37.display();
    box38.display();
	box39.display();
	box40.display();
	box41.display();
	box42.display();
	box43.display();
	box44.display();
	box45.display();
	box46.display();
	box47.display();
	box48.display();
	box49.display();
	box50.display();
	box51.display();
	box52.display();
	box53.display();
	box54.display();
	box55.display();
	box56.display();
	box57.display();
	box58.display();
	box59.display();
	box60.display();
	box61.display();
	box62.display();
	box63.display();
	box64.display();
	box65.display();
	box66.display();
	box67.display();
	box68.display();
	box69.display();
	box70.display();
	box71.display();
	box72.display();
	box73.display();
	box74.display();
	box75.display();
	box76.display();
	box77.display();
	box78.display();
	

	rope1.display();
}




function mouseDragged () {
    
  
  Matter.Body.setPosition(hexa1.bodyhexa, {x:mouseX, y:mouseY});
  hexa1.bodyhexa.position.x= mouseX;
  hexa1.bodyhexa.position.y= mouseY;
  
  }
  
  function mouseReleased () {
    rope1.fly();
  
  
  
  }

  function keyPressed() {
if(keyCode === 32) {
   Matter.Body.setPosition(hexa1.bodyhexa, {x:50, y:320})
	rope1.attach(hexa1.bodyhexa);


}


  }
