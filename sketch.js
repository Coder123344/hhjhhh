const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, package;
var box

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    box = Bodies.rectangle(200,350,75,20);
    World.add(world,box);
    box2 = Bodies.rectangle(200,365,75,20);
    World.add(world,box);
    box3 = Bodies.rectangle(200,355,20,75);
    World.add(world,box);

    var ball_options ={
        restitution: 1.0
    }
    packageSprite.x= packageBody.position.x
    packageSprite.y= packageBody.position.y

    package = Bodies.circle(200,100,20, package_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("brown");
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    fill("blue");
    ellipse(package.position.x, package.position.y, 20, 20);
}