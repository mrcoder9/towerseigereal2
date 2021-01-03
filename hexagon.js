class hexa{
    constructor(x, y) {
     var hexa_options= {

        isStatic:false
        

     }
       this.Image= loadImage("sprites/polygon.png")
       this.bodyhexa= Bodies.rectangle(x, y, 50,45, hexa_options);
       World.add(world, this.bodyhexa);

    }


   display() {
      
       
      // imageMode(CENTER);
       //image(this.Image, this.bodyhexa.position.x, this.bodyhexa.position.y, 50, 45);
       
       rectMode(CENTER);
       rect(this.bodyhexa.position.x, this.bodyhexa.position.y, 50, 50);
       
   }

}

