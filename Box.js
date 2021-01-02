class square{
    constructor(x, y) {
    var options = {
      restitution:1,
      


    }



        this.body= Bodies.rectangle(x, y, 30, 30, options);
          World.add(world, this.body);
          this.visible= 255;
    }

          




display() {
  console.log(this.body.speed);
  



  if(this.body.speed<2) {
    push();
    translate(this.body.position.x, this.body.position.y)
    angleMode(RADIANS);
    rotate(this.body.angle);
    fill("orange");
  rectMode(CENTER);
  rect(0, 0, 30,30);
    pop();
    

   } else{
    push();
    World.remove(world, this.body)
    this.visible= this.visible-2
    //tint(255, this.visible);
    noStroke();
    fill(255, 165, 0, this.visible)
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, 30, 30);
    pop();
   }

}

}