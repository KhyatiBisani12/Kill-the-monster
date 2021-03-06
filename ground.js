class Ground {
    constructor(x,y,width,height){
        var ground_options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,ground_options)
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    groundDisplay(){
        fill (112,66,20);
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}
