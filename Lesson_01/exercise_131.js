function Figura(nazwa){
  this.nazwa = nazwa;
}

Figura.prototype.getNazwa = function (){
  return this.nazwa;
}

function Czworokat(typ,a,b,c,d){
  Figura.call(this,typ,a,b,c,d);
  this.typ = typ;
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}
Czworokat.prototype = Object.create(Figura.prototype);
Czworokat.prototype.constructor = Czworokat;
Czworokat.prototype.getTyp = function(){
  return this.typ;
}

function Prostokat(){
  Czworokat.call(this);
}
Prostokat.prototype.getPole = function(){
  var Pole = this.a*this.b;
  return Pole;
}
Prostokat.prototype.getObw = function(){
  var Obw = (this.a+this.b)*2;
  return Obw;
}

Prostokat.prototype = Object.create(Czworokat.prototype);
Prostokat.prototype.constructor = Prostokat;

var Ftest = new Figura('Dawid');
console.log(Ftest.getNazwa());

var test = new Prostokat('Dawid','prostokat',5,8,5,8);
console.log(test.getNazwa());
console.log(test.getTyp());
console.log(test.getPole());
console.log(test.getObw());