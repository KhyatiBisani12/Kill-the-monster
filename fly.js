class SlingShot{
    // log5 = new Log(30,10,50,20,PI/4);
    // sling = new SlingShot(bird.body,log5.body);
    constructor(bodyA,pointB){
        var options ={
            bodyA : bodyA,  // bodyA : bird.body
            pointB : pointB,  // bodyB : log5.body
            length : 10,
            stiffness : 0.1
        };
    
        // pointB = (x,y)
        this.pointB = pointB;
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
    
    }

    fly(){
        this.slingshot.bodyA = null;
    }

    attach(body){
        this.slingshot.bodyA = body;
    }

    Display(){
    
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(6);
            stroke(48, 22, 8);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }   
        
        
     }


}

