class Astronaut {

    constructor(x,y,width,height){
        var options ={
            restitution : 0,
            friction  : 1,
            density : 1 
        }

        this.pihu = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this. height = height;
        this.image = loadImage("Assets/Astro1.jpeg");
        World.add(world,this.pihu);

    }

    display(){

        var pos = this.pihu.position 

        push()

         imageMode(CENTER);
         image(this.image,pos.x,pos.y,this.width,this.height);

        if(keyDown(UP_ARROW)){
            pos.y = pos.y-2;
         imageMode(CENTER);
         image(this.image,pos.x,pos.y,this.width,this.height);
        }

        if(keyDown(DOWN_ARROW)){
            pos.y = pos.y+2;
         imageMode(CENTER);
         image(this.image,pos.x,pos.y,this.width,this.height);
        }

        if(keyDown(LEFT_ARROW)){
            pos.x = pos.x-2;
         imageMode(CENTER);
         image(this.image,pos.x,pos.y,this.width,this.height);
        }

        if(keyDown(RIGHT_ARROW)){
            pos.x = pos.x+2;
         imageMode(CENTER);
         image(this.image,pos.x,pos.y,this.width,this.height);
        }

       pop()
    }
}