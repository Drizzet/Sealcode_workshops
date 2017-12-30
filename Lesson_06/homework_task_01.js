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
  longitude = location.coords.longitude;
  latitude =  location.coords.latitude;
  UTC = parseInt(longitude/15);
  elMap.innerHTML = msg;
  localStorage.setItem('UTC',UTC);
  msg = '<h3>UTC ';
  if(UTC<0)
	  msg += '-';
  else
	  msg += '+';
  msg += UTC + ':00 <br>';
  msg += 'Godzina, która jest w strefie czasowej " UTC 00:00 " - ';
  var date = new Date();
  date.setHours(date.getHours() + UTC);
  date.setMinutes = (date.getMinutes()<10?'0':'') + date.getMinutes()
  msg += date.getHours() + ':' + date.getMinutes() + '</h3>';
  elMap.innerHTML = msg;
}

document.getElementById('save').addEventListener('click', function () {
  sessionStorage.setItem('imie', document.getElementsByTagName('input')[0].value);
  sessionStorage.setItem('nazwisko', document.getElementsByTagName('input')[1].value);
  sessionStorage.setItem('plec', document.getElementsByTagName('input')[2].value);
  sessionStorage.setItem('rok ur.', document.getElementsByTagName('input')[3].value);
  sessionStorage.setItem('miasto zam.', document.getElementsByTagName('input')[4].value);
});
function fail(msg) {                                        
  elMap.textContent = msg;                                  
  console.log(msg.code);                                   
}

