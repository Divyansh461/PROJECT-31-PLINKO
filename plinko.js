class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        
        this.body = Bodies.circle(x, y, 15, options);
        
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(random(0,255),random(0,255),random(0,255));
        ellipseMode(RADIUS);
        ellipse(0,0,15,15);
        pop();
    }

};