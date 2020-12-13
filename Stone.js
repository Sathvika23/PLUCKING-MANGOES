class stone{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:70
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(x,y,this.r/4,options)
        this.image = loadImage ("sprites/stone.png");
        World.add(world,this.body)
    }
    display()
    {
        var paperpos = this.body.position;

        push()
        translate(paperpos.x,paperpos.y)
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r);
        pop()
    }
}
