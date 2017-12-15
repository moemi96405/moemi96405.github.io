//グローバル変数
var posX = [];
var posY = [];
var speedX = [];
var speedY = [];
var diameter = []; //円の直径
var colors = []; //色
var NUM = 100; //配列の数

//画像を保存する変数
var img;
//元画像のサイズ
var defaultImgW = 1279;
var defaultImgH = 594;
//元画像の比率
var defaultRatio = defaultImgW/defaultImgH;
//拡大縮小後の幅と高さ
//初期値として最初の値を入れる
var scaleImgW = defaultImgW;
var scaleImgH = defaultImgH;



function preload(){
        img = loadImage("img/mein.jpg");
}

function setup(){
    var canvas = createCanvas(windowWidth,600);
    //header#hederの中にcanbasを入れた
    canvas.parent('header');
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
//画像、X座標、Y座標、幅、高さ
    image(img,0,0,scaleImgW,scaleImgH);//画像の表示
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
    console.log('拡大縮小');
    resizeCanvas(windowWidth,600);

    if(windowWidth > defaultImgW){
//画像の幅をウィンドウ幅と同じにする
    scaleImgW = windowWidth;
    //画像の高さを伸びた幅に合わせて変化させる
    scaleImgH = windowWidth/defaultRatio;
    }
}
