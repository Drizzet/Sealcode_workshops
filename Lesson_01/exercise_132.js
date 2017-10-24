class Figura{
  constructor(nazwa){
  this.nazwa = nazwa;}
  
  getNazwa(){
    return this.nazwa;
  }
}

class Czworokat extends Figura{
  constructor(typ,a,b,c,d){
  this.typ = typ;
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;}
  
  getTyp(){
    return typ;
  }
}

class Prostokat extends Czworokat{

getPole(){
  var Pole = this.a*this.b;
  return Pole;
}
getObw(){
  var Obw = (this.a+this.b)*2;
  return Obw;
}
}


var test = new Prostokat('Dawid','prostokat',5,8,5,8);
console.log(test.getNazwa());
console.log(test.getTyp());
console.log(test.getPole());
console.log(test.getObw());