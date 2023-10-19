var fantasmaImg;
var loboImg;
var endige,world;
var esqueletoImg;
var dragaoImg;
var gameState = "play"
var caveImg;
var tela_morteImg;
var tela_vitoriaImg;
var score;

function preload() {
fantasmaImg = loadImage("fantasma.png");
loboImg = loadImage("lobisomen.png");
caveImg = loadImage("cave.png");
dragaoImg = loadImage("dragao.png");
esqueletoImg = loadImage("esqueleto.png");
spookySound = loadSound("spooky.wav");
tela_morteImg = loadImage("tela_morte.png");
tela_vitoriaImg = loadImage("tela_vitoria.png");

}

function setup() {
createCanvas(1355,622);
spookySound.loop();

fantasma = createSprite(150,250);
fantasma.addImage("fantasma",fantasmaImg);
fantasma.scale = 0.2;
fantasma.velocityX = 3

lobo = createSprite(1100,510);
lobo.addImage("lobo",loboImg);
lobo.scale = 0.5;

dragao = createSprite(600,500);
dragao.addImage("dragao",dragaoImg);
dragaoImg.scale = 1.5;

esqueleto = createSprite(1000,350);
esqueleto.addImage("esqueleto",esqueletoImg);
esqueleto.scale = 0.2;

}

function draw() {
    background(caveImg);

    fantasma.x = Math.round(random(1200,550));
    fantasma.y = Math.round(random(1200,550));
    console.log("posicoes");
    drawSprites();

}

