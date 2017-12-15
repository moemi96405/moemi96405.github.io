//グローバル変数
var posX = [];
var posY = [];
var speedX = [];
var speedY = [];
var diameter = []; //円の直径
var colors = []; //色
var NUM = 100; //配列の数

var img;

function preload(){
        img = loadImage("img/mein.jpg");
}

function setup(){
    var canvas = createCanvas(windowWidth,600);
    canvas.parent('container');
colorMode(HSB,360,100,100,100);

for(var i = 0; i< NUM; i++){
    diameter[i] = random(10,40);
    colors[i] = color(random(360),100,100,50)
    posX[i] = width/2;
    speedX[i]= random(-4,4);
    posY[i] = height/2;
    speedY[i] = random(-4,4);
    }
}

function draw(){
    background(0);
    image(img,0,0);//画像の表示
    noStroke();

    for(var i = 0; i<NUM; i++){
        fill(colors[i]);
        ellipse(posX[i],posY[i],diameter[i],diameter[i]);

        posX[i] += speedX[i];
        if(posX[i]>width || posX[i] < 0){
            speedX[i] = -1 * speedX[i];
        }

        posY[i] += speedY[i];
        if(posY[i]>height || posY[i] < 0){
            speedY[i] = -1 * speedY[i];
        }
    }

}

function windowResized(){
    resizeCanvas(windowWidth,600);
}