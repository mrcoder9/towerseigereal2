const World= Matter.World;
const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const Body= Matter.Body;
const Constraint= Matter.Constraint;

var rope1;
var hexa1;
var support1, support2;
var ground1;
var box1, box2, box3, box4, box5, box6, box7, box8,
box9, box10, box11, box12, box13, box14, box15, box16, box17,
box18, box19, box20, box21, box22, box23, box24, box25,
box26, box27, box28, box29, box30, box31, box32, box33, box34;

function preload() {



}



function setup() {
     createCanvas(700, 600)


    engine = Engine.create();
	world = engine.world;
	

	hexa1= new hexa(50, 320);

	rope1= new link(hexa1.bodyhexa, {x:100, y:300})
	
	support1= new ground(300, 400, 250, 15);

	support2= new ground(510, 200, 170, 15);
	ground1= new ground(350, 590, 700, 20);

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


	
}


function draw() {

	background(255, 0, 0);
    Engine.update(engine);
	hexa1.display();

	support1.display();
    support2.display();
    ground1.display();

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
