function Osoba(imie, nazwisko, rokUrodzenia, plec){
  this.imie = imie;
  this.nazwisko = nazwisko;
  this.rokUrodzenia = rokUrodzenia;
  this.plec = plec;
}

Osoba.prototype.podajWiek = function(){
  var today = new Date();
  var wiek = today.getFullYear() - this.rokUrodzenia;
  return(wiek);
}

function Nauczyciel(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy){
  Osoba.call(this, imie, nazwisko, rokUrodzenia, plec)
  this.nauczanyPrzedmiot = nauczanyPrzedmiot;
  this.rokRozpoczeciaPracy = rokRozpoczeciaPracy;
}

Nauczyciel.prototype = Object.create(Osoba.prototype);
Nauczyciel.prototype.constructor = Nauczyciel;

Nauczyciel.prototype.iloscLatPracy = function(){
  var today = new Date();
  var lata = today.getFullYear() - this.rokRozpoczeciaPracy;
  return(lata);
}

function Wychowawca(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy, przydzielonaKlasa){
  Nauczyciel.call(this,imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy)
  this.przydzielonaKlasa = przydzielonaKlasa;
}

Wychowawca.prototype = Object.create(Nauczyciel.prototype);
Wychowawca.prototype.constructor = Wychowawca;

var test = new Wychowawca('Dawid', 'Bogacki', '1995', 'm', 'Komunikacja Czlowiek Komputer', '2010', 'C')
console.log(test.imie);
console.log(test.nazwisko);
console.log(test.rokUrodzenia);
console.log(test.plec);
console.log(test.nauczanyPrzedmiot);
console.log(test.rokRozpoczeciaPracy);
console.log(test.podajWiek());
console.log(test.iloscLatPracy());