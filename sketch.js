const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var can;


function preload() {

    
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    can8 = new Can(330,235,30,40);
    can9 = new Can(360,235,30,40);
    can10 = new Can(390,235,30,40);
    can11 = new Can(420,235,30,40);
    can12 = new Can(450,235,30,40);

    can13 = new Can(360,195,30,40);
    can14 = new Can(390,195,30,40);
    can15 = new Can(420,195,30,40);

    can16 = new Can(390,155,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    rope = new Rope(this.polygon,{x:100,y:200});
}

function draw(){
    background(0);
    Engine.update(engine);

    can8.display();
    can9.display();
    can10.display();
    can11.display();
    can12.display();
    can13.display();
    can14.display();
    can15.display();
    can16.display();

    rope.display();

    polygon.display();

}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    polygon.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}
