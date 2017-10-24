function Figura(nazwa){
  this.nazwa = nazwa;
}

Figura.prototype.getNazwa = function (){
  return this.nazwa;
}

function Czworokat(nazwa,typ,a,b,c,d){
  Figura.call(this,nazwa);
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

function Prostokat(nazwa,typ,a,b,c,d){
  Czworokat.call(this,nazwa,typ,a,b,c,d);
}

Prostokat.prototype = Object.create(Czworokat.prototype);
Prostokat.prototype.constructor = Prostokat;

Prostokat.prototype.getPole = function(){
  return (this.a*this.b);
}
Prostokat.prototype.getObw = function(){
  return (this.a+this.b+this.c+this.d);
}



var Ftest = new Figura('Dawid');
console.log(Ftest.getNazwa());

var test = new Prostokat('Dawid','prostokat',5,8,5,8);
console.log(test.getNazwa());
console.log(test.getTyp());
console.log(test.getPole());
console.log(test.getObw());