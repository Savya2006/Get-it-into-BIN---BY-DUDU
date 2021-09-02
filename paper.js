class Paper{
    constructor(){
        var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
        }
        this.body=Bodies.circle(600,140,20,options);
        World.add(world,this.body);
    }
 display(){
    var paperpos=this.body.position;		

    push();
    translate(paperpos.x, paperpos.y);
    ellipseMode(RADIUS);
    strokeWeight(5);
    stroke("black")
    fill("yellow");
    ellipse(0,0,25,25);
    pop();
 }


}