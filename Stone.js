class stone {
    constructor(x,y){
        var option = {
            density : 1.2
        }
        this.body = Bodies.circle(x,y,40,option);
        World.add(world,this.body)
        this.image = loadImage("stone.png");
    }
    display(){
        
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
        
    }
}