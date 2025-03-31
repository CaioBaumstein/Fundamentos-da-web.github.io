var x = setInterval(function() {
var agora = new Date().getTime();
var data_limite = new Date("Apr 14, 2025 00:00:00").getTime();

var distancia = data_limite - agora;

var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
var segundos = Math.floor((distancia % (1000 * 60)) / 1000);

document.getElementById("promocao").innerHTML = dias + "d " + horas + "h "
+ minutos + "m " + segundos + "s ";
}, 1000);
