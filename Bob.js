class Bob{
    constructor(x,y,){
        var options = {
            isStatic:false,
            restitution:1.2,
            friction:0.5,
            density:1.2
        }
       this.body = Bodies.circle(x,y,25,options);
       World.add(world,this.body);
    }
    display(){
        fill("purple");
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,50);
    }
}