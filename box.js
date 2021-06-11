class Box{
    constructor(x,y,width,height){
        var box_options ={
            restitution: 0.8,
        }
    
        this.body = Bodies.rectangle(x,y,width,height,box_options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    
    }
    Display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate (pos.x , pos.y);
        rotate (angle);
        fill("orange");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop ();
     }
}
