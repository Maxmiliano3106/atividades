var diff = new Date() - new Date("1994-05-10");

var segundos = milisegundos / 1000;
var minutos = segundos / 60;
var horas= minutos / 60;
var dias = horas / 24;
var idade = dias / 365;
console.log(idade.toFixed(1));