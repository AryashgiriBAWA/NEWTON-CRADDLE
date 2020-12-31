class Bob{
    constructor(x,y,r){
        var bob_options={
            restitution: 1.3,
            friction : 0.5,
            
        }
        
        this.body=Bodies.circle(x,y,r/2,bob_options);
        World.add(world,this.body);
        this.radius=r;
    }
    display(){
        
        var pos=this.body.position;
        var angle=this.body.angle;
        ellipseMode(CENTER);
        imageMode(CENTER);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("pink");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}


    