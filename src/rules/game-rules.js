let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let palpites = document.querySelector(".palpites");
let ultimoResultado = document.querySelector(".ultimoResultado");
let baixoOuAlto = document.querySelector(".baixoOuAlto");

let envioPalpite = document.querySelector(".envioPalpite");
let campoPalpite = document.querySelector(".campoPalpite");

let contagemPalpites = 1;
let botaoReinicio;
