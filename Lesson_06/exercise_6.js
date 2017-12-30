var elMap = document.getElementById('loc');
var msg = 'die frage ist nicht wo, die frage ist wann';

function usuwanie() {
    console.log('usunieto');
    localStorage.clear();
    sessionStorage.clear();
}

if (Modernizr.geolocation && Modernizr.sessionstorage && Modernizr.localstorage) {
  navigator.geolocation.getCurrentPosition(success, fail);
  elMap.textContent = 'wysyłanie szpiegów w celu ustalenia położenia';
} else {                                                  
  elMap.textContent = msg;                                  
}

function success(location) {       
  longitude = location.coords.longitude
  latitude =  location.coords.latitude
  msg = '<h3>Długość geograficzna:<br>';
  msg += longitude + '</h3>';
  localStorage.setItem('dlugosc',longitude)
  msg += '<h3>Szerokość geograficzna:<br>';
  msg += latitude + '</h3>';
  sessionStorage.setItem('szerokosc',latitude)
  msg += '<h3>Dokładność:<br>';
  msg += location.coords.accuracy + '</h3>';
  msg += '<button id="del">Usuń dane z WebStorage</button>';
  elMap.innerHTML = msg;
  btn = document.getElementById('del');
  btn.addEventListener('click', usuwanie);
}

function fail(msg) {                                        
  elMap.textContent = msg;                                  
  console.log(msg.code);                                   
}

