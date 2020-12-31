class Wire{

    constructor(bodyA,pointB){

        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length: 500,
            stiffness:0.04
         
        }

        this.wire = Constraint.create(options);
         World.add(world,this.wire);
        }
     
    display() {
        fill("white");
        var pointA = this.wire.bodyA.position;
        var pointB = this.wire.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x ,pointB.y);

}
    
}    
 










