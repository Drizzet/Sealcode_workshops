function main() {
   readJSON();
    if (Modernizr.geolocation) {
        navigator.geolocation.getCurrentPosition(success, fail);
    }
}

function readJSON(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'map_service.json', true);
    xhr.onload = function() {
        if(xhr.status == 200) {
            responseObject = JSON.parse(xhr.responseText);
            for(let i = 0; i < responseObject.features.length; i++) {
              Locations.push(
                [
                  responseObject.features[i].geometry.coordinates[1],
                  responseObject.features[i].geometry.coordinates[0],
                ]
              );
              Names.push(responseObject.features[i].properties.long_name);
            }
        }
      };
    
      xhr.send(null);
}

function success(location) { 
    let vector = [];
    document.getElementsByTagName('div')[0].id = 'mapid';
    vector[0] = location.coords.latitude;
    vector[1] = location.coords.longitude;
    draw(vector);
}

function fail(msg) {
    console.log(msg.code);
}

function draw(vector) {
    const redIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
    const mymap = L.map('mapid').setView(vector, 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        id: 'mapbox.streets'
    }).addTo(mymap);
    const marker = L.marker(vector, {icon: redIcon}).addTo(mymap);
    marker.bindPopup('Tu jesteś.').openPopup();

    for(let i = 0; i < Locations.length; i++) {
        let vector = [Locations[i][0], Locations[i][1]];
        L.marker(vector).addTo(mymap).bindPopup(Names[i]);
  
        let circle = L.circle(vector, {
          color: 'blue',
          fillColor: 'lightblue',
          fillOpacity: 0.5,
          radius: 30
        }).addTo(mymap);
    }
  
    L.control.scale({ imperial: false }).addTo(mymap);
}
let Locations = [];
let Names = [];
window.onload = main;