class Osoba{
  constructor(imie, nazwisko, rokUrodzenia, plec){
  this.imie = imie;
  this.nazwisko = nazwisko;
  this.rokUrodzenia = rokUrodzenia;
  this.plec = plec;
  }
  
  podajWiek(){
  var today = new Date();
  var wiek = today.getFullYear() - this.rokUrodzenia;
  return(wiek);
  }
}

class Nauczyciel extends Osoba{
  constructor(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy){
  super(imie, nazwisko, rokUrodzenia, plec)
  this.nauczanyPrzedmiot = nauczanyPrzedmiot;
  this.rokRozpoczeciaPracy = rokRozpoczeciaPracy;
  }
  
  iloscLatPracy(){
  var today = new Date();
  var lata = today.getFullYear() - this.rokRozpoczeciaPracy;
  return(lata);
  }
}

class Wychowawca extends Nauczyciel{
  constructor(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy, przydzielonaKlasa){
  super(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy)
  this.przydzielonaKlasa = przydzielonaKlasa;
  }
}

var test = new Wychowawca('Dawid', 'Bogacki', '1995', 'm', 'Komunikacja Czlowiek Komputer', '2010', 'C')
console.log(test.imie);
console.log(test.nazwisko);
console.log(test.rokUrodzenia);
console.log(test.plec);
console.log(test.nauczanyPrzedmiot);
console.log(test.rokRozpoczeciaPracy);
console.log(test.podajWiek());
console.log(test.iloscLatPracy());