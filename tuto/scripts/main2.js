// pop up valeur de a, b et x 

var myButton = document.querySelector('button');
var canvas = document.querySelector('#tutorial');
var ctx = canvas.getContext("2d");
var y = [];

myButton.onclick = function() {
  doIt();
}

function doIt() {
  compute();
  effacer();
  
  for (var x = 0; x < canvas.width; x++) {
    point(x);
  }
}

function getA() {
  return getCoefficient("a");
}

function getB() {
  return getCoefficient("b");
}

function getCoefficient(coef) {
  var coef = document.querySelector('#'+coef)
  return +coef.value;
}
	  

function compute() {
  
  y = [];
  
  for (var x = 0; x < canvas.width; x++) {
    let result = affine(getA(),getB(),x);
    y.push(result);
  }
}

function affine(a,b,x) {
  return a*x + b;
}

function point(x) {
  
  ctx.fillRect(x,translate(y[x],Math.max(...y)),1,1);
}

function translate(y,max) {
  return canvas.height - y*canvas.height/max;
}

function effacer() {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#568745";
}

function animation(t) {
  console.log(t);
  let pente = Math.random() > 0.5 ? 1 : 1;
  document.querySelector('#a').value = Math.random() * 1000 * pente;
  document.querySelector('#b').value = Math.random() * 10000;
  doIt();
 
  requestAnimationFrame(animation);
}

requestAnimationFrame(animation);


	









 