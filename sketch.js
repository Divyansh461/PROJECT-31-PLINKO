const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint  = Matter.Constraint;

var particles = [];
var divisions = [];
var plinkos = [];
var divisionheight = 300; 

function setup() {
  createCanvas(1250,1000);
  
 
    engine = Engine.create();
    world = engine.world;

  

    for(var k = 0;k <=width; k = k + 200) {
      divisions.push(new Division(k,height - 300/2,10,divisionheight));
    }  


ground = new Ground(width/2,970,width,20);

//creating plinkos 
//1st
for(var j = 30 ; j <= width; j = j + 73) {
  plinkos.push(new Plinko(j,100));
}
//2nd
for(var j = 50;j <= width-10;j = j + 73) {
  plinkos.push(new Plinko(j,200));
}
//3rd
for(var j = 30; j <= width; j = j + 73) {
  plinkos.push(new Plinko(j,300));
}
//4th
for(var j = 50;j <= width-10; j = j + 73) {
  plinkos.push(new Plinko(j,400))
}
//5th
for(var j = 30; j <= width; j = j + 73) {
  plinkos.push(new Plinko(j,500))
}


}

function draw() {
  
  background(2);  
  Engine.update(engine);
  
  
 if(frameCount%60===0) {
   particles.push(new Particle(random(0,1200),10,10));
 }



ground.display();



//creating plinkos
//1st
for(var j = 0; j < plinkos.length; j++) {
  plinkos[j].display();
 }
//2nd
for(var j = 20; j< plinkos.length; j++) {
  plinkos[j].display();
}
//3rd
for(var j = 20; j < plinkos.length; j++) {
  plinkos[j].display();
}
//4th
for(var j = 20; j < plinkos.length; j++) {
  plinkos[j].display();
}
//5th
for(var j = 20; j < plinkos.length; j++) {
  plinkos[j].display(); 
} 


//display the divisions
for (var k = 0; k < divisions.length; k++) {
  divisions[k].display();
}


drawSprites();

//display the particles
for(var j = 0; j < particles.length; j++) {
  particles[j].display();
}

}


