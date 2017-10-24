class Figura{
  constructor(nazwa){
  this.nazwa = nazwa;}
  
  getNazwa(){
    return this.nazwa;
  }
}

class Czworokat extends Figura{
  constructor(nazwa,typ,a,b,c,d){
  super(nazwa);
  this.typ = typ;
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;}
  
  getTyp(){
    return this.typ;
  }
}

class Prostokat extends Czworokat{

getPole(){
  return (this.a*this.b);
}
getObw(){
  return (this.a+this.b+this.c+this.d);
}
}


var test = new Prostokat('Dawid','prostokat',5,8,5,8);
console.log(test.getNazwa());
console.log(test.getTyp());
console.log(test.getPole());
console.log(test.getObw());