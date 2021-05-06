var canvas;
var music;
var box1,box2,box3,box4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,800);

    //create 4 different surfaces
box1 = createSprite(100,790,200,20);
box1.shapeColor = "yellow";
box2 = createSprite(300,790,200,20);
box2.shapeColor = ("green");
box3 = createSprite(500,790,200,20);
box3.shapeColor = ("blue");
box4 = createSprite(700,790,200,20);
box4.shapeColor = ("red");
ball = createSprite(400,400,20,20);
ball.velocityX = 10;
ball.velocityY = 10;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));

    createEdgeSprites(); 

    ball.bounceOff(box1);
    ball.bounceOff(box2);
    ball.bounceOff(box3);
    ball.bounceOff(box4);
    ball.bounceOff(topEdge);
    ball.bounceOff(bottomEdge);
    ball.bounceOff(leftEdge);
    ball.bounceOff(rightEdge);
    //create edgeSprite

    if (ball.isTouching(box1)){
         ball.shapeColor = "yellow";
    }
    if (ball.isTouching(box1)){
        ball.shapeColor = "green";
    }
    if (ball.isTouching(box1)){
        ball.shapeColor = "blue";
    }
    if (ball.isTouching(box1)){
        ball.shapeColor = "red";
    }

drawSprites();
    //add condition to check if box touching surface and make it box
}
