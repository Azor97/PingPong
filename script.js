// Variaveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//Variaveis das Raquetes
let xRaquete = 1;
let yRaquete = 150;
let alturaRaquete = 100;
let larguraRaquete = 10;

//Variaveis do fundo
let width = 600;
let height = 400;

//Variaveis da Velocidade da Bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

function setup() {
    createCanvas(width, height);
}
function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    colisaoBorda();
    raquetePlayer();
    movimentaRaquetePlayer();
    verificaColisaoRaquete();
}

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function colisaoBorda(){
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }

    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}

function raquetePlayer(){
    rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete, 3);
}

function movimentaRaquetePlayer(){
    if(keyIsDown(UP_ARROW)){
        yRaquete -= 10;
    }
    if(keyIsDown(DOWN_ARROW)){
        yRaquete += 10;
    }
}

function verificaColisaoRaquete(){
    if (xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
        velocidadeXBolinha *= -1;
    }
}